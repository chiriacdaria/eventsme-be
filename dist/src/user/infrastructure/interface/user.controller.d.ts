import { CommandBus } from '@nestjs/cqrs';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    update(userId: string, updateUserDto: UpdateUserDto): Promise<any>;
    delete(userId: string): Promise<any>;
}
