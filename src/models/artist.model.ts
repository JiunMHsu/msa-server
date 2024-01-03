import { adaptData } from '../utilities';
import { dataBase } from './';

export interface Artist {
   artistId: string;
   name: string;
   isVerified: boolean;
   followers: number;
   monthlyListeners: number;
   profilePhoto: string;
}

interface DBArtist {
   artist_id: string; // Va a ser por Token
   artist_name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
}

// Ver si extender de una clase o interfaz
export class ArtistModel {
   private emptyArtist: Artist = {
      artistId: '',
      name: '',
      isVerified: false,
      followers: 0,
      monthlyListeners: 0,
      profilePhoto: '',
   };

   private emptyDBArtist: DBArtist = {
      artist_id: '',
      artist_name: '',
      verified: false,
      followers: 0,
      monthly_listeners: 0,
      profile_photo: '',
   };

   private adaptToData(dbArtist: DBArtist): Artist {
      return adaptData<DBArtist, Artist>(dbArtist, { ...this.emptyArtist });
   }

   private adaptToSqlData(artist: Artist): DBArtist {
      return adaptData<Artist, DBArtist>(artist, { ...this.emptyDBArtist });
   }

   private adaptToDataList(dbArtistList: DBArtist[]): Artist[] {
      return dbArtistList.map(dbArtist => this.adaptToData(dbArtist));
   }

   private adaptToSqlDataList(artistList: Artist[]): DBArtist[] {
      return artistList.map(artist => this.adaptToSqlData(artist));
   }

   public async getArtist(id: string): Promise<Artist> {
      const results = await dataBase.selectQuery<DBArtist>(
         `SELECT * FROM artist WHERE artist_id = ?`,
         [id],
      );
      return this.adaptToData(results[0]);
   }
}
