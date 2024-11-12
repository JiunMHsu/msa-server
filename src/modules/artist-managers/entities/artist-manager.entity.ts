import { PersistentEntity } from '../../../common/entities';
import { Entity } from 'typeorm';

@Entity({ name: 'artist_manager' })
export class ArtistManager extends PersistentEntity {}
