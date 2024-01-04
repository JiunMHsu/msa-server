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

   public async getById(id: string): Promise<Artist> {
      const [results] = await this.dataBase.selectQuery<ArtistDB>(
         `SELECT * FROM artist WHERE artist_id = ?`,
         [id],
      );
      return this.adapter.adaptToData(results, this.emptyArtist);
   }

   public async getAll(): Promise<Artist[]> {
      const results = await this.dataBase.selectQuery<ArtistDB>(
         `SELECT * FROM artist`,
         [],
      );
      console.log(results);
      return this.adapter.adaptListToData(results, this.emptyArtist);
   }
}
