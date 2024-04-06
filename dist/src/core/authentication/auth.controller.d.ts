import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { AuthUserDto } from './dto/auth-user.dto';
export declare class AuthController {
    private readonly configService;
    private readonly authService;
    private readonly userRepository;
    constructor(configService: ConfigService, authService: AuthService, userRepository: Repository<UserEntity>);
    login(user: UserEntity): Promise<{
        user: UserEntity;
        accessToken: string;
    }>;
    register({ email, password }: AuthUserDto): Promise<{
        user: UserEntity;
        accessToken: string;
    }>;
}
