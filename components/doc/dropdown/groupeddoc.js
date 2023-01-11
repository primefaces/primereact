import { useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GroupedDoc(props) {
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const onGroupedCityChange = (e) => {
        setSelectedGroupedCity(e.value);
    };

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div>
            </div>
        );
    };

    const code = {
        basic: `
<Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} />

        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function GroupedDoc() {
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const onGroupedCityChange = (e) => {
        setSelectedGroupedCity(e.value);
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function GroupedDoc() {
    const [selectedGroupedCity, setSelectedGroupedCity] = useState<any | null>(null);
    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const onGroupedCityChange = (e: DropdownChangeParams) => {
        setSelectedGroupedCity(e.value);
    }

    const groupedItemTemplate = (option: any) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} />
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
                <p>
                    Options groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center dropdown-demo">
                <Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
