import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { DeleteUserCommand } from './delete-user.command';
import { FindUserByIdQuery } from '../query/find-user-by-id.query';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(
    private readonly eventBus: EventBus,
    private readonly queryBus: QueryBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute({ id }: DeleteUserCommand) {
    const user: UserEntity = await this.queryBus.execute(
      new FindUserByIdQuery(id),
    );

    user.deletedAt = new Date();
    user.isVerified = false;

    await this.userRepository.save(user);
  }
}
