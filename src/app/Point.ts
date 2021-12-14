export interface Point {
    x: number;
    y: number;
    hit: boolean;
}

export interface ExtendedPoint extends Point {
    date: string;
    duration: string;
    radius: number;
}