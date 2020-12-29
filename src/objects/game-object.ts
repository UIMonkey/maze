import { IMazeObject, MazeObject } from "./maze-object";

export interface IGameObject {
    avatar: IMazeObject;
    trees: IMazeObject[];
}

export class GameObject implements IGameObject {
    avatar: MazeObject = new MazeObject();
    trees: MazeObject[] = [];
}

export default GameObject;