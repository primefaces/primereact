import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ChipsDoc(props) {
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
<MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
        `,
        javascript: `
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function ChipsDoc() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function ChipsDoc() {
    const [selectedCities, setSelectedCities] = useState<any>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <MultiSelect value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />

    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Used mode to display the selected items as chips.</DocSectionText>
            <div className="card flex justify-content-center">
                <MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
