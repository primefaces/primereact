import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import Link from 'next/link';

export function KeyFilterDoc(props) {
    const code = {
        basic: `
<InputText keyfilter="int" placeholder="Integers" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Integers" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Integers" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText has built-in key filtering support to block certain keys, refer to <Link href="/keyfilter">keyfilter</Link> page for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText keyfilter="int" placeholder="Integers" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
