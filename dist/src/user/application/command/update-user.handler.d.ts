import { ICommandHandler, QueryBus } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { UpdateUserCommand } from './update-user.command';
export declare class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    private readonly queryBus;
    private readonly userRepository;
    constructor(queryBus: QueryBus, userRepository: Repository<UserEntity>);
    execute({ id, updateUserDto }: UpdateUserCommand): Promise<UserEntity>;
}
