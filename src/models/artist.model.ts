// artist interface bases on json
export interface Artist {
   artistId: string;
   verified: boolean;
   artistName: string;
   iconPhoto: string;
   profileBanner: string;
   followers: number;
   monthlyListeners: number;
   popular: Array<string>;
   discography: Array<string>;
   about: About;
}
export interface About {
   images: Array<string>;
   description: string;
}

export class _Artist {
   // private _info_: Artist = {} as Artist;
   private _info: Artist = {
      artistId: '',
      verified: false,
      artistName: '',
      iconPhoto: '',
      profileBanner: '',
      followers: 0,
      monthlyListeners: 0,
      popular: [],
      discography: [],
      about: {
         images: [],
         description: '',
      },
   };

   constructor(id?: string) {}

   public get info(): Object {
      return this._info;
   }

   // public getProp(key: string):
}
