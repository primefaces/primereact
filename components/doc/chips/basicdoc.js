import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState([]);

    return (
        <Chips value={value} onChange={(e) => setValue(e.value)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <Chips value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Chips requires an array as its <i>value</i> and <i>onChange</i> callback to update the model.
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
