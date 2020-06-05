import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { TreeSubmenu } from './TreeSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
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
                let node = { ...event.node };
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
                            {context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button>}
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

        this.sources = {
            'class': {
                tabName: 'Class Source',
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

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="TreeLazyDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
