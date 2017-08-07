import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph';
class App extends Component {
    getRandoms() {
        // let randomPercentages = [], tempSum = 0;
        // let noOfGraphs = 3, lastGraphIndex = noOfGraphs - 1;
        // for (let currentIter = 0; currentIter < noOfGraphs; currentIter++) {
        //     let currRandom = ((currentIter === lastGraphIndex) ? 100 - tempSum
        //         : parseInt(Math.random() * (100 - tempSum)));
        //     tempSum += currRandom;
        //     randomPercentages.push(currRandom);
        // }
        let randomPercentages = {
            25: {color: "#FF0000", name: "name 1"},
            50: {color: "#00FF00", name: "name 2"},
            75: {color: "#0000FF", name: "name 3"}
        };
        let graphs = [];
        for (let currPercentage in randomPercentages) {
            console.log('color : ', randomPercentages[currPercentage]);
            console.log('name : ', randomPercentages[currPercentage]);
            graphs.push(<Graph key={currPercentage} percentage={parseInt(currPercentage)}
                               color={randomPercentages[currPercentage].color}
                               name={randomPercentages[currPercentage].name}/>);
        }
        /*randomPercentages.map(randoms => {
         graphs.push(<Graph key={randoms} percentage={randoms}/>);
         });*/
        return graphs;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Analysis Reports</h2>
                </div>
                {this.getRandoms()}
            </div>
        );
    }
}

export default App;
