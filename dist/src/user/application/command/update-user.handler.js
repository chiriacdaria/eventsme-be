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
exports.UpdateUserHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../infrastructure/entity/user.entity");
const find_user_by_id_query_1 = require("../query/find-user-by-id.query");
const update_user_command_1 = require("./update-user.command");
const user_utils_1 = require("../../utils/user.utils");
let UpdateUserHandler = class UpdateUserHandler {
    constructor(queryBus, userRepository) {
        this.queryBus = queryBus;
        this.userRepository = userRepository;
    }
    async execute({ id, updateUserDto }) {
        const { deletedAt, email, fullName, isVerified, password, phoneNumber, } = updateUserDto;
        const user = await this.queryBus.execute(new find_user_by_id_query_1.FindUserByIdQuery(id));
        if (email != null) {
            user.email = email;
        }
        if (fullName != null) {
            user.fullName = fullName;
        }
        if (phoneNumber != null) {
            user.phoneNumber = phoneNumber;
        }
        if (isVerified != null) {
            user.isVerified = isVerified;
        }
        if (password != null && user.password !== password) {
            user.password = await (0, user_utils_1.hashPassword)(password);
        }
        user.deletedAt = deletedAt;
        return await this.userRepository.save(user);
    }
};
exports.UpdateUserHandler = UpdateUserHandler;
exports.UpdateUserHandler = UpdateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_user_command_1.UpdateUserCommand),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [cqrs_1.QueryBus,
        typeorm_2.Repository])
], UpdateUserHandler);
//# sourceMappingURL=update-user.handler.js.map