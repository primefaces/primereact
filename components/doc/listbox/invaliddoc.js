import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ListBox } from '@/components/lib/listbox/ListBox';
import { useState } from 'react';

export function InvalidDoc(props) {
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
<ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    className="w-full md:w-14rem p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function InvalidDemo() {
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
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                className="w-full md:w-14rem p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
} 

export default function InvalidDemo() {
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
            <ListBox value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} 
                options={cities} optionLabel="name"  className="w-full md:w-14rem p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
