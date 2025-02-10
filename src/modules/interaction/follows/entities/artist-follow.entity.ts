import { PersistentEntity } from '@commons/abstracts';
import { Account } from '@src/modules/accounts/entities/account.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Artist } from '@modules/artists/entities/artist.entity';

@Entity({ name: 'artist_follow' })
export class ArtistFollow extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'follower_id' })
    public follower: Account;

    @ManyToOne(() => Artist, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'artist_id' })
    public artist: Artist;

    @Column('timestamp', { name: 'followed_at', nullable: false })
    public followedAt: Date;
}
