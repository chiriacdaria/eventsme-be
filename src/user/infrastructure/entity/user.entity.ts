import { BaseEntity } from 'src/core/common/entity/base-entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default:'' ,name: 'full_name' })
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({default:'' , name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

  @Column({ name: 'last_logged_in_at', nullable: true })
  lastLoggedInAt: Date;
}
