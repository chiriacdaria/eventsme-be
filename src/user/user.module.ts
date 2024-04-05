import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/entity/user.entity';
import { UserController } from './infrastructure/interface/user.controller';
import { commandsHandlers } from './application/command/handlers';
import { queryHandlers } from './application/query/handlers';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), CqrsModule],
  providers: [...commandsHandlers, ...queryHandlers],
  controllers: [UserController],
  exports: [TypeOrmModule],
})
export class UserModule {}
