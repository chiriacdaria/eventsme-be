import { Repository } from 'typeorm';
import { UserEntity } from './user/infrastructure/entity/user.entity';
export declare class TestController {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    testDatabaseConnection(): Promise<{
        message: string;
    }>;
}
