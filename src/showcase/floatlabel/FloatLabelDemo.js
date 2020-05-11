import React, {Component} from 'react';
import AppContentContext from '../../AppContentContext';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {InputText} from "../../components/inputtext/InputText";
import {AutoComplete} from "../../components/autocomplete/AutoComplete";
import {CountryService} from "../service/CountryService";
import {Calendar} from "../../components/calendar/Calendar";
import {Chips} from "../../components/chips/Chips";
import {Dropdown} from "../../components/dropdown/Dropdown";
import {InputMask} from "../../components/inputmask/InputMask";
import {InputNumber} from "../../components/inputnumber/InputNumber";
import {InputTextarea} from "../../components/inputtextarea/InputTextarea";
import {MultiSelect} from "../../components/multiselect/MultiSelect";
import {Password} from "../../components/password/Password";

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
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            maskValue: null,
            numberValue: null,
            textareaValue: '',
            carsMultiselect: [],
        }
        this.filterCountrySingle = this.filterCountrySingle.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.countryservice = new CountryService();
    }

    componentDidMount() {
        this.countriesData = this.countryservice.getCountries(this);
    }

    filterCountrySingle(event) {
        setTimeout(() => {
            var results = this.state.countriesData.filter((country) => {
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

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Float Label</h1>
                        <p>A floating label is implemented by wrapping the input and the label inside a container having .p-float-label style class.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("floatLabel")}
                                                className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>InputText</h3>
                            <span className="p-float-label">
                                <InputText id="float-input" type="text" size="30" value={this.state.inputtextValue} onChange={(e) => this.setState({inputtextValue: e.target.value})}/>
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
                                <Dropdown id="float-dropdown" value={this.state.city} options={this.state.cities} ariaLabel="Test" onChange={this.onCityChange} optionLabel="name"/>
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

                <FloatLabelDoc/>
            </div>
        );
    }
}


class FloatLabelDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/floatlabel" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {InputText} from "primereact/inputtext";
import {AutoComplete} from "primereact/autocomplete";
import {CountryService} from "../service/CountryService";
import {Calendar} from "primereact/calendar";
import {Chips} from "primereact/chips";
import {Dropdown} from "primereact/dropdown";
import {InputMask} from "primereact/inputmask";
import {InputNumber} from "primereact/inputnumber";
import {InputTextarea} from "primereact/inputtextarea";
import {MultiSelect} from "primereact/multiselect";
import {Password} from "primereact/password";

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
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            maskValue: null,
            numberValue: null,
            textareaValue: '',
            carsMultiselect: [],
        }
        this.filterCountrySingle = this.filterCountrySingle.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.countryservice = new CountryService();
    }

    componentDidMount() {
        this.countriesData = this.countryservice.getCountries(this);
    }

    filterCountrySingle(event) {
        setTimeout(() => {
            var results = this.state.countriesData.filter((country) => {
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

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Float Label</h1>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("floatLabel")}
                                                className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>InputText</h3>
                            <span className="p-float-label">
                                <InputText id="float-input" type="text" size="30" value={this.state.inputtextValue} onChange={(e) => this.setState({inputtextValue: e.target.value})}/>
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
                                <Dropdown id="float-dropdown" value={this.state.city} options={this.state.cities} ariaLabel="Test" onChange={this.onCityChange} optionLabel="name"/>
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
            </div>
        );
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
