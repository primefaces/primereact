import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableColResizeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Column Resize</span></h1>
                        <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand".
                            Fit is the default one and the overall table width does not change when a column is resized whereas in "expand" mode, table width also changes along with the column width.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Fit Mode</h5>
                        <TreeTable value={this.state.nodes} resizableColumns columnResizeMode="fit">
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Expand Mode</h5>
                        <TreeTable value={this.state.nodes} resizableColumns columnResizeMode="expand">
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Scrollable</h5>
                        <TreeTable value={this.state.nodes} resizableColumns scrollable scrollHeight="200px">
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Scrollable with Variable Width</h5>
                        <TreeTable value={this.state.nodes} resizableColumns scrollable scrollHeight="200px">
                            <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
                            <Column field="size" header="Size" style={{ width: '30%' }}></Column>
                            <Column field="type" header="Type" style={{ width: '20%' }}></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableColResizeDemoDoc />
            </div>
        )
    }
}

class TreeTableColResizeDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableColResizeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Fit Mode</h5>
                    <TreeTable value={this.state.nodes} resizableColumns columnResizeMode="fit">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Expand Mode</h5>
                    <TreeTable value={this.state.nodes} resizableColumns columnResizeMode="expand">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Scrollable</h5>
                    <TreeTable value={this.state.nodes} resizableColumns scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Scrollable with Variable Width</h5>
                    <TreeTable value={this.state.nodes} resizableColumns scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
                        <Column field="size" header="Size" style={{ width: '30%' }}></Column>
                        <Column field="type" header="Type" style={{ width: '20%' }}></Column>
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
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableColResizeDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Fit Mode</h5>
                    <TreeTable value={nodes} resizableColumns columnResizeMode="fit">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Expand Mode</h5>
                    <TreeTable value={nodes} resizableColumns columnResizeMode="expand">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Scrollable</h5>
                    <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Scrollable with Variable Width</h5>
                    <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
                        <Column field="size" header="Size" style={{ width: '30%' }}></Column>
                        <Column field="type" header="Type" style={{ width: '20%' }}></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableColResizeDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Fit Mode</h3>
            <TreeTable value={nodes} resizableColumns columnResizeMode="fit">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Expand Mode</h3>
            <TreeTable value={nodes} resizableColumns columnResizeMode="expand">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Scrollable</h3>
            <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Scrollable with Variable Width</h3>
            <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{width:'50%'}}></Column>
                <Column field="size" header="Size" style={{width:'30%'}}></Column>
                <Column field="type" header="Type" style={{width:'20%'}}></Column>
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
                        useLiveEditorTabs({ name: 'TreeTableColResizeDemo', sources: this.sources, service: 'NodeService', data: 'treetablenodes' })
                    }
                </TabView>
            </div>
        )
    }
}
