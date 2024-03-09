import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import Link from 'next/link';
import { useState } from 'react';

export function KeyFilterDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} keyfilter="int" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Chips has built-in key filtering support to block certain keys, refer to <Link href="/keyfilter">keyfilter</Link> page for more information.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
