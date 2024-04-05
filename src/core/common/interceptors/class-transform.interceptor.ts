import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { instanceToPlain } from 'class-transformer';
import { map, Observable } from 'rxjs';

@Injectable()
export class ClassTransformInterceptor implements NestInterceptor {
  private static provides = {
    provide: APP_INTERCEPTOR,
    useClass: ClassTransformInterceptor,
  };

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => instanceToPlain(data)));
  }

  static get Provider() {
    return ClassTransformInterceptor.provides;
  }
}
