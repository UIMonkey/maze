import React from 'react';
import MazeEntity from './objects/object';
import GameObject from './objects/game-object';
import { IMazeObject, MazeObject } from './objects/maze-object';
import { boardSizePercentage, checkBounds, gridSectionWidthPercentage, maxBoardSize, cellSize, generateStaticObjects, cellsPerRow } from './utils';
import './game.css';
import PlayAgain from './play-again';

export class Game extends React.Component {

    state = {
        game: new GameObject(cellSize),
        avatar: new MazeObject(0, 0, cellSize, cellSize, './ant1.png'),
        trees: generateStaticObjects<IMazeObject>(cellsPerRow),
        cake: new MazeObject(maxBoardSize, maxBoardSize, cellSize, cellSize, './cake.png')
    }

    constructor(props: any) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.resetGame = this.resetGame.bind(this);
        ;
    }

    /**
     * Control the player direction from the user input
     * @param e 
     */
    handleInput(e: React.KeyboardEvent<HTMLDivElement>) {
        let newAvatar = { ...this.state.avatar };
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
                newAvatar.yPos = this.state.avatar.yPos - gridSectionWidthPercentage;
                break;
            case 'ArrowDown':
            case 's':
                newAvatar.yPos = this.state.avatar.yPos + gridSectionWidthPercentage;
                break;
            case 'ArrowLeft':
            case 'a':
                newAvatar.xPos = this.state.avatar.xPos - gridSectionWidthPercentage;
                break;
            case 'ArrowRight':
            case 'd':
                newAvatar.xPos = this.state.avatar.xPos + gridSectionWidthPercentage;
                break;
            default:
                console.log('Try again!');
        }
        checkBounds(newAvatar);
        this.setState({ avatar: newAvatar })
    }

    resetGame() {
        console.log("Reset Game");
        this.setState({ game: new GameObject() });
    }

    render() {
        const gameIsDone = (this.state.avatar.xPos === maxBoardSize && this.state.avatar.yPos === maxBoardSize);
        const size = boardSizePercentage + '%';
        return (
            <div className="grid-container"
                onKeyDown={this.handleInput}
                tabIndex={-1}
                style={{ height: size, width: size }}
            >
                { gameIsDone ? <PlayAgain onClick={this.resetGame}></PlayAgain> : undefined}
                {this.state.trees.map((tree: IMazeObject) => (
                    <MazeEntity key={tree.id} {...tree} ></MazeEntity>
                ))}
                <MazeEntity key={'avatar'} {...this.state.avatar}></MazeEntity>
                <MazeEntity key={'cake'} {...this.state.cake}></MazeEntity>
            </div>
        )
    }
}

export default Game;