import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<span className="p-float-label">
    <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
    <label htmlFor="username">Username</label>
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function FloatLabelDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <span className="p-float-label">
                <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <span className="p-float-label">
                <Chips id="username" value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
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
                <p>A floating label appears on top of the input field when focused.</p>
            </DocSectionText>
            <div className="card p-fluid">
                <span className="p-float-label">
                    <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
                    <label htmlFor="username">Username</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
