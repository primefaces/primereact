import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ListBox } from '@/components/lib/listbox/ListBox';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [selectedCountry, setSelectedCountry] = useState(null);
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
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '1.25rem', marginRight: '.5rem' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const code = {
        basic: `
<ListBox value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" 
    itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function TemplateDemo() {
    const [selectedCountry, setSelectedCountry] = useState(null);
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
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '1.25rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" 
                itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [selectedCountries, setSelectedCountries] = useState<Country | null>(null);
    const countries: Country[] = [
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

    const countryTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '1.25rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCountry} onChange={(e: ListBoxChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" 
                itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content for an option is displayed with the <i>itemTemplate</i> property that takes an option as a parameter. Additional available templating sections are <i>filterTemplate</i> and <i>optionGroupTemplate</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
