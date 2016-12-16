import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {InputText} from './components/inputtext/InputText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PrimeNG</h2>
        </div>
        <div className="Content">
            <h2>InputText</h2>
            <InputText />
        </div>
      </div>
    );
  }
}

export default App;
