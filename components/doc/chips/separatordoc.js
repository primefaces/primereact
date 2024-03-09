import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { useState } from 'react';

export function SeparatorDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function SeparatorDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function SeparatorDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} separator="," />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A new chip is added when <i>enter</i> key is pressed, <i>separator</i> property allows definining an additional key. Currently only valid value is <i>,</i> to create a new item when comma key is pressed.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
