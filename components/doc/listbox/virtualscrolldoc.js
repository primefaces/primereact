import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ListBox } from '@/components/lib/listbox/ListBox';
import Link from 'next/link';
import { useState } from 'react';

export function VirtualScrollDoc(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const code = {
        basic: `
<ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} 
    virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} 
                virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface Item {
    label: string;
    value: number;
}

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const items: Item[] = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} onChange={(e: ListBoxChangeEvent) => setSelectedItem(e.value)} options={items} 
                virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with <i>virtualScrollerOptions</i> property, refer to the{' '}
                    <Link href="/virtualscroller">VirtualScroller</Link> for more information about the available options as it is used internally by ListBox.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
