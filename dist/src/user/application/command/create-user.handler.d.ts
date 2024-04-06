import { ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { CreateUserCommand } from './crate-user.command';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    execute({ createUserDto }: CreateUserCommand): Promise<UserEntity>;
}
