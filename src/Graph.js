import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Graph extends Component {
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
        let x1 = 100, y1 = 75;
        let angle = (this.props.percentage / 100) * 2 * Math.PI;
        innerCanvasContext.arc(x1, y1, 40, 0, angle);
        innerCanvasContext.strokeStyle = this.props.color;
        // ctx.arcTo(x1, y1, x2, y2, radius);
        innerCanvasContext.stroke();
        // this.strokeEvent(ctx, x1, y1, x2, y2, radius, seconds, 3);
    }

    render() {
        let borderStyle = {border: "2px"};
        return (
            <span>
                <span>{this.props.percentage}</span>
                <canvas ref="canvas" width="300" height="150" style={borderStyle}></canvas>
            </span>
        );
    }

    /*strokeEvent(ctx, x1, y1, x2, y2, radius, seconds, turn) {
     window.setTimeout(() => {
     ctx.restore();
     console.log(turn);
     console.log('filling');
     x1 = x2;
     y1 = y2;
     x2 += 50;
     y2 += 50;
     ctx.strokeStyle = this.getColor();
     ctx.arcTo(x1, y1, x2, y2, radius);

     ctx.stroke();
     if (--turn !== 0) this.strokeEvent(ctx, x1, y1, x2, y2, radius, seconds, turn);
     }, seconds);
     }*/

}
Graph.propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};
