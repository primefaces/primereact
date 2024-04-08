import React, { useState } from 'react';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputOtp } from '@/components/lib/inputotp/InputOtp';
import { InputText } from '@/components/lib/inputtext/InputText';

export function BasicDoc(props) {
    const [token, setTokens] = useState('12');

    const code = {
        basic: `
<InputOtp />
        `,
        javascript: `
import React from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputOtp />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputOtp />
        </div>
    );
}
        `
    };

    const inputTemplate = (options) => {     
        return (
            <InputText
                {...options?.props}
            />
        );
    }

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The number of characters is defined with the <i>length</i> property, which is set to 4 by default.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={inputTemplate}/>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
