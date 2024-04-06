import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from 'src/user/infrastructure/interface/dto/create-user.dto';
export declare class CreateUserCommand implements ICommand {
    readonly createUserDto: CreateUserDto;
    constructor(createUserDto: CreateUserDto);
}
