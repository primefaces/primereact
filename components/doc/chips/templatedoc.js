import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
import React, { useState } from "react";
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
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeParams } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState<string[]>([]);
    const customChip = (item: any) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    };

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} itemTemplate={customChip} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A chip is customized using <i>itemTemplate</i> function where value is passed to return JSX.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
