import { CreateUserCommand } from './crate-user.command';
import { DeleteUserCommand } from './delete-user.command';
import { UpdateUserCommand } from './update-user.command';

export const commands = [
  CreateUserCommand,
  UpdateUserCommand,
  DeleteUserCommand,
];
