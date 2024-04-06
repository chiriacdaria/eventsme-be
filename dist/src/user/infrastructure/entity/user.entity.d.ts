import { BaseEntity } from 'src/core/common/entity/base-entity';
export declare class UserEntity extends BaseEntity {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    bio: string;
    accounts: string;
    phoneNumber: string;
    profilePicture: string;
    isVerified: boolean;
    lastLoggedInAt: Date;
}
