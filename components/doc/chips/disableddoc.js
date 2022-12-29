import { Chips } from '../../lib/chips/Chips';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Chips disabled placeholder="Disabled" />
        `,
        javascript: `
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <div className="card p-fluid">
            <Chips disabled placeholder="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <div className="card p-fluid">
            <Chips disabled placeholder="Disabled" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
