import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VirtualDoc(props) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i })));

    const code = {
        basic: `
<MultiSelect value={selectedItems1} options={items} onChange={(e) => {setSelectedItems1(e.value); setSelectAll(e.value.length === items.length)}} selectAll={selectAll} onSelectAll={(e) => {setSelectedItems1(e.checked ? [] : items.map(item => item.value)); setSelectAll(!e.checked)}} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>
        `,
        javascript: `
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function VirtualDoc() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: "Item #\${i}\", value: i })));

    return (
        <MultiSelect value={selectedItems1} options={items} onChange={(e) => {setSelectedItems1(e.value); setSelectAll(e.value.length === items.length)}} selectAll={selectAll} onSelectAll={(e) => {setSelectedItems1(e.checked ? [] : items.map(item => item.value)); setSelectAll(!e.checked)}} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';

export default function VirtualDoc() {
    const [selectAll, setSelectAll] = useState<any>(false);
    const [selectedItems, setSelectedItems] = useState<any[]>(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: "Item #\${i}\", value: i })));

    return (
        <MultiSelect value={selectedItems1} options={items} onChange={(e : MultiSelectChangeParams) => {setSelectedItems1(e.value); setSelectAll(e.value.length === items.length)}} selectAll={selectAll} onSelectAll={(e) => {setSelectedItems1(e.checked ? [] : items.map(item => item.value)); setSelectAll(!e.checked)}} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Whether to use the virtualScroller feature. The properties of <i>VirtualScroller</i> component can be used like an object in it.
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
                    placeholder="Select Item"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
