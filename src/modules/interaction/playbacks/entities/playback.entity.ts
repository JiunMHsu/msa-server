import { PersistentEntity } from '@commons/abstracts';
import { Account } from '@modules/accounts/entities/account.entity';
import { Track } from '@src/modules/collection/tracks/entities/track.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'playback' })
export class Playback extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'listener_id' })
    public listener: Account;

    @ManyToOne(() => Track, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'track_id' })
    public track: Track;

    @Column('timestamp', { name: 'played_at', nullable: false })
    public playedAt: Date;
}
