"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualColumn = exports.VIRTUAL_COLUMN_MAPPER_KEY = exports.VIRTUAL_COLUMN_KEY = void 0;
require("reflect-metadata");
exports.VIRTUAL_COLUMN_KEY = Symbol('VIRTUAL_COLUMN_KEY');
exports.VIRTUAL_COLUMN_MAPPER_KEY = Symbol('VIRTUAL_COLUMN_MAPPER_KEY');
function resolveOpts(opts) {
    if (!opts)
        return {};
    if (typeof opts === 'string')
        return { name: opts };
    return opts;
}
function VirtualColumn(opts) {
    const { name, mapper } = resolveOpts(opts);
    return (target, propertyKey) => {
        const metaInfo = Reflect.getMetadata(exports.VIRTUAL_COLUMN_KEY, target) || {};
        const mapperInfo = Reflect.getMetadata(exports.VIRTUAL_COLUMN_MAPPER_KEY, target) || {};
        metaInfo[propertyKey] = name ?? propertyKey;
        if (mapper)
            mapperInfo[propertyKey] = mapper;
        Reflect.defineMetadata(exports.VIRTUAL_COLUMN_KEY, metaInfo, target);
        Reflect.defineMetadata(exports.VIRTUAL_COLUMN_MAPPER_KEY, mapperInfo, target);
    };
}
exports.VirtualColumn = VirtualColumn;
//# sourceMappingURL=virtual-column.decorator.js.map