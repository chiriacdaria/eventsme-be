import { NotFoundException } from '@nestjs/common';

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FindUserByEmailQuery } from './find-user-by-email.query';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';

@QueryHandler(FindUserByEmailQuery)
export class FindUserByEmailHandler
  implements IQueryHandler<FindUserByEmailQuery>
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute({ email }: FindUserByEmailQuery): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      withDeleted: true,
    });

    if (user == null)
      throw new NotFoundException(
        `Cannot find user with the following e-mail address: ${email}.`,
      );

    return user;
  }
}
