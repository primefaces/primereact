import { useState } from 'react';
import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        `,
        javascript: `
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <InputTextarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Textarea is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
