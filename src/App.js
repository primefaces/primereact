import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {InputText} from './components/inputtext/InputText';
import {Panel} from './components/panel/Panel';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PrimeReact</h2>
        </div>
        <div className="Content">
            <h2>InputText</h2>
            <InputText />
            
            <h2>Panel</h2>            
            <Panel header="Godfather">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding. 
                His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business. 
                Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head 
                of the family, kind and benevolent to those who give respect, 
                but given to ruthless violence whenever anything stands against the good of the family.
            </Panel>
        </div>
      </div>
    );
  }
  
}

export default App;
