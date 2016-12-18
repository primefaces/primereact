import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InputTextDemo} from './showcase/inputtext/InputTextDemo';
import {Router, Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <Route path="/inputtext" component={InputTextDemo} />
      </Route>
    </Router>,
  document.getElementById('root')
);
