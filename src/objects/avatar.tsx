import React from "react";
import './avatar.css';
import { IMazeObject } from "./maze-object";

export class Avatar extends React.Component<IMazeObject> {
    render() {
        let top = this.props.yPos + '%';
        let left = this.props.xPos + '%';
        let height = this.props.height + '%';
        let width = this.props.width + '%';
        return (
            <div className="avatar" style={{top, left, height, width}}></div>
        );
    } 
}

export default Avatar;