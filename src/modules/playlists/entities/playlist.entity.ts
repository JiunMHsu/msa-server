import { PersistentEntity } from '@commons/entities';
import { Account } from '@modules/accounts/entities/account.entity';
import { Image } from '@modules/images/entities/image.entity';
import { Duration } from '@commons/helpers/duration';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'playlist' })
export class Playlist extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'owner_id' })
    owner: Account;

    // TODO: map relation
    // @ManyToMany(() => Account)
    collaborators: Account[];

    @Column('varchar', { name: 'title', length: 255, nullable: false })
    title: string;

    @Column('text', { name: 'description' })
    description: string;

    @Column(() => Image)
    cover: Image;

    @Column(() => Duration)
    duration: Duration;

    @Column('boolean', { name: 'is_private', default: false, nullable: false })
    isPrivate: boolean;

    @Column('int', { name: 'saves', nullable: false })
    saves: number;
}
