import './object.css';
import { IMazeObject } from "./maze-object";

const MazeEntity = (props: IMazeObject) => {
    let top = props.yPos + '%';
    let left = props.xPos + '%';
    let height = props.height + '%';
    let width = props.width + '%';
    let backgroundImage = `url(${process.env.PUBLIC_URL + props.image})`;
    return (
        <div className="object" style={{
            top,
            left,
            height,
            width,
            backgroundImage
        }}></div>
    );
};

export default MazeEntity;