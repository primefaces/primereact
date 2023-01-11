import { useState } from 'react';
import { ListBox } from '../../lib/listbox/ListBox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
<ListBox className='p-invalid' value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function InvalidDoc() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <ListBox className='p-invalid' value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox, ListBoxChangeParams } from 'primereact/listbox';

export default function InvalidDoc() {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <ListBox className='p-invalid' value={selectedCity} options={cities} onChange={(e: ListBoxChangeParams) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox className="p-invalid" value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
