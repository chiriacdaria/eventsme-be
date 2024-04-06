import { IQuery } from '@nestjs/cqrs';
export declare class FindUserByEmailQuery implements IQuery {
    readonly email: string;
    constructor(email: string);
}
