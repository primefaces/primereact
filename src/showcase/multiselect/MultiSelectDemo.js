import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class MultiSelectDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.carTemplate = this.carTemplate.bind(this);
        this.selectedCarTemplate = this.selectedCarTemplate.bind(this);
    }

    carTemplate(option) {
        const logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} style={{width:'24px', verticalAlign:'middle'}} />
                <span style={{fontSize:'1em',float:'right',marginTop:'4px'}}>{option.label}</span>
            </div>
        );
    }

    selectedCarTemplate(value) {
        if (value) {
            const logoPath = 'showcase/resources/demo/images/car/' + value + '.png';

            return (
                <div className="my-multiselected-item-token">
                    <img alt={value} src={logoPath} style={{width:'20px', verticalAlign:'middle', marginRight:'.5em'}} />
                    <span>{value}</span>
                </div>
            );
        }
        else {
            return <span className="my-multiselected-empty-token">Choose</span>
        }
    }

    render() {
        const cars = [
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

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("multiSelect")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation multiselect-demo">
                    <h3>Basic</h3>
                    <MultiSelect value={this.state.cars1} options={cars} onChange={(e) => this.setState({cars1: e.value})}
                            style={{minWidth:'15em'}} filter={true} filterPlaceholder="Search" placeholder="Choose" />

                    <h3>Templating</h3>
                    <MultiSelect value={this.state.cars2} options={cars} onChange={(e) => this.setState({cars2: e.value})}
                                 style={{minWidth:'15em'}} filter={true} filterPlaceholder="Search" itemTemplate={this.carTemplate} selectedItemTemplate={this.selectedCarTemplate} />
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
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {MultiSelect} from 'primereact/multiselect';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>MultiSelect is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
            of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
            whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition, 
            options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

            <p><b>Options as SelectItems</b></p>
            <CodeHighlight className="language-javascript">
{`
const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];

`}
            </CodeHighlight>

            <CodeHighlight className="language-jsx">
{`
<MultiSelect value={this.state.cities} options={citySelectItems} onChange={(e) => this.setState({cities: e.value})} />

`}
            </CodeHighlight>

            <p><b>Options as any type</b></p>
<CodeHighlight className="language-javascript">
{`
const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

`}
</CodeHighlight>

<CodeHighlight className="language-jsx">
{`
<MultiSelect optionLabel="name" value={this.state.cities} options={cities} onChange={(e) => this.setState({cities: e.value})} />
<MultiSelect optionLabel="name" optionValue="code" value={this.state.cities} options={cities} onChange={(e) => this.setState({cities: e.value})} />

`}
</CodeHighlight>
            <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

            <h3>Custom Content</h3>
            <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate function that gets the option as a parameter and returns the content.</p>

<CodeHighlight className="language-jsx">
{`
<MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} itemTemplate={this.carTemplate} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
carTemplate(option) {
    const logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

    return (
        <div className="p-clearfix">
            <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} />
            <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
        </div>
    );
}

`}
</CodeHighlight>
                        <p>In addition <i>selectedItemTemplate</i> can be used to customize the selected values display instead of the default comma separated list.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} selectedItemTemplate={this.selectedCarTemplate} />

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
                            {`

selectedCarTemplate(option) {

    if(option) {
        const logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';
        return (
            <div className="my-multiselected-item-token">
                <img alt={option.label} src={logoPath} style={{width:'20px', verticalAlign:'middle', marginRight:'.5em'}} />
                <span>{option.label}</span>
            </div>
        );
    }
    else {
        return <span className="my-multiselected-empty-token">Choose</span>
    }
}

`}
                        </CodeHighlight>

            <h3>Filtering</h3>
            <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
                label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
                to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</p>

<CodeHighlight className="language-jsx">
{`
<MultiSelect value={this.state.cars} options={cars} onChange={(e) => this.setState({cars: e.value})} filter={true}/>

`}
</CodeHighlight>

            <h3>SelectItem API</h3>
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
                            <td>label</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label of the option.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the option.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>ClassName of the option.</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Tooltip text of the option. (Not supported)</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the option is disabled or not. (Not supported)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Properties</h3>
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
                            <td>optionLabel</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>
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
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label to display when there are no selections.</td>
                        </tr>
                        <tr>
                            <td>fixedPlaceholder</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display selected items in the label section or always display the placeholder as the default label.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When specified, displays an input field to filter the items on keyup.</td>
                        </tr>
                        <tr>
                            <td>filterBy</td>
                            <td>string</td>
                            <td>label</td>
                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                        </tr>
                        <tr>
                            <td>filterMatchMode</td>
                            <td>string</td>
                            <td>contains</td>
                            <td>Defines how the items are filtered, valid values are "contains", (default) "startsWith", "endsWith", "equals" and "notEquals".</td>
                        </tr>
                        <tr>
                            <td>filterPlaceholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Placeholder text to show when filter input is empty.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely match the value in options for better performance.</td>
                        </tr>
                        <tr>
                            <td>tooltip</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>selectedItemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>appendTo</td>
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
                        </tr>
                        <tr>
                            <td>maxSelectedLabels</td>
                            <td>number</td>
                            <td>3</td>
                            <td>Decides how many selected item labels to show at most.</td>
                        </tr>
                        <tr>
                            <td>selectedItemsLabel</td>
                            <td>string</td>
                            <td>&#123;0&#125; items selected</td>
                            <td>Label to display after exceeding max selected labels.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                        <tr>
                            <td>onFocus</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the element receives focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the element loses focus.</td>
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
                            <td>p-multiselect</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-label-container</td>
                            <td>Container of the label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-label-container</td>
                            <td>Label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-trigger</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-panel</td>
                            <td>Overlay panel for items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-items</td>
                            <td>List container of items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-item</td>
                            <td>An item in the list.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/multiselect" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {MultiSelect} from 'primereact/multiselect';

export class MultiSelectDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.carTemplate = this.carTemplate.bind(this);
        this.selectedCarTemplate = this.selectedCarTemplate.bind(this);
    }

    carTemplate(option) {
        const logoPath = 'showcase/resources/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} style={{width:'24px', verticalAlign:'middle'}} />
                <span style={{fontSize:'1em',float:'right',marginTop:'4px'}}>{option.label}</span>
            </div>
        );
    }

    selectedCarTemplate(value) {
        if (value) {
            const logoPath = 'showcase/resources/demo/images/car/' + value + '.png';

            return (
                <div className="my-multiselected-item-token">
                    <img alt={value} src={logoPath} style={{width:'20px', verticalAlign:'middle', marginRight:'.5em'}} />
                    <span>{value}</span>
                </div>
            );
        }
        else {
            return <span className="my-multiselected-empty-token">Choose</span>
        }
    }

    render() {
        const cars = [
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

                <div className="content-section implementation multiselect-demo">
                    <h3>Basic</h3>
                    <MultiSelect value={this.state.cars1} options={cars} onChange={(e) => this.setState({cars1: e.value})}
                            style={{minWidth:'12em'}} filter={true} filterPlaceholder="Search" placeholder="Choose" />

                    <h3>Templating</h3>
                    <MultiSelect value={this.state.cars2} options={cars} onChange={(e) => this.setState({cars2: e.value})}
                                 style={{minWidth:'12em'}} filter={true} filterPlaceholder="Search" itemTemplate={this.carTemplate} selectedItemTemplate={this.selectedCarTemplate} />
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
