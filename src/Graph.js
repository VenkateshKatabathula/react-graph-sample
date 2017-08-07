import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Graph extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.createGraph();
    }

    createGraph() {
        let canvasContext = this.refs[this.props.name].getContext('2d'), maxIterations = 25, currentIteration = 0;
        this.clearAndDraw(canvasContext, maxIterations, currentIteration);
    }

    clearAndDraw(canvasContext, maxIterations, currentIteration) {
        let innerRadius = 45, outerRadius = 50, startAngle = 0, fullCircleAngle = 2 * Math.PI,
            currText = (currentIteration * this.props.percentage / maxIterations),
            currAngle = (currText * fullCircleAngle) / 100;
        canvasContext.clearRect(0, 0, 400, 400);
        this.drawArc(canvasContext, 100, 100, outerRadius, startAngle, fullCircleAngle, null, "black");
        this.drawArc(canvasContext, 100, 100, innerRadius, startAngle, currAngle, currText);
        currentIteration++;
        if (currentIteration < maxIterations + 1) {
            setTimeout(() => {
                this.clearAndDraw(canvasContext, maxIterations, currentIteration);
            }, 100);
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
        return (
            <span>
                <canvas ref={this.props.name} width="200" height="150"></canvas>
                <div>{this.props.name}</div>
            </span>
        );
    }
}
Graph.propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
