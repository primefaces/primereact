import { useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplatingDoc(props) {
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
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    };

    const code = {
        basic: `
<Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
        `,
        javascript: `
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function TemplatingDoc() {
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
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
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
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Dropdown, DropdownChangeParams, DropdownProps } from 'primereact/dropdown';

export default function TemplatingDoc() {
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
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
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
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Label of an option is used as the display text of an item by default, for custom content support define an <i>itemTemplate</i> function that gets the option instance as a parameter and returns the content. For custom filter support
                define a <i>filterTemplate</i> function that gets the option instance as a parameter and returns the content for the filter element.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Dropdown
                    value={selectedCountry}
                    options={countries}
                    onChange={onCountryChange}
                    optionLabel="name"
                    filter
                    showClear
                    filterBy="name"
                    placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate}
                    itemTemplate={countryOptionTemplate}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
