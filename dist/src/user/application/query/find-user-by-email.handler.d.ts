import { IQueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { FindUserByEmailQuery } from './find-user-by-email.query';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
export declare class FindUserByEmailHandler implements IQueryHandler<FindUserByEmailQuery> {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    execute({ email }: FindUserByEmailQuery): Promise<UserEntity>;
}
