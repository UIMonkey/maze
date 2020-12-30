import { IMazeObject, MazeObject } from "./objects/maze-object";

export const boardSizePercentage = 80;
export const cellsPerRow = 20;
export const cellSize = boardSizePercentage / cellsPerRow;
export const maxBoardSize = boardSizePercentage - cellSize;
export const gridSectionWidthPercentage = Math.floor(boardSizePercentage / cellsPerRow);

export const treeImage = 'tree.png';

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

export const generateStaticObjects = <T extends MazeObject>(cellsPerRow: number) => {
    // Total number of cells (assuming board is a square)
    let totalNumberOfCells = Math.pow(cellsPerRow, 2);

    // Generate trees based on the number of cells in the game
    let numberOfTrees = Math.floor(totalNumberOfCells / 20);

    // Generate a number of trees with unique positions
    let treesSet = new Set<string>();
    while (treesSet.size < numberOfTrees) {
        let randXCell = Math.floor(Math.random() * (cellsPerRow - 1));
        let randYCell = Math.floor(Math.random() * (cellsPerRow - 1));
        let xPos = cellSize * randXCell;
        let yPos = cellSize * randYCell;
        let tree = new MazeObject(xPos, yPos, cellSize, cellSize, treeImage);
        treesSet.add(JSON.stringify(tree));
    }
    
    // Convert the set of json strings to objects
    let trees: T[] = [];
    treesSet.forEach((treeString: string) => {
        trees.push(JSON.parse(treeString));
    });

    return trees;
}