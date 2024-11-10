import { Column } from 'typeorm';

export class Image {
    @Column()
    public path: string;
}
