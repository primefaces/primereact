import React, { useState, useEffect, useRef } from 'react';
import { VirtualScroller } from '../../lib/virtualscroller/VirtualScroller';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LazyDoc(props) {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                _lazyItems[i] = `Item #${i}`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            odd: options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return (
            <div className={className} style={style}>
                {item}
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onLazyLoad={onLazyLoad} showLoader loading={lazyLoading} />
        `,
        javascript: `
import { useState, useEffect, useRef } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function LazyDoc() {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                _lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            odd: options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return (
            <div className={className} style={style}>
                {item}
            </div>
        );
    };

    return ( 
            <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onLazyLoad={onLazyLoad} showLoader loading={lazyLoading} />
    );
}
        `,
        typescript: `
import { useState, useEffect, useRef } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function LazyDoc() {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                _lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            odd: options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return (
            <div className={className} style={style}>
                {item}
            </div>
        );
    };

    return (
            <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onLazyLoad={onLazyLoad} showLoader loading={lazyLoading} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking <i>onLazyLoad</i> callback.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center flex-wrap">
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onLazyLoad={onLazyLoad} showLoader loading={lazyLoading} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
