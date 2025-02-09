import { PersistentEntity } from '@src/commons/abstracts';
import { User } from '@modules/auth/users/entities/user.entity';
import { Profile } from '@modules/profiles/entities/profile.entity';
import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Stream } from '@modules/core/streams/entities/stream.entity';

@Entity({ name: 'account' })
export class Account extends PersistentEntity {
    @OneToOne(() => User, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'user_id' })
    public user: User;

    @OneToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    public profile: Profile;

    @OneToOne(() => Stream)
    @JoinColumn({ name: 'stream_id' })
    public stream: Stream;
}
