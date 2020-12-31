import { getImageFromType } from "../utils";

var mazeObjectId = 1;

export enum ObjectType {
    Avatar,
    Tree,
    Bird,
    Cake
}

export interface IMazeObject {
    xPos: number;
    yPos: number;
    height: number;
    width: number;
    id: number;
    image: string;
    type: ObjectType;
}

export class MazeObject {
    xPos = 0;
    yPos = 0;
    height = 10;
    width = 10;
    image = '';
    id = 0;
    type = ObjectType.Tree;

    constructor(xPos = 0, yPos = 0, height = 10, width = 10, type = ObjectType.Tree) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        this.width = width;
        this.type = type;
        this.id = ++mazeObjectId;
        this.image = getImageFromType(this.type);
    }
}