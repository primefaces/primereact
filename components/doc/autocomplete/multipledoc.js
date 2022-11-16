import { useEffect, useState } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { CountryService } from '../../../service/CountryService';

export function MultipleDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const countryservice = new CountryService();

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
        countryservice.getCountries().then((data) => setCountries(data));
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
<AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        `,
        javascript: `
import { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";

export default function MultipleDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const countryservice = new CountryService();
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
        countryservice.getCountries().then((data) => setCountries(data));
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
        <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
    )
}
        `,
        typescript: `
import { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";

interface Country {
    name: string;
    code: string;
}

export default function MultipleDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(null);

    const countryservice = new CountryService();
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
        countryservice.getCountries().then((data) => setCountries(data));
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
        <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
    )
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
            <DocSectionCode code={code} />
        </>
    );
}
