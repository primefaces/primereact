import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ListBoxDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, {Component} from 'react';
import { ListBox } from 'primereact/listbox';

export class ListBoxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCity: null,
            selectedCountries: null,
            selectedGroupedCity: null,
            selectedItem: null
        };

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];

        this.groupedCities = [
            {
                label: 'Germany', code: 'DE',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];

        this.items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

        this.countryTemplate = this.countryTemplate.bind(this);
    }

    countryTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    groupedItemTemplate(option) {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card">
                <h5>Single</h5>
                <ListBox value={this.state.selectedCity} options={this.cities} onChange={(e) => this.setState({ selectedCity: e.value })} optionLabel="name" style={{ width: '15rem' }} />

                <h5>Grouped</h5>
                <ListBox value={this.state.selectedGroupedCity} options={this.groupedCities} onChange={(e) => this.setState({ selectedGroupedCity: e.value })} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                    optionGroupTemplate={this.groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>

                <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                <ListBox value={this.state.selectedCountries} options={this.countries} onChange={(e) => this.setState({ selectedCountries: e.value })} multiple filter optionLabel="name"
                    itemTemplate={this.countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />

                <h5>Virtual Scroll (100000 Items)</h5>
                <ListBox value={this.state.selectedItem} options={this.items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => this.setState({ selectedItem: e.value })} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
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
import { ListBox } from 'primereact/listbox';

const ListBoxDemo = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Single</h5>
            <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />

            <h5>Grouped</h5>
            <ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>

            <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
            <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} multiple filter optionLabel="name"
                itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />

            <h5>Virtual Scroll (100000 Items)</h5>
            <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';

const ListBoxDemo = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Single</h5>
            <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />

            <h5>Grouped</h5>
            <ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>

            <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
            <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} multiple filter optionLabel="name"
                itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />

            <h5>Virtual Scroll (100000 Items)</h5>
            <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        </div>
    );
}
                `
            },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/listbox/listbox.min.js"></script>`,
            content: `
const { useState } = React;
const { ListBox } = primereact.listbox;

const ListBoxDemo = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Single</h5>
            <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />

            <h5>Grouped</h5>
            <ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>

            <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
            <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} multiple filter optionLabel="name"
                itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />

            <h5>Virtual Scroll (100000 Items)</h5>
            <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        </div>
    );
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { ListBox } from 'primereact/listbox';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/listbox/listbox.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Listbox is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
                        of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
                        whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair.
                        In addition, options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

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
<ListBox value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} />
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
<ListBox optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} />
<ListBox optionLabel="name" optionValue="code" value={city} options={cities} onChange={(e) => setCity(e.value)} />
`}
</CodeHighlight>
                    <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

                    <h5>Selection</h5>
                    <p>Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected
                        using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is false by default. On touch enabled
                        devices metaKeySelection is turned on automatically even when enabled.</p>

<CodeHighlight>
{`
<ListBox value={cities} options={cities} onChange={(e) => setCity(e.value)} multiple />
`}
</CodeHighlight>

                    <h5>Custom Content</h5>
                    <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate property. Its value can be JSXElement, function or string.</p>

<CodeHighlight>
{`
<ListBox value={city} options={cities} onChange={(e) => setCity(e.value)} itemTemplate={itemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
itemTemplate(option) {
    // custom item content
}
`}
</CodeHighlight>
                    <h5>Filtering</h5>
                    <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
                    label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
                    to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".
                    Also, the <i>filterValue</i> and <i>onFilterValueChange</i> properties can be used to control the filter value.</p>

<CodeHighlight>
{`
<ListBox value={city} options={cities} onChange={(e) => setCity(e.value)} filter />
`}
</CodeHighlight>

                    <p>Filter input can be customized with the <i>filterInputProps</i> option that passes any property to the filter input element.</p>
<CodeHighlight>
{`
<ListBox value={city} options={cities} onChange={(e) => setCity(e.value)} filter filterInputProps={{className:'p-3', maxLength: 10}}/>
`}
</CodeHighlight>

                    <h5>Grouping</h5>
                    <p>Options groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.</p>
<CodeHighlight>
{`
const groupedCities = [
    {
        label: 'Germany', code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA', code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan', code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" />
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
                                    <td>optionLabel</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>
                                </tr>
                                <tr>
                                    <td>optionValue</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                                </tr>
                                <tr>
                                    <td>optionDisabled</td>
                                    <td>function | string</td>
                                    <td>null</td>
                                    <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupLabel</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property name or getter function to use as the label of an option group.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupChildren</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property name or getter function that refers to the children options of option group.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Custom template for the items.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of an option group item.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>listStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of inner list element.</td>
                                </tr>
                                <tr>
                                    <td>listClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style class of inner list element.</td>
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
                                    <td>dataKey</td>
                                    <td>string</td>
                                    <td>false</td>
                                    <td>A property to uniquely match the value in options for better performance.</td>
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
                                <tr>
                                    <td>filterBy</td>
                                    <td>string</td>
                                    <td>label</td>
                                    <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                                </tr>
                                <tr>
                                    <td>filterValue</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>When specified, filter displays with this value.</td>
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
                                    <td>filterInputProps</td>
                                    <td>object</td>
                                    <td>undefined</td>
                                    <td>Props for the filter input, any prop is passed implicity to the filter input element.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
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
                                    <td>virtualScrollerOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.</td>
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
                                    <td>event.originalEvent: Browser event <br/>
                                        event.value: Single value or an array of values depending on the selection mode <br/>
                                    </td>
                                    <td>Callback to invoke when value of listbox changes.</td>
                                </tr>
                                <tr>
                                    <td>onFilterValueChange</td>
                                    <td>event.originalEvent: Browser event <br/>
                                        event.value: the filtered value <br/>
                                    </td>
                                    <td>Callback to invoke when filter value changes.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                                    <td>p-listbox</td>
                                    <td>Main container element.</td>
                                </tr>
                                <tr>
                                    <td>p-listbox-header</td>
                                    <td>Header element.</td>
                                </tr>
                                <tr>
                                    <td>p-listbox-list-wrapper</td>
                                    <td>Container of list element.</td>
                                </tr>
                                <tr>
                                    <td>p-listbox-list</td>
                                    <td>List element.</td>
                                </tr>
                                <tr>
                                    <td>p-listbox-item</td>
                                    <td>An item in the list element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the component can be provided  <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute that sets to true when multiple selection is enabled.
                    Each list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.</p>
                    <p>If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the input element. Alternatively <i>filterPlaceholder</i> is usually utilized by the screen readers as well.</p>
<CodeHighlight>
{`
<span id="lb">Options</span>
<ListBox aria-labelledby="lb" />

<ListBox aria-label="City" />
`}
</CodeHighlight>
                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves focus to the previous option.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves focus to the next option.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Toggles the selected state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles the selected state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first option.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last option.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>down arrow</i></td>
                                    <td>Moves focus to the next option and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>up arrow</i></td>
                                    <td>Moves focus to the previous option and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>space</i></td>
                                    <td>Selects the items between the most recently selected option and the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>control</i> + <i>shift</i> + <i>home</i></td>
                                    <td>Selects the focused options and all the options up to the first one.</td>
                                </tr>
                                <tr>
                                    <td><i>control</i> + <i>shift</i> + <i>end</i></td>
                                    <td>Selects the focused options and all the options down to the last one.</td>
                                </tr>
                                <tr>
                                    <td><i>control</i> + <i>a</i></td>
                                    <td>Selects all options.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

            {
                useLiveEditorTabs({ name: 'ListBoxDemo', sources: sources })
            }
            </TabView>
        </div>
    );
})

export default ListBoxDoc;
