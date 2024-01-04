import { Model } from './model';
import { CamelizeKeys } from '../utilities';

type TrackDB = {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: string; // o string
   is_explicit: boolean;
   plays: number;
   source_file: string;
};

export type Track = CamelizeKeys<TrackDB>;

// Ojo con el tema de la duracion, ver si hace falta hacelo en Date
export class TrackModel extends Model<TrackDB, Track> {
   private get emptyTrack() {
      return {
         trackId: '',
         albumId: '',
         title: '',
         discNumber: 0,
         trackNumber: 0,
         duration: '',
         isExplicit: false,
         plays: 0,
         sourceFile: '',
      } as Track;
   }
   private get emptyDBTrack() {
      return {
         track_id: '',
         album_id: '',
         title: '',
         disc_number: 0,
         track_number: 0,
         duration: '',
         is_explicit: false,
         plays: 0,
         source_file: '',
      } as TrackDB;
   }

   public async getById(trackId: string): Promise<Track> {
      const [results] = await this.dataBase.selectQuery<TrackDB>(
         `SELECT * FROM track WHERE track_id = ?`,
         [trackId],
      );
      return this.adapter.adaptToModel(results, this.emptyTrack);
   }

   public async getByAlbum(albumId: string): Promise<Track[]> {
      const results = await this.dataBase.selectQuery<TrackDB>(
         `SELECT * FROM track WHERE album_id = ?`,
         [albumId],
      );
      return this.adapter.adaptListToModel(results, this.emptyTrack);
   }

   // !! Completar
   public async getByArtist(artistId: string): Promise<Track[]> {
      const results = await this.dataBase.selectQuery<TrackDB>(
         `SELECT * FROM track`, // hay q hacer join aca
         [artistId],
      );
      return this.adapter.adaptListToModel(results, this.emptyTrack);
   }

   // hace falta que sea async?
   // !! Revisar
   public async create(track: Track): Promise<void> {
      const trackDB = this.adapter.adaptToDB(track, this.emptyDBTrack);
      await this.dataBase.insertQuery('track', [trackDB]);
   }
}
