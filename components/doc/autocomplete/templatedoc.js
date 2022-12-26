import getConfig from 'next/config';
import { useEffect, useState } from 'react';
import { CountryService } from '../../../service/CountryService';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

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

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src={`${contextPath}/images/flag/flag_placeholder.png`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    className={`flag flag-${item.code.toLowerCase()} mr-2`}
                    style={{ width: '18px' }}
                />
                <div>{item.name}</div>
            </div>
        );
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
<AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} />
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";

export default function TemplateDemo() {
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

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src={\`/images/flag/flag_placeholder.png\`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };

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
        <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} />
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

export default function TemplateDemo() {
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

    const itemTemplate = (item: Country) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src={\`/images/flag/flag_placeholder.png\`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };

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
        <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e: AutoCompleteChangeParams) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content can be displayed as an option using <i>itemTemplate</i> property that references a function with a suggestion option as a parameter and returns an element. Similarly <i>selectedItemTemplate</i> property is available
                    to customize the chips in multiple mode using the same approach. Note that <i>selectedItemTemplate</i> is only available in multiple mode at the moment.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
