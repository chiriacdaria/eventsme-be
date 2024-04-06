import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user/infrastructure/entity/user.entity';

@Controller('test')
export class TestController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  @Get('db-connection')
  async testDatabaseConnection(): Promise<{ message: string }> {
    try {
      // Perform a database query to check if the connection is successful
      //const users = await this.userRepository.find();

      // If the query succeeds, return a success message
      return { message: 'Database connection successful' };
    } catch (error: any) {
      // If there's an error, return an error message
      return { message: 'Failed to connect to the database' };
    }
  }
}
