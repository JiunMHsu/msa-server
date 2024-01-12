export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

export class AlbumDB {
   album_id!: string;
   title!: string;
   disc_type!: DiskType;
   cover_art!: string;
   label!: string;
   release_date!: string;
   duration!: string;

   public static toAlbum(albumDB: AlbumDB): Album {
      const album = new Album();
      album.albumId = albumDB.album_id;
      album.title = albumDB.title;
      album.discType = albumDB.disc_type as DiskType;
      album.coverArt = albumDB.cover_art;
      album.label = albumDB.label;
      album.releaseDate = albumDB.release_date;
      album.duration = albumDB.duration;
      return album;
   }

   public static toAlbums(albumsDB: AlbumDB[]): Album[] {
      return albumsDB.map(albumDB => this.toAlbum(albumDB));
   }
}

export class Album {
   albumId!: string;
   title!: string;
   discType!: DiskType;
   coverArt!: string;
   label!: string;
   releaseDate!: string;
   duration!: string;

   // public static toAlbumDB(album: Album): AlbumDB {
   //    const albumDB = new AlbumDB();
   //    albumDB.album_id = album.albumId;
   //    albumDB.title = album.title;
   //    albumDB.disc_type = album.discType;
   //    albumDB.cover_art = album.coverArt;
   //    albumDB.label = album.label;
   //    albumDB.release_date = album.releaseDate;
   //    albumDB.duration = album.duration;
   //    return albumDB;
   // }

   // public static toAlbumsDB(albums: Album[]): AlbumDB[] {
   //    return albums.map(album => this.toAlbumDB(album));
   // }
}
