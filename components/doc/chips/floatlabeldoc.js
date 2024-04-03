import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { FloatLabel } from '@/components/lib/floatlabel/FloatLabel';
import Link from 'next/link';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<FloatLabel>
    <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
    <label htmlFor="username">Username</label>
</FloatLabel>
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <FloatLabel>
                <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <FloatLabel>
                <Chips id="username" value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                A floating label appears on top of the input field when focused. Visit <Link href="/floatlabel">FloatLabel</Link> documentation for more information.
            </DocSectionText>
            <div className="card p-fluid">
                <FloatLabel>
                    <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
                    <label htmlFor="username">Username</label>
                </FloatLabel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
