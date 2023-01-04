import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
<span className="p-float-label">
    <MultiSelect inputId="multiselect" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" maxSelectedLabels={3} />
    <label htmlFor="multiselect">Select a City</label>
</span>        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function FloatLabelDoc() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    return (
        <div className="card flex justify-content-center multiselect-demo">
            <span className="p-float-label">
                <MultiSelect inputId="multiselect" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" maxSelectedLabels={3} />
                <label htmlFor="multiselect">Select a City</label>
            </span>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function FloatLabelDoc() {
    const [selectedCities, setSelectedCities] = useState<any>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center multiselect-demo">
            <span className="p-float-label">
                <MultiSelect inputId="multiselect" value={selectedCities} options={cities} onChange={(e: MultiSelectChangeParams) => setSelectedCities(e.value)} optionLabel="name" maxSelectedLabels={3} />
                <label htmlFor="multiselect">Select a City</label>
            </span>
        </div>
    );
}
        `,
        extFiles: {
            'MultiSelectDemo.css': `
/* MultiSelectDemo.css */

.multiselect-demo .p-multiselect {
    min-width: 15rem;
}

.multiselect-demo .multiselect-custom .p-multiselect-label:not(.p-placeholder):not(.p-multiselect-items-label) {
    padding-top: .25rem;
    padding-bottom: .25rem;
}

.multiselect-demo .multiselect-custom .country-item-value {
    padding: .25rem .5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: .5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);
}

.multiselect-demo .multiselect-custom .country-item-value img.flag {
    width: 17px;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center multiselect-demo">
                <span className="p-float-label">
                    <MultiSelect inputId="multiselect" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" maxSelectedLabels={3} />
                    <label htmlFor="multiselect">Select a City</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
