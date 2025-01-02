import { PersistentEntity } from '../../../common/entities';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AlbumType } from '../constants/album-type.enum';
import { Artist } from '../../artists/entities/artist.entity';
import { Image } from '../../images/entities/image.entity';
import { Duration } from '../../../common/helpers/duration';
import { AlbumState } from '../constants/album-state.enum';

@Entity({ name: 'album' })
export class Album extends PersistentEntity {
    @Column('varchar', { name: 'title', length: 255, nullable: false })
    public title: string;

    @Column({
        type: 'enum',
        enum: AlbumType,
        default: AlbumType.ALBUM,
        nullable: false,
    })
    public type: AlbumType;

    @ManyToOne(() => Artist)
    @JoinColumn({
        name: 'artist_id',
        referencedColumnName: 'id',
    })
    public artist: Artist;

    @Column('timestamp', { name: 'release_date', nullable: false })
    public releaseDate: Date;

    @Column({
        type: 'enum',
        enum: AlbumState,
        default: AlbumState.UNAVAILABLE,
        nullable: false,
    })
    public state: AlbumState;

    @Column(() => Image)
    public cover: Image;

    @Column(() => Duration)
    public duration: Duration;

    @Column('smallint', { name: 'total_tracks', nullable: false })
    public totalTracks: number;

    @Column('smallint', { name: 'discs', default: 1, nullable: false })
    public discs: number;

    @Column('text', { name: 'copyright' })
    public copyright: string;

    @Column('text', { name: 'phonographic_copyright' })
    public phonographicCopyright: string;

    @Column('bigint', { name: 'saves', default: 0, nullable: false })
    public saves: number;
}
