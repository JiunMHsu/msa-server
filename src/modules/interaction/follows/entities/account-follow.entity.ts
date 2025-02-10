import { PersistentEntity } from '@commons/abstracts';
import { Account } from '@modules/accounts/entities/account.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'account_follow' })
export class AccountFollow extends PersistentEntity {
    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'follower_id' })
    public follower: Account;

    @ManyToOne(() => Account, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'followed_id' })
    public followed: Account;

    @Column('timestamp', { name: 'followed_at', nullable: false })
    public followedAt: Date;
}
