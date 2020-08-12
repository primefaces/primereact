import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { InputText } from "../../components/inputtext/InputText";
import { AutoComplete } from "../../components/autocomplete/AutoComplete";
import { CountryService } from "../service/CountryService";
import { Calendar } from "../../components/calendar/Calendar";
import { Chips } from "../../components/chips/Chips";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { InputMask } from "../../components/inputmask/InputMask";
import { InputNumber } from "../../components/inputnumber/InputNumber";
import { InputTextarea } from "../../components/inputtextarea/InputTextarea";
import { MultiSelect } from "../../components/multiselect/MultiSelect";
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

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
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: '',
            value8: null,
            value9: null,
            value10: ''
        };

        this.countryservice = new CountryService();
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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="floatLabel" showInputStyle>
                        <h1>Float Label</h1>
                        <p>A floating label is implemented by wrapping the input and the label inside a container having .p-float-label style class.</p>
                    </AppInlineHeader>
                </div>

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
                                <span className="p-float-label">
                                    <AutoComplete value={this.state.value2} suggestions={this.state.filteredCountries} onComplete={this.searchCountry} field="name" />
                                    <label htmlFor="autocomplete">AutoComplete</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <Calendar id="calendar" value={this.state.value3} onChange={(e) => this.setState({ value3: e.value })} />
                                    <label htmlFor="calendar">Calendar</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <Chips id="chips" value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} />
                                    <label htmlFor="chips">Chips</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <InputMask id="inputmask" value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                                    <label htmlFor="inputmask">InputMask</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <InputNumber id="inputnumber" value={this.state.value6} onChange={(e) => this.setState({ value6: e.value })} />
                                    <label htmlFor="inputnumber">InputNumber</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <span className="p-float-label">
                                        <InputText id="inputgroup" type="text" value={this.state.value7} onChange={(e) => this.setState({ value7: e.target.value })} />
                                        <label htmlFor="inputgroup">InputGroup</label>
                                    </span>
                                </div>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <Dropdown id="dropdown" value={this.state.value8} options={this.state.cities} onChange={(e) => this.setState({ value8: e.value })} optionLabel="name" />
                                    <label htmlFor="dropdown">Dropdown</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <MultiSelect id="multiselect" value={this.state.value9} options={this.state.cities} onChange={(e) => this.setState({ value9: e.value })} optionLabel="name" />
                                    <label htmlFor="multiselect">MultiSelect</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <span className="p-float-label">
                                    <InputTextarea id="textarea" value={this.state.value10} onChange={(e) => this.setState({ value10: e.target.value })} rows={3} />
                                    <label htmlFor="textarea">Textarea</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <FloatLabelDoc />
            </div>
        );
    }
}


class FloatLabelDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {AutoComplete} from 'primereact/autocomplete';
import {Calendar} from 'primereact/calendar';
import {Chips} from 'primereact/chips';
import {Dropdown} from 'primereact/dropdown';
import {InputMask} from 'primereact/inputmask';
import {InputNumber} from 'primereact/inputnumber';
import {InputTextarea} from 'primereact/inputtextarea';
import {MultiSelect} from 'primereact/multiselect';
import {Password} from 'primereact/password';
import {CountryService} from "../service/CountryService";

export class FloatLabelDemo extends Component {

    constructor() {
        super();
        this.state = {
            inputtextValue: '',
            countriesData: [],
            filteredCountriesSingle: null,
            calendarValue: null,
            chipsValue: [],
            city: null,
            maskValue: null,
            numberValue: null,
            textareaValue: '',
            carsMultiselect: [],
            country: null
        }
        this.filterCountrySingle = this.filterCountrySingle.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.countryservice = new CountryService();
    }

    componentDidMount() {
        this.countryservice.getCountries().then(data => this.setState({ countriesData: data }));
    }

    filterCountrySingle(event) {
        setTimeout(() => {
            let results = this.state.countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            this.setState({filteredCountriesSingle: results});
        }, 250);
    }

    onCityChange(e) {
        this.setState({city: e.value});
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

        const cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        return (
            <div>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <h3>InputText</h3>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({inputtextValue: e.target.value})}/>
                            <label htmlFor="float-input">Username</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>AutoComplete</h3>
                        <span className="p-float-label">
                            <AutoComplete id="float-auto" value={this.state.country} suggestions={this.state.filteredCountriesSingle}
                                            completeMethod={this.filterCountrySingle} field="name" size={30} minLength={1} onChange={(e) => this.setState({country: e.value})}/>
                            <label htmlFor="float-auto">Countries</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Calendar</h3>
                        <span className="p-float-label">
                            <Calendar id="float-claendar" value={this.state.calendarValue} onChange={(e) => this.setState({calendarValue: e.value})} />
                            <label htmlFor="float-calendar">Select a Date</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Chips</h3>
                        <span className="p-float-label">
                            <Chips id="float-chips" value={this.state.chipsValue} onChange={(e) => this.setState({chipsValue: e.value})}/>
                            <label htmlFor="float-chips">Enter a Text</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Dropdown</h3>
                        <span className="p-float-label">
                            <Dropdown id="float-dropdown" value={this.state.city} options={cities} ariaLabel="Test" onChange={this.onCityChange} optionLabel="name"/>
                            <label htmlFor="float-dropdown">Select City</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>InputMask</h3>
                        <span className="p-float-label">
                            <InputMask id="float-mask" mask="99-999999" value={this.state.maskValue} onChange={(e) => this.setState({maskValue: e.value})}/>
                            <label htmlFor="float-mask">99-999999</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>InputNumber</h3>
                        <span className="p-float-label">
                            <InputNumber id="float-number" value={this.state.numberValue} onChange={(e) => this.setState({numberValue: e.target.value})}/>
                            <label htmlFor="float-number">Number</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>KeyFilter</h3>
                        <span className="p-float-label">
                            <InputText id="float-keyfilter" keyfilter="int"/>
                            <label htmlFor="float-keyfilter">Integers</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>MultiSelect</h3>
                        <span className="p-float-label">
                            <MultiSelect id="float-multiselect" value={this.state.carsMultiselect} options={cars} onChange={(e) => this.setState({carsMultiselect: e.value})}
                                            filter={true} filterPlaceholder="Search"/>
                            <label htmlFor="float-multiselect">Choose</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Password</h3>
                        <span className="p-float-label">
                            <Password id="float-password"/>
                            <label htmlFor="float-password">Password</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>InputTextarea</h3>
                        <span className="p-float-label">
                            <InputTextarea id="float-textarea" value={this.state.textareaValue} onChange={(e) => this.setState({textareaValue: e.target.value})} rows={5} cols={30}/>
                            <label htmlFor="float-textarea">Your Message</label>
                        </span>
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
import {InputText} from 'primereact/inputtext';
import {AutoComplete} from 'primereact/autocomplete';
import {Calendar} from 'primereact/calendar';
import {Chips} from 'primereact/chips';
import {Dropdown} from 'primereact/dropdown';
import {InputMask} from 'primereact/inputmask';
import {InputNumber} from 'primereact/inputnumber';
import {InputTextarea} from 'primereact/inputtextarea';
import {MultiSelect} from 'primereact/multiselect';
import {Password} from 'primereact/password';
import {CountryService} from "../service/CountryService";

const FloatLabelDemo = () => {
    const [inputtextValue, setInputtextValue] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [filteredCountriesSingle, setFilteredCountriesSingle] = useState(null);
    const [calendarValue, setCalendarValue] = useState(null);
    const [chipsValue, setChipsValue] = useState([]);
    const [city, setCity] = useState(null);
    const [maskValue, setMaskValue] = useState(null);
    const [numberValue, setNumberValue] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');
    const [carsMultiselect, setCarsMultiselect] = useState([]);
    const [country, setCountry] = useState(null);
    const countryservice = new CountryService();

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

    const onCityChange = (e) => {
        setCity(e.value);
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

    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    return (
        <div>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>InputText</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size={30} value={inputtextValue} onChange={(e) => setInputtextValue(e.target.value)}/>
                        <label htmlFor="float-input">Username</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>AutoComplete</h3>
                    <span className="p-float-label">
                        <AutoComplete id="float-auto" value={country} suggestions={filteredCountriesSingle}
                                        completeMethod={filterCountrySingle} field="name" size={30} minLength={1} onChange={(e) => setCountry(e.value)}/>
                        <label htmlFor="float-auto">Countries</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Calendar</h3>
                    <span className="p-float-label">
                        <Calendar id="float-claendar" value={calendarValue} onChange={(e) => setCalendarValue(e.value)} />
                        <label htmlFor="float-calendar">Select a Date</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Chips</h3>
                    <span className="p-float-label">
                        <Chips id="float-chips" value={chipsValue} onChange={(e) => setChipsValue(e.value)}/>
                        <label htmlFor="float-chips">Enter a Text</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Dropdown</h3>
                    <span className="p-float-label">
                        <Dropdown id="float-dropdown" value={city} options={cities} ariaLabel="Test" onChange={onCityChange} optionLabel="name"/>
                        <label htmlFor="float-dropdown">Select City</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>InputMask</h3>
                    <span className="p-float-label">
                        <InputMask id="float-mask" mask="99-999999" value={maskValue} onChange={(e) => setMaskValue(e.value)}/>
                        <label htmlFor="float-mask">99-999999</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>InputNumber</h3>
                    <span className="p-float-label">
                        <InputNumber id="float-number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}/>
                        <label htmlFor="float-number">Number</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>KeyFilter</h3>
                    <span className="p-float-label">
                        <InputText id="float-keyfilter" keyfilter="int"/>
                        <label htmlFor="float-keyfilter">Integers</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>MultiSelect</h3>
                    <span className="p-float-label">
                        <MultiSelect id="float-multiselect" value={carsMultiselect} options={cars} onChange={(e) => setCarsMultiselect(e.value)}
                                        filter={true} filterPlaceholder="Search"/>
                        <label htmlFor="float-multiselect">Choose</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Password</h3>
                    <span className="p-float-label">
                        <Password id="float-password"/>
                        <label htmlFor="float-password">Password</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>InputTextarea</h3>
                    <span className="p-float-label">
                        <InputTextarea id="float-textarea" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} rows={5} cols={30}/>
                        <label htmlFor="float-textarea">Your Message</label>
                    </span>
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
import {InputText} from 'primereact/inputtext';
import {AutoComplete} from 'primereact/autocomplete';
import {Calendar} from 'primereact/calendar';
import {Chips} from 'primereact/chips';
import {Dropdown} from 'primereact/dropdown';
import {InputMask} from 'primereact/inputmask';
import {InputNumber} from 'primereact/inputnumber';
import {InputTextarea} from 'primereact/inputtextarea';
import {MultiSelect} from 'primereact/multiselect';
import {Password} from 'primereact/password';
import {CountryService} from "../service/CountryService";

const FloatLabelDemo = () => {
    const [inputtextValue, setInputtextValue] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [filteredCountriesSingle, setFilteredCountriesSingle] = useState<any>(null);
    const [calendarValue, setCalendarValue] = useState<any>(null);
    const [chipsValue, setChipsValue] = useState([]);
    const [city, setCity] = useState(null);
    const [maskValue, setMaskValue] = useState<any>(null);
    const [numberValue, setNumberValue] = useState<any>(null);
    const [textareaValue, setTextareaValue] = useState('');
    const [carsMultiselect, setCarsMultiselect] = useState([]);
    const [country, setCountry] = useState<any>(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then(data => setCountriesData(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterCountrySingle = (event: any) => {
        setTimeout(() => {
            let results = countriesData.filter((country: any) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountriesSingle(results);
        }, 250);
    }

    const onCityChange = (e: any) => {
        setCity(e.value);
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

    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    return (
        <div>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>InputText</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size={30} value={inputtextValue} onChange={(e) => setInputtextValue(e.target.value)}/>
                        <label htmlFor="float-input">Username</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>AutoComplete</h3>
                    <span className="p-float-label">
                        <AutoComplete id="float-auto" value={country} suggestions={filteredCountriesSingle}
                                        completeMethod={filterCountrySingle} field="name" size={30} minLength={1} onChange={(e) => setCountry(e.value)}/>
                        <label htmlFor="float-auto">Countries</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Calendar</h3>
                    <span className="p-float-label">
                        <Calendar id="float-claendar" value={calendarValue} onChange={(e) => setCalendarValue(e.value)} />
                        <label htmlFor="float-calendar">Select a Date</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Chips</h3>
                    <span className="p-float-label">
                        <Chips id="float-chips" value={chipsValue} onChange={(e) => setChipsValue(e.value)}/>
                        <label htmlFor="float-chips">Enter a Text</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Dropdown</h3>
                    <span className="p-float-label">
                        <Dropdown id="float-dropdown" value={city} options={cities} ariaLabel="Test" onChange={onCityChange} optionLabel="name"/>
                        <label htmlFor="float-dropdown">Select City</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>InputMask</h3>
                    <span className="p-float-label">
                        <InputMask id="float-mask" mask="99-999999" value={maskValue} onChange={(e) => setMaskValue(e.value)}/>
                        <label htmlFor="float-mask">99-999999</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>InputNumber</h3>
                    <span className="p-float-label">
                        <InputNumber id="float-number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}/>
                        <label htmlFor="float-number">Number</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>KeyFilter</h3>
                    <span className="p-float-label">
                        <InputText id="float-keyfilter" keyfilter="int"/>
                        <label htmlFor="float-keyfilter">Integers</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>MultiSelect</h3>
                    <span className="p-float-label">
                        <MultiSelect id="float-multiselect" value={carsMultiselect} options={cars} onChange={(e) => setCarsMultiselect(e.value)}
                                        filter={true} filterPlaceholder="Search"/>
                        <label htmlFor="float-multiselect">Choose</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Password</h3>
                    <span className="p-float-label">
                        <Password id="float-password"/>
                        <label htmlFor="float-password">Password</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>InputTextarea</h3>
                    <span className="p-float-label">
                        <InputTextarea id="float-textarea" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} rows={5} cols={30}/>
                        <label htmlFor="float-textarea">Your Message</label>
                    </span>
                </div>
            </div>
        </div>
    );
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="FloatLabelDemo" sources={[key, value]} service="CountryService" data="countries" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
