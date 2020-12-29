import React from "react";
import { IMazeObject } from "./maze-object";
import './tree.css';

export class Tree extends React.Component<IMazeObject> {
    render() {
        let top = this.props.yPos + '%';
        let left = this.props.xPos + '%';
        let height = this.props.height + '%';
        let width = this.props.width + '%';
        return (
            <div className="object tree" style={{top, left, height, width}}></div>
        );
    } 
}

export default Tree;