import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  handleIncrementButtonClick = () => {
    this.setState({counter: this.state.counter + 1});
  };

  handleDecrementButtonClick = () => {
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter -1});
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button data-test="increment-button" onClick={this.handleIncrementButtonClick}>Increment counter</button>
        <button data-test="decrement-button" onClick={this.handleDecrementButtonClick}>Decrement counter</button>
      </div>
    );
  }
}

export default App;