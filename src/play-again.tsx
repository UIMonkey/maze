import './play-again.css';

export const PlayAgain = (props: any) => (
    <div className="play-again">
        <button onClick={props.onClick}>Play Again</button>
    </div>
)

export default PlayAgain;