import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function IconDoc(props) {
    const [value, setValue] = useState([]);
    const [value2, setValue2] = useState([]);

    const code = {
        basic: `
<span className="p-chips-icon-left">
    <i className="pi pi-filter" />
    <Chips value={value} onChange={(e) => setValue(e.value)} />
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function FloatLabelDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <span className="p-float-label p-chips-icon-left">
                <i className="pi pi-filter" />
                <Chips id="filter" value={value} onChange={(e) => setValue(e.value)} />
                <label htmlFor="filter">Filter</label>
            </span>
            <span className="p-float-label p-chips-icon-right">
                <i className="pi pi-filter" />
                <Chips id="filter" value={value2} onChange={(e) => setValue2(e.value)} />
                <label htmlFor="filter">Filter</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <span className="p-float-label p-chips-icon-left">
                <i className="pi pi-filter" />
                <Chips id="filter" value={value} onChange={(e) => setValue(e.value)} />
                <label htmlFor="filter">Filter</label>
            </span>
            <span className="p-float-label p-chips-icon-right">
                <i className="pi pi-filter" />
                <Chips id="filter" value={value2} onChange={(e) => setValue2(e.value)} />
                <label htmlFor="filter">Filter</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either .p-chips-icon-left or p-chips-icon-right class.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3 ">
                <span className="p-float-label p-chips-icon-left">
                    <i className="pi pi-filter" />
                    <Chips id="filter" value={value} onChange={(e) => setValue(e.value)} />
                    <label htmlFor="filter">Filter</label>
                </span>
                <span className="p-float-label p-chips-icon-right">
                    <i className="pi pi-filter" />
                    <Chips id="filter" value={value2} onChange={(e) => setValue2(e.value)} />
                    <label htmlFor="filter">Filter</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
