import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputTextarea } from '@/components/lib/inputtextarea/InputTextarea';
import { useState } from 'react';

export function AutoResizeDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        `,
        javascript: `
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea autoResize value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>autoResize</i> is enabled, textarea grows instead of displaying a scrollbar.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea autoResize rows={5} cols={30} value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
