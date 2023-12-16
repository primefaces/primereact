import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputTextarea } from '@/components/lib/inputtextarea/InputTextarea';
import Link from 'next/link';

export function KeyFilterDoc(props) {
    const code = {
        basic: `
<InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30} />
        `,
        javascript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30}/>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30}/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputTextarea has built-in key filtering support to block certain keys, refer to <Link href="/keyfilter">keyfilter</Link> page for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
