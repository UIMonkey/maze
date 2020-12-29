import { IMazeObject, MazeObject } from "./objects/maze-object";

export const boardSizePercentage = 80;
export const cellsPerRow = 10;
export const cellSize = boardSizePercentage / cellsPerRow;
export const maxBoardSize = boardSizePercentage - cellSize;
export const gridSectionWidthPercentage = Math.floor(boardSizePercentage / cellsPerRow);

export class GameObject {
    avatar: MazeObject = new MazeObject();
    trees: MazeObject[] = [];
}

export const checkBounds = (object: IMazeObject): void => {
    if (object.xPos < 0) {
        object.xPos = 0;
    } else if (object.xPos > (maxBoardSize)) {
        object.xPos = maxBoardSize;
    }

    if (object.yPos < 0) {
        object.yPos = 0;
    } else if (object.yPos > maxBoardSize) {
        object.yPos = maxBoardSize;
    }
}

export default GameObject;