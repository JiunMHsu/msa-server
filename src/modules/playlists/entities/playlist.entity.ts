import { PersistentEntity } from '../../../commons/entities';
import { Entity } from 'typeorm';

@Entity({ name: 'playlist' })
export class Playlist extends PersistentEntity {}
