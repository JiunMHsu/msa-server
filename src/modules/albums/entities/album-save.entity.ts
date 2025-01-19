import { PersistentEntity } from '@commons/entities';
import { Account } from '@modules/accounts/entities/account.entity';
import { Album } from './album.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'album_save' })
export class AlbumSave extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'saver_id' })
    public saver: Account;

    @ManyToOne(() => Album, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'album_id' })
    public album: Album;

    @Column('timestamp', { name: 'saved_at', nullable: false })
    public savedAt: Date;
}
