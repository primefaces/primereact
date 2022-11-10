import { useState } from 'react';
import { ListBox } from '../../lib/listbox/ListBox';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function VirtualScrollDoc(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const code = {
        basic: `
<ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        `,
        javascript: `
import { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function VirtualScrollDoc() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function VirtualScrollDoc() {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
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
                <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
