import { PersistentEntity } from '../../../common/entities';
import { Album } from '../../albums/entities/album.entity';
import { Column, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Artist } from '../../artists/entities/artist.entity';
import { Duration } from '../../../common/helpers/duration';

export class Track extends PersistentEntity {
    @Column('varchar', { name: 'title', length: 255 })
    public title: string;

    @ManyToOne(() => Album)
    @JoinColumn({ name: 'album_id' })
    public album: Album;

    @ManyToMany(() => Artist)
    @JoinTable({
        name: 'track_artists',
        joinColumn: { name: 'track_id' },
        inverseJoinColumn: { name: 'artist_id' },
    })
    public artists: Artist[];

    @Column(() => Duration)
    public duration: Duration;

    @Column('int', { name: 'disck_number' })
    public disc: number;

    @Column('int', { name: 'track_number' })
    public index: number;

    @Column('boolean', { name: 'is_explicit' })
    public isExplicit: boolean;

    @Column('long', { name: 'plays' })
    public plays: number;

    @Column('simple-array', { name: 'performers' })
    public performers: string[];

    @Column('simple-array', { name: 'writers' })
    public writers: string[];

    @Column('simple-array', { name: 'producers' })
    public producers: string[];

    @Column('long', { name: 'likes' })
    public likes: number;
}
