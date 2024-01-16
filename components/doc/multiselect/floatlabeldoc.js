import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
import { useState } from 'react';

export function FloatLabelDoc(props) {
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
<span className="p-float-label w-full md:w-20rem">
    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
    <label htmlFor="ms-cities">Select Cities</label>
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function FloatLabelDemo() {
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
            <span className="p-float-label w-full md:w-20rem">
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
                <label htmlFor="ms-cities">Select Cities</label>
            </span>
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

export default function FloatLabelDemo() {
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
            <span className="p-float-label w-full md:w-20rem">
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
                <label htmlFor="ms-cities">Select Cities</label>
            </span>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A floating label appears on top of the input field when focused.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label w-full md:w-20rem">
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
                    <label htmlFor="ms-cities">Select Cities</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
