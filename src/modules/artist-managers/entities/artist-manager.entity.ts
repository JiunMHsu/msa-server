import { Entity } from 'typeorm';
import { PersistentEntity } from '@commons/abstracts';

@Entity({ name: 'artist_manager' })
export class ArtistManager extends PersistentEntity {}
