import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class DropdownDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export class DropdownDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null
        };

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
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

        this.onCityChange = this.onCityChange.bind(this);
        this.onCityChange2 = this.onCityChange2.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
    }

    onCityChange(e) {
        this.setState({ selectedCity1: e.value });
    }

    onCityChange2(e) {
        this.setState({ selectedCity2: e.value });
    }

    onCountryChange(e) {
        this.setState({ selectedCountry: e.value });
    }

    selectedCountryTemplate(option, props) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    countryOptionTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="dropdown-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Dropdown value={this.state.selectedCity1} options={this.cities} onChange={this.onCityChange} optionLabel="name" placeholder="Select a City" />

                    <h5>Editable</h5>
                    <Dropdown value={this.state.selectedCity2} options={this.cities} onChange={this.onCityChange2} optionLabel="name" editable />

                    <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                    <Dropdown value={this.state.selectedCountry} options={this.countries} onChange={this.onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
                        valueTemplate={this.selectedCountryTemplate} itemTemplate={this.countryOptionTemplate} />
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
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

const DropdownDemo = () => {
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const countries = [
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

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    const onCityChange2 = (e) => {
        setSelectedCity2(e.value);
    }

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <div className="dropdown-demo">
            <div className="card">
                <h5>Basic</h5>
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />

                <h5>Editable</h5>
                <Dropdown value={selectedCity2} options={cities} onChange={onCityChange2} optionLabel="name" editable />

                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

const DropdownDemo = () => {
    const [selectedCity1, setSelectedCity1] = useState<any>(null);
    const [selectedCity2, setSelectedCity2] = useState<any>(null);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const countries = [
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

    const onCityChange = (e: { value: any }) => {
        setSelectedCity1(e.value);
    }

    const onCityChange2 = (e: { value: any }) => {
        setSelectedCity2(e.value);
    }

    const onCountryChange = (e: { value: any }) => {
        setSelectedCountry(e.value);
    }

    const selectedCountryTemplate = (option: { name: string, code: string }, props: { placeholder: string }) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option: any) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <div className="dropdown-demo">
            <div className="card">
                <h5>Basic</h5>
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />

                <h5>Editable</h5>
                <Dropdown value={selectedCity2} options={cities} onChange={onCityChange2} optionLabel="name" editable />

                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
            </div>
        </div>
    );
}
                `
            },
        }

        this.extFiles = {
            'src/demo/DropdownDemo.css': {
                content: `
.dropdown-demo .p-dropdown {
    width: 14rem;
}

.dropdown-demo .country-item-value img.flag {
    width: 17px;
}
                `
            }
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
import { Dropdown } from 'primereact/dropdown';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>SelectButton is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
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
<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
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
<Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
<Dropdown optionLabel="name" optionValue="code" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
`}
</CodeHighlight>
                        <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

                        <h5>Placeholder</h5>
                        <p>Common pattern is providing an empty option as the placeholder when using native selects, however Dropdown has built-in support using the placeholder option so it is suggested to use it instead of creating an empty option.</p>

                        <h5>Filtering</h5>
                        <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
                            label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
                            to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</p>

<CodeHighlight>
{`
<Dropdown value={selectedCountry} options={countries} onChange={(e) => setSelectedCountry(e.value)} optionLabel="name" filter showClear filterBy="name"
    placeholder="Select a Country" itemTemplate={countryOptionTemplate} />
`}
</CodeHighlight>

                        <h5>Custom Content</h5>
                        <p>Label of an option is used as the display text of an item by default, for custom content support define an <i>itemTemplate</i> function that gets the option instance as a parameter and returns the content.</p>
<CodeHighlight>
{`
<Dropdown value={selectedCountry} options={countries} onChange={(e) => setSelectedCountry(e.value)} optionLabel="name" placeholder="Select a Country"
    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const selectedCountryTemplate = (option, props) => {
    if (option) {
        return (
            <div className="country-item country-item-value">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <span>
            {props.placeholder}
        </span>
    );
}

const countryOptionTemplate = (option) => {
    return (
        <div className="country-item">
            <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
            <div>{option.name}</div>
        </div>
    );
}
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
                                        <td>Whether the option is disabled or not.</td>
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
                                        <td>optionLabel</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                                    </tr>
                                    <tr>
                                        <td>optionValue</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                                    </tr>
                                    <tr>
                                        <td>valueTemplate</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>The template of selected item.</td>
                                    </tr>
                                    <tr>
                                        <td>itemTemplate</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>The template of items.</td>
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
                                        <td>filter</td>
                                        <td>boolean</td>
                                        <td>false</td>
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
                                        <td>Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</td>
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
                                        <td>No results found</td>
                                        <td>Template to display when filtering does not return any results.</td>
                                    </tr>
                                    <tr>
                                        <td>resetFilterOnHide</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Clears the filter value when hiding the dropdown.</td>
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
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the dialog should be mounted.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>autoFocus</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should automatically get focus on load.</td>
                                    </tr>
                                    <tr>
                                        <td>filterInputAutoFocus</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>When the panel is opened, it specifies that the filter input should focus automatically.</td>
                                    </tr>
                                    <tr>
                                        <td>panelClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the overlay panel element.</td>
                                    </tr>
                                    <tr>
                                        <td>panelStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the overlay panel element.</td>
                                    </tr>
                                    <tr>
                                        <td>dataKey</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>A property to uniquely match the value in options for better performance.</td>
                                    </tr>
                                    <tr>
                                        <td>inputId</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Identifier of the focusable input.</td>
                                    </tr>
                                    <tr>
                                        <td>showClear</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, a clear icon is displayed to clear the value.</td>
                                    </tr>
                                    <tr>
                                        <td>maxLength</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Maximum number of characters to be typed on an editable input.</td>
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
                                        <td>ariaLabel</td>
                                        <td>string</td>
                                        <td>false</td>
                                        <td>Used to define a string that labels the component.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaLabelledBy</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Contains the element IDs of labels.</td>
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
                                        <td>event.originalEvent: Original event <br />
                                            event.value: Value of the checkbox </td>
                                        <td>Callback to invoke on value change</td>
                                    </tr>
                                    <tr>
                                        <td>onMouseDown</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke to when a mouse button is pressed.</td>
                                    </tr>
                                    <tr>
                                        <td>onContextMenu</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke on right-click.</td>
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
                                    <tr>
                                        <td>resetFilter</td>
                                        <td>-</td>
                                        <td>Reset the options filter.</td>
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
                                        <td>p-dropdown</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-label</td>
                                        <td>Element to display label of selected option.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-trigger</td>
                                        <td>Icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-panel</td>
                                        <td>Icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-items-wrapper</td>
                                        <td>Wrapper element of items list.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-items</td>
                                        <td>List element of items.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-item</td>
                                        <td>An item in the list.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-filter-container</td>
                                        <td>Container of filter input.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-filter</td>
                                        <td>Filter element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dropdown-open</td>
                                        <td>Container element when overlay is visible.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'DropdownDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
