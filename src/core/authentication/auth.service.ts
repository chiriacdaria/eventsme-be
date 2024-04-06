import { JwtService } from '@nestjs/jwt';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/user/application/command/crate-user.command';
import { FindUserByEmailQuery } from 'src/user/application/query/find-user-by-email.query';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { UpdateUserCommand } from 'src/user/application/command/update-user.command';

@Injectable()
export class AuthService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly jwtService: JwtService,
    private readonly queryBus: QueryBus,
  ) {}

  async login(
    email: string,
    id: string,
  ): Promise<{ accessToken: string; user: UserEntity }> {
    const payload = {
      email,
      sub: id,
    };
    const accessToken = this.jwtService.sign(payload);
    const user = await this.queryBus.execute(new FindUserByEmailQuery(email));
    await this.commandBus.execute(
      new UpdateUserCommand(id, {
        lastLoggedInAt: new Date(),
        //token: accessToken,
      }),
    );

    return {
      accessToken,
      user,
    };
  }

  async register(
    email: string,
    //firstName: string,
    //lastName: string,
    password: string,
    //phoneNumber: string,
  ): Promise<{ accessToken: string; user: UserEntity }> {
    let user: UserEntity;
    try {
      user = await this.queryBus.execute(new FindUserByEmailQuery(email));
      if (user.deletedAt != null) {
        user = await this.commandBus.execute(
          new UpdateUserCommand(user.id, {
            deletedAt: null,
            //password,
          }),
        );
        //TODO: verify email and phone number in order to allow registration
        //} else if (!user.isVerified) {
        //  throw new ConflictException(
        //    `User with e-mail address ${email} has not completed the registration process.`,
        //  );
      } else {
        throw new ConflictException(
          `User with e-mail address ${email} is already registered.`,
        );
      }
    } catch (err) {
      if (err instanceof NotFoundException) {
        user = await this.commandBus.execute(
          new CreateUserCommand({
            email,
            //firstName,
            //lastName,
            password,
            //phoneNumber,
          }),
        );
        const { accessToken } = await this.login(user.email, user.id);

        return { accessToken, user };
      }

      throw err;
    }
  }

  async validate(
    email: string,
    password: string,
    //phoneNumber: string,
  ): Promise<UserEntity> {
    const user = await this.queryBus.execute(new FindUserByEmailQuery(email));
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException(
        `Wrong e-mail address/password for ${email}.`,
      );
    }

    //if (!user.isVerified) {
    //  throw new UnauthorizedException(
    //    `Email address ${email} is not verified. Please verify your email before logging in.`,
    //  );
    //}

    //if (!user.phoneNumber) {
    //  throw new UnauthorizedException(
    //    `Phone number ${phoneNumber} is not verified. Please verify your phone number before logging in.`,
    //  );
    //}

    return user;
  }
}
