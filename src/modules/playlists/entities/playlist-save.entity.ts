import { PersistentEntity } from '@src/commons/abstracts';
import { Account } from '@modules/accounts/entities/account.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Playlist } from './playlist.entity';

@Entity({ name: 'playlist_save' })
export class PlaylistSave extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'saver_id' })
    public saver: Account;

    @ManyToOne(() => Playlist, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'playlist_id' })
    public playlist: Playlist;

    @Column('timestamp', { name: 'saved_at', nullable: false })
    public savedAt: Date;
}
