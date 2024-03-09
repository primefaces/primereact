import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
import Link from 'next/link';
import { useState } from 'react';

export function VirtualScrollDoc(props) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i })));

    const code = {
        basic: `
<MultiSelect
    value={selectedItems}
    options={items}
    onChange={(e) => {
        setSelectedItems(e.value);
        setSelectAll(e.value.length === items.length);
    }}
    selectAll={selectAll}
    onSelectAll={(e) => {
        setSelectedItems(e.checked ? [] : items.map((item) => item.value));
        setSelectAll(!e.checked);
    }}
    virtualScrollerOptions={{ itemSize: 43 }}
    maxSelectedLabels={3}
    placeholder="Select Items"
    className="w-full md:w-20rem"
/>
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function VirtualScrollDemo() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));

    return (
        <div className="card flex justify-content-center">
            <MultiSelect
            value={selectedItems}
            options={items}
            onChange={(e) => {
                setSelectedItems(e.value);
                setSelectAll(e.value.length === items.length);
            }}
            selectAll={selectAll}
            onSelectAll={(e) => {
                setSelectedItems(e.checked ? [] : items.map((item) => item.value));
                setSelectAll(!e.checked);
            }}
            virtualScrollerOptions={{ itemSize: 43 }}
            maxSelectedLabels={3}
            placeholder="Select Items"
            className="w-full md:w-20rem"
        />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent, MultiSelectAllEvent } from 'primereact/multiselect';

export default function VirtualScrollDemo() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));

    return (
        <div className="card flex justify-content-center">
            <MultiSelect
            value={selectedItems}
            options={items}
            onChange={(e: MultiSelectChangeEvent) => {
                setSelectedItems(e.value);
                setSelectAll(e.value.length === items.length);
            }}
            selectAll={selectAll}
            onSelectAll={(e: MultiSelectAllEvent) => {
                setSelectedItems(e.checked ? [] : items.map((item) => item.value));
                setSelectAll(!e.checked);
            }}
            virtualScrollerOptions={{ itemSize: 43 }}
            maxSelectedLabels={3}
            placeholder="Select Items"
            className="w-full md:w-20rem"
        />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with <i>virtualScrollerOptions</i> property, refer to the{' '}
                    <Link href="/virtualscroller">VirtualScroller</Link> for more information about the available options as it is used internally by MultiSelect.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <MultiSelect
                    value={selectedItems}
                    options={items}
                    onChange={(e) => {
                        setSelectedItems(e.value);
                        setSelectAll(e.value.length === items.length);
                    }}
                    selectAll={selectAll}
                    onSelectAll={(e) => {
                        setSelectedItems(e.checked ? [] : items.map((item) => item.value));
                        setSelectAll(!e.checked);
                    }}
                    virtualScrollerOptions={{ itemSize: 43 }}
                    maxSelectedLabels={3}
                    placeholder="Select Items"
                    className="w-full md:w-20rem"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
