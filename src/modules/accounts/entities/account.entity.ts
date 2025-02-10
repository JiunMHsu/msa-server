import { PersistentEntity } from '@src/commons/abstracts';
import { User } from '@src/modules/core/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Stream } from '@src/modules/streams/entities/stream.entity';

@Entity({ name: 'account' })
export class Account extends PersistentEntity {
    @OneToOne(() => User, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'user_id' })
    public user: User;

    @Column('varchar', { length: 100, nullable: false })
    public name: string;

    @Column('boolean', { name: 'is_verified', default: false })
    public isVerified: boolean;

    @Column('int', { name: 'followers', default: 0, nullable: false })
    public followers: number;

    @Column('int', { name: 'following', default: 0, nullable: false })
    public following: number;

    @OneToOne(() => Stream)
    @JoinColumn({ name: 'stream_id' })
    public stream: Stream;
}
