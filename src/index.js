import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AccordionDemo} from './showcase/accordion/AccordionDemo';
import {ButtonDemo} from './showcase/button/ButtonDemo';
import {CheckboxDemo} from './showcase/checkbox/CheckboxDemo';
import {DialogDemo} from './showcase/dialog/DialogDemo';
import {DropdownDemo} from './showcase/dropdown/DropdownDemo';
import {FieldsetDemo} from './showcase/fieldset/FieldsetDemo';
import {GridDemo} from './showcase/grid/GridDemo';
import {GrowlDemo} from './showcase/growl/GrowlDemo';
import {InputTextDemo} from './showcase/inputtext/InputTextDemo';
import {InputTextareaDemo} from './showcase/inputtextarea/InputTextareaDemo';
import {ListboxDemo} from './showcase/listbox/ListboxDemo';
import {MessagesDemo} from './showcase/messages/MessagesDemo';
import {MultiSelectDemo} from './showcase/multiselect/MultiSelectDemo';
import {PanelDemo} from './showcase/panel/PanelDemo';
import {RadioButtonDemo} from './showcase/radiobutton/RadioButtonDemo';
import {TabViewDemo} from './showcase/tabview/TabViewDemo';
import {ToggleButtonDemo} from './showcase/togglebutton/ToggleButtonDemo';
import {SelectButtonDemo} from './showcase/selectbutton/SelectButtonDemo';
import {InputSwitchDemo} from './showcase/inputswitch/InputSwitchDemo';
import {Router, Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/accordion" component={AccordionDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/checkbox" component={CheckboxDemo} />
            <Route path="/dialog" component={DialogDemo} />
            <Route path="/dropdown" component={DropdownDemo} />
            <Route path="/grid" component={GridDemo} />
            <Route path="/growl" component={GrowlDemo} />
            <Route path="/fieldset" component={FieldsetDemo} />
            <Route path="/inputtext" component={InputTextDemo} />
            <Route path="/inputtextarea" component={InputTextareaDemo} />
            <Route path="/listbox" component={ListboxDemo} />
            <Route path="/messages" component={MessagesDemo} />
            <Route path="/multiselect" component={MultiSelectDemo} />
            <Route path="/panel" component={PanelDemo} />
            <Route path="/radiobutton" component={RadioButtonDemo} />
            <Route path="/tabview" component={TabViewDemo} />
            <Route path="/togglebutton" component={ToggleButtonDemo} />
            <Route path="/selectbutton" component={SelectButtonDemo} />
            <Route path="/inputswitch" component={InputSwitchDemo} />
        </Route>
    </Router>,
    document.getElementById('root')
);
