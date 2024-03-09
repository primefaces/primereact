import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiStateCheckbox } from '@/components/lib/multistatecheckbox/MultiStateCheckbox';
import { useState } from 'react';

export function BasicDoc(props) {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const code = {
        basic: `
<MultiStateCheckbox value={value} onChange={(e) => setValue(e.value)} options={options} optionValue="value" />
        `,
        javascript: `
import React, { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <MultiStateCheckbox value={value} onChange={(e) => setValue(e.value)} options={options} optionValue="value" />
            <span>{value || 'no value'}</span>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiStateCheckbox, MultiStateCheckboxChangeEvent } from 'primereact/multistatecheckbox';

interface Item {
    value: string;
    icon: string;
}

export default function BasicDemo() {
    const [value, setValue] = useState<string>('public');
    const options: Item[] = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <MultiStateCheckbox value={value} onChange={(e: MultiStateCheckboxChangeEvent) => setValue(e.value)} options={options} optionValue="value" />
            <span>{value || 'no value'}</span>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    MultiStateCheckbox is used as a controlled input with <i>value</i> and <i>onChange</i> properties along with the <i>option</i> collection. The <i>optionValue</i> field refers to the value of each option, if ommitted the object
                    itself becomes the value of an option. The icon to display is retrieved from the <i>optionIcon</i> property that defaults to <i>icon</i> property name.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <MultiStateCheckbox value={value} onChange={(e) => setValue(e.value)} options={options} optionValue="value" />
                <span>{value || 'no value'}</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
