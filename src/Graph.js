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
            console.log('angle :: ', angle);
            innerCanvasContext.clearRect(0, 0, innerCanvasContext.width, innerCanvasContext.height);
            innerCanvasContext.arc(x1, y1, 45, 0, angle);
            innerCanvasContext.strokeStyle = this.props.color;
            innerCanvasContext.font = "15px Arial";
            innerCanvasContext.fillText(this.state.percentage, x1, y1);
            innerCanvasContext.closePath();
            innerCanvasContext.stroke();
            this.setState({percentage: (currIteration + 1) / divideIntoParts * this.props.percentage});
            setTimeout(() => {
                this.update(++currIteration, divideIntoParts, innerCanvasContext, x1, y1, this.state.percentage);
            }, 1000);
        }
    }

    render() {
        let borderStyle = {border: "2px"};
        return (
            <span>
                {/*<span>{this.state.percentage}</span>*/}
                <canvas ref="canvas" width="300" height="150" style={borderStyle}></canvas>
                <br />
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
