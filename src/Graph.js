import React, {Component} from "react";

export default class Graph extends Component {
    componentDidMount() {
        console.log('this.props :: ', this.props);
        this.updateCanvas();
    }

    updateCanvas() {
        let ctx = this.refs.canvas.getContext("2d");
        let x1 = 100, y1 = 100, x2 = 100, y2 = 150, radius = 50, seconds = 2000;
        ctx.strokeStyle = this.getRandomColor();
        ctx.arcTo(x1, y1, x2, y2, radius);
        ctx.stroke();
        this.strokeEvent(ctx, x1, y1, x2, y2, radius, seconds, 3);
    }

    strokeEvent(ctx, x1, y1, x2, y2, radius, seconds, turn) {
        window.setTimeout(() => {
            ctx.restore();
            console.log(turn);
            console.log('filling');
            x1 = x2;
            y1 = y2;
            x2 += 50;
            y2 += 50;
            ctx.strokeStyle = this.getRandomColor();
            ctx.arcTo(x1, y1, x2, y2, radius);

            ctx.stroke();
            if (--turn !== 0) this.strokeEvent(ctx, x1, y1, x2, y2, radius, seconds, turn);
        }, seconds);
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <canvas ref="canvas" width={300} height={300}></canvas>
        );
    }
}
