import { PersistentEntity } from '../../../common/entities';
import { ArtistManager } from '../../artist-managers/entities/artist-manager.entity';
import { Track } from '../../tracks/entities/track.entity';
import { Image } from '../../images/entities/image.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'artist' })
export class Artist extends PersistentEntity {
    @Column('varchar', { name: 'name', length: 255 })
    public name: string;

    @ManyToOne(() => ArtistManager)
    @JoinColumn({ name: 'artist_manager_id' })
    public manager: ArtistManager;

    // TODO: ver como tipar esto
    public popularTracks: Track[];

    @Column('long', { name: 'followers' })
    public followers: number;

    @Column('long', { name: 'monthly_listeners' })
    public monthlyListeners: number;

    @Column(() => Image)
    public profilePicture: Image;

    @Column(() => Image)
    public profileBanner: Image;
}
