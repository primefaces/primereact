import React, { useState, useEffect } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { CountryService } from '../../../service/CountryService';

export function InvalidStateDoc(props) {
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
<label htmlFor="autocomplete">Invalid State</label>
<AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} className="p-invalid" />
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

export default function InvalidStateDoc() {
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
            <div className="flex flex-column gap-2">
                <label htmlFor="autocomplete">Invalid State</label>
                <AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} className="p-invalid" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { AutoComplete, AutoCompleteCompleteMethodParams } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

export default function InvalidStateDoc() {
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
            <div className="flex flex-column gap-2">
                <label htmlFor="autocomplete">Invalid State</label>
                <AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} className="p-invalid" />
            </div>
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2">
                    <label htmlFor="autocomplete">Invalid State</label>
                    <AutoComplete value={value} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue(e.value)} className="p-invalid" />
                </div>
            </div>
            <DocSectionCode code={code} service={['CountryService']} />
        </>
    );
}
