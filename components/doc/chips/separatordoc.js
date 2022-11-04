import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SeparatorDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        `,
        javascript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function SeparatorDemo() {
    const [value, setValue] = useState([]);

    return (
        <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function SeparatorDemo() {
    const [value, setValue] = useState<string>([]);

    return (
        <Chips value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} separator="," />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                A new chip is added when <i>enter</i> key is pressed, <i>separator</i> property allows definining an additional key. Currently only valid value is <i>,</i> to create a new item when comma key is pressed.
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
