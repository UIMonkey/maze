import React, { useState } from 'react';
import MazeEntity from './objects/object';
import { IMazeObject, MazeObject, ObjectType } from './objects/maze-object';
import { boardSizePercentage, checkBounds, gridSectionWidthPercentage, maxBoardSize, cellSize, generateStaticObjects as generateTrees, cellsPerRow } from './utils';
import './game.css';
import PlayAgain from './play-again';

export const Game = () => {

    const initialAvatar = new MazeObject(0, 0, cellSize, cellSize, ObjectType.Avatar);
    const initialCake = new MazeObject(maxBoardSize, maxBoardSize, cellSize, cellSize, ObjectType.Cake);
    // Set up the state
    const [avatar, setAvatar] = useState(initialAvatar);
    const [trees, setTrees] = useState(generateTrees<IMazeObject>(cellsPerRow));
    const [cake] = useState(initialCake);

    const gameIsDone = (avatar.xPos === maxBoardSize && avatar.yPos === maxBoardSize);
    const size = boardSizePercentage + '%';

    // Reset the game back to the initial state
    const resetGame = () => {
        setAvatar(initialAvatar);
        setTrees(generateTrees<IMazeObject>(cellsPerRow));
    };

    /**
* Control the player direction from the user input
* @param e 
*/
    const handleInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
        let newAvatar = { ...avatar };
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
                newAvatar.yPos = avatar.yPos - gridSectionWidthPercentage;
                break;
            case 'ArrowDown':
            case 's':
                newAvatar.yPos = avatar.yPos + gridSectionWidthPercentage;
                break;
            case 'ArrowLeft':
            case 'a':
                newAvatar.xPos = avatar.xPos - gridSectionWidthPercentage;
                break;
            case 'ArrowRight':
            case 'd':
                newAvatar.xPos = avatar.xPos + gridSectionWidthPercentage;
                break;
            default:
                console.log('Try again!');
        }
        // Check for the boundaries on the board
        checkBounds(newAvatar);
        // Check for clash with a tree. If movement is onto a tree, then player cannot move there so do not reposition.
        if (!trees.find((tree: IMazeObject) => tree.xPos === newAvatar.xPos && tree.yPos === newAvatar.yPos)) {
            setAvatar(newAvatar);
        }
    }

    return (
        <div className="grid-container"
            onKeyDown={handleInput}
            tabIndex={-1}
            style={{ height: size, width: size }}
        >
            { gameIsDone ? <PlayAgain onClick={resetGame}></PlayAgain> : undefined}
            {trees.map((tree: IMazeObject) => (
                <MazeEntity key={tree.id} {...tree} ></MazeEntity>
            ))}
            <MazeEntity key={'avatar'} {...avatar}></MazeEntity>
            <MazeEntity key={'cake'} {...cake}></MazeEntity>
        </div>
    )
}

export default Game;