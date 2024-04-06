import { AuthService } from '../auth.service';
import { UserEntity } from 'src/user/infrastructure/entity/user.entity';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<UserEntity>;
}
export {};
