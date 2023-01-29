import { useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    };

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    };

    const code = {
        basic: `
<Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function TemplateDoc() {
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

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }
        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
        </div>    
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown, DropdownChangeParams, DropdownProps } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function TemplateDoc() {
    const [selectedCountry, setSelectedCountry] = useState<any | null>(null);

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

    const onCountryChange = (e: DropdownChangeParams) => {
        setSelectedCountry(e.value);
    }

    const selectedCountryTemplate = (option: any, props: DropdownProps) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }
        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option: any) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
        </div>
    )
}
        `,
        extFiles: {
            'DropdownDemo.css': `
/* DropdownDemo.css */

.dropdown-demo .p-dropdown {
    width: 14rem;
}

.dropdown-demo .country-item-value img.flag {
    width: 17px;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center dropdown-demo">
                <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
