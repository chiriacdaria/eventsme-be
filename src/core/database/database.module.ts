import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        database: configService.get('DB_DATABASE'),
        host: configService.get('DB_HOST'),
        migrations: ['src/core/database/migrations/*.ts'],
        migrationsRun: true,
        password: configService.get('USER_PASSWORD'),
        port: +configService.get('DB_PORT'),
        synchronize: true,
        type: 'mysql',
        username: configService.get('DB_USERNAME'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        database: configService.get('DB_DATABASE'),
        host: configService.get('DB_HOST'),
        migrations: ['src/core/database/migrations/*.ts'],
        migrationsRun: true,
        password: configService.get('DB_PASSWORD'),
        port: +configService.get('DB_PORT'),
        synchronize: true,
        type: 'mysql',
        username: configService.get('DB_USERNAME'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class TestDatabaseModule {}
