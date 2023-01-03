import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Dropdown className="p-disabled" />
<label htmlFor="dropdown">Dropdown</label>
        `,
        javascript: `
import React from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <span className="p-float-label">
                <Dropdown className="p-disabled" />
                <label htmlFor="dropdown">Dropdown</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <span className="p-float-label">
                <Dropdown className="p-disabled" />
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
                    <Dropdown className="p-disabled" />
                    <label htmlFor="dropdown">Dropdown</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
