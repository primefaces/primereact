import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { ContextMenu } from '../../components/contextmenu/ContextMenu';
import { Growl} from '../../components/growl/Growl';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {},
            selectedNodeKey: null
        };

        this.menu = [
            {
                label: 'View Key',
                icon: 'pi pi-search',
                command: () => {
                    this.growl.show({severity: 'success', summary: 'Node Key', detail: this.state.selectedNodeKey});
                }
            },
            {
                label: 'Toggle',
                icon: 'pi pi-cog',
                command: () => {
                    let expandedKeys = {...this.state.expandedKeys};
                    if (expandedKeys[this.state.selectedNodeKey])
                        delete expandedKeys[this.state.selectedNodeKey];
                    else
                        expandedKeys[this.state.selectedNodeKey] = true;

                    this.setState({expandedKeys: expandedKeys});
                }
            }
        ];

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tree">
                        <h1>Tree <span>ContextMenu</span></h1>
                        <p>Tree has exclusive integration with the ContextMenu component with support for different menus depending on the node.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({ selectedNodeKey: null })}/>

                    <div className="card">
                        <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({ expandedKeys: e.value })}
                            contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({ selectedNodeKey: event.value })}
                            onContextMenu={event => this.cm.show(event.originalEvent)} />
                    </div>
                </div>

                <TreeContextMenuDemoDoc />
            </div>
        )
    }
}

export class TreeContextMenuDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { ContextMenu } from 'primereact/contextmenu';
import { Growl} from 'primereact/growl';
import { NodeService } from '../service/NodeService';

export class TreeContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {},
            selectedNodeKey: null
        };

        this.menu = [
            {
                label: 'View Key',
                icon: 'pi pi-search',
                command: () => {
                    this.growl.show({severity: 'success', summary: 'Node Key', detail: this.state.selectedNodeKey});
                }
            },
            {
                label: 'Toggle',
                icon: 'pi pi-cog',
                command: () => {
                    let expandedKeys = {...this.state.expandedKeys};
                    if (expandedKeys[this.state.selectedNodeKey])
                        delete expandedKeys[this.state.selectedNodeKey];
                    else
                        expandedKeys[this.state.selectedNodeKey] = true;

                    this.setState({expandedKeys: expandedKeys});
                }
            }
        ];

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({ selectedNodeKey: null })}/>

                <div className="card">
                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({ expandedKeys: e.value })}
                        contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({ selectedNodeKey: event.value })}
                        onContextMenu={event => this.cm.show(event.originalEvent)} />
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
import {Tree} from 'primereact/tree';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

const TreeContextMenuDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    let growl = useRef(null);
    let cm = useRef(null);

    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                growl.current.show({severity: 'success', summary: 'Node Key', detail: selectedNodeKey});
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys = {...expandedKeys};
                if (_expandedKeys[selectedNodeKey])
                    delete _expandedKeys[selectedNodeKey];
                else
                    _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Growl ref={growl} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)}/>

            <Tree value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                onContextMenu={event => cm.current.show(event.originalEvent)} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {Tree} from 'primereact/tree';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

const TreeContextMenuDemo = () => {
    const [nodes, setNodes] = useState<any>(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>(null);
    let growl = useRef<any>(null);
    let cm = useRef<any>(null);

    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                growl.current.show({severity: 'success', summary: 'Node Key', detail: selectedNodeKey});
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys:any = {...expandedKeys};
                if (_expandedKeys[selectedNodeKey])
                    delete _expandedKeys[selectedNodeKey];
                else
                    _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Growl ref={growl} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)}/>

            <Tree value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                onContextMenu={event => cm.current.show(event.originalEvent)} />
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
                    <TabPanel header="Source">
                        <LiveEditor name="TreeContextMenuDemo" sources={this.sources} service="NodeService" data="treenodes" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
