import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jenkins X with React</h1>
        </header>
      </div>
    );
  }
}

export default App;
