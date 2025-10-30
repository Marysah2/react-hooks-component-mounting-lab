import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0
  };

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  // Start interval when component mounts
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // Clean up interval when component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer">
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Timer;