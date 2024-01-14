export class ArtistService {
   public static async getById(artistId: string) {
      return `get Artist ${artistId}`;
   }

   public static async getDiscography(artistId: string) {
      return `get Discography of ${artistId}`;
   }

   public static async getPlaylists(artistId: string) {
      return `get Playlists of Artist ${artistId}`;
   }
}
