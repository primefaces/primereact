import { useState } from 'react';
import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AutoResizeDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} autoResize />
        `,
        javascript: `
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState('');

    return (
        <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} autoResize />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <InputTextarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} autoResize />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(e.target.value)} autoResize />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
