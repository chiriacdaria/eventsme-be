import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    deletedAt?: Date;
    isVerified?: boolean;
    lastLoggedInAt?: Date;
}
export {};
