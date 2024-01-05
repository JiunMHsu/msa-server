import { Model } from './model';
import { CamelizeKeys } from '../utilities';

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

type AlbumDB = {
   album_id: string;
   title: string;
   disc_type: string;
   cover_art: string;
   label: string;
   release_date: string;
   duration: string;
};

type Album = CamelizeKeys<AlbumDB>;

export class AlbumModel extends Model<AlbumDB, Album> {
   private get emptyAlbum(): Album {
      return {
         albumId: '',
         title: '',
         discType: 'Album',
         coverArt: '',
         label: '',
         releaseDate: '',
         duration: '',
      };
   }
   private get emptyDBAlbum(): AlbumDB {
      return {
         album_id: '',
         title: '',
         disc_type: 'Album',
         cover_art: '',
         label: '',
         release_date: '',
         duration: '',
      };
   }

   public async getById(albumId: string): Promise<Album> {
      const [results] = await this.dataBase.selectQuery<AlbumDB>(
         `SELECT * FROM album WHERE album_id = ?`,
         [albumId],
      );
      return this.adapter.adaptToModel(results, this.emptyAlbum);
   }

   public async getAllByArtist(artistId: string): Promise<Album[]> {
      const results = await this.dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album al left join album_artist alar on al.album_id = alar.album_id
         WHERE artist_id = ?`,
         [artistId],
      );
      return this.adapter.adaptListToModel(results, this.emptyAlbum);
   }

   // hace falta que sea async?
   // !! Revisar
   public async create(album: Album): Promise<void> {
      const albumDB = this.adapter.adaptToDB(album, this.emptyDBAlbum);
      await this.dataBase.insertQuery('album', [albumDB]);
   }
}
