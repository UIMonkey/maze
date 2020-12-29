import React from "react";
import './avatar.css';
import { IMazeObject } from "./maze-object";

export class Avatar extends React.Component<IMazeObject> {
    render() {
        let top = this.props.yPos + '%';
        let left = this.props.xPos + '%';
        return (
            <div className="avatar" style={{top, left}}></div>
        );
    } 
}

export default Avatar;