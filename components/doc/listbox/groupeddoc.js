import { useState } from 'react';
import { ListBox } from '../../lib/listbox/ListBox';
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

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div>
            </div>
        );
    };

    const code = {
        basic: `
<ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>
        `,
        javascript: `
import { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function GroupedDoc() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
            optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { ListBox, ListBoxChangeParams } from 'primereact/listbox';

export default function GroupedDoc() {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const groupedItemTemplate = (option: any) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <ListBox value={selectedGroupedCity} options={groupedCities} onChange={(e: ListBoxChangeParams) => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
            optionGroupTemplate={groupedItemTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '250px' }}/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Property name or getter function to use as the label of an option group.</DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox
                    value={selectedGroupedCity}
                    options={groupedCities}
                    onChange={(e) => setSelectedGroupedCity(e.value)}
                    optionLabel="label"
                    optionGroupLabel="label"
                    optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate}
                    style={{ width: '15rem' }}
                    listStyle={{ maxHeight: '250px' }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
