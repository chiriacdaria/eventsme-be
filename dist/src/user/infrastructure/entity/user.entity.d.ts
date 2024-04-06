import { BaseEntity } from 'src/core/common/entity/base-entity';
export declare class UserEntity extends BaseEntity {
    id: string;
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    isVerified: boolean;
    lastLoggedInAt: Date;
}
