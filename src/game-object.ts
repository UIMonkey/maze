import { IMazeObject, MazeObject } from "./maze-object";

interface IBoard {
    width: number;
    height: number;
}

export const gridSectionWidth = 10;

export class GameObject {
    avatar: MazeObject = new MazeObject();
    trees: MazeObject[] = [];
    board: IBoard = {
        width: 20,
        height: 20
    }

}

export const checkBounds = (object: IMazeObject): void => {
    if (object.xPos < 0) {
        object.xPos = 0;
    } else if (object.xPos > 90) {
        object.xPos = 90;
    }

    if (object.yPos < 0) {
        object.yPos = 0;
    } else if (object.yPos > 90) {
        object.yPos = 90;
    }
}

export default GameObject;