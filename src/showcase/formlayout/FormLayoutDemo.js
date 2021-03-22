import React, { Component } from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { RadioButton } from '../../components/radiobutton/RadioButton';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { InputTextarea } from '../../components/inputtextarea/InputTextarea';
import { AppInlineHeader } from '../../AppInlineHeader';
import { FormLayoutDoc } from './FormLayoutDoc';
import './FormLayoutDemo.scss';

export class FormLayoutDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities1: [],
            cities2: [],
            city1: null,
            city2: null,
            selectedState: null
        };

        this.states = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ];

        this.onCityChange1 = this.onCityChange1.bind(this);
        this.onCityChange2 = this.onCityChange2.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    }

    onCityChange1(e) {
        let selectedCities = [...this.state.cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({ cities1: selectedCities });
    }

    onCityChange2(e) {
        let selectedCities = [...this.state.cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({ cities2: selectedCities });
    }

    onStateChange(e) {
        this.setState({ selectedState: e.value });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="formLayout" showInputStyle>
                        <h1>Form Layout</h1>
                        <p>Form layout is a CSS utility optimized for creating forms with ease. FormLayout is not included in PrimeReact as it is provided by <a href="https://github.com/primefaces/primeflex">PrimeFlex</a>,
                            a shared grid library between PrimeFaces, PrimeNG, PrimeReact and PrimeVue projects.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation formlayout-demo">
                    <div className="card">
                        <h5>Vertical</h5>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="firstname1">Firstname</label>
                                <InputText id="firstname1" type="text" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="lastname1">Lastname</label>
                                <InputText id="lastname1" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Vertical and Grid</h5>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col">
                                <label htmlFor="firstname2">Firstname</label>
                                <InputText id="firstname2" type="text" />
                            </div>
                            <div className="p-field p-col">
                                <label htmlFor="lastname2">Lastname</label>
                                <InputText id="lastname2" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Horizontal and Fixed Width</h5>
                        <div className="p-field p-grid">
                            <label htmlFor="firstname3" className="p-col-fixed" style={{width: '100px'}}>Firstname</label>
                            <div className="p-col">
                                <InputText id="firstname3" type="text" />
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname3" className="p-col-fixed" style={{width: '100px'}}>Lastname</label>
                            <div className="p-col">
                                <InputText id="lastname3" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Horizontal and Fluid</h5>
                        <div className="p-fluid">
                            <div className="p-field p-grid">
                                <label htmlFor="firstname4" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
                                <div className="p-col-12 p-md-10">
                                    <InputText id="firstname4" type="text" />
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
                                <div className="p-col-12 p-md-10">
                                    <InputText id="lastname4" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Inline</h5>
                        <div className="p-formgroup-inline">
                            <div className="p-field">
                                <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                                <InputText id="firstname5" type="text" placeholder="Firstname" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                                <InputText id="lastname5" type="text" placeholder="Lastname" />
                            </div>
                            <Button type="button" label="Submit" />
                        </div>
                    </div>

                    <div className="card">
                        <h5>Vertical Checkbox</h5>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city1" value="Chicago" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Chicago') !== -1}/>
                            <label htmlFor="city1">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city2" value="Los Angeles" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Los Angeles') !== -1}/>
                            <label htmlFor="city2">Los Angeles</label>
                        </div>

                        <h5>Horizontal Checkbox</h5>
                        <div className="p-formgroup-inline">
                            <div className="p-field-checkbox">
                                <Checkbox inputId="city3" value="Chicago" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Chicago') !== -1}/>
                                <label htmlFor="city3">Chicago</label>
                            </div>
                            <div className="p-field-checkbox">
                                <Checkbox inputId="city4" value="Los Angeles" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Los Angeles') !== -1}/>
                                <label htmlFor="city4">Los Angeles</label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Vertical RadioButton</h5>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city5" name="city1" value="Chicago" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Chicago'} />
                            <label htmlFor="city5">Chicago</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Los Angeles'} />
                            <label htmlFor="city6">Los Angeles</label>
                        </div>

                        <h5>Horizontal RadioButton</h5>
                        <div className="p-formgroup-inline">
                            <div className="p-field-radiobutton">
                                <RadioButton inputId="city5" name="city2" value="Chicago" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Chicago'} />
                                <label htmlFor="city7">Chicago</label>
                            </div>
                            <div className="p-field-radiobutton">
                                <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Los Angeles'} />
                                <label htmlFor="city8">Los Angeles</label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Help Text</h5>
                        <div className="p-field p-fluid">
                            <label htmlFor="username">Username</label>
                            <InputText id="username" type="username" aria-describedby="username-help" />
                            <small id="username-help">Enter your username to reset your password.</small>
                        </div>
                    </div>

                    <div className="card">
                        <h5>Advanced</h5>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="firstname6">Firstname</label>
                                <InputText id="firstname6" type="text" />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="lastname6">Lastname</label>
                                <InputText id="lastname6" type="text" />
                            </div>
                            <div className="p-field p-col-12">
                                <label htmlFor="address">Address</label>
                                <InputTextarea id="address" type="text" rows="4" />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="city">City</label>
                                <InputText id="city" type="text" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="state">State</label>
                                <Dropdown inputId="state" value={this.state.selectedState} options={this.states} onChange={this.onStateChange} placeholder="Select" optionLabel="name"/>
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="zip">Zip</label>
                                <InputText id="zip" type="text" />
                            </div>
                        </div>
                    </div>
                </div>

                <FormLayoutDoc />
            </div>
        )
    }
}
