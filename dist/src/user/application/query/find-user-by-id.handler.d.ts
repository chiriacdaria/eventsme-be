import { IQueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
import { FindUserByIdQuery } from 'src/user/application/query/find-user-by-id.query';
export declare class FindUserByIdHandler implements IQueryHandler<FindUserByIdQuery> {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    execute({ id }: FindUserByIdQuery): Promise<UserEntity>;
}
