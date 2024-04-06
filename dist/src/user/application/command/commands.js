"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const crate_user_command_1 = require("./crate-user.command");
const delete_user_command_1 = require("./delete-user.command");
const update_user_command_1 = require("./update-user.command");
exports.commands = [
    crate_user_command_1.CreateUserCommand,
    update_user_command_1.UpdateUserCommand,
    delete_user_command_1.DeleteUserCommand,
];
//# sourceMappingURL=commands.js.map