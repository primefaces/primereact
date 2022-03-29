import React, { useState, useEffect, memo } from 'react';
import { Tree } from '../../components/lib/tree/Tree';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeLazyDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [loading, setLoading] = useState(true);

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
                let node = { ...event.node };
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

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React Tree Component - Lazy</title>
                <meta name="description" content="Lazy loading is useful when dealing with huge datasets." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tree <span>Lazy</span></h1>
                    <p>Lazy loading is useful when dealing with huge datasets.</p>
                </div>

                <DocActions github="tree/lazy.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
                </div>
            </div>

            <TreeLazyDemoDoc />
        </div>
    )
}

export default TreeLazyDemo;

export const TreeLazyDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';

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
                <div className="card">
                    <Tree value={this.state.nodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
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
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';

const TreeLazyDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [loading, setLoading] = useState(true);

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
                let node = { ...event.node };
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

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';

const TreeLazyDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [loading, setLoading] = useState(true);

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
                let node = { ...event.node };
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

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/tree/tree.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Tree } = primereact.tree;

const TreeLazyDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [loading, setLoading] = useState(true);

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
                let node = { ...event.node };
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

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'TreeLazyDemo', sources: sources })
                }
            </TabView>
        </div>
    );
})
