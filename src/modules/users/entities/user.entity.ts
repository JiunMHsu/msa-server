import { PersistentEntity } from '@commons/entities';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class User extends PersistentEntity {
    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string;

    @Column('varchar', {
        name: 'email',
        length: 255,
        unique: true,
        nullable: false,
    })
    email: string;

    // hashed password
    @Column('varchar', { name: 'password', length: 60, nullable: false })
    password: string;
}
