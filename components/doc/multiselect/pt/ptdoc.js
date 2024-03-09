import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
import { useState } from 'react';

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
    display="chip"
    optionLabel="name"
    placeholder="Select Cities"
    maxSelectedLabels={3}
    inputId="multiselect"
    pt={{
        root: { className: 'w-full md:w-20rem' },
        item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined }),
        token: ({ context }) => {
            switch (context.value.code) {
                case 'NY':
                    return 'bg-red-300';
                case 'RM':
                    return 'bg-green-300';
            }
            return 'bg-gray-100';
        }
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
                display="chip"
                optionLabel="name"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                inputId="multiselect"
                pt={{
                    root: { className: 'w-full md:w-20rem' },
                    item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined }),
                    token: ({ context }) => {
                        switch (context.value.code) {
                            case 'NY':
                                return 'bg-red-300';
                            case 'RM':
                                return 'bg-green-300';
                        }
                        return 'bg-gray-100';
                    }
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
                display="chip"
                optionLabel="name"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                inputId="multiselect"
                pt={{
                    root: { className: 'w-full md:w-20rem' },
                    item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined }),
                    token: ({ context }) => {
                        switch (context.value.code) {
                            case 'NY':
                                return 'bg-red-300';
                            case 'RM':
                                return 'bg-green-300';
                        }
                        return 'bg-gray-100';
                    }
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
                    display="chip"
                    optionLabel="name"
                    placeholder="Select Cities"
                    maxSelectedLabels={3}
                    inputId="multiselect"
                    pt={{
                        root: { className: 'w-full md:w-20rem' },
                        item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined }),
                        token: ({ context }) => {
                            switch (context.value.code) {
                                case 'NY':
                                    return 'bg-red-300';
                                case 'RM':
                                    return 'bg-green-300';
                            }

                            return 'bg-gray-100';
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
