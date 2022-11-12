import { useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VirtualScrollDoc(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const onItemChange = (e) => {
        setSelectedItem(e.value);
    };

    const code = {
        basic: `
<Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
        `,
        javascript: `
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function VirtualScrollDoc() {
      const [selectedItem, setSelectedItem] = useState(null);
      const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

      const onItemChange = (e) => {
        setSelectedItem(e.value)
    }

    return (
        <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Dropdown, DropdownChangeParams } from 'primereact/dropdown';

export default function VirtualScrollDoc() {
      const [selectedItem, setSelectedItem] = useState<any | null>(null);
      const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

      const onItemChange = (e: DropdownChangeParams) => {
        setSelectedItem(e.value)
    }

    return (
        <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Whether to use the virtualScroller feature. The properties of <i>VirtualScroller</i> component can be used like an object in it.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
