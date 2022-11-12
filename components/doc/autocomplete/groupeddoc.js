import { useEffect, useState } from 'react';
import { CountryService } from '../../../service/CountryService';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GroupedDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const countryservice = new CountryService();

    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCity = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities);
    };

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={`images/flag/flag_placeholder.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.label}</div>
            </div>
        );
    };

    const code = {
        basic: `
<AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} aria-label="Cities"/>
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function GroupedDoc() {
    const [countries, setCountries] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const countryservice = new CountryService();

    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCity = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities);
    };

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.label}</div>
            </div>
        );
    };

    return (
        <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} aria-label="Cities"/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { AutoComplete, AutoCompleteCompleteMethodParams } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function GroupedDoc() {
    const [countries, setCountries] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const countryservice = new CountryService();

    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCity = (event: AutoCompleteCompleteMethodParams) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities);
    };

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.label}</div>
            </div>
        );
    };

    return (
        <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e : AutoCompleteChangeParams) => setSelectedCity(e.value)} aria-label="Cities"/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Options groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete
                    value={selectedCity}
                    suggestions={filteredCities}
                    completeMethod={searchCity}
                    field="label"
                    optionGroupLabel="label"
                    optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate}
                    onChange={(e) => setSelectedCity(e.value)}
                    aria-label="Cities"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
