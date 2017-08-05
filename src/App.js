import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph';
class App extends Component {
    getRandoms() {
        let randomPercentages = [], tempSum = 0;
        /*let noOfGraphs = 3, lastGraphIndex = noOfGraphs - 1;
         for (let currentIter = 0; currentIter < noOfGraphs; currentIter++) {
         let currRandom = ((currentIter === lastGraphIndex) ? 100 - tempSum
         : parseInt(Math.random() * (100 - tempSum)));
         tempSum += currRandom;
         randomPercentages.push(currRandom);
         }*/
        randomPercentages = [25, 50, 75, 100];
        let graphs = [];
        for (let i in randomPercentages) {
            console.log(i);
            graphs.push(<Graph key={i} percentage={randomPercentages[i]}/>);
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
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                {this.getRandoms()}
            </div>
        );
    }
}

export default App;
