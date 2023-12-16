import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputText
    value={value}
    onChange={(e) => setValue(e.target.value)}
    pt={{
        root: { className: 'border-primary-400' }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function PTDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                pt={{
                    root: { className: 'border-primary-400' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function PTDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                pt={{
                    root: { className: 'border-primary-400' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    pt={{
                        root: { className: 'border-primary-400' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
