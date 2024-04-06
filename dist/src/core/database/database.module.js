"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDatabaseModule = exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
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
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], DatabaseModule);
let TestDatabaseModule = class TestDatabaseModule {
};
exports.TestDatabaseModule = TestDatabaseModule;
exports.TestDatabaseModule = TestDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
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
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], TestDatabaseModule);
//# sourceMappingURL=database.module.js.map