import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ClassTransformInterceptor implements NestInterceptor {
    private static provides;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    static get Provider(): {
        provide: string;
        useClass: typeof ClassTransformInterceptor;
    };
}
