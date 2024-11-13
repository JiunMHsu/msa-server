import { PersistentEntity } from '../../../common/entities';
import { Entity } from 'typeorm';

@Entity({ name: 'playlist' })
export class Playlist extends PersistentEntity {}
