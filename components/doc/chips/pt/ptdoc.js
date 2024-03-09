import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips
    value={value}
    onChange={(e) => setValue(e.value)}
    pt={{
        root: { className: 'flex' },
        container: { className: 'flex-1' },
        token: { className: 'bg-primary' }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function PTDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    root: { className: 'flex' },
                    container: { className: 'flex-1' },
                    token: { className: 'bg-primary' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function PTDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    root: { className: 'flex' },
                    container: { className: 'flex-1' },
                    token: { className: 'bg-primary' }
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
            <div className="card p-fluid">
                <Chips
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    pt={{
                        root: { className: 'flex' },
                        container: { className: 'flex-1' },
                        token: { className: 'bg-primary' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
