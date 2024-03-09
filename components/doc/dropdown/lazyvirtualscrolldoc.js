import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Dropdown } from '@/components/lib/dropdown/Dropdown';
import Link from 'next/link';
import { useState, useRef } from 'react';

export function LazyVirtualScrollDoc(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _items = [...items.current];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: `Item #${i}`, value: i };
                }

                items.current = _items;
                setLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };

    const code = {
        basic: `
<Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
    placeholder="Select Item" className="w-full md:w-14rem" />
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LazyVirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _items = [...items.current];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: \`Item #\${i}\`, value: i };
                }

                items.current = _items;
                setLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };
    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items.current}
                placeholder="Select Item"
                className="w-full md:w-14rem"
                virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

type ItemType = { label: string; value: number };

export default function LazyVirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _items = [...items.current];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: \`Item #\${i}\`, value: i };
                }

                items.current = _items;
                setLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };

    return (
          <div className="card flex justify-content-center">
              <Dropdown
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.value)}
                  options={items.current}
                  placeholder="Select Item"
                  className="w-full md:w-14rem"
                  virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
              />
          </div>
      )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Dropdown
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.value)}
                    options={items.current}
                    placeholder="Select Item"
                    className="w-full md:w-14rem"
                    virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
