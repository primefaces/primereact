import { useState } from 'react';
import { ListBox } from '../../lib/listbox/ListBox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [selectedCountries, setSelectedCountries] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    };

    const code = {
        basic: `
<ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function TemplateDoc() {
    const [selectedCountries, setSelectedCountries] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function TemplateDoc() {
    const [selectedCountries, setSelectedCountries] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" itemTemplate={countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
