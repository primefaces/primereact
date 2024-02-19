import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Dropdown } from '@/components/lib/dropdown/Dropdown';
import { useState } from 'react';

export function CheckmarkDoc(props) {
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
<Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} />
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function CheckmarkDemo() {
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
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} />
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

export default function CheckmarkDemo() {
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
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>An alternative way to highlight the selected option is displaying a checkmark instead. </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
