import { PersistentEntity } from '../../../common/entities';
import { ArtistManager } from '../../artist-managers/entities/artist-manager.entity';
import { Track } from '../../tracks/entities/track.entity';
import { Image } from '../../images/entities/image.entity';
import { Column, JoinColumn, ManyToOne } from 'typeorm';

export class Artist extends PersistentEntity {
    @Column('varchar', { name: 'name', length: 255 })
    public name: string;

    @ManyToOne(() => ArtistManager)
    @JoinColumn({ name: 'artist_manager_id' })
    public manager: ArtistManager;

    public popularTracks: Track[]; // ver como tiparlo como longitud fija

    @Column('long', { name: 'followers' })
    public followers: number;

    @Column('long', { name: 'monthly_listeners' })
    public monthlyListeners: number;

    @Column(() => Image)
    public profilePicture: Image;

    @Column(() => Image)
    public profileBanner: Image;
}
