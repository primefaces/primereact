import React, { Component } from 'react';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';

export class InvalidDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { CascadeSelect } from 'primereact/cascadeselect';
import { CountryService } from '../service/CountryService';

export class InvalidDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: null,
            filteredCountries: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            value1: '',
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: '',
            value10: null
        };

        this.cascadeSelectCountries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    },

                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    },

                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];

        this.countryservice = new CountryService();
        this.searchCountry = this.searchCountry.bind(this);
    }

    componentDidMount() {
        this.countryservice.getCountries().then(data => this.setState({ countries: data }));
    }

    searchCountry(event) {
        setTimeout(() => {
            let results = this.state.countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            this.setState({ filteredCountries: results });
        }, 250);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="p-fluid p-grid">
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="inputtext">InputText</label>
                            <InputText id="inputtext" value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="autocomplete">AutoComplete</label>
                            <AutoComplete value={this.state.value2} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ value2: e.value })} className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="calendar">Calendar</label>
                            <Calendar id="calendar" value={this.state.value3} onChange={(e) => this.setState({ value3: e.value })} className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="chips">Chips</label>
                            <Chips id="chips" value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="inputmask">InputMask</label>
                            <InputMask id="inputmask" value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="inputnumber">InputNumber</label>
                            <InputNumber id="inputnumber" value={this.state.value6} onChange={(e) => this.setState({ value6: e.value })} className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="cascadeselect">CascadeSelect</label>
                            <CascadeSelect id="cascadeselect" value={this.state.value10} options={this.cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={event => this.setState({ value10: event.value })} className="p-invalid"/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="dropdown">Dropdown</label>
                            <Dropdown id="dropdown" value={this.state.value7} options={this.state.cities} onChange={(e) => this.setState({ value7: e.value })} optionLabel="name" className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="multiselect">MultiSelect</label>
                            <MultiSelect id="multiselect" value={this.state.value8} options={this.state.cities} onChange={(e) => this.setState({ value8: e.value })} optionLabel="name" className="p-invalid" />
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="textarea">Textarea</label>
                            <InputTextarea id="textarea" value={this.state.value9} onChange={(e) => this.setState({ value9: e.target.value })} rows={3} className="p-invalid" />
                        </div>
                    </div>
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
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { CascadeSelect } from 'primereact/cascadeselect';
import { CountryService } from '../service/CountryService';

const InvalidDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);

    const countryservice = new CountryService();
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const cascadeSelectCountries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let results = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountries(results);
        }, 250);
    }

    return (
        <div>
            <div className="card">
                <div className="p-fluid p-grid">
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="autocomplete">AutoComplete</label>
                        <AutoComplete value={value2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue2(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="chips">Chips</label>
                        <Chips id="chips" value={value4} onChange={(e) => setValue4(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="inputmask">InputMask</label>
                        <InputMask id="inputmask" value={value5} onChange={(e) => setValue5(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="inputnumber">InputNumber</label>
                        <InputNumber id="inputnumber" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="cascadeselect">CascadeSelect</label>
                        <CascadeSelect id="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={(e) => setValue10(e.value)} className="p-invalid"/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="dropdown">Dropdown</label>
                        <Dropdown id="dropdown" value={value7} options={cities} onChange={(e) => setValue7(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="multiselect">MultiSelect</label>
                        <MultiSelect id="multiselect" value={value8} options={cities} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="textarea">Textarea</label>
                        <InputTextarea id="textarea" value={value9} onChange={(e) => setValue9(e.value)} rows={3} className="p-invalid" />
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { CascadeSelect } from 'primereact/cascadeselect';
import { CountryService } from '../service/CountryService';

const InvalidDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);

    const cascadeSelectCountries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    const countryservice = new CountryService();
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let results = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountries(results);
        }, 250);
    }

    return (
        <div>
            <div className="card">
                <div className="p-fluid p-grid">
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="autocomplete">AutoComplete</label>
                        <AutoComplete value={value2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue2(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="chips">Chips</label>
                        <Chips id="chips" value={value4} onChange={(e) => setValue4(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="inputmask">InputMask</label>
                        <InputMask id="inputmask" value={value5} onChange={(e) => setValue5(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="inputnumber">InputNumber</label>
                        <InputNumber id="inputnumber" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="cascadeselect">CascadeSelect</label>
                        <CascadeSelect id="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={(e) => setValue10(e.value)} className="p-invalid"/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="dropdown">Dropdown</label>
                        <Dropdown id="dropdown" value={value7} options={cities} onChange={(e) => setValue7(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="multiselect">MultiSelect</label>
                        <MultiSelect id="multiselect" value={value8} options={cities} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="textarea">Textarea</label>
                        <InputTextarea id="textarea" value={value9} onChange={(e) => setValue9(e.value)} rows={3} className="p-invalid" />
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
            },
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'InvalidDemo', sources: this.sources, service: 'CountryService', data: 'countries' })
                    }
                </TabView>
            </div>
        );
    }
}
