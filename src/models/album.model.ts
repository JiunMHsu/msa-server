enum DiscType {
   Single = 'single',
   ExtendedPlay = 'EP',
   Album = 'album',
   Mixtape = 'mixtape',
}

type DiscInfo = {
   id: string;
   title: string;
   type: DiscType;
   artist: string;
   label: string;
   release: Date;
   tracks: Array<string>;
   duration: string;
};

export class MusicDisc {
   private disc: DiscInfo;

   constructor(disc: DiscInfo) {
      this.disc = disc;
   }

   public get getDisc(): DiscInfo {
      return this.disc;
   }
}
