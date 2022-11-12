import { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { Skeleton } from '../../lib/skeleton/Skeleton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ScrollLazyDoc(props) {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    let loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onLazyItemChange = (e) => {
        setSelectedItem(e.value);
    };

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: `Item #${i}`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const code = {
        basic: `
<Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
        `,
        javascript: `
import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';

export default function ScrollLazyDoc() {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    let loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onLazyItemChange = (e) => {
        setSelectedItem(e.value);
    };

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    return (
        <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
    )
}
        `,
        typescript: `
import { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownChangeParams } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import { VirtualScrollerLazyParams } from 'primereact/virtualscroller';

export default function ScrollLazyDoc() {
    const [lazyItems, setLazyItems] = useState<any | null>([]);
    const [lazyLoading, setLazyLoading] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    let loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onLazyItemChange = (e: DropdownChangeParams) => {
        setSelectedItem(e.value);
    };

    const onLazyLoad = (event: VirtualScrollerLazyParams) => {
        setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    return (
        <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Virtual Scroll (100000 Items) and Lazy</DocSectionText>
            <div className="card flex justify-content-center">
                <Dropdown
                    value={selectedItem}
                    options={lazyItems}
                    onChange={onLazyItemChange}
                    virtualScrollerOptions={{
                        lazy: true,
                        onLazyLoad: onLazyLoad,
                        itemSize: 38,
                        showLoader: true,
                        loading: lazyLoading,
                        delay: 250,
                        loadingTemplate: (options) => {
                            return (
                                <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                                    <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                                </div>
                            );
                        }
                    }}
                    placeholder="Select Item"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
