import { Entity } from 'typeorm';
import { PersistentEntity } from '@commons/abstracts';
import { Track } from '@modules/collection/tracks/entities/track.entity';
import { PlaySource } from './play-source.embeddable';
import { StreamState } from '../constants/stream-state.enum';

// TODO: Map columns to the database

@Entity({ name: 'stream' })
export class Stream extends PersistentEntity {
    public sessionId: string;

    public deviceId: string;

    public track: Track;

    public queue: Track[];

    public source: PlaySource;

    public second: number;

    public state: StreamState;
}
