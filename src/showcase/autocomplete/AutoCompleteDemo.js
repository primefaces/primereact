import React, { Component } from 'react';
import { AutoComplete } from '../../components/autocomplete/AutoComplete';
import { CountryService } from '../service/CountryService';
import AppContentContext from '../../AppContentContext';
import { AutoCompleteDoc } from './AutoCompleteDoc';

export class AutoCompleteDemo extends Component {

    constructor() {
        super();
        this.state = {
            countriesData: [],
            filteredCountriesSingle: null,
            filteredBrands: null,
            filteredCountriesMultiple: null,
            selectedCountry: null,
            selectedBrand: null,
            selectedCountries: null
        };

        this.filterCountrySingle = this.filterCountrySingle.bind(this);
        this.filterBrands = this.filterBrands.bind(this);
        this.filterCountryMultiple = this.filterCountryMultiple.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.countryservice = new CountryService();
    }

    componentDidMount() {
        this.countryservice.getCountries().then(data => this.setState({ countriesData: data }));
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    }

    filterCountrySingle(event) {
        setTimeout(() => {
            let results = this.state.countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            this.setState({ filteredCountriesSingle: results });
        }, 250);
    }

    filterBrands(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.brands];
            }
            else {
                results = this.brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredBrands: results });
        }, 250);
    }

    filterCountryMultiple(event) {
        setTimeout(() => {
            let results = this.state.countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });

            this.setState({ filteredCountriesMultiple: results });
        }, 250);
    }

    itemTemplate(brand) {
        return (
            <div className="p-clearfix">
                <img alt={brand} src={`showcase/resources/demo/images/car/${brand}.png`} style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
                <div style={{ fontSize: '16px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>AutoComplete</h1>
                        <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("autocomplete")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <AutoComplete value={this.state.selectedCountry} suggestions={this.state.filteredCountriesSingle} completeMethod={this.filterCountrySingle} field="name"
                        size={30} placeholder="Countries" minLength={1} onChange={(e) => this.setState({ selectedCountry: e.value })} />
                    <span style={{ marginLeft: '10px' }}>Country: {this.state.selectedCountry ? this.state.selectedCountry.name || this.state.selectedCountry : 'none'}</span>

                    <h3>Advanced</h3>
                    <AutoComplete value={this.state.selectedBrand} suggestions={this.state.filteredBrands} completeMethod={this.filterBrands} size={30} minLength={1}
                        placeholder="Hint: type 'v' or 'f'" dropdown={true} itemTemplate={this.itemTemplate} onChange={(e) => this.setState({ selectedBrand: e.value })} />
                    <span style={{ marginLeft: '10px' }}>Brand: {this.state.selectedBrand || 'none'}</span>

                    <h3>Multiple</h3>
                    <span className="p-fluid">
                        <AutoComplete value={this.state.selectedCountries} suggestions={this.state.filteredCountriesMultiple} completeMethod={this.filterCountryMultiple}
                            minLength={1} placeholder="Countries" field="name" multiple={true} onChange={(e) => this.setState({ selectedCountries: e.value })} />
                    </span>
                </div>

                <AutoCompleteDoc></AutoCompleteDoc>
            </div>
        )
    }
}
