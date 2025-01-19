import { PersistentEntity } from '@commons/entities';
import { User } from '@modules/users/entities/user.entity';
import { Profile } from '@modules/profiles/entities/profile.entity';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'account' })
export class Account extends PersistentEntity {
    @OneToOne(() => User, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'user_id' })
    public user: User;

    @OneToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    public profile: Profile;
}
