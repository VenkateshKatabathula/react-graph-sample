import React, {Component} from "react";
import "./App.css";
import Graph from "./Graph";
class App extends Component {
    getRandoms() {
        let randomPercentages = {
            25: {color: "#FF0000", name: "New users"},
            50: {color: "#a212ff", name: "Popularity"},
            75: {color: "#ff5108", name: "User Satisfaction"}
        };
        let graphs = [];
        for (let currPercentage in randomPercentages) {
            graphs.push(<Graph key={currPercentage} percentage={parseInt(currPercentage)}
                               color={randomPercentages[currPercentage].color}
                               name={randomPercentages[currPercentage].name}/>);
        }
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
