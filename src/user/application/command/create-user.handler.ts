import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/user/infrastructure/entity/user.entity';

import { generatePassword, hashPassword } from 'src/user/utils/user.utils';
import { CreateUserCommand } from './crate-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    //private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute({ createUserDto }: CreateUserCommand): Promise<UserEntity> {
    let { password } = createUserDto;

    if (password == null) {
      password = generatePassword();
    }

    password = await hashPassword(password);

    const user = await this.userRepository.save(
      this.userRepository.create({
        ...createUserDto,
        password,
      }),
    );

    return user;
  }
}
