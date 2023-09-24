import { useState } from 'react';
import { MultiSelect } from '../../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const code = {
        basic: `
<MultiSelect
    value={selectedCities}
    onChange={(e) => setSelectedCities(e.value)}
    showClear={true}
    options={cities}
    optionLabel="name"
    placeholder="Select Cities"
    maxSelectedLabels={3}
    inputId="multiselect"
    pt={{
        root: { className: 'w-full md:w-14rem' },
        item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function PTDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                showClear={true}
                options={cities}
                optionLabel="name"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                inputId="multiselect"
                pt={{
                    root: { className: 'w-full md:w-14rem' },
                    item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function PTDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect
                value={selectedCities}
                onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)}
                showClear={true}
                options={cities}
                optionLabel="name"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                inputId="multiselect"
                pt={{
                    root: { className: 'w-full md:w-14rem' },
                    item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
                }}
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <MultiSelect
                    value={selectedCities}
                    onChange={(e) => setSelectedCities(e.value)}
                    showClear={true}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select Cities"
                    maxSelectedLabels={3}
                    inputId="multiselect"
                    pt={{
                        root: { className: 'w-full md:w-14rem' },
                        item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
