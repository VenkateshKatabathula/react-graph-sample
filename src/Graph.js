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
        this.createGraph();
    }

    createGraph() {
        let canvasContext = this.refs[this.props.name].getContext('2d'), maxIterations = 25, currentIter = 0;
        this.clearAndDraw(canvasContext, maxIterations, currentIter);
    }

    clearAndDraw(canvasContext, maxIterations, currentIter) {
        let innerRadius = 45, outerRadius = 50, startAngle = 0, fullCircleAngle = 2 * Math.PI,
            currText = (currentIter * this.props.percentage / maxIterations),
            currAngle = (currText * fullCircleAngle) / 100;
        canvasContext.clearRect(0, 0, 400, 400);
        this.drawArc(canvasContext, 100, 100, outerRadius, startAngle, fullCircleAngle, null, "black");
        this.drawArc(canvasContext, 100, 100, innerRadius, startAngle, currAngle, currText);
        currentIter++;
        if (currentIter < maxIterations + 1) {
            setTimeout(() => {
                this.clearAndDraw(canvasContext, maxIterations, currentIter);
            },100);
        }
    }

    drawArc(context, xPos, yPos, radius, startAngle, endAngle, text, color) {
        context.beginPath();
        context.arc(xPos, yPos, radius, startAngle, endAngle);
        if (text) {
            context.fillText(text, xPos - 8, yPos + 10);
            context.font = "15px Arial";
        }
        context.strokeStyle = color ? color : this.props.color;
        context.stroke();
    }

    render() {
        let borderStyle = {border: "2px"}, //percentageStyle = {"marginLeft": "-100px"},
            nameStyle = {"marginLeft": "-86px"};
        return (
            <span>
                <canvas ref={this.props.name} width="300" height="150" style={borderStyle}></canvas>
                {/*<div style={percentageStyle}>{this.state.percentage}</div>*/}
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
