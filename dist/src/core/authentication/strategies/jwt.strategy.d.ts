import { ConfigService } from '@nestjs/config';
import { VerifyCallback } from 'passport-jwt';
import { Repository } from 'typeorm';
import { ConfigRecord } from 'src/core/common/config.type';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userRepository;
    constructor(configService: ConfigService<ConfigRecord>, userRepository: Repository<UserEntity>);
    validate(payload: any, done: VerifyCallback): Promise<void>;
}
export {};
