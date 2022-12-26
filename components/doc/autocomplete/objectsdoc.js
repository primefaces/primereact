import { useEffect, useState } from 'react';
import { CountryService } from '../../../service/CountryService';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ObjectsDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            } else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    };

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
        /*
            Countries is an array of objects with name, code pairs;
            [
                ...
                {"name": "United Kingdom", "code": "UK"},
                {"name": "United States", "code": "USA"},
                ...
            ]
        */
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} />
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";

export default function ObjectDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    
    const search = (event) => {
        // Timeout to emulate a network connection
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

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
        /*
            Countries is an array of objects with a name and a code;
            [
                ...
                {"name": "United Kingdom", "code": "UK"},
                {"name": "United States", "code": "USA"},
                ...
            ]
        */
    }, []);

    return (
        <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} />
    )
}
        `,
        typescript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteMethodParams } from "primereact/autocomplete";

interface Country {
    name: string;
    code: string;
}

export default function ObjectDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(null);

    
    const search = (event: AutoCompleteCompleteMethodParams) => {
        // Timeout to emulate a network connection
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

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
        /*
            Countries is an array of objects with a name and a code;
            [
                ...
                {"name": "United Kingdom", "code": "UK"},
                {"name": "United States", "code": "USA"},
                ...
            ]
        */
    }, []);

    return (
        <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e: AutoCompleteChangeParams) => setSelectedCountry(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    AutoComplete can work with objects using the <i>field</i> property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a
                    Country object that has name and code fields such as <i>&#123;name: "United States", code:"USA"&#125;</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
