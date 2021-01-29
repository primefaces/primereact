import React, { Component } from 'react';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class FloatLabelDoc extends Component {

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
import { CascadeSelect } from 'primereact/cascadeselect';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../service/CountryService';

export class FloatLabelDemo extends Component {

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
            value2: '',
            value3: '',
            value4: '',
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: '',
            value10: null,
            value11: null,
            value12: null,
            value13: ''

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
                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-fluid p-grid">
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <InputText id="inputtext" value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} />
                                    <label htmlFor="inputtext">InputText</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-search" />
                                    <InputText id="lefticon" value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />
                                    <label htmlFor="lefticon">Left Icon</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-spin pi-spinner" />
                                    <InputText id="righticon" value={this.state.value3} onChange={(e) => this.setState({ value3: e.target.value })} />
                                    <label htmlFor="righticon">Right Icon</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <AutoComplete value={this.state.value4} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ value4: e.value })} />
                                    <label htmlFor="autocomplete">AutoComplete</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <Calendar id="calendar" value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} />
                                    <label htmlFor="calendar">Calendar</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <Chips id="chips" value={this.state.value6} onChange={(e) => this.setState({ value6: e.value })} />
                                    <label htmlFor="chips">Chips</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <InputMask id="inputmask" value={this.state.value7} onChange={(e) => this.setState({ value7: e.value })} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                                    <label htmlFor="inputmask">InputMask</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <InputNumber id="inputnumber" value={this.state.value8} onChange={(e) => this.setState({ value8: e.value })} />
                                    <label htmlFor="inputnumber">InputNumber</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <span className="p-float-label">
                                        <InputText id="inputgroup" type="text" value={this.state.value9} onChange={(e) => this.setState({ value9: e.target.value })} />
                                        <label htmlFor="inputgroup">InputGroup</label>
                                    </span>
                                </div>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <CascadeSelect id="cascadeselect" value={this.state.value10} options={this.cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={event => this.setState({ value10: event.value })} />
                                    <label htmlFor="cascadeselect">CascadeSelect</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <Dropdown id="dropdown" value={this.state.value11} options={this.state.cities} onChange={(e) => this.setState({ value11: e.value })} optionLabel="name" />
                                    <label htmlFor="dropdown">Dropdown</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <MultiSelect id="multiselect" value={this.state.value12} options={this.state.cities} onChange={(e) => this.setState({ value12: e.value })} optionLabel="name" />
                                    <label htmlFor="multiselect">MultiSelect</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12">
                                <span className="p-float-label">
                                    <InputTextarea id="textarea" value={this.state.value13} onChange={(e) => this.setState({ value13: e.target.value })} rows={3} />
                                    <label htmlFor="textarea">Textarea</label>
                                </span>
                            </div>
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
import { CascadeSelect } from 'primereact/cascadeselect';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../service/CountryService';

const FloatLabelDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState(null);
    const [value13, setValue13] = useState('');

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
                        <span className="p-float-label">
                            <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
                            <label htmlFor="inputtext">InputText</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)} />
                            <label htmlFor="lefticon">Left Icon</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText id="righticon" value={value3} onChange={(e) => setValue3(e.target.value)} />
                            <label htmlFor="righticon">Right Icon</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <AutoComplete value={value4} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue4(e.value)} />
                            <label htmlFor="autocomplete">AutoComplete</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Calendar id="calendar" value={value5} onChange={(e) => setValue5(e.value)} />
                            <label htmlFor="calendar">Calendar</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Chips id="chips" value={value6} onChange={(e) => setValue6(e.value)} />
                            <label htmlFor="chips">Chips</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputMask id="inputmask" value={value7} onChange={(e) => setValue7(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                            <label htmlFor="inputmask">InputMask</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputNumber id="inputnumber" value={value8} onChange={(e) => setValue8(e.value)} />
                            <label htmlFor="inputnumber">InputNumber</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <span className="p-float-label">
                                <InputText id="inputgroup" type="text" value={value9} onChange={(e) => setValue9(e.target.value)} />
                                <label htmlFor="inputgroup">InputGroup</label>
                            </span>
                        </div>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <CascadeSelect id="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={event => setValue10(event.value)} />
                            <label htmlFor="cascadeselect">CascadeSelect</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Dropdown id="dropdown" value={value11} options={cities} onChange={(e) => setValue11(e.value)} optionLabel="name" />
                            <label htmlFor="dropdown">Dropdown</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <MultiSelect id="multiselect" value={value12} options={cities} onChange={(e) => setValue12(e.value)} optionLabel="name" />
                            <label htmlFor="multiselect">MultiSelect</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputTextarea id="textarea" value={value13} onChange={(e) => setValue13(e.target.value)} rows={3} />
                            <label htmlFor="textarea">Textarea</label>
                        </span>
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
import { CascadeSelect } from 'primereact/cascadeselect';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../service/CountryService';

const FloatLabelDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState(null);
    const [value13, setValue13] = useState('');

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
                        <span className="p-float-label">
                            <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
                            <label htmlFor="inputtext">InputText</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)} />
                            <label htmlFor="lefticon">Left Icon</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText id="righticon" value={value3} onChange={(e) => setValue3(e.target.value)} />
                            <label htmlFor="righticon">Right Icon</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <AutoComplete value={value4} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue4(e.value)} />
                            <label htmlFor="autocomplete">AutoComplete</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Calendar id="calendar" value={value5} onChange={(e) => setValue5(e.value)} />
                            <label htmlFor="calendar">Calendar</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Chips id="chips" value={value6} onChange={(e) => setValue6(e.value)} />
                            <label htmlFor="chips">Chips</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputMask id="inputmask" value={value7} onChange={(e) => setValue7(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                            <label htmlFor="inputmask">InputMask</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputNumber id="inputnumber" value={value8} onChange={(e) => setValue8(e.value)} />
                            <label htmlFor="inputnumber">InputNumber</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <span className="p-float-label">
                                <InputText id="inputgroup" type="text" value={value9} onChange={(e) => setValue9(e.target.value)} />
                                <label htmlFor="inputgroup">InputGroup</label>
                            </span>
                        </div>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <CascadeSelect id="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={event => setValue10(event.value)} />
                            <label htmlFor="cascadeselect">CascadeSelect</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Dropdown id="dropdown" value={value11} options={cities} onChange={(e) => setValue11(e.value)} optionLabel="name" />
                            <label htmlFor="dropdown">Dropdown</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <MultiSelect id="multiselect" value={value12} options={cities} onChange={(e) => setValue12(e.value)} optionLabel="name" />
                            <label htmlFor="multiselect">MultiSelect</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputTextarea id="textarea" value={value13} onChange={(e) => setValue13(e.target.value)} rows={3} />
                            <label htmlFor="textarea">Textarea</label>
                        </span>
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
                        useLiveEditorTabs({ name: 'FloatLabelDemo', sources: this.sources, service: 'CountryService', data: 'countries' })
                    }
                </TabView>
            </div>
        );
    }
}
