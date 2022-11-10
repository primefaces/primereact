import { useState, useEffect } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { CountryService } from '../../../service/CountryService';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
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

    const code = {
        basic: `
<AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function BasicDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
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

    return (
        <AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function BasicDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
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
    
    return (
        <AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e : AutoCompleteChangeParams) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                AutoComplete is used as a controlled component with <i>value</i> and <i>onChange</i> properties. In addition, the component requires a list of <i>suggestions</i> and a <i>completeMethod</i> to query the results.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
