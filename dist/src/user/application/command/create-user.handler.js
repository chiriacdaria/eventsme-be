"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../infrastructure/entity/user.entity");
const user_utils_1 = require("../../utils/user.utils");
const crate_user_command_1 = require("./crate-user.command");
let CreateUserHandler = class CreateUserHandler {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ createUserDto }) {
        let { password } = createUserDto;
        if (password == null) {
            password = (0, user_utils_1.generatePassword)();
        }
        password = await (0, user_utils_1.hashPassword)(password);
        const user = await this.userRepository.save(this.userRepository.create({
            ...createUserDto,
            password,
        }));
        return user;
    }
};
exports.CreateUserHandler = CreateUserHandler;
exports.CreateUserHandler = CreateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(crate_user_command_1.CreateUserCommand),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CreateUserHandler);
//# sourceMappingURL=create-user.handler.js.map