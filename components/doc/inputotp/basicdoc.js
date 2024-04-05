import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputOtp } from '@/components/lib/inputotp/InputOtp';

export function BasicDoc(props) {
    const code = {
        basic: `
<Tag value="New"></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Label of the tag is defined with the <i>value</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputOtp length={5} onChange={(e) => {console.log(e)}} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
