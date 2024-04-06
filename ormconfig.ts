import 'dotenv/config';

import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { SeederOptions } from 'typeorm-extension';

const ormconfig: MysqlConnectionOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/core/database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
};

const AppDataSource = new DataSource(ormconfig);

export default AppDataSource;
