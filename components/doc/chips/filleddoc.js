import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { useState } from 'react';

export function FilledDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function FilledDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function FilledDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips variant="filled" value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips variant="filled" value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
