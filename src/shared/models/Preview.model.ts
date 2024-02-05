export type TagType = 'artist' | 'album' | 'user';

export class Tag {
   constructor(
      public readonly id: string,
      public readonly title: string,
      public readonly type: TagType,
      public readonly image?: string,
   ) {}
}

export type PreviewType = TagType | 'playlist';

export class Preview {
   constructor(
      public readonly id: string,
      public readonly title: string,
      public readonly description: any,
      public readonly image: string,
      public readonly type: PreviewType,
   ) {}
}
