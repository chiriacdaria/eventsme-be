"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const cqrs_1 = require("@nestjs/cqrs");
const crate_user_command_1 = require("../../user/application/command/crate-user.command");
const find_user_by_email_query_1 = require("../../user/application/query/find-user-by-email.query");
const update_user_command_1 = require("../../user/application/command/update-user.command");
let AuthService = class AuthService {
    constructor(commandBus, jwtService, queryBus) {
        this.commandBus = commandBus;
        this.jwtService = jwtService;
        this.queryBus = queryBus;
    }
    async login(email, id) {
        const payload = {
            email,
            sub: id,
        };
        const accessToken = this.jwtService.sign(payload);
        const user = await this.queryBus.execute(new find_user_by_email_query_1.FindUserByEmailQuery(email));
        await this.commandBus.execute(new update_user_command_1.UpdateUserCommand(id, {
            lastLoggedInAt: new Date(),
        }));
        return {
            accessToken,
            user,
        };
    }
    async register(email, password) {
        let user;
        try {
            user = await this.queryBus.execute(new find_user_by_email_query_1.FindUserByEmailQuery(email));
            if (user.deletedAt != null) {
                user = await this.commandBus.execute(new update_user_command_1.UpdateUserCommand(user.id, {
                    deletedAt: null,
                }));
            }
            else {
                throw new common_1.ConflictException(`User with e-mail address ${email} is already registered.`);
            }
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                user = await this.commandBus.execute(new crate_user_command_1.CreateUserCommand({
                    email,
                    password,
                }));
                const { accessToken } = await this.login(user.email, user.id);
                return { accessToken, user };
            }
            throw err;
        }
    }
    async validate(email, password) {
        const user = await this.queryBus.execute(new find_user_by_email_query_1.FindUserByEmailQuery(email));
        if (!(await bcrypt.compare(password, user.password))) {
            throw new common_1.UnauthorizedException(`Wrong e-mail address/password for ${email}.`);
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        jwt_1.JwtService,
        cqrs_1.QueryBus])
], AuthService);
//# sourceMappingURL=auth.service.js.map