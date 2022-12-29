import React, { useState, useEffect } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { CountryService } from '../../../service/CountryService';

export function FloatlabelDoc(props) {
    const [countries, setCountries] = useState(null);
    const [value, setValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(null);

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let results = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });

            setFilteredCountries(results);
        }, 250);
    };

    const code = {
        basic: `
<AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} />
<label htmlFor="autocomplete">Float Label</label>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

export default function FloatLabelDoc() {
    const [countries, setCountries] = useState(null);
    const [value, setValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(null);

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let results = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });

            setFilteredCountries(results);
        }, 250);
    };
    
    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} />
                <label htmlFor="autocomplete">Float Label</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { AutoComplete, AutoCompleteCompleteMethodParams } from "primereact/autocomplete";
import { CountryService } from '../service/CountryService';

export default function FloatLabelDoc() {
    const [countries, setCountries] = useState(null);
    const [value, setValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(null);

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let results = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });

            setFilteredCountries(results);
        }, 250);
    };

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} />
                <label htmlFor="autocomplete">Float Label</label>
            </span>
        </div>
    )
}
        `,
        data: `
 /* CountryService */

{"name": "United Kingdom", "code": "UK"},
{"name": "United States", "code": "USA"},
...
            `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>ToDo</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} />
                    <label htmlFor="autocomplete">Float Label</label>
                </span>
            </div>
            <DocSectionCode code={code} service={['CountryService']} />
        </>
    );
}
