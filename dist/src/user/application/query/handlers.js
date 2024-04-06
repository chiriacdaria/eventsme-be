"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHandlers = void 0;
const find_user_by_email_handler_1 = require("./find-user-by-email.handler");
const find_user_by_id_handler_1 = require("./find-user-by-id.handler");
exports.queryHandlers = [find_user_by_email_handler_1.FindUserByEmailHandler, find_user_by_id_handler_1.FindUserByIdHandler];
//# sourceMappingURL=handlers.js.map