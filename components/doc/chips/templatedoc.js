import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [value, setValue] = useState([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active)</span>
                <i className="pi pi-user-plus"></i>
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
                <span>{item} - (active)</span>
                <i className="pi pi-user-plus"></i>
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
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState<string[]>([]);
    const customChip = (item: string) => {
        return (
            <div>
                <span>{item} - (active)</span>
                <i className="pi pi-user-plus"></i>
            </div>
        );
    };

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} itemTemplate={customChip} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Chip content is customized using <i>itemTemplate</i> function that receives a single chip value as a parameter.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
