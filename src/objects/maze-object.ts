var mazeObjectId = 1;

export interface IMazeObject {
    xPos: number;
    yPos: number;
    height: number;
    width: number;
    id: number;
}

export class MazeObject {
    xPos = 0;
    yPos = 0;
    height = 10;
    width = 10;
    id = 0;

    constructor(xPos = 0, yPos = 0, height = 10, width = 10) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        this.width = width;
        this.id = ++mazeObjectId;
    }
}