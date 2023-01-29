import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GroupedDoc(props) {
    const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
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

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="/images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div>
            </div>
        );
    };

    const code = {
        basic: `
<MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" 
optionGroupTemplate={groupedItemTemplate} placeholder="Select Cities" />
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function GroupedDoc() {
    const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
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

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center align-items-center multiselect-demo">
            <MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
            optionGroupTemplate={groupedItemTemplate} placeholder="Select Cities" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function GroupedDoc() {
    const [selectedGroupedCities, setSelectedGroupedCities] = useState<any>(null);
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

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center align-items-center multiselect-demo">
            <MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e : MultiSelectChangeParams) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
            optionGroupTemplate={groupedItemTemplate} placeholder="Select Cities" />
        </div>
    );
}
        `,
        extFiles: {
            'MultiSelectDemo.css': `
/* MultiSelectDemo.css */

.multiselect-demo .p-multiselect {
    min-width: 15rem;
}

.multiselect-demo .multiselect-custom .p-multiselect-label:not(.p-placeholder):not(.p-multiselect-items-label) {
    padding-top: .25rem;
    padding-bottom: .25rem;
}

.multiselect-demo .multiselect-custom .country-item-value {
    padding: .25rem .5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: .5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);
}

.multiselect-demo .multiselect-custom .country-item-value img.flag {
    width: 17px;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Used mode to display the selected items as chips.</p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center multiselect-demo">
                <MultiSelect
                    value={selectedGroupedCities}
                    options={groupedCities}
                    onChange={(e) => setSelectedGroupedCities(e.value)}
                    optionLabel="label"
                    optionGroupLabel="label"
                    optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate}
                    placeholder="Select Cities"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
