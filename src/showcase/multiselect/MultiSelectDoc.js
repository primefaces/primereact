import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class MultiSelectDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.scss';

export class MultiSelectDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCities: null,
            selectedCountries: null
        };

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];

        this.countryTemplate = this.countryTemplate.bind(this);
        this.selectedCountriesTemplate = this.selectedCountriesTemplate.bind(this);
    }

    countryTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    selectedCountriesTemplate(option) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    render() {
        return (
            <div className="multiselect-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <MultiSelect value={this.state.selectedCities} options={this.cities} onChange={(e) => this.setState({ selectedCities: e.value })} optionLabel="name" placeholder="Select a City" />

                    <h5>Advanced with Templating and Filtering</h5>
                    <MultiSelect value={this.state.selectedCountries} options={this.countries}  onChange={(e) => this.setState({ selectedCountries: e.value })} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                        itemTemplate={this.countryTemplate} selectedItemTemplate={this.selectedCountriesTemplate} />
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {MultiSelect} from 'primereact/multiselect';

const MultiSelectDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carTemplate = (option) => {
        const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{width:'24px', verticalAlign:'middle'}} />
                <span style={{fontSize:'1em',float:'right',marginTop:'4px'}}>{option.label}</span>
            </div>
        );
    }

    const selectedCarTemplate = (value) => {
        if (value) {
            const logoPath = 'showcase/demo/images/car/' + value + '.png';

            return (
                <div className="my-multiselected-item-token">
                    <img alt={value} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{width:'20px', verticalAlign:'middle', marginRight:'.5em'}} />
                    <span>{value}</span>
                </div>
            );
        }
        else {
            return <span className="my-multiselected-empty-token">Choose</span>
        }
    }

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
        <div className="multiselect-demo">
            <h5>Basic</h5>
            <MultiSelect value={cars1} options={cars} onChange={(e) => setCars1(e.value)}
                    style={{minWidth:'15em'}} filter filterPlaceholder="Search" placeholder="Choose" />

            <h5>Templating</h5>
            <MultiSelect value={cars2} options={cars} onChange={(e) => setCars2(e.value)}
                            style={{minWidth:'15em'}} filter filterPlaceholder="Search" itemTemplate={carTemplate} selectedItemTemplate={selectedCarTemplate} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {MultiSelect} from 'primereact/multiselect';

const MultiSelectDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carTemplate = (option: { label: string }) => {
        const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

        return (
            <div className="p-clearfix">
                <img alt={option.label} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{width:'24px', verticalAlign:'middle'}} />
                <span style={{fontSize:'1em',float:'right',marginTop:'4px'}}>{option.label}</span>
            </div>
        );
    }

    const selectedCarTemplate = (value: string) => {
        if (value) {
            const logoPath = 'showcase/demo/images/car/' + value + '.png';

            return (
                <div className="my-multiselected-item-token">
                    <img alt={value} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{width:'20px', verticalAlign:'middle', marginRight:'.5em'}} />
                    <span>{value}</span>
                </div>
            );
        }
        else {
            return <span className="my-multiselected-empty-token">Choose</span>
        }
    }

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
        <div className="multiselect-demo">
            <h5>Basic</h5>
            <MultiSelect value={cars1} options={cars} onChange={(e) => setCars1(e.value)}
                    style={{minWidth:'15em'}} filter filterPlaceholder="Search" placeholder="Choose" />

            <h5>Templating</h5>
            <MultiSelect value={cars2} options={cars} onChange={(e) => setCars2(e.value)}
                            style={{minWidth:'15em'}} filter filterPlaceholder="Search" itemTemplate={carTemplate} selectedItemTemplate={selectedCarTemplate} />
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.multiselect-demo .my-multiselected-item-token, .multiselect-demo .my-multiselected-empty-token {
    padding: 2px 4px;
    margin: 0 0.286em 0 0;
    display: inline-block;
    vertical-align: middle;
    height: 1.857em;
    border-radius: 3px;
}
.multiselect-demo .my-multiselected-item-token {
    background: #007ad9;
    color: #ffffff;
}
.multiselect-demo .my-multiselected-empty-token {
    background: #1dcbb3;
    color: #ffffff;
    width: 100%;
}
            `
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { MultiSelect } from 'primereact/multiselect';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>MultiSelect is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
            of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
            whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition,
            options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

            <p><b>Options as SelectItems</b></p>
<CodeHighlight lang="js">
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

<CodeHighlight>
{`
<MultiSelect value={this.state.cities} options={citySelectItems} onChange={(e) => this.setState({cities: e.value})} />
`}
</CodeHighlight>

            <p><b>Options as any type</b></p>
<CodeHighlight lang="js">
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

<CodeHighlight>
{`
<MultiSelect optionLabel="name" value={this.state.cities} options={cities} onChange={(e) => this.setState({cities: e.value})} />
<MultiSelect optionLabel="name" optionValue="code" value={this.state.cities} options={cities} onChange={(e) => this.setState({cities: e.value})} />
`}
</CodeHighlight>
            <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

            <h5>Custom Content</h5>
            <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate function that gets the option as a parameter and returns the content.</p>

<CodeHighlight>
{`
<MultiSelect value={this.state.cities} options={citySelectItems} onChange={(e) => this.setState({cities: e.value})} itemTemplate={this.itemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
itemTemplate(option) {
    // custom item content
}
`}
</CodeHighlight>
                        <p>In addition <i>selectedItemTemplate</i> can be used to customize the selected values display instead of the default comma separated list.</p>

<CodeHighlight>
{`
<MultiSelect value={this.state.cities} options={citySelectItems} onChange={(e) => this.setState({cities: e.value})} selectedItemTemplate={this.selectedItemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
selectedItemTemplate(option) {
    // custom selected item content
}
`}
</CodeHighlight>

            <h5>Filtering</h5>
            <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
                label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
                to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</p>

<CodeHighlight>
{`
<MultiSelect value={this.state.cities} options={citySelectItems} onChange={(e) => this.setState({cities: e.value})} filter/>
`}
</CodeHighlight>

            <h5>SelectItem API</h5>
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

            <h5>Properties</h5>
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
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
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
                            <td>panelClassName</td>
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
                            <td>filterLocale</td>
                            <td>string</td>
                            <td>undefined</td>
                            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                        </tr>
                        <tr>
                            <td>emptyFilterMessage</td>
                            <td>any</td>
                            <td>No records found</td>
                            <td>Template to display when filtering does not return any results.</td>
                        </tr>
                        <tr>
                            <td>resetFilterOnHide</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Clears the filter value when hiding the dropdown.</td>
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
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                        </tr>
                        <tr>
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the focusable input.</td>
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

            <h5>Events</h5>
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

            <h5>Methods</h5>
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
                            <td>checkValidity</td>
                            <td>-</td>
                            <td>Checks whether the native hidden select element has any constraints and returns a boolean for the result.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styling</h5>
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

                <h5>Dependencies</h5>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <LiveEditor name="MultiSelectDemo" sources={this.sources} service="NodeService" data="treenodes" extFiles={this.extFiles} />

<CodeHighlight lang="scss">
{`
.multiselect-demo {
    .p-multiselect {
        min-width: 15rem;
    }

    .multiselect-custom {
        .p-multiselect-label:not(.p-placeholder):not(.p-multiselect-items-label) {
            padding-top: .25rem;
            padding-bottom: .25rem;
        }

        .country-item-value {
            padding: .25rem .5rem;
            border-radius: 3px;
            display: inline-flex;
            margin-right: .5rem;
            background-color: var(--primary-color);
            color: var(--primary-color-text);

            img.flag {
                width: 17px;
            }
        }
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
