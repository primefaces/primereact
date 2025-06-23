import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';

export function FilledDoc(props) {
    const code = {
        basic: `
<RadioButton variant="filled" />
        `,
        javascript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function FilledDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton variant="filled" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function FilledDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton variant="filled" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center">
                <RadioButton variant="filled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
