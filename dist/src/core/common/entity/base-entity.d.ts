import { AggregateRoot } from '@nestjs/cqrs';
export declare class BaseEntity extends AggregateRoot {
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
    id: string;
}
