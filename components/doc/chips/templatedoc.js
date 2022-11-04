import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const [value, setValue] = useState([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    };

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
        `,
        javascript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState([]);
    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    };

    return (
        <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState<string>([]);
    const customChip = (item: any) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    };

    return (
        <Chips value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} itemTemplate={customChip} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                A chip is customized using <i>itemTemplate</i> function where value is passed to return JSX.
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
