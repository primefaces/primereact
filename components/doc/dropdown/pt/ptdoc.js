import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Dropdown } from '@/components/lib/dropdown/Dropdown';
import { useState } from 'react';

export function PTDoc(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const code = {
        basic: `
<Dropdown
    value={selectedCity}
    onChange={(e) => setSelectedCity(e.value)}
    options={cities}
    optionLabel="name"
    placeholder="Select a City"
    pt={{
        root: { className: 'w-full md:w-14rem' },
        item: ({ context }) => ({
            className: context.selected ? 'bg-primary' : undefined
        })
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function PTDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                pt={{
                    root: { className: 'w-full md:w-14rem' },
                    item: ({ context }) => ({
                        className: context.selected ? 'bg-primary' : undefined
                    })
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function PTDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                pt={{
                    root: { className: 'w-full md:w-14rem' },
                    item: ({ context }) => ({
                        className: context.selected ? 'bg-primary' : undefined
                    })
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    pt={{
                        root: { className: 'w-full md:w-14rem' },
                        item: ({ context }) => ({
                            className: context.selected ? 'bg-primary' : undefined
                        })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
