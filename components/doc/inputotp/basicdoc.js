import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputOtp } from '@/components/lib/inputotp/InputOtp';
import { useState } from 'react';

export function BasicDoc(props) {
    const [token, setTokens] = useState();

    const code = {
        basic: `
<InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        `,
        javascript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The number of characters is defined with the <i>length</i> property, which is set to 4 by default.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputOtp value={token} onChange={(e) => setTokens(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
