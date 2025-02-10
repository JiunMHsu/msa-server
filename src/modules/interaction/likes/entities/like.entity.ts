import { PersistentEntity } from '@commons/abstracts';
import { Account } from '@modules/accounts/entities/account.entity';
import { Track } from '@modules/collection/tracks/entities/track.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'like' })
export class Like extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'liker_id' })
    public liker: Account;

    @ManyToOne(() => Track, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'track_id' })
    public track: Track;

    @Column('timestamp', {
        name: 'liked_at',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
    })
    public likedAt: Date;
}
