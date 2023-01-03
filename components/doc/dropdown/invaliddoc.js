import { useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [value, setValue] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const code = {
        basic: `
<Dropdown inputId="dropdown" value={value} options={cities} onChange={(e) => setValue(e.value)} optionLabel="name" className='p-invalid'/>
<label htmlFor="dropdown">Dropdown</label>
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function InvalidDoc() {
    const [value, setValue] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <span className="p-float-label">
                <Dropdown inputId="dropdown" value={value} options={cities} onChange={(e) => setValue(e.value)} optionLabel="name" className='p-invalid'/>
                <label htmlFor="dropdown">Dropdown</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function InvalidDoc() {
    const [value, setValue] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <span className="p-float-label">
                <Dropdown inputId="dropdown" value={value} options={cities} onChange={(e) => setValue(e.value)} optionLabel="name" className='p-invalid'/>
                <label htmlFor="dropdown">Dropdown</label>
            </span>
        </div>
    )
}
        `,
        extFiles: {
            'DropdownDemo.css': `
/* DropdownDemo.css */

.dropdown-demo .p-dropdown {
    width: 14rem;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* To Do:  */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center dropdown-demo">
                <span className="p-float-label">
                    <Dropdown inputId="dropdown" value={value} options={cities} onChange={(e) => setValue(e.value)} optionLabel="name" className="p-invalid" />
                    <label htmlFor="dropdown">Dropdown</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
