import { useState } from 'react';
import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<span className="p-float-label">
    <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
    <label htmlFor="username">Username</label>
</span>
        `,
        javascript: `
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div>
            <span className="p-float-label">
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <span className="p-float-label">
                <InputTextarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label is implemented by wrapping the textarea and the label inside a container having <i>.p-float-label</i> style class.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                    <label htmlFor="username">Username</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
