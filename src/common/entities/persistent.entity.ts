import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class PersistentEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
    })
    public readonly createdAt: Date;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
    })
    public updatedAt: Date;

    @Column('boolean', { name: 'is_active' })
    public isActive: boolean;
}
