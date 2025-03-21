import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Track } from '@modules/collection/tracks/entities/track.entity';
import { PersistentEntity } from '@commons/abstracts';
import { Playlist } from './playlist.entity';

@Entity({ name: 'playlist_track' })
export class PlaylistTrack extends PersistentEntity {
    @ManyToOne(() => Playlist, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'playlist_id' })
    public playlist: Playlist;

    @ManyToOne(() => Track, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'track_id' })
    public track: Track;

    @Column('smallint', { name: 'index' })
    public index: number;

    @Column('timestamp', { name: 'added_at' })
    public addedAt: Date;
}
