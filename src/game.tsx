import React from 'react';
import Avatar from './objects/avatar';
import GameObject from './objects/game-object';
import { boardSizePercentage, checkBounds, gridSectionWidthPercentage, maxBoardSize } from './utils';
import './game.css';
import PlayAgain from './play-again';
import Tree from './objects/tree';

export class Game extends React.Component {

    state = {
        game: new GameObject()
    }

    constructor(props: any) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    /**
     * Control the player direction from the user input
     * @param e 
     */
    handleInput(e: React.KeyboardEvent<HTMLDivElement>) {
        let newGame = { ...this.state.game };
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
                newGame.avatar.yPos = this.state.game.avatar.yPos - gridSectionWidthPercentage;
                break;
            case 'ArrowDown':
            case 's':
                newGame.avatar.yPos = this.state.game.avatar.yPos + gridSectionWidthPercentage;
                break;
            case 'ArrowLeft':
            case 'a':
                newGame.avatar.xPos = this.state.game.avatar.xPos - gridSectionWidthPercentage;
                break;
            case 'ArrowRight':
            case 'd':
                newGame.avatar.xPos = this.state.game.avatar.xPos + gridSectionWidthPercentage;
                break;
            default:
                console.log('Try again!');
        }
        checkBounds(newGame.avatar);
        this.setState({ ...newGame })
    }

    resetGame() {
        console.log("Reset Game");
        this.setState({ game: new GameObject() });
    }

    render() {
        const gameIsDone = (this.state.game.avatar.xPos === maxBoardSize && this.state.game.avatar.yPos === maxBoardSize);
        const size = boardSizePercentage + '%';
        return (
            <div className="grid-container"
                onKeyDown={this.handleInput}
                tabIndex={-1}
                style={{ height: size, width: size }}
            >
                { gameIsDone ? <PlayAgain onClick={this.resetGame}></PlayAgain> : undefined}
                <Tree></Tree>
                <Avatar {...this.state.game.avatar}></Avatar>
            </div>
        )
    }
}

export default Game;