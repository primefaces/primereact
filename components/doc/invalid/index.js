import React, { memo } from 'react';
import { TabView } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';

const InvalidDoc = memo(() => {

    const sources = {
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
import { TreeSelect } from 'primereact/treeselect';
import { Password } from 'primereact/password';
import { CountryService } from '../service/CountryService';
import { NodeService } from '../service/NodeService';

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
            nodes: null,
            selectedNodeKey: null,
            value1: '',
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: '',
            value10: null,
            value11: ''
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
        this.nodeService = new NodeService();
        this.searchCountry = this.searchCountry.bind(this);
    }

    componentDidMount() {
        this.countryservice.getCountries().then(data => this.setState({ countries: data }));
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
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
                    <div className="p-fluid grid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="inputtext">InputText</label>
                            <InputText id="inputtext" value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="autocomplete">AutoComplete</label>
                            <AutoComplete value={this.state.value2} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ value2: e.value })} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="calendar">Calendar</label>
                            <Calendar id="calendar" value={this.state.value3} onChange={(e) => this.setState({ value3: e.value })} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="chips">Chips</label>
                            <Chips id="chips" value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="inputmask">InputMask</label>
                            <InputMask id="inputmask" value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="inputnumber">InputNumber</label>
                            <InputNumber inputId="inputnumber" value={this.state.value6} onChange={(e) => this.setState({ value6: e.value })} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="cascadeselect">CascadeSelect</label>
                            <CascadeSelect inputId="cascadeselect" value={this.state.value10} options={this.cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={event => this.setState({ value10: event.value })} className="p-invalid"/>
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="dropdown">Dropdown</label>
                            <Dropdown inputId="dropdown" value={this.state.value7} options={this.state.cities} onChange={(e) => this.setState({ value7: e.value })} optionLabel="name" className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="multiselect">MultiSelect</label>
                            <MultiSelect inputId="multiselect" value={this.state.value8} options={this.state.cities} onChange={(e) => this.setState({ value8: e.value })} optionLabel="name" className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="treeselect">TreeSelect</label>
                            <TreeSelect inputId="treeselect" value={this.state.selectedNodeKey} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKey: e.value })} className="p-invalid"></TreeSelect>
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="password">Password</label>
                            <Password inputId="password" value={this.state.value9} onChange={(e) => this.setState({ value9: e.target.value })} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="textarea">Textarea</label>
                            <InputTextarea id="textarea" value={this.state.value11} onChange={(e) => this.setState({ value11: e.target.value })} rows={3} className="p-invalid" />
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
import { TreeSelect } from 'primereact/treeselect';
import { Password } from 'primereact/password';
import { CountryService } from '../service/CountryService';
import { NodeService } from '../service/NodeService';

const InvalidDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
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
    const [value11, setValue11] = useState('');

    const countryservice = new CountryService();
    const nodeService = new NodeService();
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
        nodeService.getTreeNodes().then(data => setNodes(data));
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
                <div className="p-fluid grid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="autocomplete">AutoComplete</label>
                        <AutoComplete value={value2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue2(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="chips">Chips</label>
                        <Chips id="chips" value={value4} onChange={(e) => setValue4(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputmask">InputMask</label>
                        <InputMask id="inputmask" value={value5} onChange={(e) => setValue5(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputnumber">InputNumber</label>
                        <InputNumber inputId="inputnumber" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="cascadeselect">CascadeSelect</label>
                        <CascadeSelect inputId="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={(e) => setValue10(e.value)} className="p-invalid"/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="dropdown">Dropdown</label>
                        <Dropdown inputId="dropdown" value={value7} options={cities} onChange={(e) => setValue7(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiselect">MultiSelect</label>
                        <MultiSelect inputId="multiselect" value={value8} options={cities} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="treeselect">TreeSelect</label>
                        <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} className="p-invalid"></TreeSelect>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="password">Password</label>
                        <Password inputId="password" value={value9} onChange={(e) => setValue9(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="textarea">Textarea</label>
                        <InputTextarea id="textarea" value={value11} onChange={(e) => setValue9(e.value)} rows={3} className="p-invalid" />
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
import { TreeSelect } from 'primereact/treeselect';
import { Password } from 'primereact/password';
import { CountryService } from '../service/CountryService';
import { NodeService } from '../service/NodeService';

const InvalidDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
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
    const [value11, setValue11] = useState('');

    const countryservice = new CountryService();
    const nodeService = new NodeService();
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
        nodeService.getTreeNodes().then(data => setNodes(data));
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
                <div className="p-fluid grid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="autocomplete">AutoComplete</label>
                        <AutoComplete value={value2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue2(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="chips">Chips</label>
                        <Chips id="chips" value={value4} onChange={(e) => setValue4(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputmask">InputMask</label>
                        <InputMask id="inputmask" value={value5} onChange={(e) => setValue5(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputnumber">InputNumber</label>
                        <InputNumber inputId="inputnumber" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="cascadeselect">CascadeSelect</label>
                        <CascadeSelect inputId="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={(e) => setValue10(e.value)} className="p-invalid"/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="dropdown">Dropdown</label>
                        <Dropdown inputId="dropdown" value={value7} options={cities} onChange={(e) => setValue7(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiselect">MultiSelect</label>
                        <MultiSelect inputId="multiselect" value={value8} options={cities} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="treeselect">TreeSelect</label>
                        <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} className="p-invalid"></TreeSelect>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="password">Password</label>
                        <Password inputId="password" value={value9} onChange={(e) => setValue9(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="textarea">Textarea</label>
                        <InputTextarea id="textarea" value={value11} onChange={(e) => setValue9(e.value)} rows={3} className="p-invalid" />
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./CountryService.js"></script>
        <script src="./NodeService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>
        <script src="https://unpkg.com/primereact/autocomplete/autocomplete.min.js"></script>
        <script src="https://unpkg.com/primereact/calendar/calendar.min.js"></script>
        <script src="https://unpkg.com/primereact/cascadeselect/cascadeselect.min.js"></script>
        <script src="https://unpkg.com/primereact/chips/chips.min.js"></script>
        <script src="https://unpkg.com/primereact/dropdown/dropdown.min.js"></script>
        <script src="https://unpkg.com/primereact/inputmask/inputmask.min.js"></script>
        <script src="https://unpkg.com/primereact/inputnumber/inputnumber.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtextarea/inputtextarea.min.js"></script>
        <script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>
        <script src="https://unpkg.com/primereact/tree/tree.min.js"></script>
        <script src="https://unpkg.com/primereact/treeselect/treeselect.min.js"></script>
        <script src="https://unpkg.com/primereact/password/password.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { InputText } = primereact.inputtext;
const { AutoComplete } = primereact.autocomplete;
const { Calendar } = primereact.calendar;
const { Chips } = primereact.chips;
const { Dropdown } = primereact.dropdown;
const { InputMask } = primereact.inputmask;
const { InputNumber } = primereact.inputnumber;
const { InputTextarea } = primereact.inputtextarea;
const { MultiSelect } = primereact.multiselect;
const { CascadeSelect } = primereact.cascadeselect;
const { TreeSelect } = primereact.treeselect;
const { Password } = primereact.password;

const InvalidDemo = () => {
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
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
    const [value11, setValue11] = useState('');

    const countryservice = new CountryService();
    const nodeService = new NodeService();
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
        nodeService.getTreeNodes().then(data => setNodes(data));
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
                <div className="p-fluid grid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="autocomplete">AutoComplete</label>
                        <AutoComplete value={value2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue2(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="chips">Chips</label>
                        <Chips id="chips" value={value4} onChange={(e) => setValue4(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputmask">InputMask</label>
                        <InputMask id="inputmask" value={value5} onChange={(e) => setValue5(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="inputnumber">InputNumber</label>
                        <InputNumber inputId="inputnumber" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="cascadeselect">CascadeSelect</label>
                        <CascadeSelect inputId="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={(e) => setValue10(e.value)} className="p-invalid"/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="dropdown">Dropdown</label>
                        <Dropdown inputId="dropdown" value={value7} options={cities} onChange={(e) => setValue7(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiselect">MultiSelect</label>
                        <MultiSelect inputId="multiselect" value={value8} options={cities} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="treeselect">TreeSelect</label>
                        <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} className="p-invalid"></TreeSelect>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="password">Password</label>
                        <Password inputId="password" value={value9} onChange={(e) => setValue9(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="textarea">Textarea</label>
                        <InputTextarea id="textarea" value={value11} onChange={(e) => setValue9(e.value)} rows={3} className="p-invalid" />
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'InvalidDemo', sources: sources, service: 'CountryService, NodeService', data: 'countries, treenodes' })
                }
            </TabView>
        </div>
    );
})

export default InvalidDoc;
