import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { useState } from 'react';

export function InvalidDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function InvalidDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function InvalidDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
