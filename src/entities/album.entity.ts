import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('album')
export class Album extends BaseEntity {
   // reestructurar la consulta sql
   @PrimaryColumn({
      type: 'uuid',
   })
   album_id: string;

   @Column()
   title: string;

   @Column({ length: 10 })
   disc_type: string;

   @Column()
   cover_art: string;

   @Column()
   label: string;

   @Column({ length: 10 })
   release_date: string;

   @Column({ length: 8 })
   duration: string;
}
