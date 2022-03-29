import React, { useState, useEffect, useRef } from 'react';
import { VirtualScroller } from '../../components/lib/virtualscroller/VirtualScroller';
import { classNames } from '../../components/lib/utils/ClassNames';
import { Skeleton } from '../../components/lib/skeleton/Skeleton';
import VirtualScrollerDoc from '../../components/doc/virtualscroller';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const VirtualScrollerDemo = () => {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`)));
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => `Item #${i}`));
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
    }

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    const basicLoadingTemplate = (options) => {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    const multiItemTemplate = (items, options) => {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                {
                    items.map((item, i) => {
                        return <div key={i} style={{ width: '100px' }}>{item}</div>
                    })
                }
            </div>
        );
    }

    const itemTemplate = (item, options) => {
        const { index, count, first, last, even, odd } = options;
        const className = classNames('custom-scroll-item scroll-item', {
            'odd': odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Item: ${item}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Index: ${index}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Count: ${count}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`First: ${first}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Last: ${last}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Even: ${even}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Odd: ${odd}`}</div>
            </div>
        )
    }

    const loadingTemplate = (options) => {
        const className = classNames('custom-scroll-item scroll-item', {
            'odd': options.odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React VirtualScroller Component</title>
                <meta name="description" content="VirtualScroller is a performant approach to handle huge data efficiently." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>VirtualScroller</h1>
                    <p>VirtualScroller is a performant approach to handle huge data efficiently.</p>
                </div>

                <DocActions github="virtualscroller/index.js" />
            </div>

            <div className="content-section implementation virtualscroller-demo">
                <div className="card">
                    <h5 className="mb-0">Basic</h5>
                    <div className="flex align-items-center flex-wrap">
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>Vertical</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                        </div>
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>Horizontal</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
                        </div>
                        <div className="flex flex-column mt-3">
                            <h6>Both</h6>
                            <VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5 className="mb-0">Scroll Delay</h5>
                    <div className="flex align-items-center flex-wrap">
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>0ms Delay</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                        </div>
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>150ms Delay</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150} />
                        </div>
                        <div className="flex flex-column mt-3">
                            <h6>250ms Delay</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5 className="mb-0">Loading</h5>
                    <div className="flex align-items-center flex-wrap">
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>Basic</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} />
                        </div>
                        <div className="flex flex-column mt-3">
                            <h6>Template</h6>
                            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Lazy</h5>
                    <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onLazyLoad={onLazyLoad}
                        showLoader loading={lazyLoading} />
                </div>

                <div className="card">
                    <h5>Template</h5>
                    <VirtualScroller items={templateItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
                </div>
            </div>

            <VirtualScrollerDoc />
        </div>
    )
}

export default VirtualScrollerDemo;
