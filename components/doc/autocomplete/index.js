import React, { memo } from 'react';
import Link  from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const AutoCompleteDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../service/CountryService';

export class AutoCompleteDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selectedCountry1: null,
            selectedCountry2: null,
            selectedCity: null,
            selectedCountries: null,
            selectedItem: null,
            filteredCountries: null,
            filteredCities: null,
            filteredItems: null
        };

        this.searchCountry = this.searchCountry.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.searchItems = this.searchItems.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.groupedItemTemplate = this.groupedItemTemplate.bind(this);
        this.countryservice = new CountryService();

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
    }

    componentDidMount() {
        this.countryservice.getCountries().then(data => this.setState({ countries: data }));
    }

    searchCountry(event) {
        setTimeout(() => {
            let filteredCountries;
            if (!event.query.trim().length) {
                filteredCountries = [...this.state.countries];
            }
            else {
                filteredCountries = this.state.countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredCountries });
        }, 250);
    }

    searchCity(event) {
        let query = event.query;
        let filteredCities = [];

        for (let country of this.groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                filteredCities.push({...country, ...{items: filteredItems}});
            }
        }

        this.setState({ filteredCities });
    }

    searchItems(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let filteredItems = [];

        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filteredItems.push(item);
            }
        }

        this.setState({ filteredItems });
    }

    itemTemplate(item) {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    }

    groupedItemTemplate(item) {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.label}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card">
                <h5>Basic</h5>
                <AutoComplete value={this.state.selectedCountry1} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ selectedCountry1: e.value })} aria-label="Countries" />

                <h5>Grouped</h5>
                <AutoComplete value={this.state.selectedCity} suggestions={this.state.filteredCities} completeMethod={this.searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={this.groupedItemTemplate} onChange={(e) => this.setState({ selectedCity: e.value })} aria-label="Cities" />

                <h5>Dropdown, Templating and Force Selection</h5>
                <AutoComplete value={this.state.selectedCountry2} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" dropdown forceSelection itemTemplate={this.itemTemplate} onChange={(e) => this.setState({ selectedCountry2: e.value })} aria-label="Countries" />

                <h5>Virtual Scroll (100000 Items)</h5>
                <AutoComplete value={this.state.selectedItem} suggestions={this.state.filteredItems} completeMethod={this.searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => this.setState({ selectedItem: e.value })} aria-label="Items" />

                <h5>Multiple</h5>
                <span className="p-fluid">
                    <AutoComplete value={this.state.selectedCountries} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" multiple onChange={(e) => this.setState({ selectedCountries: e.value })} aria-label="Countries" />
                </span>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../service/CountryService';

export const AutoCompleteDemo = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const countryservice = new CountryService();

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

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const searchCity = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                _filteredCities.push({...country, ...{items: filteredItems}});
            }
        }

        setFilteredCities(_filteredCities)
    }

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.label}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Basic</h5>
            <AutoComplete value={selectedCountry1} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry1(e.value)} aria-label="Countries" />

            <h5>Grouped</h5>
            <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} aria-label="Cities"/>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry2(e.value)} aria-label="Countries" />

            <h5>Virtual Scroll (100000 Items)</h5>
            <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} aria-label="Items" />

            <h5>Multiple</h5>
            <span className="p-fluid">
                <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} aria-label="Countries" />
            </span>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../service/CountryService';

export const AutoCompleteDemo = () => {

    const [countries, setCountries] = useState<any>([]);
    const [selectedCountry1, setSelectedCountry1] = useState<any>(null);
    const [selectedCountry2, setSelectedCountry2] = useState<any>(null);
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const [selectedCountries, setSelectedCountries] = useState<any>(null);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [filteredCountries, setFilteredCountries] = useState<any>(null);
    const [filteredCities, setFilteredCities] = useState<any>(null);
    const [filteredItems, setFilteredItems] = useState<any>(null);
    const countryservice = new CountryService();

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

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event: { query: string }) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const searchCity = (event: { query: string }) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                _filteredCities.push({...country, ...{items: filteredItems}});
            }
        }

        setFilteredCities(_filteredCities)
    }

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    const itemTemplate = (item: any) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (item: any) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.label}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Basic</h5>
            <AutoComplete value={selectedCountry1} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry1(e.value)} aria-label="Countries" />

            <h5>Grouped</h5>
            <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} aria-label="Cities"/>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry2(e.value)} aria-label="Countries" />

            <h5>Virtual Scroll (100000 Items)</h5>
            <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} aria-label="Items" />

            <h5>Multiple</h5>
            <span className="p-fluid">
                <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} aria-label="Countries" />
            </span>
        </div>
    )
}
                `
            },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./CountryService.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/autocomplete/autocomplete.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { AutoComplete } = primereact.autocomplete;

const AutoCompleteDemo = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const countryservice = new CountryService();

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

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const searchCity = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                _filteredCities.push({...country, ...{items: filteredItems}});
            }
        }

        setFilteredCities(_filteredCities)
    }

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.label}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Basic</h5>
            <AutoComplete value={selectedCountry1} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry1(e.value)} aria-label="Countries" />

            <h5>Grouped</h5>
            <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} aria-label="Cities"/>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry2(e.value)} aria-label="Countries" />

            <h5>Virtual Scroll (100000 Items)</h5>
            <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} aria-label="Items" />

            <h5>Multiple</h5>
            <span className="p-fluid">
                <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} aria-label="Countries" />
            </span>
        </div>
    )
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
import { AutoComplete } from 'primereact/autocomplete';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/autocomplete/autocomplete.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>AutoComplete is used as a controlled component with <i>value</i> and <i>onChange</i> properties. In addition, the component
                        requires a list of <i>suggestions</i> and a <i>completeMethod</i> to query the results.</p>

<CodeHighlight>
{`
<AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry(e.value)} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const countries = // datasource

const searchCountry = (event) => {
    let filteredCountries = //suggestions
    setFilteredCountries(filteredCountries);
}

render() {
    return (
        <AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)} />
    );
}
`}
</CodeHighlight>

                    <h5>Dropdown</h5>
                    <p>Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using
                        dropdownMode property that takes "blank" or "current" as possible values.
                        "blank" is the default mode to send a query with an empty string whereas
                        "current" setting sends a query with the current value of the input.</p>

<CodeHighlight>
{`
<AutoComplete dropdown value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)} />
`}
</CodeHighlight>

                    <h5>Multiple Mode</h5>
                    <p>Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
<CodeHighlight>
{`
<AutoComplete multiple value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)} />
`}
</CodeHighlight>

                    <h5>Objects</h5>
                    <p>AutoComplete can also work with objects using the  <i>field</i> property that defines the label to display
                    as a suggestion. The value passed to the model would still be the object instance of a suggestion.
                    Here is an example with a Country object that has name and code fields such as &#123;name:"United States",code:"USA"&#125;.</p>

<CodeHighlight>
{`
<AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)} />
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
<AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)}/>
`}
</CodeHighlight>

                    <h5>Force Selection</h5>
                    <p>ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared
                    to make sure the value passed to the model is always one of the suggestions. Simply enable <i>forceSelection</i> to enforce that input is always from the suggestion list.</p>
<CodeHighlight>
{`
<AutoComplete forceSelection value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)} />
`}
</CodeHighlight>

                    <h5>Templating</h5>
                    <p>Custom content can be displayed using <i>itemTemplate</i> property that references a function or JSXElement or string which gets
                    the suggestion option and returns an element. Similarly <i>selectedItemTemplate</i> property is available
                    to customize the chips in multiple mode using the same approach.</p>

<CodeHighlight>
{`
<AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
itemTemplate(item) {
    //return custom element
}
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <p>Standard HTMLSpanElement properties are passed to the wrapping div element.<br/>In addition the component uses these properties:</p>
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
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the input element.</td>
                                </tr>
                                <tr>
                                    <td>type</td>
                                    <td>string</td>
                                    <td>text</td>
                                    <td>Type of the input element.</td>
                                </tr>
                                <tr>
                                    <td>suggestions</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of suggestions to display.</td>
                                </tr>
                                <tr>
                                    <td>field</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Field of a suggested object to resolve and display.</td>
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
                                    <td>forceSelection</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, autocomplete clears the manual input if it does not match of the suggestions to force only
                                    accepting values from the suggestions.</td>
                                </tr>
                                <tr>
                                    <td>autoHighlight</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, highlights the first item in the list by default.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>200px</td>
                                    <td>Maximum height of the suggestions panel.</td>
                                </tr>
                                <tr>
                                    <td>dropdown</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Displays a button next to the input field when enabled.</td>
                                </tr>
                                <tr>
                                    <td>dropdownMode</td>
                                    <td>string</td>
                                    <td>blank</td>
                                    <td>Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.</td>
                                </tr>
                                <tr>
                                    <td>dropdownAutoFocus</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Focus the input field when the dropdown button is clicked if enabled.</td>
                                </tr>
                                <tr>
                                    <td>multiple</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies if multiple values can be selected.</td>
                                </tr>
                                <tr>
                                    <td>minLength</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Minimum number of characters to initiate a search.</td>
                                </tr>
                                <tr>
                                    <td>delay</td>
                                    <td>number</td>
                                    <td>300</td>
                                    <td>Delay between keystrokes to wait before sending a query.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                                <tr>
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the input element.</td>
                                </tr>
                                <tr>
                                    <td>inputStyle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the input field.</td>
                                </tr>
                                <tr>
                                    <td>inputClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the input field.</td>
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
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Hint text for the input field.</td>
                                </tr>
                                <tr>
                                    <td>readOnly</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the input cannot be typed.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>maxlength</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Maximum number of character allows in the input field.</td>
                                </tr>
                                <tr>
                                    <td>size</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Size of the input field.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
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
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of a list item.</td>
                                </tr>
                                <tr>
                                    <td>selectedItemTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of a selected item.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of an option group item.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                                <tr>
                                    <td>dropdownIcon</td>
                                    <td>any</td>
                                    <td>pi pi-chevron-down</td>
                                    <td>Icon class of the dropdown icon.</td>
                                </tr>
                                <tr>
                                    <td>removeIcon</td>
                                    <td>any</td>
                                    <td>pi pi-times-circle</td>
                                    <td>Icon of the remove chip element in multiple mode.</td>
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
                                    <td>completeMethod</td>
                                    <td>
                                        event.originalEvent: browser event <br />
                                        event.query: Value to search with
                                    </td>
                                    <td>Callback to invoke to search for suggestions.</td>
                                </tr>
                                <tr>
                                    <td>onChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Value of the component</td>
                                    <td>Callback to invoke when autocomplete value changes.</td>
                                </tr>
                                <tr>
                                    <td>onFocus</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when autocomplete gets focus.</td>
                                </tr>
                                <tr>
                                    <td>onBlur</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when autocomplete loses focus.</td>
                                </tr>
                                <tr>
                                    <td>onSelect</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Value of the component</td>
                                    <td>Callback to invoke when a suggestion is selected.</td>
                                </tr>
                                <tr>
                                    <td>onUnselect</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Value of the component</td>
                                    <td>Callback to invoke when a selected value is removed.</td>
                                </tr>
                                <tr>
                                    <td>onDropdownClick</td>
                                    <td>
                                        event.originalEvent: browser event <br />
                                        event.query: Current value of the input field
                                    </td>
                                    <td>Callback to invoke to when dropdown button is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onClick</td>
                                    <td>event: Browser event </td>
                                    <td>Callback to invoke on click.</td>
                                </tr>
                                <tr>
                                    <td>onDblClick</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on double click.</td>
                                </tr>
                                <tr>
                                    <td>onMouseDown</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke to when a mouse button is pressed.</td>
                                </tr>
                                <tr>
                                    <td>onKeyUp</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke to when a key is released.</td>
                                </tr>
                                <tr>
                                    <td>onKeyPress</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke to when a key is pressed.</td>
                                </tr>
                                <tr>
                                    <td>onContextMenu</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on right-click.</td>
                                </tr>
                                <tr>
                                    <td>onClear</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when input is cleared by the user.</td>
                                </tr>
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes hidden.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes</p>
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
                                    <td>p-autocomplete</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-autocomplete-panel</td>
                                    <td>Overlay panel of suggestions.</td>
                                </tr>
                                <tr>
                                    <td>p-autocomplete-items</td>
                                    <td>List container of suggestions.</td>
                                </tr>
                                <tr>
                                    <td>p-autocomplete-item</td>
                                    <td>List item of a suggestion.</td>
                                </tr>
                                <tr>
                                    <td>p-autocomplete-token</td>
                                    <td>Element of a selected item in multiple mode.</td>
                                </tr>
                                <tr>
                                    <td>p-autocomplete-token-icon</td>
                                    <td>Close icon element of a selected item in multiple mode.</td>
                                </tr>
                                <tr>
                                    <td>p-autocomplete-token-label</td>
                                    <td>Label of a selected item in multiple mode.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role
                    in addition to <i>aria-autocomplete</i>, <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used
                    to instruct screen reader which option to read during keyboard navigation within the popup list.</p>
                    <p>In multiple mode, chip list uses <i>listbox</i> role with <i>aria-orientation</i> set to horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.</p>
                    <p>The popup list has an id that refers to the <i>aria-controls</i> attribute of the input element and uses <i>listbox</i> as the role. Each list item has <i>option</i> role and an id to match the <i>aria-activedescendant</i> of the input element.</p>
<CodeHighlight>
{`
<label htmlFor="ac1">Username</label>
<AutoComplete inputId="ac1" />

<span id="ac2">Email</span>
<AutoComplete aria-labelledby="ac2" />

<AutoComplete aria-label="City" />
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
                                    <td>Moves focus to the input element when popup is not visible.
                                        If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Highlights the previous item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Highlights the next item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Selects the highlighted item and closes the popup if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Highlights the first item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Highlights the last item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Hides the popup.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Chips Input Keyboard Support</h6>
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
                                    <td><i>backspace</i></td>
                                    <td>Deletes the previous chip if the input field is empty.</td>
                                </tr>
                                <tr>
                                    <td><i>left arrow</i></td>
                                    <td>Moves focus to the previous chip if available and input field is empty.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Chip Keyboard Support</h6>
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
                                    <td><i>left arrow</i></td>
                                    <td>Moves focus to the previous chip if available.</td>
                                </tr>
                                <tr>
                                    <td><i>right arrow</i></td>
                                    <td>Moves focus to the next chip, if there is none then input field receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>backspace</i></td>
                                    <td>Deletes the chips and adds focus to the input field.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>


                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'AutoCompleteDemo', sources: sources, service: 'CountryService', data: 'countries' })
                }
            </TabView>
        </div>
    )
})

export default AutoCompleteDoc;
