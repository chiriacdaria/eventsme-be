import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    update(userId: string, updateUserDto: UpdateUserDto): Promise<any>;
    delete(userId: string): Promise<any>;
}
