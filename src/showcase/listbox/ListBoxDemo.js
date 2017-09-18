import React, {Component} from 'react';
import {Link} from 'react-router';
import {ListBox} from '../../components/listbox/ListBox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ListBoxDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            city: null,
            cities: null,
            car: 'BMW'
        };
    }

    carTemplate(option) {
        var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

        return (
            <div className="ui-helper-clearfix">
                <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px',width:48}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
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
                        <h1>ListBox</h1>
                        <p>ListBox is used to select one or more values from a list of items.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Single</h3>
                    <ListBox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} />
                    
                    <h3>Multiple</h3>
                    <ListBox value={this.state.cities} options={cities} onChange={(e) => this.setState({cities: e.value})} multiple={true} />

                    <h3>Advanced</h3>
                    <ListBox value={this.state.car} filter={true} options={cars} onChange={(e) => this.setState({car: e.value})} itemTemplate={this.carTemplate} 
                                    style={{width: '15em'}} listStyle={{maxHeight: '250px'}}/>
                </div>

                <ListboxDoc></ListboxDoc>
            </div>
        );
    }
}

class ListboxDoc extends Component {

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
import {ListBox} from 'primereact/components/listbox/ListBox';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>ListBox requires a collection of options with label-value pairs, a value and an onChange event to provide the selected value.</p>
                    
<CodeHighlight className="html">
{`
<Listbox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} />

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

            <h3>Selection</h3>
            <p>Listbox allows selection of either single or multiple items whereas checkbox option displays a checkbox to indicate multiple selection. 
                In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected
                using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled
                devices metaKeySelection is turned off automatically.</p>

<CodeHighlight className="html">
{`
<Listbox value={this.state.cities} options={cities} onChange={(e) => this.setState({city: e.value})} multiple={true}/>

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate function that gets the option as a property and returns the content.</p>

<CodeHighlight className="html">
{`
<Listbox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} itemTemplate={this.carTemplate} />

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
<Listbox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} filter={true} />

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
                            <td>object</td>
                            <td>null</td>
                            <td>Selected value to display.</td>
                        </tr>
                         <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
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
                            <td>listStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of inner list element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, disables the component.</td>
                        </tr>
                        <tr>
                            <td>key</td>
                            <td>boolea</td>
                            <td>false</td>
                            <td>A property to uniquely identify a value in options.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, allows selecting multiple values.</td>
                        </tr>
                        <tr>
                            <td>metaKeySelection</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, displays a filter input at header.</td>
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
                            <td>event.originalEvent: Browser event <br/>
                                event.value: Single value or an array of values depending on the selection mode <br/>
                            </td>
                            <td>Callback to invoke when value of listbox changes.</td>
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
                            <td>ui-listbox</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-header</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-list-wrapper</td>
                            <td>Container of list element.</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-item</td>
                            <td>An item in the list element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/listbox" className="btn-viewsource" target="_blank">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router';
import {ListBox} from 'primereact/components/listbox/ListBox';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

export class ListBoxDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            city: null,
            cities: null,
            car: 'BMW'
        };
    }

    carTemplate(option) {
        var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

        return (
            <div className="ui-helper-clearfix">
                <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px',width:48}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
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
                <h3 className="first">Single</h3>
                <ListBox value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})} />
                
                <h3>Multiple</h3>
                <ListBox value={this.state.cities} options={cities} onChange={(e) => this.setState({cities: e.value})} multiple={true} />

                <h3>Advanced</h3>
                <ListBox value={this.state.car} filter={true} options={cars} onChange={(e) => this.setState({cities: e.value})} itemTemplate={this.carTemplate} 
                                style={{width: '15em'}} listStyle={{maxHeight: '250px'}}/>
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