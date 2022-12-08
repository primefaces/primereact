import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AdvancedDoc(props) {
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
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    };

    const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return 'Select Countries';
    };

    const panelFooterTemplate = () => {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    const code = {
        basic: `
<MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom" itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} panelFooterTemplate={panelFooterTemplate} />
        `,
        javascript: `
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function AdvanceDoc() {
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
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    };

    const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    const panelFooterTemplate = () => {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
            );
    }

    return (
        <MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
        itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} panelFooterTemplate={panelFooterTemplate} />
        );
    }
        `,
        typescript: `
import { useState } from "react";
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';

export default function AdvanceDoc() {
    const [selectedCountries, setSelectedCountries] = useState<any>(null);

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

    const countryTemplate = (option: any) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${item.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    };

    const selectedCountriesTemplate = (option: any) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    const panelFooterTemplate = () => {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
            );
    }

    return (
        <MultiSelect value={selectedCountries} options={countries} onChange={(e : MultiSelectChangeParams) => setSelectedCountries(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
        itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} panelFooterTemplate={panelFooterTemplate} />
        );
    }
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Template of the panel header.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <MultiSelect
                    value={selectedCountries}
                    options={countries}
                    onChange={(e) => setSelectedCountries(e.value)}
                    optionLabel="name"
                    placeholder="Select Countries"
                    filter
                    className="multiselect-custom"
                    itemTemplate={countryTemplate}
                    selectedItemTemplate={selectedCountriesTemplate}
                    panelFooterTemplate={panelFooterTemplate}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
