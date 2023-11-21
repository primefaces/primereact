import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
import { useState } from 'react';

export function FilterDoc(props) {
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
<MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
    filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function FilterDemo() {
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
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
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

export default function FilterDemo() {
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
            <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    MultiSelect provides built-in filtering that is enabled by adding the <i>filter</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
