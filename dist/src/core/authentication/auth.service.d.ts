import { JwtService } from '@nestjs/jwt';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
export declare class AuthService {
    private readonly commandBus;
    private readonly jwtService;
    private readonly queryBus;
    constructor(commandBus: CommandBus, jwtService: JwtService, queryBus: QueryBus);
    login(email: string, id: string): Promise<{
        accessToken: string;
        user: UserEntity;
    }>;
    register(email: string, password: string): Promise<{
        accessToken: string;
        user: UserEntity;
    }>;
    validate(email: string, password: string): Promise<UserEntity>;
}
