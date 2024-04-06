"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToNumber = exports.ToBoolean = void 0;
const class_transformer_1 = require("class-transformer");
const ToBoolean = ({ ignoreNullability } = {}) => (0, class_transformer_1.Transform)(({ value }) => {
    if (!ignoreNullability) {
        if (value === null)
            return null;
        if (value === undefined)
            return value;
    }
    if ([1, '1', 'true', 'yes', 'y'].includes(value))
        return true;
    if ([0, '0', 'false', 'no', 'n'].includes(value))
        return false;
    return Boolean(value);
});
exports.ToBoolean = ToBoolean;
const ToNumber = ({ ignoreNullability } = {}) => (0, class_transformer_1.Transform)(({ value }) => {
    if (!ignoreNullability) {
        if (value === null)
            return null;
        if (value === undefined)
            return value;
    }
    return Number(value);
});
exports.ToNumber = ToNumber;
//# sourceMappingURL=transforms.decorator.js.map