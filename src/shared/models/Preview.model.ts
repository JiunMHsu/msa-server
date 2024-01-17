export type TagType = 'artist' | 'album' | 'user';

export interface Tag {
   id?: string;
   name: string;
   image?: string;
   type: TagType;
}

export type PreviewType = 'artist' | 'album' | 'playlist';

export interface Preview {
   id: string;
   title: string;
   tag: Tag;
   image: string;
   type: PreviewType;
}
