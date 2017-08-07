import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 0
        };
    }

    componentDidMount() {
        this.draw();
    }

    draw() {
        let outerCanvasContext = this.refs.canvas.getContext("2d");
        outerCanvasContext.beginPath();
        outerCanvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
        outerCanvasContext.strokeStyle = "#000000";
        outerCanvasContext.stroke();
        outerCanvasContext.save();
        let innerCanvasContext = this.refs.canvas.getContext("2d");
        innerCanvasContext.beginPath();
        let divideIntoParts = 5, currDivision = 0;
        let x1 = 100, y1 = 75;
        this.update(currDivision, divideIntoParts, innerCanvasContext, x1, y1);
    }

    update(currIteration, divideIntoParts, innerCanvasContext, x1, y1) {
        if (currIteration < divideIntoParts) {
            let angle = (this.props.percentage / 100) * 2 * (currIteration + 1) / divideIntoParts * Math.PI;
            console.log('currDivision :: ', currIteration);
            innerCanvasContext.clearRect(0, 0, innerCanvasContext.width, innerCanvasContext.height);
            innerCanvasContext.arc(x1, y1, 45, 0, angle);
            innerCanvasContext.strokeStyle = this.props.color;
            innerCanvasContext.font = "15px Arial";
            // innerCanvasContext.fillText(this.state.percentage, x1, y1);
            innerCanvasContext.closePath();
            innerCanvasContext.stroke();
            this.setState({percentage: (currIteration + 1) / divideIntoParts * this.props.percentage});
            setTimeout(() => {
                this.update(++currIteration, divideIntoParts, innerCanvasContext, x1, y1, this.state.percentage);
            }, 1000);
        }
    }

    render() {
        let borderStyle = {border: "2px"}, percentageStyle = {"marginLeft": "-100px"},
            nameStyle = {"marginLeft": "-86px"};
        return (
            <span>
                <canvas ref="canvas" width="300" height="150" style={borderStyle}></canvas>
                <div style={percentageStyle}>{this.state.percentage}</div>
                <div style={nameStyle}>{this.props.name}</div>
            </span>
        );
    }
}
Graph.propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
