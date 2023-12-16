import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';
import { useEffect, useState } from 'react';
import { CountryService } from '../../../service/CountryService';

export function TemplateDoc(props) {
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

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <img alt={item.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${item.code.toLowerCase()} mr-2`} style={{ width: '18px' }} />
                <div>{item.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const isCountrySelected = (filteredCountries || []).some((country) => country['name'] === selectedCountry);

        return (
            <div className="py-2 px-3">
                {isCountrySelected ? (
                    <span>
                        <b>{selectedCountry}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries}  
    completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} />
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

export default function TemplateDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const panelFooterTemplate = () => {
        const isCountrySelected = (filteredCountries || []).some( country => country['name'] === selectedCountry );
           return (
            <div className="py-2 px-3">
                {isCountrySelected ? (
                    <span>
                        <b>{selectedCountry}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

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
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
                completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>(null);
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

    const itemTemplate = (item: Country) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };
    
    const panelFooterTemplate = () => {
        const isCountrySelected = (filteredCountries || []).some( country => country['name'] === selectedCountry );
           return (
            <div className="py-2 px-3">
                {isCountrySelected ? (
                    <span>
                        <b>{selectedCountry}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
                completeMethod={search} onChange={(e: AutoCompleteChangeEvent) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} />
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
                <p>
                    Custom content can be displayed as an option using <i>itemTemplate</i> property that references a function with a suggestion option as a parameter and returns an element. Similarly <i>selectedItemTemplate</i> property is available
                    to customize the chips in multiple mode using the same approach. Note that <i>selectedItemTemplate</i> is only available in multiple mode at the moment.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} />
            </div>
            <DocSectionCode code={code} service={['CountryService']} />
        </>
    );
}
