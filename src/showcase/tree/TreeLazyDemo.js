import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            loading: true,
        };

        this.loadOnExpand = this.loadOnExpand.bind(this);
    }

    createLazyNodes() {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    loadOnExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...this.state.nodes];
                value[parseInt(event.node.key, 10)] = node;
                this.setState({
                    nodes: value,
                    loading: false
                });
            }, 500);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                nodes: this.createLazyNodes(),
                loading: false
            });
        }, 2000);
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Lazy</h1>
                        <p>Lazy loading is useful when dealing with huge datasets.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Lazy Loading</h3>
                    <Tree value={this.state.nodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
                </div>

                <TreeLazyDemoDoc />
            </div>
        )
    }
}

export class TreeLazyDemoDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';

export class TreeLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            loading: true,
        };

        this.loadOnExpand = this.loadOnExpand.bind(this);
    }

    createLazyNodes() {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    loadOnExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...this.state.nodes];
                value[parseInt(event.node.key, 10)] = node;
                this.setState({
                    nodes: value,
                    loading: false
                });
            }, 500);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                nodes: this.createLazyNodes(),
                loading: false
            });
        }, 2000);
    }

    render() {
        return (
            <div>
                <h3>Lazy Loading</h3>
                <Tree value={this.state.nodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {Tree} from 'primereact/tree';

const TreeLazyDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 500);
        }
    }

    return (
        <div>
            <h3>Lazy Loading</h3>
            <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {Tree} from 'primereact/tree';

const TreeLazyDemo = () => {
    const [nodes, setNodes] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    const loadOnExpand = (event: any) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 500);
        }
    }

    return (
        <div>
            <h3>Lazy Loading</h3>
            <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tree" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeLazyDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
