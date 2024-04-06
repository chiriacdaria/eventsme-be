import { CreateUserHandler } from './create-user.handler';
import { DeleteUserHandler } from './delete-user.handler';
import { UpdateUserHandler } from './update-user.handler';
export declare const commandsHandlers: (typeof UpdateUserHandler | typeof CreateUserHandler | typeof DeleteUserHandler)[];
