import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';

export class VirtualScrollerDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
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
            lazyItems: [],
            lazyLoading: false
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
            const { first, numItems } = event;
            const lazyItems = [...this.state.lazyItems];
            const end = Math.min(this.state.lazyItems.length, (first + numItems));

            for (let i = first; i < end; i++) {
                lazyItems[i] = \`Item #\${i}\`;
            }

            this.setState({
                lazyItems,
                lazyLoading: false
            });
        }, Math.random() * 1000 + 250);
    }

    basicItemTemplate(item, options) {
        const className = classNames('scroll-item p-p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    basicLoadingTemplate(options) {
        const className = classNames('scroll-item p-p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    multiItemTemplate(items, options) {
        const className = classNames('scroll-item p-p-2', {
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
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
            </div>
        )
    }

    loadingTemplate(options) {
        const className = classNames('custom-scroll-item scroll-item', {
            'odd': options.odd
        });

        return (
            <div className={className}>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
            </div>
        );
    }

    render() {
        return (
            <div className="virtual-scroll-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <div className="p-d-flex p-ai-center">
                        <div className="p-d-flex p-dir-col">
                            <h6>Vertical</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} />
                        </div>
                        <div className="p-d-flex p-dir-col p-mx-3">
                            <h6>Horizontal</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} orientation="horizontal" />
                        </div>
                        <div className="p-d-flex p-dir-col p-mx-3">
                            <h6>Both</h6>
                            <VirtualScroller items={this.multiItems} itemSize={[50, 100]} itemTemplate={this.multiItemTemplate} orientation="both" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Scroll Delay</h5>
                    <div className="p-d-flex p-ai-center">
                        <div className="p-d-flex p-dir-col">
                            <h6>0ms Delay</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} />
                        </div>
                        <div className="p-d-flex p-dir-col p-mx-3">
                            <h6>150ms Delay</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} delay={150}/>
                        </div>
                        <div className="p-d-flex p-dir-col p-mx-3">
                            <h6>250ms Delay</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} delay={250} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Loading</h5>
                    <div className="p-d-flex p-ai-center">
                        <div className="p-d-flex p-dir-col">
                            <h6>Basic</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} showLoader delay={250}/>
                        </div>
                        <div className="p-d-flex p-dir-col p-mx-3">
                            <h6>Template</h6>
                            <VirtualScroller items={this.basicItems} itemSize={50} itemTemplate={this.basicItemTemplate} showLoader delay={250} loadingTemplate={this.basicLoadingTemplate} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Lazy</h5>
                    <VirtualScroller items={this.state.lazyItems} itemSize={50} itemTemplate={this.basicItemTemplate} lazy onScrollChange={this.onLazyLoad}
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
import React, { useEffect, useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';
import './VirtualScrollerDemo.css';

const VirtualScrollerDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);

    const basicItems = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    const multiItems = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
    let loadLazyTimeout = null;


    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]);

    const onLazyLoad = (event) => {
        setLazyLoading(false);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, numItems } = event;
            const _lazyItems = [...lazyItems];
            const end = Math.min(lazyItems.length, (first + numItems));

            for (let i = first; i < end; i++) {
                lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    const basicLoadingTemplate = (options) => {
        const className = classNames('scroll-item p-p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    const multiItemTemplate = (items, options) => {
        const className = classNames('scroll-item p-p-2', {
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
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
            </div>
        )
    }

    const loadingTemplate = (options) => {
        const className = classNames('custom-scroll-item scroll-item', {
            'odd': options.odd
        });

        return (
            <div className={className}>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
            </div>
        );
    }

    return (
        <div className="virtual-scroll-demo">
            <div className="card">
                <h5>Basic</h5>
                <div className="p-d-flex p-ai-center">
                    <div className="p-d-flex p-dir-col">
                        <h6>Vertical</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>Horizontal</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>Both</h6>
                        <VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
                    </div>
                </div>
            </div>

            <div className="card">
                <h5>Scroll Delay</h5>
                <div className="p-d-flex p-ai-center">
                    <div className="p-d-flex p-dir-col">
                        <h6>0ms Delay</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>150ms Delay</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150}/>
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>250ms Delay</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
                    </div>
                </div>
            </div>

            <div className="card">
                <h5>Loading</h5>
                <div className="p-d-flex p-ai-center">
                    <div className="p-d-flex p-dir-col">
                        <h6>Basic</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>Template</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
                    </div>
                </div>
            </div>

            <div className="card">
                <h5>Lazy</h5>
                <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onScrollChange={onLazyLoad}
                    showLoader loading={lazyLoading} />
            </div>

            <div className="card">
                <h5>Template</h5>
                <VirtualScroller items={basicItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
            </div>
        </div>

    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useEffect, useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';
import './VirtualScrollerDemo.css';

const VirtualScrollerDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);

    const basicItems = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    const multiItems = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
    let loadLazyTimeout = null;


    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]);

    const onLazyLoad = (event) => {
        setLazyLoading(false);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, numItems } = event;
            const _lazyItems = [...lazyItems];
            const end = Math.min(lazyItems.length, (first + numItems));

            for (let i = first; i < end; i++) {
                lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    const basicLoadingTemplate = (options) => {
        const className = classNames('scroll-item p-p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    const multiItemTemplate = (items, options) => {
        const className = classNames('scroll-item p-p-2', {
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
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
            </div>
        )
    }

    const loadingTemplate = (options) => {
        const className = classNames('custom-scroll-item scroll-item', {
            'odd': options.odd
        });

        return (
            <div className={className}>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="50%" height="1.2rem" /></div>
                <div className="p-d-flex p-ai-center p-px-2" style={{ height: '25px' }}><Skeleton width="60%" height="1.2rem" /></div>
            </div>
        );
    }

    return (
        <div className="virtual-scroll-demo">
            <div className="card">
                <h5>Basic</h5>
                <div className="p-d-flex p-ai-center">
                    <div className="p-d-flex p-dir-col">
                        <h6>Vertical</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>Horizontal</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>Both</h6>
                        <VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
                    </div>
                </div>
            </div>

            <div className="card">
                <h5>Scroll Delay</h5>
                <div className="p-d-flex p-ai-center">
                    <div className="p-d-flex p-dir-col">
                        <h6>0ms Delay</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>150ms Delay</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150}/>
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>250ms Delay</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
                    </div>
                </div>
            </div>

            <div className="card">
                <h5>Loading</h5>
                <div className="p-d-flex p-ai-center">
                    <div className="p-d-flex p-dir-col">
                        <h6>Basic</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
                    </div>
                    <div className="p-d-flex p-dir-col p-mx-3">
                        <h6>Template</h6>
                        <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
                    </div>
                </div>
            </div>

            <div className="card">
                <h5>Lazy</h5>
                <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={basicItemTemplate} lazy onScrollChange={onLazyLoad}
                    showLoader loading={lazyLoading} />
            </div>

            <div className="card">
                <h5>Template</h5>
                <VirtualScroller items={basicItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
            </div>
        </div>

    )
}
                `
            }
        }
        this.extFiles = {
            'src/demo/VirtualScrollerDemo.css': {
                content: `
.virtual-scroll-demo .scroll-item {
    display: flex;
    align-items: center;
}

.virtual-scroll-demo .custom-scroll-item {
    flex-direction: column;
    align-items: stretch;
}

.virtual-scroll-demo .odd {
    background-color: var(--surface-b);
}

.virtual-scroll-demo .p-virtual-scroll {
    height: 200px;
    width: 200px;
    border: 1px solid var(--surface-d);
}

.virtual-scroll-demo .p-horizontal-scroll .p-virtual-scroll-content {
    display: flex;
    flex-direction: row;
}

.virtual-scroll-demo .p-horizontal-scroll .scroll-item {
    writing-mode: vertical-lr;
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    <TabPanel header="Documentation">


                    </TabPanel>

                {
                    useLiveEditorTabs({ name: 'VirtualScrollerDemo', sources: this.sources, extFiles: this.extFiles })
                }
                </TabView>
            </div>
        )
    }
}
