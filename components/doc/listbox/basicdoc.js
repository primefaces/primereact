import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ListBox } from '@/components/lib/listbox/ListBox';
import { useState } from 'react';

export function BasicDoc(props) {
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
<ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function BasicDemo() {
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
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
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

export default function BasicDemo() {
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
            <ListBox value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ListBox is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with an <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i>{' '}
                    properties respectively. Default property name for the <i>optionLabel</i> is <i>label</i> and <i>value</i> for the <i>optionValue</i>. If <i>optionValue</i> is omitted and the object has no <i>value</i> property, the object itself
                    becomes the value of an option. Note that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
