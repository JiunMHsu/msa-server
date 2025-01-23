import { PersistentEntity } from '../../../commons/abstracts';
import { Entity } from 'typeorm';

@Entity({ name: 'artist_manager' })
export class ArtistManager extends PersistentEntity {}
