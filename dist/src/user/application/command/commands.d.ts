import { CreateUserCommand } from './crate-user.command';
import { DeleteUserCommand } from './delete-user.command';
import { UpdateUserCommand } from './update-user.command';
export declare const commands: (typeof UpdateUserCommand | typeof DeleteUserCommand | typeof CreateUserCommand)[];
