export interface IMazeObject {
    xPos: number;
    yPos: number;
}

export class MazeObject {
    xPos = 0;
    yPos = 0;

    constructor(xPos=0, yPos=0) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}