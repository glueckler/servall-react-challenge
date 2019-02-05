import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MPSearch from './MP/MPSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dean's MP discovery</h1>
        </header>
        <MPSearch />
      </div>
    );
  }
}

export default App;
