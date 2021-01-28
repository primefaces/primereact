import React, { Component } from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { AutoComplete } from '../../components/autocomplete/AutoComplete';
import { CountryService } from '../service/CountryService';
import { Calendar } from '../../components/calendar/Calendar';
import { CascadeSelect } from '../../components/cascadeselect/CascadeSelect';
import { Chips } from '../../components/chips/Chips';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { InputMask } from '../../components/inputmask/InputMask';
import { InputNumber } from '../../components/inputnumber/InputNumber';
import { InputTextarea } from '../../components/inputtextarea/InputTextarea';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { AppInlineHeader } from '../../AppInlineHeader';
import { InvalidDoc } from './InvalidDoc';

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="invalid" showInputStyle>
                        <h1>Invalid State</h1>
                        <p>All form components have an invalid state style to display the validation errors.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
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

                <InvalidDoc />
            </div>
        );
    }
}
