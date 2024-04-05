import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';

interface CookiesDecoratorOptions {
  name: string;
  isJson?: boolean;
  throwIfNotFound?: boolean;
  unsignedCookie?: boolean;
}

function retrieveCookie(
  request: Request,
  cookieType: 'cookies' | 'signedCookies',
  { name, isJson, throwIfNotFound }: CookiesDecoratorOptions,
) {
  const value = request?.[cookieType]?.[name];
  if (throwIfNotFound && !value)
    throw new BadRequestException(`Cookie ${name} not found!`);
  return isJson ? JSON.parse(value) : value;
}

export const Cookies = createParamDecorator(
  (data: string | CookiesDecoratorOptions, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const opts = typeof data === 'string' ? { name: data } : data;

    if (opts.unsignedCookie)
      return {
        signed: retrieveCookie(request, 'signedCookies', opts),
        unsigned: retrieveCookie(request, 'cookies', opts),
      };
    return retrieveCookie(request, 'signedCookies', opts);
  },
);
