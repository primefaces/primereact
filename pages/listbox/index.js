import React, { useState } from 'react';
import { ListBox } from '../../components/lib/listbox/ListBox';
import ListBoxDoc from '../../components/doc/listbox';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const ListBoxDemo = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

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

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React ListBox Component</title>
                <meta name="description" content="ListBox is used to select one or more values from a list of items." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ListBox</h1>
                    <p>ListBox is used to select one or more values from a list of items.</p>
                </div>

                <DocActions github="listbox/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Single</h5>
                    <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />

                    <h5>Grouped</h5>
                    <ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                        optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />

                    <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                    <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} multiple filter optionLabel="name" filterPlaceholder="Search countries"
                        itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />

                    <h5>Virtual Scroll (100000 Items)</h5>
                    <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }} />
                </div>
            </div>

            <ListBoxDoc />
        </div>
    );
}

export default ListBoxDemo;
