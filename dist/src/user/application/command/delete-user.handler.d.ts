import { EventBus, ICommandHandler, QueryBus } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { DeleteUserCommand } from './delete-user.command';
export declare class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
    private readonly eventBus;
    private readonly queryBus;
    private readonly userRepository;
    constructor(eventBus: EventBus, queryBus: QueryBus, userRepository: Repository<UserEntity>);
    execute({ id }: DeleteUserCommand): Promise<void>;
}
