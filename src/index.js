import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InputTextDemo} from './showcase/inputtext/InputTextDemo';
import {PanelDemo} from './showcase/panel/PanelDemo';
import {TabViewDemo} from './showcase/tabview/TabViewDemo';
import {Router, Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <Route path="/inputtext" component={InputTextDemo} />
          <Route path="/panel" component={PanelDemo} />
          <Route path="/tabview" component={TabViewDemo} />
      </Route>
    </Router>,
    document.getElementById('root')
);
