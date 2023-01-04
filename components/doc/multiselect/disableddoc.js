import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<MultiSelect disabled placeholder="Select a City" />
        `,
        javascript: `
import React from "react";
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center multiselect-demo">
            <MultiSelect disabled placeholder="Select a City" />
        </div>
    );
}
        `,
        typescript: `
import React from "react";
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center multiselect-demo">
            <MultiSelect disabled placeholder="Select a City" />
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
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center multiselect-demo">
                <MultiSelect disabled placeholder="Select a City" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
