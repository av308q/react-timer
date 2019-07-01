import React, { Component } from "react";
import Button from "./button";

import "./App.css";




class App extends Component {
  state = {
    timer: 0
  };

  countdownInterval = 0;

  addTime = () => {
    let newTime = this.state.timer + 1;
    this.setState({
      timer: newTime
    });
  };

  startTimer = () => {
    this.countDownInterval = setInterval(this.addTime, 1000);
  };

  stopTimer = () => {
    clearInterval(this.countDownInterval);
  };

  resetTimer = () => {
    clearInterval(this.countDownInterval);
    this.setState({
      timer: 0
    });
  };

  render() {
    const { timer } = this.state;
    return (
      <div className="App">
        <p>Timer: {timer}</p>
        <Button clickHandler={this.startTimer} name={"StartTimer"} />
        <Button clickHandler={this.stopTimer} name={"StopTimer"} />
        <Button clickHandler={this.resetTimer} name={"Reset"}/>
       </div>
    );
  }
}

export default App;
