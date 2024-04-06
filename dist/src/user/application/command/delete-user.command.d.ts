import { ICommand } from '@nestjs/cqrs';
export declare class DeleteUserCommand implements ICommand {
    readonly id: string;
    constructor(id: string);
}
