import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputTextarea } from '@/components/lib/inputtextarea/InputTextarea';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputTextarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    pt={{
        root: {
            rows: 5,
            cols: 30
        }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function PTDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                pt={{
                    root: {
                        rows: 5,
                        cols: 30
                    }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function PTDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                pt={{
                    root: {
                        rows: 5,
                        cols: 30
                    }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    pt={{
                        root: {
                            rows: 5,
                            cols: 30
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
