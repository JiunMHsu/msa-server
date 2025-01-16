import { PersistentEntity } from '@commons/entities';
import { Album } from '@modules/albums/entities/album.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
} from 'typeorm';
import { Artist } from '@modules/artists/entities/artist.entity';
import { Duration } from '@commons/helpers/duration';

@Entity({ name: 'track' })
export class Track extends PersistentEntity {
    @Column('varchar', { name: 'title', length: 255, nullable: false })
    public title: string;

    @ManyToOne(() => Album)
    @JoinColumn({ name: 'album_id' })
    public album: Album;

    // TODO: Check if this is mapped correctly
    @ManyToMany(() => Artist)
    @JoinTable({
        name: 'track_artists',
        joinColumn: { name: 'track_id' },
        inverseJoinColumn: { name: 'artist_id' },
    })
    public artists: Artist[];

    @Column(() => Duration)
    public duration: Duration;

    @Column('smallint', { name: 'disck_number' })
    public disc: number;

    @Column('smallint', { name: 'track_number' })
    public index: number;

    @Column('boolean', { name: 'is_explicit' })
    public isExplicit: boolean;

    @Column('bigint', { name: 'playbacks' })
    public playbacks: number;

    @Column('bigint', { name: 'likes' })
    public likes: number;

    @Column('simple-array', { name: 'performers' })
    public performers: string[];

    @Column('simple-array', { name: 'writers' })
    public writers: string[];

    @Column('simple-array', { name: 'producers' })
    public producers: string[];
}
