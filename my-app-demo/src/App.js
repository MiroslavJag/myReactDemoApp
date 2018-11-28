import React, { Component } from 'react';

import List from '../src/containers/List/List';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div data-test="component-app" className="wrapper-app">
        <h1 data-test="counter-display">The counter is currently: {this.state.counter}</h1>
        <button 
          data-test="increment-button" 
          className="btnClass"
          onClick={() => this.setState({counter: this.state.counter + 1})}>
          Increment counter
        </button>
        <List />
      </div>
    );
  }
}

export default App;
