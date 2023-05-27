import { useState } from 'react';
import { InputText } from '../../../lib/inputtext/InputText';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

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
