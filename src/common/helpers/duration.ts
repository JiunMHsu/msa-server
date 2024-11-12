import { Column } from 'typeorm';

export class Duration {
    @Column('int', { name: 'seconds' })
    public seconds: number;

    @Column('int', { name: 'minutes' })
    public minutes: number;

    @Column('int', { name: 'hours' })
    public hours: number;

    public constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public toSeconds(): number {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    // TODO: revisar
    public static fromSeconds(seconds: number): Duration {
        const hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        const minutes = Math.floor(seconds / 60);
        seconds %= 60;
        return new Duration(hours, minutes, seconds);
    }

    public toString(): string {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    // TODO: unsafe
    public fromString(duration: string): void {
        const [hours, minutes, seconds] = duration.split(':');
        this.hours = parseInt(hours, 10);
        this.minutes = parseInt(minutes, 10);
        this.seconds = parseInt(seconds, 10);
    }
}
