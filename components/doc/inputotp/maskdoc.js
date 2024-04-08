import React, { useState } from 'react';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputOtp } from '@/components/lib/inputotp/inputotp';

export function MaskDoc(props) {
    const [token, setTokens] = useState();

    const code = {
        basic: `
<InputOtp value={token} onChange={(e) => setTokens(e.value)} mask/>
        `,
        javascript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function MaskDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask/>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function MaskDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask/>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Enable the <i>mask</i> option to hide the values in the input fields.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
