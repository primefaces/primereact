import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';
import Link from 'next/link';
import { useState } from 'react';

export function VirtualScrollDoc(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    };

    const code = {
        basic: `
<AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
    virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function VirtualScrollerDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    return (
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

interface Item {
    label: string;
    value: number;
}

export default function VirtualScrollerDemo() {
    const [selectedItem, setSelectedItem] = useState<Item>(null);
    const [filteredItems, setFilteredItems] = useState<Item[]>(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const searchItems = (event: AutoCompleteCompleteEvent) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    return (
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e: AutoCompleteChangeEvent) => setSelectedItem(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Virtual Scrolling is a performant way to render large lists. Configuration of the scroll behavior is defined with <i>virtualScrollerOptions</i>
                    that requires <i>itemSize</i> as the mandatory value to set the height of an item. Visit <Link href="/virtualscroller">VirtualScroller</Link> documentation for more information about the configuration API.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
