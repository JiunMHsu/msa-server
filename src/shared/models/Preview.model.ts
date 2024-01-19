export type TagType = 'artist' | 'album' | 'user';

export class Tag {
   id: string = '';
   title: string;
   image: string = '';
   type: TagType;

   constructor(title: string, type: TagType, id?: string, image?: string) {
      this.title = title;
      this.type = type;
      if (id) this.id = id;
      if (image) this.image = image;
   }
}

export type PreviewType = 'artist' | 'album' | 'playlist' | 'user';

export class Preview {
   id: string;
   title: string;
   tag: Tag;
   image: string;
   type: PreviewType;

   constructor(
      id: string,
      title: string,
      tag: Tag,
      image: string,
      type: PreviewType,
   ) {
      this.id = id;
      this.title = title;
      this.tag = tag;
      this.image = image;
      this.type = type;
   }
}
