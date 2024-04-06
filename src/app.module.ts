import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { ClassTransformInterceptor } from './core/common/interceptors/class-transform.interceptor';
import { AppService } from './app.service';
import { DatabaseService } from './core/database/database.service';
import { AuthModule } from './core/authentication/auth.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    DatabaseService,
    ClassTransformInterceptor.Provider,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
  exports: [ConfigModule],
})
export class AppModule {}
