import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: []
        };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => {
            this.setState({ nodes1: data });

            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Sort</span></h1>
                        <p>TreeTable supports both single column and multiple column sorting.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Single Column Sorting</h5>
                        <TreeTable value={this.state.nodes1} defaultSortOrder={-1}>
                            <Column field="name" header="Name" expander sortable></Column>
                            <Column field="size" header="Size" sortable></Column>
                            <Column field="type" header="Type" sortable></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Multiple Column Sorting</h5>
                        <TreeTable value={this.state.nodes2} sortMode="multiple" defaultSortOrder={-1}>
                            <Column field="name" header="Name" expander sortable></Column>
                            <Column field="size" header="Size" sortable></Column>
                            <Column field="type" header="Type" sortable></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableSortDemoDoc />
            </div>
        );
    }
}

class TreeTableSortDemoDoc extends Component {

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

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: []
        };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => {
            this.setState({ nodes1: data });

            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Single Column Sorting</h5>
                    <TreeTable value={this.state.nodes1} defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple Column Sorting</h5>
                    <TreeTable value={this.state.nodes2} sortMode="multiple" defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>
            </div>
        );
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

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Single Column Sorting</h5>
                <TreeTable value={nodes1} defaultSortOrder={-1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple Column Sorting</h5>
                <TreeTable value={nodes2} sortMode="multiple" defaultSortOrder={-1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
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

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Single Column Sorting</h5>
                <TreeTable value={nodes1} defaultSortOrder={-1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple Column Sorting</h5>
                <TreeTable value={nodes2} sortMode="multiple" defaultSortOrder={-1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
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
                        useLiveEditorTabs({ name: 'TreeTableSortDemo', sources: this.sources, service: 'NodeService', data: 'treetablenodes' })
                    }
                </TabView>
            </div>
        )
    }
}
