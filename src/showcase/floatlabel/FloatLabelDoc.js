import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';

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
                    <h5>InputText</h5>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size={30} value={inputtextValue} onChange={(e) => setInputtextValue(e.target.value)}/>
                        <label htmlFor="float-input">Username</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>AutoComplete</h5>
                    <span className="p-float-label">
                        <AutoComplete id="float-auto" value={country} suggestions={filteredCountriesSingle}
                                        completeMethod={filterCountrySingle} field="name" size={30} minLength={1} onChange={(e) => setCountry(e.value)}/>
                        <label htmlFor="float-auto">Countries</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Calendar</h5>
                    <span className="p-float-label">
                        <Calendar id="float-claendar" value={calendarValue} onChange={(e) => setCalendarValue(e.value)} />
                        <label htmlFor="float-calendar">Select a Date</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Chips</h5>
                    <span className="p-float-label">
                        <Chips id="float-chips" value={chipsValue} onChange={(e) => setChipsValue(e.value)}/>
                        <label htmlFor="float-chips">Enter a Text</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Dropdown</h5>
                    <span className="p-float-label">
                        <Dropdown id="float-dropdown" value={city} options={cities} ariaLabel="Test" onChange={onCityChange} optionLabel="name"/>
                        <label htmlFor="float-dropdown">Select City</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>InputMask</h5>
                    <span className="p-float-label">
                        <InputMask id="float-mask" mask="99-999999" value={maskValue} onChange={(e) => setMaskValue(e.value)}/>
                        <label htmlFor="float-mask">99-999999</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>InputNumber</h5>
                    <span className="p-float-label">
                        <InputNumber id="float-number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}/>
                        <label htmlFor="float-number">Number</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>KeyFilter</h5>
                    <span className="p-float-label">
                        <InputText id="float-keyfilter" keyfilter="int"/>
                        <label htmlFor="float-keyfilter">Integers</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>MultiSelect</h5>
                    <span className="p-float-label">
                        <MultiSelect id="float-multiselect" value={carsMultiselect} options={cars} onChange={(e) => setCarsMultiselect(e.value)}
                                        filter filterPlaceholder="Search"/>
                        <label htmlFor="float-multiselect">Choose</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Password</h5>
                    <span className="p-float-label">
                        <Password id="float-password"/>
                        <label htmlFor="float-password">Password</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>InputTextarea</h5>
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
                    <h5>InputText</h5>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size={30} value={inputtextValue} onChange={(e) => setInputtextValue(e.target.value)}/>
                        <label htmlFor="float-input">Username</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>AutoComplete</h5>
                    <span className="p-float-label">
                        <AutoComplete id="float-auto" value={country} suggestions={filteredCountriesSingle}
                                        completeMethod={filterCountrySingle} field="name" size={30} minLength={1} onChange={(e) => setCountry(e.value)}/>
                        <label htmlFor="float-auto">Countries</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Calendar</h5>
                    <span className="p-float-label">
                        <Calendar id="float-claendar" value={calendarValue} onChange={(e) => setCalendarValue(e.value)} />
                        <label htmlFor="float-calendar">Select a Date</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Chips</h5>
                    <span className="p-float-label">
                        <Chips id="float-chips" value={chipsValue} onChange={(e) => setChipsValue(e.value)}/>
                        <label htmlFor="float-chips">Enter a Text</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Dropdown</h5>
                    <span className="p-float-label">
                        <Dropdown id="float-dropdown" value={city} options={cities} ariaLabel="Test" onChange={onCityChange} optionLabel="name"/>
                        <label htmlFor="float-dropdown">Select City</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>InputMask</h5>
                    <span className="p-float-label">
                        <InputMask id="float-mask" mask="99-999999" value={maskValue} onChange={(e) => setMaskValue(e.value)}/>
                        <label htmlFor="float-mask">99-999999</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>InputNumber</h5>
                    <span className="p-float-label">
                        <InputNumber id="float-number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}/>
                        <label htmlFor="float-number">Number</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>KeyFilter</h5>
                    <span className="p-float-label">
                        <InputText id="float-keyfilter" keyfilter="int"/>
                        <label htmlFor="float-keyfilter">Integers</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>MultiSelect</h5>
                    <span className="p-float-label">
                        <MultiSelect id="float-multiselect" value={carsMultiselect} options={cars} onChange={(e) => setCarsMultiselect(e.value)}
                                        filter filterPlaceholder="Search"/>
                        <label htmlFor="float-multiselect">Choose</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>Password</h5>
                    <span className="p-float-label">
                        <Password id="float-password"/>
                        <label htmlFor="float-password">Password</label>
                    </span>
                </div>

                <div className="p-col-12 p-md-4">
                    <h5>InputTextarea</h5>
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
                    <TabPanel header="Source">
                        <LiveEditor name="FloatLabelDemo" sources={this.sources} service="CountryService" data="countries" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
