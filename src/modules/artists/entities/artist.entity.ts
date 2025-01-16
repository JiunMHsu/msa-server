import { Track } from 'src/modules/tracks/entities/track.entity';
import { PersistentEntity } from '../../../commons/entities';
import { ArtistManager } from '../../artist-managers/entities/artist-manager.entity';
import { Image } from '../../images/entities/image.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'artist' })
export class Artist extends PersistentEntity {
    @Column('varchar', { name: 'name', length: 255, nullable: false })
    public name: string;

    @ManyToOne(() => ArtistManager)
    @JoinColumn({ name: 'artist_manager_id' })
    public manager: ArtistManager;

    // TODO: Implement popularity criteria for tracks
    public popularTracks: Track[];

    @Column('bigint', { name: 'followers', default: 0, nullable: false })
    public followers: number;

    @Column('bigint', {
        name: 'monthly_listeners',
        default: 0,
        nullable: false,
    })
    public monthlyListeners: number;

    @Column(() => Image)
    public profilePicture: Image;

    @Column(() => Image)
    public profileBanner: Image;
}
