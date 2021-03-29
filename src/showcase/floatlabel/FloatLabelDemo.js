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
import { FloatLabelDoc } from './FloatLabelDoc';

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

                <FloatLabelDoc />
            </div>
        );
    }
}
