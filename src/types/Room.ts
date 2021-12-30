export interface Room {
    name: string;
    cover : string;
    colour: string;
    windows: Window[];
    walls: Wall[];
    door: Door;
    dimensions: Dimensions;
}

interface Dimensions {
    height: number;
    width: number;
}

interface Window {
    size: Dimensions;
    cost: number;
}

interface Door {
    size: Dimensions;
    cost: number;
}

interface Wall {
    size: Dimensions;
    hasWindow: boolean;
    hasDoor: boolean;
    name: string;
}