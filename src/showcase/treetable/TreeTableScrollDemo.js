import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableScrollDemo extends Component {

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
                        <h1>TreeTable <span>Scroll</span></h1>
                        <p>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Vertical</h5>
                        <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Horizontal</h5>
                        <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }}>
                            <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                            <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                            <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Horizontal and Vertical</h5>
                        <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                            <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                            <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                            <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Frozen Columns</h5>
                        <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                            <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                            <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                            <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                            <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                            <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                            <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                            <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableScrollDemoDoc />
            </div>
        )
    }
}

class TreeTableScrollDemoDoc extends Component {

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

export class TreeTableScrollDemo extends Component {

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
                    <h5>Vertical</h5>
                    <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal</h5>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }}>
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal and Vertical</h5>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Frozen Columns</h5>
                    <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                        <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
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

const TreeTableScrollDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Vertical</h5>
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }}>
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
                </TreeTable>
            </div>
        </div>
    );
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

const TreeTableScrollDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Vertical</h5>
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }}>
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
                </TreeTable>
            </div>
        </div>
    );
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
                        useLiveEditorTabs({ name: 'TreeTableScrollDemo', sources: this.sources, service: 'NodeService', data: 'treetablenodes' })
                    }
                </TabView>
            </div>
        )
    }
}
