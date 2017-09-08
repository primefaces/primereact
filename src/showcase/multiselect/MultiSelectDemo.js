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
            <p>MultiSelect requires a value, a list of options and an onChange callback.</p>
<CodeHighlight className="html">
{`
<MultiSelect value={this.state.cars} options={cars} onChange={this.onCarChange} />

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
constructor() {
    super();
    this.state = {cars: []};
    this.onCarChange = this.onCarChange.bind(this);
}

onCarChange(e) {
    this.setState({cars: e.value});
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

    return (
        <MultiSelect value={this.state.cars} options={cars} onChange={this.onCarChange} style={{width:'150px'}}/>
    );
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
                            <td>array</td>
                            <td>null</td>
                            <td>List of selected values.</td>
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
                                event.index: Index of the selected item
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
export class MultiSelectDemo extends Component {
        
    constructor() {
        super();
        this.state = {cars: []};
        this.onCarChange = this.onCarChange.bind(this);
    }

    onCarChange(e) {
        this.setState({cars: e.value});
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

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <MultiSelect value={this.state.cars} options={cars} onChange={this.onCarChange} style={{width:'150px'}}/>
                    <div style={{marginTop:'1em'}}>Selected Cars <ul>{this.state.cars.map((car) => <li key={car}>{car}</li>)}</ul></div>
                </div>

                <MultiSelectDoc />
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