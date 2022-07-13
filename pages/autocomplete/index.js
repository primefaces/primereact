import React, { useState, useEffect } from 'react';
import { AutoComplete } from '../../components/lib/autocomplete/AutoComplete';
import { CountryService } from '../../service/CountryService';
import AutoCompleteDoc from '../../components/doc/autocomplete';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const AutoCompleteDemo = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const countryservice = new CountryService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;


    const groupedCities = [
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

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const searchCity = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities)
    }

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.label}</div>
            </div>
        );
    }

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
                    <AutoComplete value={selectedCountry1} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry1(e.value)} aria-label="Countries" />

                    <h5>Grouped</h5>
                    <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} aria-label="Cities" />

                    <h5>Dropdown, Templating and Force Selection</h5>
                    <AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown dropdownAutoFocus={false} forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry2(e.value)} aria-label="Countries" />

                    <h5>Virtual Scroll (100000 Items)</h5>
                    <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} aria-label="Items" />

                    <h5>Multiple</h5>
                    <span className="p-fluid">
                        <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} aria-label="Countries" />
                    </span>
                </div>
            </div>

            <AutoCompleteDoc></AutoCompleteDoc>
        </div>
    )
}

export default AutoCompleteDemo;
