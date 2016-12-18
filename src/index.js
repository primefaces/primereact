import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ButtonDemo} from './showcase/button/ButtonDemo';
import {InputTextDemo} from './showcase/inputtext/InputTextDemo';
import {InputTextareaDemo} from './showcase/inputtextarea/InputTextareaDemo';
import {PanelDemo} from './showcase/panel/PanelDemo';
import {TabViewDemo} from './showcase/tabview/TabViewDemo';
import {Router, Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/button" component={ButtonDemo} />
            <Route path="/inputtext" component={InputTextDemo} />
            <Route path="/inputtextarea" component={InputTextareaDemo} />
            <Route path="/panel" component={PanelDemo} />
            <Route path="/tabview" component={TabViewDemo} />
        </Route>
    </Router>,
    document.getElementById('root')
);
