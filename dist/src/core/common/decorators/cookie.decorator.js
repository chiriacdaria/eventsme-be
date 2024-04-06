"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookies = void 0;
const common_1 = require("@nestjs/common");
function retrieveCookie(request, cookieType, { name, isJson, throwIfNotFound }) {
    const value = request?.[cookieType]?.[name];
    if (throwIfNotFound && !value)
        throw new common_1.BadRequestException(`Cookie ${name} not found!`);
    return isJson ? JSON.parse(value) : value;
}
exports.Cookies = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const opts = typeof data === 'string' ? { name: data } : data;
    if (opts.unsignedCookie)
        return {
            signed: retrieveCookie(request, 'signedCookies', opts),
            unsigned: retrieveCookie(request, 'cookies', opts),
        };
    return retrieveCookie(request, 'signedCookies', opts);
});
//# sourceMappingURL=cookie.decorator.js.map