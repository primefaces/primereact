import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';

export function InvalidDoc(props) {
    const code = {
        basic: `
<RadioButton invalid/>
        `,
        javascript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton invalid/>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton invalid/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center">
                <RadioButton invalid />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
