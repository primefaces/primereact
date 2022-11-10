import { useState, useEffect } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { CountryService } from '../../../service/CountryService';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function MultipleDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
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
<AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />        `,
        javascript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function BasicDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
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
    const [selectedCountries, setSelectedCountries] = useState(null);
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
                Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
