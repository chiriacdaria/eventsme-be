"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClassTransformInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassTransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
let ClassTransformInterceptor = ClassTransformInterceptor_1 = class ClassTransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => (0, class_transformer_1.instanceToPlain)(data)));
    }
    static get Provider() {
        return ClassTransformInterceptor_1.provides;
    }
};
exports.ClassTransformInterceptor = ClassTransformInterceptor;
ClassTransformInterceptor.provides = {
    provide: core_1.APP_INTERCEPTOR,
    useClass: ClassTransformInterceptor_1,
};
exports.ClassTransformInterceptor = ClassTransformInterceptor = ClassTransformInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], ClassTransformInterceptor);
//# sourceMappingURL=class-transform.interceptor.js.map