import { PersistentEntity } from '@src/commons/abstracts';
import { Account } from '@modules/core/accounts/entities/account.entity';
import { Image } from '@modules/images/entities/image.entity';
import { Duration } from '@commons/helpers/duration';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'playlist' })
export class Playlist extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'owner_id' })
    public owner: Account;

    // TODO: map relation
    // @ManyToMany(() => Account)
    public collaborators: Account[];

    @Column('varchar', { name: 'title', length: 255, nullable: false })
    public title: string;

    @Column('text', { name: 'description' })
    public description: string;

    @Column(() => Image)
    public cover: Image;

    @Column(() => Duration)
    public duration: Duration;

    @Column('boolean', { name: 'is_private', default: false, nullable: false })
    public isPrivate: boolean;

    @Column('int', { name: 'saves', nullable: false })
    public saves: number;
}
