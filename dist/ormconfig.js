"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const ormconfig = {
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
const AppDataSource = new typeorm_1.DataSource(ormconfig);
exports.default = AppDataSource;
//# sourceMappingURL=ormconfig.js.map