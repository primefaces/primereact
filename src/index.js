import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AccordionDemo} from './showcase/accordion/AccordionDemo';
import {ButtonDemo} from './showcase/button/ButtonDemo';
import {CheckboxDemo} from './showcase/checkbox/CheckboxDemo';
import {DialogDemo} from './showcase/dialog/DialogDemo';
import {FieldsetDemo} from './showcase/fieldset/FieldsetDemo';
import {GridDemo} from './showcase/grid/GridDemo';
import {InputTextDemo} from './showcase/inputtext/InputTextDemo';
import {InputTextareaDemo} from './showcase/inputtextarea/InputTextareaDemo';
import {ListboxDemo} from './showcase/listbox/ListboxDemo';
import {PanelDemo} from './showcase/panel/PanelDemo';
import {RadioButtonDemo} from './showcase/radiobutton/RadioButtonDemo';
import {TabViewDemo} from './showcase/tabview/TabViewDemo';
import {ToggleButtonDemo} from './showcase/togglebutton/ToggleButtonDemo';
import {Router, Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/accordion" component={AccordionDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/checkbox" component={CheckboxDemo} />
            <Route path="/dialog" component={DialogDemo} />
            <Route path="/grid" component={GridDemo} />
            <Route path="/fieldset" component={FieldsetDemo} />
            <Route path="/inputtext" component={InputTextDemo} />
            <Route path="/inputtextarea" component={InputTextareaDemo} />
            <Route path="/listbox" component={ListboxDemo} />
            <Route path="/panel" component={PanelDemo} />
            <Route path="/radiobutton" component={RadioButtonDemo} />
            <Route path="/tabview" component={TabViewDemo} />
            <Route path="/togglebutton" component={ToggleButtonDemo} />
        </Route>
    </Router>,
    document.getElementById('root')
);
