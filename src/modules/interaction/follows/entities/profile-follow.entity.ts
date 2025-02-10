import { PersistentEntity } from '@commons/abstracts';
import { Account } from '@src/modules/accounts/entities/account.entity';
import { Profile } from '@modules/profiles/entities/profile.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'profile_follow' })
export class ProfileFollow extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'follower_id' })
    public follower: Account;

    @ManyToOne(() => Profile, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'followed_id' })
    public followed: Profile;

    @Column('timestamp', { name: 'followed_at', nullable: false })
    public followedAt: Date;
}
