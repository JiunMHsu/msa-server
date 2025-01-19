import { PersistentEntity } from '@commons/entities';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'profile' })
export class Profile extends PersistentEntity {
    @Column('varchar', { length: 100, nullable: false })
    public name: string;

    @Column('boolean', { name: 'is_verified', default: false })
    public isVerified: boolean;

    @Column('int', { name: 'followers', default: 0, nullable: false })
    public followers: number;

    @Column('int', { name: 'following', default: 0, nullable: false })
    public following: number;
}
