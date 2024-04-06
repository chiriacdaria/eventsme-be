import { CommandHandler, ICommandHandler, QueryBus } from '@nestjs/cqrs';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { FindUserByIdQuery } from '../query/find-user-by-id.query';
import { UpdateUserCommand } from './update-user.command';

import { hashPassword } from 'src/user/utils/user.utils';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private readonly queryBus: QueryBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute({ id, updateUserDto }: UpdateUserCommand): Promise<UserEntity> {
    const {
      deletedAt,
      email,
    fullName,
      isVerified,
      password,
      phoneNumber,
    } = updateUserDto;

    const user: UserEntity = await this.queryBus.execute(
      new FindUserByIdQuery(id),
    );

    if (email != null) {
      user.email = email;
    }

    if (fullName != null) {
      user.fullName = fullName;
    }

    if (phoneNumber != null) {
      user.phoneNumber = phoneNumber;
    }

    if (isVerified != null) {
      user.isVerified = isVerified;
    }

    if (password != null && user.password !== password) {
      user.password = await hashPassword(password);
    }

    user.deletedAt = deletedAt;

    return await this.userRepository.save(user);
  }
}
