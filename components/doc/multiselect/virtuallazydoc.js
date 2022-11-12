import { useEffect, useRef, useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { Skeleton } from '../../lib/skeleton/skeleton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VirtualLazyDoc(props) {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []);

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
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
<MultiSelect value={selectedItems2} options={lazyItems} onChange={(e) => setSelectedItems2(e.value)} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 43, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
    return (
        <div className="flex align-items-center p-2" style={{ height: '43px' }}>
            <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
        </div>
    )}
}} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
        `,
        javascript: `
import { useState } from "react";
import { MultiSelect, SelectItemOptionsType } from 'primereact/multiselect';
import { Skeleton } from '../../lib/skeleton/skeleton';

export default function VirtualLazyDoc() {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const loadLazyTimeout = useRef(null);

    return (
        <MultiSelect value={selectedItems2} options={lazyItems} onChange={(e) => setSelectedItems2(e.value)} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 43, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
            return (
                <div className="flex align-items-center p-2" style={{ height: '43px' }}>
                    <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                </div>
            )}
        }} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiSelect, SelectItemOptionsType, MultiSelectChangeParams } from 'primereact/multiselect';
import { Skeleton } from '../../lib/skeleton/skeleton';

export default function VirtualLazyDoc() {
    const [lazyItems, setLazyItems] = useState<SelectItemOptionsType>([]);
    const [lazyLoading, setLazyLoading] = useState<boolean>(false);
    const [selectedItems, setSelectedItems] = useState<SelectItemOptionsType>([]);
    const loadLazyTimeout = useRef<number>(null);

    return (
        <MultiSelect value={selectedItems2} options={lazyItems} onChange={(e: MultiSelectChangeParams) => setSelectedItems2(e.value)} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 43, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
            return (
                <div className="flex align-items-center p-2" style={{ height: '43px' }}>
                    <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                </div>
            )}
        }} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
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
                    options={lazyItems}
                    onChange={(e) => setSelectedItems(e.value)}
                    virtualScrollerOptions={{
                        lazy: true,
                        onLazyLoad: onLazyLoad,
                        itemSize: 43,
                        showLoader: true,
                        loading: lazyLoading,
                        delay: 250,
                        loadingTemplate: (options) => {
                            return (
                                <div className="flex align-items-center p-2" style={{ height: '43px' }}>
                                    <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                                </div>
                            );
                        }
                    }}
                    maxSelectedLabels={3}
                    placeholder="Select Item"
                    showSelectAll={false}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
