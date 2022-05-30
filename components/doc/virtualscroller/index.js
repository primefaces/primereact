import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const VirtualScrollerDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';
import './VirtualScrollerDemo.css';

export class VirtualScrollerDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lazyItems: []
        };

        this.basicItems = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
        this.multiItems = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
        this.loadLazyTimeout = null;

        this.basicItemTemplate = this.basicItemTemplate.bind(this);
        this.basicLoadingTemplate = this.basicLoadingTemplate.bind(this);
        this.multiItemTemplate = this.multiItemTemplate.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.loadingTemplate = this.loadingTemplate.bind(this);
        this.onLazyLoad = this.onLazyLoad.bind(this);
    }

    componentDidMount() {
        this.setState({
            lazyItems: Array.from({ length: 100000 }),
            lazyLoading: false
        });
    }

    onLazyLoad(event) {
        this.setState({ lazyLoading: true });

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const lazyItems = [...this.state.lazyItems];

            for (let i = first; i < last; i++) {
                lazyItems[i] = \`Item #\${i}\`;
            }

            this.setState({
                lazyItems,
                lazyLoading: false
            });
        }, Math.random() * 1000 + 250);
    }

    basicItemTemplate(item, options) {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    basicLoadingTemplate(options) {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    multiItemTemplate(items, options) {
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

    itemTemplate(item, options) {
        const { index, count, first, last, even, odd } = options;
        const className = classNames('custom-scroll-item scroll-item', {
            'odd': odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
            </div>
        )
    }

    loadingTemplate(options) {
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

    render() {
        return (
            <div className="virtualscroller-demo">
                <div className="card">
                    <h5 className="mb-0">Basic</h5>
                    <div className="flex align-items-center flex-wrap">
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>Vertical</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} />
                        </div>
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>Horizontal</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} orientation="horizontal" />
                        </div>
                        <div className="flex flex-column mt-3">
                            <h6>Both</h6>
                            <VirtualScroller items={this.multiItems} itemSize={[50, 100]} itemTemplate={this.multiItemTemplate} orientation="both" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5 className="mb-0">Scroll Delay</h5>
                    <div className="flex align-items-center flex-wrap">
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>0ms Delay</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} />
                        </div>
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>150ms Delay</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} delay={150}/>
                        </div>
                        <div className="flex flex-column mt-3">
                            <h6>250ms Delay</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} delay={250} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5 className="mb-0">Loading</h5>
                    <div className="flex align-items-center flex-wrap">
                        <div className="flex flex-column mr-3 mt-3">
                            <h6>Basic</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} showLoader delay={250}/>
                        </div>
                        <div className="flex flex-column mt-3">
                            <h6>Template</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} showLoader delay={250} loadingTemplate={this.basicLoadingTemplate} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Lazy</h5>
                    <VirtualScroller items={this.state.lazyItems} itemSize={50} itemTemplate={this.basicItemTemplate} lazy onLazyLoad={this.onLazyLoad}
                        showLoader loading={this.state.lazyLoading} />
                </div>

                <div className="card">
                    <h5>Template</h5>
                    <VirtualScroller items={this.basicItems} itemSize={25 * 7} itemTemplate={this.itemTemplate} showLoader delay={250} loadingTemplate={this.loadingTemplate} />
                </div>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useEffect, useState, useRef } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';
import './VirtualScrollerDemo.css';

const VirtualScrollerDemo = () => {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => \`Item #\${i}\`));
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
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
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
        <div className="virtualscroller-demo">
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
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150}/>
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
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
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
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useEffect, useState, useRef } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';
import './VirtualScrollerDemo.css';

const VirtualScrollerDemo = () => {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => \`Item #\${i}\`));
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
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
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
        <div className="virtualscroller-demo">
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
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150}/>
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
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
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
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
    <link rel="stylesheet" href="./VirtualScrollerDemo.css" />

    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/blockui/blockui.min.js"></script>
    <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
    <script src="https://unpkg.com/primereact/skeleton/skeleton.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { classNames } = primereact.core;
const { VirtualScroller } = primereact.virtualscroller;
const { Skeleton } = primereact.skeleton;

const VirtualScrollerDemo = () => {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => \`Item #\${i}\`));
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
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
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
        <div className="virtualscroller-demo">
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
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150}/>
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
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
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
    )
}
                `
        }
    }

    const extFiles = {
        'demo/VirtualScrollerDemo.css': {
            content: `
.virtualscroller-demo .scroll-item {
    display: flex;
    align-items: center;
}

.virtualscroller-demo .custom-scroll-item {
    flex-direction: column;
    align-items: stretch;
}

.virtualscroller-demo .odd {
    background-color: var(--surface-b);
}

.virtualscroller-demo .p-virtualscroller {
    height: 200px;
    width: 200px;
    border: 1px solid var(--surface-d);
}

.virtualscroller-demo .p-horizontal-scroll .p-virtualscroller-content {
    display: flex;
    flex-direction: row;
}

.virtualscroller-demo .p-horizontal-scroll .scroll-item {
    writing-mode: vertical-lr;
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { VirtualScroller } from 'primereact/virtualscroller';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>VirtualScroller is used to display huge data. It periodically adds special elements defined according to the scroll's position to the DOM.
                        The <i>itemSize</i> and <i>itemTemplate</i> properties are required on component. In addition, an initial array is required based on the total number of items to display.<br />
                        VirtualScroller automatically calculates how many items will be displayed in the view according to <i>itemSize</i> using a specified scroll height. Its scroll height can be adjusted with <i>scrollHeight</i> property or height property of CSS.</p>
<CodeHighlight>
{`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);

const itemTemplate = (item, options) => {
    // item: Current item.
    // options.index: Index of the item.
    // options.count: Total numbers of items.
    // options.first: Whether this is the first item.
    // options.last: Whether this is the last item.
    // options.even: Whether the index is even.
    // options.odd: Whether the index is odd.
    // options.props: Props of component.

    return <div style={{ height: '50px' }}>{item}</div>;
}
`}
</CodeHighlight>

                    <h5>Loader</h5>
                    <p>VirtualScroller has a special loader. It can be activated with the <i>showLoader</i> property.
                        In addition, <i>loadingTemplate</i> can be used to add custom loaders to item elements.</p>
<CodeHighlight>
{`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} />

<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const loadingTemplate = (options) => {
    // options.index: Index of the item.
    // options.count: Total numbers of items.
    // options.first: Whether this is the first item.
    // options.last: Whether this is the last item.
    // options.even: Whether the index is even.
    // options.odd: Whether the index is odd.
    // options.props: Props of component.
    // options.numCols: Total number of columns in a row in 'both' orientation mode in view.

    return (
        <div style={{ height: '50px' }}>
            <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
        </div>
    );
}
`}
</CodeHighlight>

                    <h5>Lazy</h5>
                    <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking <i>onLazyLoad</i> callback.</p>

<CodeHighlight>
{`
<VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad}
    showLoader loading={lazyLoading} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
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
            _lazyItems[i] = \`Item #\${i}\`;
        }

        setLazyItems(_lazyItems)
        setLazyLoading(true);
    }, Math.random() * 1000 + 250);
}
`}
</CodeHighlight>

                    <h5>Content Template</h5>
                    <p>VirtualScroller has a HTML div element to wrap the all items. But in some cases, it may be desirable to define a completely special wrapper element instead of the HTML div element. The <i>contentTemplate</i> property can be used for this.
                    This will be especially necessary to maintain the DOM layout and provide accessibility.</p>
<CodeHighlight>
{`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} contentTemplate={contentTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const contentTemplate = (options) => {
    // options.className: Class name of wrapper element.
    // options.contentRef: Ref of wrapper element.
    // options.spacerRef: Ref of spacer element.
    // options.stickyRef: Ref of sticky element in content.
    // options.items: Loaded data.
    // options.getItemOptions(index): Information of any item.
    // options.children: Items of wrapper element.
    // options.element: Default wrapper element.
    // options.props: Props of component.
    // options.loading: Whether the data is loaded.
    // options.getLoaderOptions(index): Information of any item during the loading.
    // options.loadingTemplate: Template of loading item.
    // options.itemSize: The height/width of item according to orientation.
    // options.vertical: Whether the orientation is vertical.
    // options.horizontal: Whether the orientation is horizontal.
    // options.both: Whether the orientation is both.

    return (
        <ul ref={options.contentRef} className={options.className} role="listbox">
            {options.children}
        </ul>
    );
}

const itemTemplate = (item, options) => {
    return <li role="option" style={{ height: '50px' }}>{item}</li>
}
`}
</CodeHighlight>
                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                                <tr>
                                    <td>items</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of objects to display.</td>
                                </tr>
                                <tr>
                                    <td>itemSize</td>
                                    <td>number / [number, number]</td>
                                    <td>null</td>
                                    <td>The height/width of item according to orientation.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Height of the scroll viewport.</td>
                                </tr>
                                <tr>
                                    <td>scrollWidth</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Width of the scroll viewport.</td>
                                </tr>
                                <tr>
                                    <td>orientation</td>
                                    <td>string</td>
                                    <td>'vertical'</td>
                                    <td>The orientation of scrollbar, valid values are 'vertical', 'horizontal' and 'both'.</td>
                                </tr>
                                <tr>
                                    <td>numToleratedItems</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Determines how many additional elements to add to the DOM outside of the view. <br />
                                        According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. <br />
                                        Default value is half the number of items shown in the view.</td>
                                </tr>
                                <tr>
                                    <td>delay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay in scroll before new data is loaded.</td>
                                </tr>
                                <tr>
                                    <td>lazy</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines if data is loaded and interacted with in lazy manner.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.</td>
                                </tr>
                                <tr>
                                    <td>loaderDisabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Used to implement a custom loader instead of using the loader feature in the VirtualScroller.</td>
                                </tr>
                                <tr>
                                    <td>loading</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the data is loaded.</td>
                                </tr>
                                <tr>
                                    <td>showSpacer</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.</td>
                                </tr>
                                <tr>
                                    <td>showLoader</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to show loader.</td>
                                </tr>
                                <tr>
                                    <td>loadingTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of loader.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of item.</td>
                                </tr>
                                <tr>
                                    <td>contentTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of item's wrapper element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onScroll</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when scroll position changes.</td>
                                </tr>
                                <tr>
                                    <td>onScrollIndexChange</td>
                                    <td>event.first: First index of the new data range to be loaded.<br/>
                                        event.last: Last index of the new data range to be loaded.
                                    </td>
                                    <td>Callback to invoke when scroll position and item's range in view changes.</td>
                                </tr>
                                <tr>
                                    <td>onLazyLoad</td>
                                    <td>event.first: First index of the new data range to be loaded.<br/>
                                        event.last: Last index of the new data range to be loaded.
                                    </td>
                                    <td>Callback to invoke in lazy mode to load new data.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Methods</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>scrollTo</td>
                                    <td>
                                        left: Left position of scroll. <br />
                                        top: Top position of scroll <br />
                                        behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                                    </td>
                                    <td>Scroll to move to a specific position.</td>
                                </tr>
                                <tr>
                                    <td>scrollToIndex</td>
                                    <td>
                                        index: Index of item according to orientation mode. <br />
                                        behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                                    </td>
                                    <td>Scroll to move to a specific item.</td>
                                </tr>
                                <tr>
                                    <td>scrollInView</td>
                                    <td>
                                        index: Index of item according to orientation mode. <br />
                                        to: Defines the location of the item in view, valid values are 'to-start' and 'to-end'. <br />
                                        behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                                    </td>
                                    <td>It is used to move the specified index into the view. It is a method that will usually be needed when keyboard support is added to the virtualScroller component.</td>
                                </tr>
                                <tr>
                                    <td>getRenderedRange</td>
                                    <td>-</td>
                                    <td>Returns the range of items added to the DOM.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-virtualscroller</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-virtualscroller-content</td>
                                    <td>Content element.</td>
                                </tr>
                                <tr>
                                    <td>p-virtualscroller-loader</td>
                                    <td>Loader element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes
                        as any valid attribute is passed to the container element. List element can be also customized for accessibility using <i>listProps</i> property.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any built-in interactive elements.</p>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>

                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'VirtualScrollerDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})

export default VirtualScrollerDoc;
