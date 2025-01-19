import { PersistentEntity } from '@commons/entities';
import { User } from '@modules/users/entities/user.entity';
import { Profile } from '@modules/profiles/entities/profile.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'account' })
export class Account extends PersistentEntity {
    user: User;
    profile: Profile;
}
