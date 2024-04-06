import { ICommand } from '@nestjs/cqrs';
import { UpdateUserDto } from 'src/user/infrastructure/interface/dto/update-user.dto';
export declare class UpdateUserCommand implements ICommand {
    readonly id: string;
    readonly updateUserDto: UpdateUserDto;
    constructor(id: string, updateUserDto: UpdateUserDto);
}
