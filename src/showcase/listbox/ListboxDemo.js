import React, {Component} from 'react';
import {Link} from 'react-router';
import {Listbox} from '../../components/listbox/Listbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class ListboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
        this.onCarChange = this.onCarChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    onCarChange(e) {
        this.setState({car: e.value});
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
                        <h1>Listbox</h1>
                        <p>Listbox is used to select one or more values from a list of items.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Listbox value={this.state.city} options={cities} onChange={this.onCityChange} />
                    <div style={{marginTop: '.5em'}}>{this.state.city ? 'Selected City: ' + this.state.city : 'No city selected'}</div>

                    <h3>Advanced</h3>
                    <Listbox value={this.state.car} options={cars} onChange={this.onCarChange} itemTemplate={this.carTemplate} style={{maxHeight: '250px'}}/>
                    <div style={{marginTop: '.5em'}}>{this.state.car ? 'Selected Car: ' + this.state.car : 'No car selected'}</div>
                </div>

                <ListboxDoc></ListboxDoc>
            </div>
        );
    }
}

class ListboxDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Listbox} from 'primereact/components/listbox/Listbox';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Listbox requires a collection of options with label-value pairs and an onChange event to provide the selected value.</p>
                    
<CodeHighlight className="language-markup">
{`
<Listbox value={this.state.city} options={cities} onChange={this.onCityChange} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {};
    this.onCityChange = this.onCityChange.bind(this);
    this.onCarChange = this.onCarChange.bind(this);
}

onCityChange(e) {
    this.setState({city: e.value});
}

render () {
    var cities = [
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
        ];

        ...
}

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate fucntion that gets the SelectItem as a property and returns the content.</p>
<CodeHighlight className="language-markup">
{`
<Listbox value={this.state.car} options={cars} onChange={this.onCarChange} itemTemplate={this.carTemplate} style={{maxHeight: '250px'}}/>

`}
</CodeHighlight>
<CodeHighlight className="language-markup">
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
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
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
                            <td>value</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Selected value to display.</td>
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
                            <td>event.originalEvent: Browser event <br/>
                                event.value: single value or an array of values that are selected <br/>
                                index: index
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
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-list</td>
                            <td>List container.</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-item</td>
                            <td>An item in the list.</td>
                        </tr>
                        <tr>
                            <td>ui-listbox-header</td>
                            <td>Header element.</td>
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
<CodeHighlight className="language-javascript">
{`
export class ListboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
        this.onCarChange = this.onCarChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    onCarChange(e) {
        this.setState({car: e.value});
    }

    carTemplate(option) {
        var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

        return (
            <div className="ui-helper-clearfix">
                <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} />
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
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Listbox</h1>
                        <p>Listbox is used to select one or more values from a list of items.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Listbox value={this.state.city} options={cities} onChange={this.onCityChange} />
                    <div style={{marginTop: '.5em'}}>{this.state.city ? 'Selected City: ' + this.state.city : 'No city selected'}</div>

                    <h3>Advanced</h3>
                    <Listbox value={this.state.car} options={cars} onChange={this.onCarChange} itemTemplate={this.carTemplate} style={{maxHeight: '250px'}}/>
                    <div style={{marginTop: '.5em'}}>{this.state.car ? 'Selected Car: ' + this.state.car : 'No car selected'}</div>
                </div>

                <ListboxDoc></ListboxDoc>
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