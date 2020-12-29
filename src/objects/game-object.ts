import { IMazeObject, MazeObject } from "./maze-object";

export interface IGameObject {
    avatar: IMazeObject;
    trees: IMazeObject[];
}

export class GameObject implements IGameObject {
    avatar: MazeObject;
    trees: MazeObject[] = [];

    constructor(cellSize = 10) {
        this.avatar = new MazeObject(0, 0, cellSize, cellSize);
    }
}

export default GameObject;