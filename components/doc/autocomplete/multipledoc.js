import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';
import { useEffect, useState } from 'react';
import { CountryService } from '../../../service/CountryService';

export function MultipleDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from "./service/CountryService";

export default function MultipleDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
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
    }, []);

    return (
        <div className="card p-fluid">
            <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { CountryService } from "./service/CountryService";

interface Country {
    name: string;
    code: string;
}

export default function MultipleDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(null);

    const search = (event: AutoCompleteCompleteEvent) => {
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
    }, []);

    return (
        <div className="card p-fluid">
            <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        </div>
    )
}
        `,
        data: `
        {
            "data": [
                {"name": "United Kingdom", "code": "UK"},
                {"name": "United States", "code": "USA"},
                ...
            ]
        }
                `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array. The number of values selectable can be restricted using the{' '}
                    <i>selectionLimit</i> property.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
            </div>
            <DocSectionCode code={code} service={['CountryService']} />
        </>
    );
}
