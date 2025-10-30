import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  state = {
    timerIDs: []  // ← Changed from timerIds to timerIDs
  };

  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.random()]
    }));
  };

  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div>
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.state.timerIDs.map(id => (
            <Timer key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;