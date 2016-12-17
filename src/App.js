import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {InputText} from './components/inputtext/InputText';
import {Panel} from './components/panel/Panel';
import {TabPanel,TabView} from './components/tabview/TabView';

class App extends Component {
        
    constructor() {
        super();

        this.handleTabChange = this.handleTabChange.bind(this);
    }
        
  handleTabChange(e) {
      console.log('Tab Changed ' + e.index);
  }
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PrimeReact</h2>
        </div>
        <div className="Content">
            <h2>InputText</h2>
            <InputText placeholder="Prime"/>
            
            <h2>Panel</h2>            
            <Panel header="Godfather">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding. 
                His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business. 
                Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head 
                of the family, kind and benevolent to those who give respect, 
                but given to ruthless violence whenever anything stands against the good of the family.
            </Panel>
            
            <br />
            
            <Panel header={<div><span>Custom Content</span><button type="button" className="ui-button ui-state-default ui-button-text-only ui-corner-all" style={{float:'right'}}><span className="ui-button-text">Close</span></button></div>}>
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding. 
                His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business. 
                Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head 
                of the family, kind and benevolent to those who give respect, 
                but given to ruthless violence whenever anything stands against the good of the family.
            </Panel>
            
            <h2>TabView</h2>            
            <TabView onTabChange={this.handleTabChange}>
                <TabPanel header="Godfather I">
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding. 
                    His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business. 
                    Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head 
                    of the family, kind and benevolent to those who give respect, 
                    but given to ruthless violence whenever anything stands against the good of the family.
                </TabPanel>
                <TabPanel header="Godfather II">
                    Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young 
                    Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of 
                    the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. 
                    Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand 
                    Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                </TabPanel>
                <TabPanel header="Godfather III">
                    After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this 
                    third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, 
                    now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                </TabPanel>
                
            </TabView>
        </div>
      </div>
    );
  }
  
}

export default App;
