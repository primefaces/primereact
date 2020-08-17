import React, { Component } from 'react';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { MultiSelectDoc } from './MultiSelectDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import './MultiSelectDemo.scss';

export class MultiSelectDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCities: null,
            selectedCountries: null
        };

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];

        this.countryTemplate = this.countryTemplate.bind(this);
        this.selectedCountriesTemplate = this.selectedCountriesTemplate.bind(this);
    }

    countryTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    selectedCountriesTemplate(option) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="multiSelect" showInputStyle>
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation multiselect-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <MultiSelect value={this.state.selectedCities} options={this.cities} onChange={(e) => this.setState({ selectedCities: e.value })} optionLabel="name" placeholder="Select a City" />

                        <h5>Advanced with Templating and Filtering</h5>
                        <MultiSelect value={this.state.selectedCountries} options={this.countries}  onChange={(e) => this.setState({ selectedCountries: e.value })} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                            itemTemplate={this.countryTemplate} selectedItemTemplate={this.selectedCountriesTemplate} />
                    </div>
                </div>

                <MultiSelectDoc />
            </div>
        );
    }
}
