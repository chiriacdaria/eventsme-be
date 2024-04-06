import { CreateUserDto } from 'src/user/infrastructure/interface/dto/create-user.dto';
import { ICommand } from '@nestjs/cqrs';
export declare class CreateUserCommand implements ICommand {
    readonly createUserDto: CreateUserDto;
    constructor(createUserDto: CreateUserDto);
}
