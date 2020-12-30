var mazeObjectId = 1;

export interface IMazeObject {
    xPos: number;
    yPos: number;
    height: number;
    width: number;
    id: number;
    image: string;
}

export class MazeObject {
    xPos = 0;
    yPos = 0;
    height = 10;
    width = 10;
    image = '';
    id = 0;

    constructor(xPos = 0, yPos = 0, height = 10, width = 10, image = '') {
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        this.width = width;
        this.image = image;
        this.id = ++mazeObjectId;
    }
}