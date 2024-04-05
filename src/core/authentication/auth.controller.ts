import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';

import { UserEntity } from 'src/user/infrastructure/entity/user.entity';

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthUserDto } from './dto/auth-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ReqUser } from '../database/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@ReqUser() user: UserEntity) {
    const { accessToken } = await this.authService.login(user.email, user.id);
    return { user, accessToken };
  }

  @Post('register')
  async register(@Body() { email, password }: AuthUserDto) {
    const { accessToken, user } = await this.authService.register(
      email,
      password,
    );
    return { user, accessToken };
  }
}
