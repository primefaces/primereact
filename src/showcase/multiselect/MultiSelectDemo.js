import React, {Component} from 'react';
import {Link} from 'react-router';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class MultiSelectDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            cars: []
        };
    }

    render() {
        let cars = [
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
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} 
                            style={{width:'12em'}} filter={true} />
                </div>
                
                <MultiSelectDoc />
            </div>
        );
    }
}

export class MultiSelectDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>MultiSelect requires a collection of options with label-value pairs, a value and an onChange event to provide the selected value.</p>
        
<CodeHighlight className="html">
{`
<MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} />

`}
</CodeHighlight>

            <p>SelectItem API represents an option using label and value properties. Value can be a string as well as an arbirary object.</p>

<CodeHighlight className="javascript">
{`
let cities = [
    {label: 'New York', value: 'New York'},
    {label: 'Rome', value: 'Rome'},
    {label: 'London', value: 'London'},
    {label: 'Istanbul', value: 'Istanbul'},
    {label: 'Paris', value: 'Paris'}
];

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate function that gets the option as a property and returns the content.</p>

<CodeHighlight className="html">
{`
<MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} itemTemplate={this.carTemplate} />

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
carTemplate(option) {
    var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

    return (
        <div className="ui-helper-clearfix">
            <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} />
            <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
        </div>
    );
}

`}
</CodeHighlight>

            <h3>Filter</h3>
            <p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable filter property.</p>

<CodeHighlight className="html">
{`
<MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} filter={true}/>

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
                            <td>array</td>
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
                            <td>scrollHeight</td>
                            <td>string</td>
                            <td>200px</td>
                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                        </tr>
                        <tr>
                            <td>defaultLabel</td>
                            <td>string</td>
                            <td>Choose</td>
                            <td>Label to display when there are no selections.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When specified, displays an input field to filter the items on keyup.</td>
                        </tr>
                        <tr>
                            <td>key</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely identify a value in options.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
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
                            <td>event.originalEvent: Browser event<br />
                                event.value: Current selected values<br />
                            </td>
                            <td>Callback to invoke when value changes.</td>
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
                            <td>ui-multiselect</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-label-container</td>
                            <td>Container of the label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-label-container</td>
                            <td>Label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-trigger</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-panel</td>
                            <td>Overlay panel for items.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-items</td>
                            <td>List container of items.</td>
                        </tr>
                        <tr>
                            <td>ui-multiselect-item</td>
                            <td>An item in the list.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/multiselect" className="btn-viewsource" target="_blank">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

export class MultiSelectDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            cars: []
        };
    }

    render() {
        let cars = [
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
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} 
                            style={{width:'12em'}} filter={true} />
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}