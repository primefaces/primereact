import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { ContextMenu } from '../../components/contextmenu/ContextMenu';
import { Growl } from '../../components/growl/Growl';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - ContextMenu</h1>
                        <p>TreeTable has exclusive integration with ContextMenu.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedNodeKey: null})}/>

                    <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({expandedKeys: e.value})}
                        contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({selectedNodeKey: event.value})}
                        onContextMenu={event => this.cm.show(event.originalEvent)}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableContextMenuDemoDoc />
            </div>
        )
    }
}

class TreeTableContextMenuDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Growl } from 'primereact/growl';
import { Column } from "primereact/column";
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

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <ContextMenu model={thismenu} ref={el => this.cm = el} onHide={() => this.setState({selectedNodeKey: null})}/>

                <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({expandedKeys: e.value})}
                    contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({selectedNodeKey: event.value})}
                    onContextMenu={event => this.cm.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
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
import { Growl } from 'primereact/growl';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

const TreeTableContextMenuDemo = () => {
    const [nodes, setNodes] = useState([]);
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

    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Growl ref={growl} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)}/>

            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                onContextMenu={event => cm.current.show(event.originalEvent)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
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
import { Growl } from 'primereact/growl';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

const TreeTableContextMenuDemo = () => {
    const [nodes, setNodes] = useState([]);
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
                let _expandedKeys: any = {...expandedKeys};
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
            <Growl ref={growl} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)}/>

            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                onContextMenu={event => cm.current.show(event.originalEvent)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
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
                                    <LiveEditor name="TreeTableContextMenuDemo" sources={[key, value]} service="NodeService" data="treetablenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
