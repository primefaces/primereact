import React, {Component} from 'react';
import {Link} from 'react-router';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DropdownDemo extends Component {

    constructor() {
        super();
        this.state = {city: null, car: null, car2: 'BMW'};
        this.onCityChange = this.onCityChange.bind(this);
        this.onCarChange = this.onCarChange.bind(this);
        this.onCarChange2 = this.onCarChange2.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    onCarChange(e) {
        this.setState({car: e.value});
    }

    onCarChange2(e) {
        this.setState({car2: e.value});
    }

    carTemplate(option) {
        if(!option.value) {
            return option.label;
        }
        else {
            var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

            return (
                <div className="ui-helper-clearfix">
                    <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} width="24"/>
                    <span style={{float:'right',margin:'.5em .25em 0 0'}}>{option.label}</span>
                </div>
            );
        }
    }

    render() {
        var cities = [
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
        ];

        var cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Dropdown</h1>
                        <p>Dropdown is used to select an item from a collection of options.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Dropdown value={this.state.city} options={cities} onChange={this.onCityChange} style={{width:'150px'}} placeholder="Select a City"/>
                    <div style={{marginTop: '.5em'}}>{this.state.city ? 'Selected City: ' + this.state.city : 'No city selected'}</div>

                    <h3>Editable</h3>
                    <Dropdown value={this.state.car} options={cars} onChange={this.onCarChange}
                              style={{width:'150px'}} editable={true} placeholder="Select a Brand"/>
                    <div style={{marginTop: '.5em'}}>{this.state.car ? 'Selected Car: ' + this.state.car : 'No car selected'}</div>

                    <h3>Advanced</h3>
                    <Dropdown value={this.state.car2} options={cars} onChange={this.onCarChange2} itemTemplate={this.carTemplate} style={{width:'150px'}}
                              filter={true} filterPlaceholder="Select Car" filterBy="label,value"/>
                    <div style={{marginTop: '.5em'}}>{this.state.car2 ? 'Selected Car: ' + this.state.car2 : 'No car selected'}</div>
                </div>

                <DropdownDoc />
            </div>
        );
    }
}

class DropdownDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="javascript">
                            {`
import {Dropdown} from 'primereact/components/dropdown/Dropdown';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Dropdown requires a collection of options with label-value pairs and an onChange event to provide the selected value.</p>
                        <CodeHighlight className="html">
                            {`
<Dropdown value={this.state.city} options={cities} onChange={this.onCityChange} style={{width:'150px'}} placeholder="Select a City"/>

`}
                        </CodeHighlight>

                        <h3>Filtering</h3>
                        <p>Options can be filtered using an input field in the overlay by enabling the filter property. By default filtering is done against
                            label of the SelectItem and filterBy property is available to choose one or more properties of the SelectItem API.</p>
                        <CodeHighlight className="html">
                            {`
<Dropdown value={this.state.car2} options={cars} onChange={this.onCarChange2} itemTemplate={this.carTemplate} style={{width:'150px'}} filter={true} filterPlaceholder="Select Car" filterBy="label,value" placeholder="Select a Car"/>

`}
                        </CodeHighlight>

                        <h3>Custom Content</h3>
                        <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate fucntion that gets the SelectItem as a property and returns the content.</p>
                        <CodeHighlight className="html">
                            {`
<Dropdown value={this.state.car} options={cars} onChange={this.onCarChange} itemTemplate={this.carTemplate} style={{width:'150px'}} placeholder="Select a Car"/>

`}
                        </CodeHighlight>

                        <CodeHighlight className="javascript">
                            {`

constructor() {
    super();
    this.state = {car: null};
    this.onCarChange = this.onCarChange.bind(this);
}

onCarChange(e) {
    this.setState({car: e.value});
}

carTemplate(option) {
    if(!option.value) {
        return option.label;
    }
    else {
        var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

        return (
            <div className="ui-helper-clearfix">
                <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} width="24"/>
                <span style={{float:'right',margin:'.5em .25em 0 0'}}>{option.label}</span>
            </div>
        );
    }
}

render() {
    var cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    return <Dropdown value={this.state.car} options={cars} onChange={this.onCarChange} itemTemplate={this.carTemplate} style={{width:'150px'}} placeholder="Select a Car"/>;
}

`}
                        </CodeHighlight>

                        <h3>Attributes</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the component.</td>
                                </tr>
                                <tr>
                                    <td>options</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of selectitems to display as the available options.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets the option and returns the content for it.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>autoWidth</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Calculates the width based on options width, set to false for custom width.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>200px</td>
                                    <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                                </tr>
                                <tr>
                                    <td>filter</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When specified, displays an input field to filter the items on keyup.</td>
                                </tr>
                                <tr>
                                    <td>filterBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                                </tr>
                                <tr>
                                    <td>filterPlaceholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Placeholder text to show when filter input is empty.</td>
                                </tr>
                                <tr>
                                    <td>editable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Default text to display when no option is selected.</td>
                                </tr>
                                <tr>
                                    <td>required</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Target element to attach the overlay, valid values are "body" or a local template variable of another element.</td>
                                </tr>
                                <tr>
                                    <td>tabindex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>autofocus</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should automatically get focus on load.</td>
                                </tr>
                                <tr>
                                    <td>lazy</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When enabled, creates the dom for options when overlay panel gets visible.</td>
                                </tr>
                                <tr>
                                    <td>panelStyleClass</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>panelStyle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>dataKey</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>A property to uniquely identify a value in options.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>onChange</td>
                                    <td>event.originalEvent: Original event <br />
                                        event.value: Value of the checkbox </td>
                                    <td>Callback to invoke on value change</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>ui-dropdown</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-label</td>
                                    <td>Element to display label of selected option.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-trigger</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-panel</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-items-wrapper</td>
                                    <td>Wrapper element of items list.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-items</td>
                                    <td>List element of items.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-item</td>
                                    <td>An item in the list.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-filter-container</td>
                                    <td>Container of filter input.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-filter</td>
                                    <td>Filter element.</td>
                                </tr>
                                <tr>
                                    <td>ui-dropdown-open</td>
                                    <td>Container element when overlay is visible.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/dropdown" className="btn-viewsource" target="_blank">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class DropdownDemo extends Component {

    constructor() {
        super();
        this.state = {city: null, car: null, car2: 'BMW'};
        this.onCityChange = this.onCityChange.bind(this);
        this.onCarChange = this.onCarChange.bind(this);
        this.onCarChange2 = this.onCarChange2.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    onCarChange(e) {
        this.setState({car: e.value});
    }

    onCarChange2(e) {
        this.setState({car2: e.value});
    }

    carTemplate(option) {
        if(!option.value) {
            return option.label;
        }
        else {
            var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

            return (
                <div className="ui-helper-clearfix">
                    <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} width="24"/>
                    <span style={{float:'right',margin:'.5em .25em 0 0'}}>{option.label}</span>
                </div>
            );
        }
    }

    render() {
        var cities = [
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
        ];

        var cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Dropdown</h1>
                        <p>Dropdown is used to select an item from a collection of options.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Dropdown value={this.state.city} options={cities} onChange={this.onCityChange} style={{width:'150px'}} placeholder="Select a City"/>
                    <div style={{marginTop: '.5em'}}>{this.state.city ? 'Selected City: ' + this.state.city : 'No city selected'}</div>

                    <h3>Editable</h3>
                    <Dropdown value={this.state.car} options={cars} onChange={this.onCarChange} style={{width:'150px'}} editable={true} placeholder="Select a Brand"/>
                    <div style={{marginTop: '.5em'}}>{this.state.car ? 'Selected Car: ' + this.state.car : 'No car selected'}</div>

                    <h3>Advanced</h3>
                    <Dropdown value={this.state.car2} options={cars} onChange={this.onCarChange2} itemTemplate={this.carTemplate} style={{width:'150px'}} filter={true} filterPlaceholder="Select Car" filterBy="label,value"/>
                    <div style={{marginTop: '.5em'}}>{this.state.car2 ? 'Selected Car: ' + this.state.car2 : 'No car selected'}</div>
                </div>

                <DropdownDoc />
            </div>
        );
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}