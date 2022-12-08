import Link from 'next/link';
import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function KeyFilterDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
        `,
        javascript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState([]);

    return (
        <Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Chips, ChipsChangeParams } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <Chips value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} keyfilter="int" />
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
