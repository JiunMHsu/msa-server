import { Model } from './model';
import { CamelizeKeys } from '../utilities';

type ArtistDB = {
   artist_id: string;
   artist_name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
};

export type Artist = CamelizeKeys<ArtistDB>;

export class ArtistModel extends Model<ArtistDB, Artist> {
   private get emptyArtist() {
      return {
         artistId: '',
         artistName: '',
         verified: false,
         followers: 0,
         monthlyListeners: 0,
         profilePhoto: '',
      } as Artist;
   }
   private get emptyDBArtist() {
      return {
         artist_id: '',
         artist_name: '',
         verified: false,
         followers: 0,
         monthly_listeners: 0,
         profile_photo: '',
      } as ArtistDB;
   }

   public async getById(artistId: string): Promise<Artist> {
      const [results] = await this.dataBase.selectQuery<ArtistDB>(
         `SELECT * FROM artist WHERE artist_id = ?`,
         [artistId],
      );
      return this.adapter.adaptToModel(results, this.emptyArtist);
   }

   public async getAll(): Promise<Artist[]> {
      const results = await this.dataBase.selectQuery<ArtistDB>(
         `SELECT * FROM artist`,
         [],
      );
      console.log(results);
      return this.adapter.adaptListToModel(results, this.emptyArtist);
   }

   // hace falta que sea async?
   // !! Revisar
   public async create(artist: Artist): Promise<void> {
      const artistDB = this.adapter.adaptToDB(artist, this.emptyDBArtist);
      await this.dataBase.insertQuery('artist', [artistDB]);
   }
}
