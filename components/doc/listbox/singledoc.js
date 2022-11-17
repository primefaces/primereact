import { useState } from 'react';
import { ListBox } from '../../lib/listbox/ListBox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SingleDoc(props) {
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
<ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
        `,
        javascript: `
import { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function SingleDoc() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { ListBox, ListBoxChangeParams } from 'primereact/listbox';

export default function SingleDoc() {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <ListBox value={selectedCity} options={cities} onChange={(e: ListBoxChangeParams) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Listbox is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives of how to define the options property; One way is providing a collection of{' '}
                    <i>SelectItem</i> instances having label-value pairs whereas other way is providing an array of arbitrary objects along with the optionLabel and optionValue properties to specify the label/value field pair. In addition, options
                    can be simple primitive values such as a string array, in this case no <i>optionLabel</i> or <i>optionValue</i> is necessary.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
