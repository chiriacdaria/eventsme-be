import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifyCallback } from 'passport-jwt';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ConfigRecord } from 'src/core/common/config.type';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService<ConfigRecord>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any, done: VerifyCallback) {
    const user = await this.userRepository.findOne({
      where: { id: payload.sub },
    });

    done(null, user);
  }
}
