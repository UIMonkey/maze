export interface IMazeObject {
    xPos: number;
    yPos: number;
    height: number;
    width: number;
}

export class MazeObject {
    xPos = 0;
    yPos = 0;
    height = 10;
    width = 10;

    constructor(xPos = 0, yPos = 0, height = 10, width = 10) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        this.width = width;
    }
}