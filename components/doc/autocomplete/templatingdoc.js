import { useState, useEffect } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { CountryService } from '../../../service/CountryService';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplatingDoc(props) {
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

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={`images/flag/flag_placeholder.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    };

    const code = {
        basic: `
<AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function TemplatingDoc() {
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

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    };
    return (
        <AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function TemplatingDoc() {
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

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={\`images/flag/flag_placeholder.png\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{item.name}</div>
            </div>
        );
    };
    return (
        <AutoComplete value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e : AutoCompleteChangeParams) => setSelectedCountry(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
    )
}

        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes "blank" or "current" as possible values. "blank" is the default mode to send a
                query with an empty string whereas "current" setting sends a query with the current value of the input.{' '}
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete
                    value={selectedCountry}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                    dropdown
                    forceSelection
                    itemTemplate={itemTemplate}
                    onChange={(e) => setSelectedCountry(e.value)}
                    aria-label="Countries"
                    dropdownAriaLabel="Select Country"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
