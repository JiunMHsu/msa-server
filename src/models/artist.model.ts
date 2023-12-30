import { dataBase } from './database.model';

export interface Artist {
   artistId: string;
   name: string;
   isVerified: boolean;
   followers: number;
   monthlyListeners: number;
   profilePhoto: string;
   profileBanner: string;
   about: string;
}

interface DbArtist {
   artist_id: string; // Va a ser por Token
   artist_name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
   profile_banner: string;
   about: string;
}

// Ver si extender de una clase o interfaz
export class ArtistModel {
   public _data = {} as Artist;
   public _dataList = [] as Artist[];
   public _sqlData = {} as DbArtist;
   public _sqlDataList = [] as DbArtist[];
   private _database = dataBase;

   private adaptToData(dbArtist: DbArtist): Artist {
      const artist: Artist = {
         artistId: dbArtist.artist_id,
         name: dbArtist.artist_name,
         isVerified: dbArtist.verified,
         followers: dbArtist.followers,
         monthlyListeners: dbArtist.monthly_listeners,
         profilePhoto: dbArtist.profile_photo,
         profileBanner: dbArtist.profile_banner,
         about: dbArtist.about,
      };
      return artist;
   }

   private adaptToSqlData(artist: Artist): DbArtist {
      const dbArtist: DbArtist = {
         artist_id: artist.artistId,
         artist_name: artist.name,
         verified: artist.isVerified,
         followers: artist.followers,
         monthly_listeners: artist.monthlyListeners,
         profile_photo: artist.profilePhoto,
         profile_banner: artist.profileBanner,
         about: artist.about,
      };
      return dbArtist;
   }

   private adaptToDataList(dbArtistList: DbArtist[]): Artist[] {
      return dbArtistList.map(dbArtist => this.adaptToData(dbArtist));
   }

   private adaptToSqlDataList(artistList: Artist[]): DbArtist[] {
      return artistList.map(artist => this.adaptToSqlData(artist));
   }

   public async getArtist(id: string): Promise<Artist> {
      const results = dataBase.selectQuery<DbArtist>(
         `SELECT * FROM artist WHERE artist_id = ?`,
         [id],
      );

      return results
         .then(artist => {
            return this.adaptToData(artist[0]);
         })
         .catch(error => {
            throw error;
         });
   }
}
