import { IQuery } from '@nestjs/cqrs';
export declare class FindUserByIdQuery implements IQuery {
    readonly id: string;
    constructor(id: string);
}
