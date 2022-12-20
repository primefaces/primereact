import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
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
<MultiSelect value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />
        `,
        javascript: `
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function BasicDoc() {
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
            <MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />
        </div>
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function BasicDoc() {
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
            <MultiSelect value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />
        </div>
    );
}
        `,
        css: `
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
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    MultiSelect is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives of how to define the options property; One way is providing a collection
                    of <i>SelectItem</i>
                    instances having label-value pairs whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition, options can be
                    simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center multiselect-demo">
                <MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
