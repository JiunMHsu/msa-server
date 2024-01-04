export type Camelize<T extends string> = T extends `${infer A}_${infer B}`
   ? `${A}${Camelize<Capitalize<B>>}`
   : T;

export type CamelizeKeys<T extends object> = {
   [key in keyof T as key extends string
      ? Camelize<key>
      : key]: T[key] extends object ? CamelizeKeys<T[key]> : T[key];
};

// trackId => track_id

export type Snakeize<T extends string> = T extends `${infer A}${infer B}`
   ? `${A}_${Snakeize<B>}`
   : T;

type Track_ = {
   trackId: string;
   albumId: string;
   title: string;
   discNumber: number;
   trackNumber: number;
   duration: string;
   isExplicit: boolean;
   plays: number;
   sourceFile: string;
};

type S = Snakeize<'isExplicit'>;

type TrackDB = {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: Date; // o string
   is_explicit: boolean;
   plays: number;
   source_file: string;
};

type Track = CamelizeKeys<TrackDB>;
