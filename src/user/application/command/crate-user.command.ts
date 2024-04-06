import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from 'src/user/infrastructure/interface/dto/create-user.dto';

export class CreateUserCommand implements ICommand {
  constructor(public readonly createUserDto: CreateUserDto) {}
}
