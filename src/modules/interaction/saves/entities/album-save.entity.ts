import { PersistentEntity } from '@commons/abstracts';
import { Account } from '@src/modules/accounts/entities/account.entity';
import { Album } from '@modules/collection/albums/entities/album.entity';
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
