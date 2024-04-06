"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandsHandlers = void 0;
const create_user_handler_1 = require("./create-user.handler");
const delete_user_handler_1 = require("./delete-user.handler");
const update_user_handler_1 = require("./update-user.handler");
exports.commandsHandlers = [
    create_user_handler_1.CreateUserHandler,
    update_user_handler_1.UpdateUserHandler,
    delete_user_handler_1.DeleteUserHandler,
];
//# sourceMappingURL=handlers.js.map