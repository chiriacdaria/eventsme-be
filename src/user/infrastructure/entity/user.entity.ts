import { BaseEntity } from 'src/core/common/entity/base-entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'text' })
  bio: string;

  @Column({ type: 'text' })
  accounts: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'profile_picture', default: '' })
  profilePicture: string;

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

  @Column({ name: 'last_logged_in_at', nullable: true })
  lastLoggedInAt: Date;
}
