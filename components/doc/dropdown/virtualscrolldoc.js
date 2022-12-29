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
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function VirtualScrollDoc() {
      const [selectedItem, setSelectedItem] = useState(null);
      const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

      const onItemChange = (e) => {
        setSelectedItem(e.value)
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown, DropdownChangeParams } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function VirtualScrollDoc() {
      const [selectedItem, setSelectedItem] = useState<any | null>(null);
      const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

      const onItemChange = (e: DropdownChangeParams) => {
        setSelectedItem(e.value)
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
        </div>
    )
}
        `,
        extFiles: {
            'DropdownDemo.css': `
/* DropdownDemo.css */

.dropdown-demo .p-dropdown {
    width: 14rem;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Whether to use the virtualScroller feature. The properties of <i>VirtualScroller</i> component can be used like an object in it.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center dropdown-demo">
                <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
