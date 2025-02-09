import { PlaySourceType } from '../constants/play-source-type.enum';

export class PlaySource {
    /**
     * The id of the play source.
     * Could be the id of the artist, album, or playlist.
     */
    public id: string;

    public type: PlaySourceType;

    /**
     * The label of the play source.
     * Could be the name of the artist, album, or playlist.
     */
    public label: string;
}
