import React, { Component } from 'react';
import PiggyBank from './PiggyBank';
import './App.css';

class App extends Component {

  render() {
    return (
      <PiggyBank title="Savings Pig" amount={10}/>
    );
  }
}

export default App;
