interface CookiesDecoratorOptions {
    name: string;
    isJson?: boolean;
    throwIfNotFound?: boolean;
    unsignedCookie?: boolean;
}
export declare const Cookies: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | CookiesDecoratorOptions)[]) => ParameterDecorator;
export {};
