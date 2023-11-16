import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function SizesDoc(props) {
    const code = {
        basic: `
<InputText type="text" className="p-inputtext-sm" placeholder="Small" />
<InputText type="text" placeholder="Normal" />
<InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="card flex flex-column align-items-center gap-3 ">
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="card flex flex-column align-items-center gap-3 ">
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Apply <i>.p-inputtext-sm</i> to reduce the size of the input element or <i>.p-inputtext-lg</i> to enlarge it.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3 ">
                <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
                <InputText type="text" placeholder="Normal" />
                <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
