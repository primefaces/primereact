import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ListBox } from '@/components/lib/listbox/ListBox';
import { useState } from 'react';

export function GroupDoc(props) {
    const [selectedCity, setSelectedCity] = useState(null);
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

    const groupTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    const code = {
        basic: `
<ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
    optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function GroupDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
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

    const groupTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    label: string;
    value: string;
} 

interface Country {
    label: string;
    code: string;
    items: City[];
}

export default function GroupDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const groupedCities: Country[] = [
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

    const groupTemplate = (option: City) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }}/>
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Options can be grouped when a nested data structures is provided. To define the label of a group <i>optionGroupLabel</i> property is needed and also <i>optionGroupChildren</i> is required to define the property that refers to the
                    children of a group.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={groupedCities}
                    optionLabel="label"
                    optionGroupLabel="label"
                    optionGroupChildren="items"
                    optionGroupTemplate={groupTemplate}
                    className="w-full md:w-14rem"
                    listStyle={{ maxHeight: '250px' }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
