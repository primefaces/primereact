import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class AutoCompleteDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
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
            selectedCountries: null,
            filteredCountries: null
        };

        this.searchCountry = this.searchCountry.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.countryservice = new CountryService();
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

    itemTemplate(item) {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`showcase/demo/images/flag_placeholder.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card">
                <h5>Basic</h5>
                <AutoComplete value={this.state.selectedCountry1} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ selectedCountry1: e.value })} />

                <h5>Dropdown and Templating</h5>
                <AutoComplete value={this.state.selectedCountry2} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" dropdown itemTemplate={this.itemTemplate} onChange={(e) => this.setState({ selectedCountry2: e.value })} />

                <h5>Multiple</h5>
                <span className="p-fluid">
                    <AutoComplete value={this.state.selectedCountries} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" multiple onChange={(e) => this.setState({ selectedCountries: e.value })} />
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

const AutoCompleteDemo = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [filteredCountriesSingle, setFilteredCountriesSingle] = useState([]);
    const [filteredBrands, setFilteredBrands] = useState([]);
    const [filteredCountriesMultiple, setFilteredCountriesMultiple] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const countryservice = new CountryService();
    const brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];

    useEffect(() => {
        countryservice.getCountries().then(data => setCountriesData(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterCountrySingle = (event) => {
        setTimeout(() => {
            let results = countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountriesSingle(results);
        }, 250);
    }

    const filterBrands = (event) => {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...brands];
            }
            else {
                results = brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredBrands(results);
        }, 250);
    }

    const filterCountryMultiple = (event) => {
        setTimeout(() => {
            let results = countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });

            setFilteredCountriesMultiple(results);
        }, 250);
    }

    const itemTemplate = (brand) => {
        return (
            <div className="p-clearfix">
                <img alt={brand} src={\`showcase/demo/images/car/\${brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
                <div style={{ fontSize: '16px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
            </div>
        );
    }

    return (
        <div>
            <h5>Basic</h5>
            <AutoComplete value={selectedCountry} suggestions={filteredCountriesSingle} completeMethod={filterCountrySingle} field="name"
                size={30} placeholder="Countries" minLength={1} onChange={(e) => setSelectedCountry(e.value)} />
            <span style={{ marginLeft: '10px' }}>Country: {selectedCountry ? selectedCountry.name || selectedCountry : 'none'}</span>

            <h5>Advanced</h5>
            <AutoComplete value={selectedBrand} suggestions={filteredBrands} completeMethod={filterBrands} size={30} minLength={1}
                placeholder="Hint: type 'v' or 'f'" dropdown itemTemplate={itemTemplate} onChange={(e) => setSelectedBrand(e.value)} />
            <span style={{ marginLeft: '10px' }}>Brand: {selectedBrand || 'none'}</span>

            <h5>Multiple</h5>
            <span className="p-fluid">
                <AutoComplete value={selectedCountries} suggestions={filteredCountriesMultiple} completeMethod={filterCountryMultiple}
                    minLength={1} placeholder="Countries" field="name" multiple onChange={(e) => setSelectedCountries(e.value)} />
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

const AutoCompleteDemo = () => {
    const [countriesData, setCountriesData] = useState<any[]>([]);
    const [filteredCountriesSingle, setFilteredCountriesSingle] = useState<any[]>([]);
    const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
    const [filteredCountriesMultiple, setFilteredCountriesMultiple] = useState<any[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState<any[]>([]);
    const countryservice = new CountryService();
    const brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];

    useEffect(() => {
        countryservice.getCountries().then(data => setCountriesData(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterCountrySingle = (event: { query: string }) => {
        setTimeout(() => {
            let results = countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountriesSingle(results);
        }, 250);
    }

    const filterBrands = (event: { query: string }) => {
        setTimeout(() => {
            let results: string[];

            if (event.query.length === 0) {
                results = [...brands];
            }
            else {
                results = brands.filter((brand: string) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredBrands(results);
        }, 250);
    }

    const filterCountryMultiple = (event: { query: string }) => {
        setTimeout(() => {
            let results = countriesData.filter((country: any) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });

            setFilteredCountriesMultiple(results);
        }, 250);
    }

    const itemTemplate = (brand: string) => {
        return (
            <div className="p-clearfix">
                <img alt={brand} src={\`showcase/demo/images/car/\${brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
                <div style={{ fontSize: '16px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
            </div>
        );
    }

    return (
        <div>
            <h5>Basic</h5>
            <AutoComplete value={selectedCountry} suggestions={filteredCountriesSingle} completeMethod={filterCountrySingle} field="name"
                size={30} placeholder="Countries" minLength={1} onChange={(e) => setSelectedCountry(e.value)} />
            <span style={{ marginLeft: '10px' }}>Country: {selectedCountry ? selectedCountry.name || selectedCountry : 'none'}</span>

            <h5>Advanced</h5>
            <AutoComplete value={selectedBrand} suggestions={filteredBrands} completeMethod={filterBrands} size={30} minLength={1}
                placeholder="Hint: type 'v' or 'f'" dropdown itemTemplate={itemTemplate} onChange={(e) => setSelectedBrand(e.value)} />
            <span style={{ marginLeft: '10px' }}>Brand: {selectedBrand || 'none'}</span>

            <h5>Multiple</h5>
            <span className="p-fluid">
                <AutoComplete value={selectedCountries} suggestions={filteredCountriesMultiple} completeMethod={filterCountryMultiple}
                    minLength={1} placeholder="Countries" field="name" multiple onChange={(e) => setSelectedCountries(e.value)} />
            </span>
        </div>
    )
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
import { AutoComplete } from 'primereact/autocomplete';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>AutoComplete is used as a controlled component with <i>value</i> and <i>onChange</i> properties. In addition, the component
                            requires a list of <i>suggestions</i> and a <i>completeMethod</i> to query the results.</p>

<CodeHighlight>
{`
<AutoComplete value={this.state.selectedCountry} suggestions={this.state.filteredCountries}
            completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ selectedCountry: e.value })} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
constructor(props) {
    super(props);
    this.state = {
        selectedCountry: null
        filteredCountries: null
    };

    this.countries: ['Country-1', 'Country-2', 'Country-3', 'Country-4', 'Country-5'];
    this.searchCountry = this.searchCountry.bind(this);
    this.countryservice = new CountryService();
}

searchCountry(event) {
    setTimeout(() => {
        let filteredCountries;
        if (!event.query.trim().length) {
            filteredCountries = [...this.countries];
        }
        else {
            filteredCountries = this.countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }

        this.setState({ filteredCountries });
    }, 250);
}

render() {
    return (
        <AutoComplete value={this.state.selectedCountry} suggestions={this.state.filteredCountries}
            completeMethod={this.searchCountry} onChange={(e) => this.setState({ selectedCountry: e.value })} />
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
<AutoComplete dropdown value={this.state.selectedCountry} suggestions={this.state.filteredCountries}
    completeMethod={this.searchCountry} onChange={(e) => this.setState({ selectedCountry: e.value })} />
`}
</CodeHighlight>

                        <h5>Multiple Mode</h5>
                        <p>Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
<CodeHighlight>
{`
<AutoComplete multiple value={this.state.selectedCountry} suggestions={this.state.filteredCountries}
    completeMethod={this.searchCountry} onChange={(e) => this.setState({ selectedCountry: e.value })} />
`}
</CodeHighlight>

                        <h5>Objects</h5>
                        <p>AutoComplete can also work with objects using the  <i>field</i> property that defines the label to display
                        as a suggestion. The value passed to the model would still be the object instance of a suggestion.
                        Here is an example with a Country object that has name and code fields such as &#123;name:"United States",code:"USA"&#125;.</p>

<CodeHighlight>
{`
<AutoComplete field="name" value={this.state.selectedCountry} suggestions={this.state.filteredCountries}
    completeMethod={this.searchCountry} onChange={(e) => this.setState({ selectedCountry: e.value })} />
`}
</CodeHighlight>

                        <h5>Templating</h5>
                        <p>Custom content can be displayed using <i>itemTemplate</i> property that references a function or JSXElement or string which gets
                        the suggestion option and returns an element. Similarly <i>selectedItemTemplate</i> property is available
                        to customize the chips in multiple mode using the same approach.</p>

<CodeHighlight>
{`
<AutoComplete value={this.state.selectedCountry} suggestions={this.state.filteredCountries}
    completeMethod={this.searchCountry} onChange={(e) => this.setState({ selectedCountry: e.value })}
    itemTemplate={this.itemTemplate} />
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
                                        <td>readonly</td>
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
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the overlay panel should be mounted.</td>
                                    </tr>
                                    <tr>
                                        <td>tabindex</td>
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
                                        <td>ariaLabelledBy</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="AutoCompleteDemo" sources={this.sources} service="CountryService" data="countries" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
