import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  constructor(private readonly connection: Connection) {}

  async onApplicationBootstrap() {
    try {
      const queryRunner = this.connection.createQueryRunner();
      await queryRunner.query('SELECT 1');
      await queryRunner.release();
      console.log('Database connection successful');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  }
}
