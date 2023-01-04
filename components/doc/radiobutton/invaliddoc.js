import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InvalidDoc(props) {
    const code = {
        basic: `
<RadioButton className="p-invalid" />
        `,
        javascript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDoc() {

    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDoc() {

    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton className="p-invalid" />
        </div>
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
            <div className="card flex justify-content-center align-items-center">
                <RadioButton className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
