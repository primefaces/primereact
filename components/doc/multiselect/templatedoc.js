import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
import { useState } from 'react';

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
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const length = selectedCountries ? selectedCountries.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    const code = {
        basic: `
<MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" 
    placeholder="Select Countries" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function TemplateDemo() {
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
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const length = selectedCountries ? selectedCountries.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" 
                placeholder="Select Countries" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [selectedCountries, setSelectedCountries] = useState<Country[] | null>(null);
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

    const countryTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const length = selectedCountries ? selectedCountries.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCountries} options={countries} onChange={(e: MultiSelectChangeEvent) => setSelectedCountries(e.value)} optionLabel="name" 
                placeholder="Select Countries" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Available options and the selected options support templating with <i>itemTemplate</i> and <i>valueTemplate</i> properties respectively. In addition, header, footer and filter sections can be templated as well.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <MultiSelect
                    value={selectedCountries}
                    options={countries}
                    onChange={(e) => setSelectedCountries(e.value)}
                    optionLabel="name"
                    placeholder="Select Countries"
                    itemTemplate={countryTemplate}
                    panelFooterTemplate={panelFooterTemplate}
                    className="w-full md:w-20rem"
                    display="chip"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
