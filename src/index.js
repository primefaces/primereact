import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AccordionDemo} from './showcase/accordion/AccordionDemo';
import {ButtonDemo} from './showcase/button/ButtonDemo';
import {CheckboxDemo} from './showcase/checkbox/CheckboxDemo';
import {ChipsDemo} from './showcase/chips/ChipsDemo';
import {CodeHighlightDemo} from './showcase/codehighlight/CodeHighlightDemo';
import {DialogDemo} from './showcase/dialog/DialogDemo';
import {DropdownDemo} from './showcase/dropdown/DropdownDemo';
import {FieldsetDemo} from './showcase/fieldset/FieldsetDemo';
import {FileUploadDemo} from './showcase/fileupload/FileUploadDemo';
import {GridDemo} from './showcase/grid/GridDemo';
import {GrowlDemo} from './showcase/growl/GrowlDemo';
import {InputTextDemo} from './showcase/inputtext/InputTextDemo';
import {InputTextareaDemo} from './showcase/inputtextarea/InputTextareaDemo';
import {ListboxDemo} from './showcase/listbox/ListboxDemo';
import {MessagesDemo} from './showcase/messages/MessagesDemo';
import {MultiSelectDemo} from './showcase/multiselect/MultiSelectDemo';
import {OverlayPanelDemo} from './showcase/overlaypanel/OverlayPanelDemo';
import {PanelDemo} from './showcase/panel/PanelDemo';
import {ProgressBarDemo} from './showcase/progressbar/ProgressBarDemo';
import {RadioButtonDemo} from './showcase/radiobutton/RadioButtonDemo';
import {TabViewDemo} from './showcase/tabview/TabViewDemo';
import {ToggleButtonDemo} from './showcase/togglebutton/ToggleButtonDemo';
import {SelectButtonDemo} from './showcase/selectbutton/SelectButtonDemo';
import {InputSwitchDemo} from './showcase/inputswitch/InputSwitchDemo';
import {SliderDemo} from './showcase/slider/SliderDemo';
import {SpinnerDemo} from './showcase/spinner/SpinnerDemo';
import {PieChartDemo} from './showcase/chart/PieChartDemo';
import {BarChartDemo} from './showcase/chart/BarChartDemo';
import {LineChartDemo} from './showcase/chart/LineChartDemo';
import {DoughnutChartDemo} from './showcase/chart/DoughnutChartDemo';
import {RadarChartDemo} from './showcase/chart/RadarChartDemo';
import {PolarAreaChartDemo} from './showcase/chart/PolarAreaChartDemo';
import {Router, Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/accordion" component={AccordionDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/checkbox" component={CheckboxDemo} />
            <Route path="/chips" component={ChipsDemo} />
            <Route path="/codehighlight" component={CodeHighlightDemo} />
            <Route path="/dialog" component={DialogDemo} />
            <Route path="/dropdown" component={DropdownDemo} />
            <Route path="/grid" component={GridDemo} />
            <Route path="/growl" component={GrowlDemo} />
            <Route path="/fieldset" component={FieldsetDemo} />
            <Route path="/fileupload" component={FileUploadDemo} />
            <Route path="/inputtext" component={InputTextDemo} />
            <Route path="/inputtextarea" component={InputTextareaDemo} />
            <Route path="/listbox" component={ListboxDemo} />
            <Route path="/messages" component={MessagesDemo} />
            <Route path="/multiselect" component={MultiSelectDemo} />
            <Route path="/overlaypanel" component={OverlayPanelDemo} />
            <Route path="/panel" component={PanelDemo} />
            <Route path="/progressbar" component={ProgressBarDemo} />
            <Route path="/radiobutton" component={RadioButtonDemo} />
            <Route path="/tabview" component={TabViewDemo} />
            <Route path="/togglebutton" component={ToggleButtonDemo} />
            <Route path="/selectbutton" component={SelectButtonDemo} />
            <Route path="/inputswitch" component={InputSwitchDemo} />
            <Route path="/slider" component={SliderDemo} />
            <Route path="/spinner" component={SpinnerDemo} />
            <Route path="/piechart" component={PieChartDemo} />
            <Route path="/doughnutchart" component={DoughnutChartDemo} />
            <Route path="/linechart" component={LineChartDemo} />
            <Route path="/barchart" component={BarChartDemo} />
            <Route path="/polarareachart" component={PolarAreaChartDemo} />
            <Route path="/radarchart" component={RadarChartDemo} />
        </Route>
    </Router>,
    document.getElementById('root')
);
