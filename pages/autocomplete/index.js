import React, { Component } from 'react';
import { AutoComplete } from '../../components/lib/autocomplete/AutoComplete';
import { CountryService } from '../../service/CountryService';
import { AutoCompleteDoc } from '../../components/doc/autocomplete';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class AutoCompleteDemo extends Component {

    constructor(props) {
        super(props);
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
        this.state = {
            countries: [],
            selectedCountry1: null,
            selectedCountry2: null,
            selectedCity: null,
            selectedCountries: null,
            selectedItem: null,
            filteredCountries: null,
            filteredCities: null,
            filteredItems: null
        };

        this.searchCountry = this.searchCountry.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.searchItems = this.searchItems.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.groupedItemTemplate = this.groupedItemTemplate.bind(this);
        this.countryservice = new CountryService();

        this.groupedCities = [
            {
                label: 'Germany', code: 'DE',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];

        this.items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));
    }

    componentDidMount() {
        this.countryservice.getCountries().then(data => this.setState({ countries: data }));
    }

    searchCountry(event) {
        setTimeout(() => {
            let filteredCountries;
            if (!event.query.trim().length) {
                filteredCountries = [...this.state.countries];
            }
            else {
                filteredCountries = this.state.countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredCountries });
        }, 250);
    }

    searchCity(event) {
        let query = event.query;
        let filteredCities = [];

        for (let country of this.groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        this.setState({ filteredCities });
    }

    searchItems(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let filteredItems = [];

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filteredItems.push(item);
            }
        }

        this.setState({ filteredItems });
    }

    itemTemplate(item) {
        return (
            <div className="country-item">
                <img alt={item.name} src={`${this.contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    }

    groupedItemTemplate(item) {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={`${this.contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.label}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React AutoComplete Component</title>
                    <meta name="description" content="AutoComplete is an input component that provides real-time suggestions when being typed." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>AutoComplete</h1>
                        <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
                    </div>
                    <DocActions github="autocomplete/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <AutoComplete value={this.state.selectedCountry1} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" onChange={(e) => this.setState({ selectedCountry1: e.value })} />

                        <h5>Grouped</h5>
                        <AutoComplete value={this.state.selectedCity} suggestions={this.state.filteredCities} completeMethod={this.searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={this.groupedItemTemplate} onChange={(e) => this.setState({ selectedCity: e.value })} />

                        <h5>Dropdown, Templating and Force Selection</h5>
                        <AutoComplete value={this.state.selectedCountry2} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" dropdown forceSelection itemTemplate={this.itemTemplate} onChange={(e) => this.setState({ selectedCountry2: e.value })} />

                        <h5>Virtual Scroll (100000 Items)</h5>
                        <AutoComplete value={this.state.selectedItem} suggestions={this.state.filteredItems} completeMethod={this.searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => this.setState({ selectedItem: e.value })} />

                        <h5>Multiple</h5>
                        <span className="p-fluid">
                            <AutoComplete value={this.state.selectedCountries} suggestions={this.state.filteredCountries} completeMethod={this.searchCountry} field="name" multiple onChange={(e) => this.setState({ selectedCountries: e.value })} />
                        </span>
                    </div>
                </div>

                <AutoCompleteDoc></AutoCompleteDoc>
            </div>
        )
    }
}
