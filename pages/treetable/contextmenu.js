import React, { useState, useEffect, useRef, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { ContextMenu } from '../../components/lib/contextmenu/ContextMenu';
import { Toast } from '../../components/lib/toast/Toast';
import { Column } from '../../components/lib/column/Column';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableContextMenuDemo = () => {

    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys = { ...expandedKeys };
                if (_expandedKeys[selectedNodeKey])
                    delete _expandedKeys[selectedNodeKey];
                else
                    _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeTable Component - ContextMenu</title>
                <meta name="description" content="TreeTable has exclusive integration with ContextMenu." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>ContextMenu</span></h1>
                    <p>TreeTable has exclusive integration with ContextMenu.</p>
                </div>

                <DocActions github="treetable/contextmenu.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast} />

                <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

                <div className="card">
                    <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                        contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                        onContextMenu={event => cm.current.show(event.originalEvent)}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTableContextMenuDemoDoc />
        </div>
    )
}

export default TreeTableContextMenuDemo;

const TreeTableContextMenuDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: {},
            selectedNodeKey: null
        };

        this.menu = [
            {
                label: 'View Key',
                icon: 'pi pi-search',
                command: () => {
                    this.toast.show({ severity: 'success', summary: 'Node Key', detail: this.state.selectedNodeKey });
                }
            },
            {
                label: 'Toggle',
                icon: 'pi pi-cog',
                command: () => {
                    let expandedKeys = { ...this.state.expandedKeys };
                    if (expandedKeys[this.state.selectedNodeKey])
                        delete expandedKeys[this.state.selectedNodeKey];
                    else
                        expandedKeys[this.state.selectedNodeKey] = true;

                    this.setState({ expandedKeys: expandedKeys });
                }
            }
        ];

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({ selectedNodeKey: null })} />

                <div className="card">
                    <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({ expandedKeys: e.value })}
                        contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({ selectedNodeKey: event.value })}
                        onContextMenu={event => this.cm.show(event.originalEvent)}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
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
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableContextMenuDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys = { ...expandedKeys };
                if (_expandedKeys[selectedNodeKey])
                    delete _expandedKeys[selectedNodeKey];
                else
                    _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

            <div className="card">
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableContextMenuDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys = { ...expandedKeys };
                if (_expandedKeys[selectedNodeKey])
                    delete _expandedKeys[selectedNodeKey];
                else
                    _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

            <div className="card">
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./NodeService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>
        <script src="https://unpkg.com/primereact/contextmenu/contextmenu.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;
const { ContextMenu } = primereact.contextmenu;
const { Toast } = primereact.toast;

const TreeTableContextMenuDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys = { ...expandedKeys };
                if (_expandedKeys[selectedNodeKey])
                    delete _expandedKeys[selectedNodeKey];
                else
                    _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

            <div className="card">
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
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
                    useLiveEditorTabs({ name: 'TreeTableContextMenuDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )
})
