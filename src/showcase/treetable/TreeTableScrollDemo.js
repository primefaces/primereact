import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from './TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Scroll</h1>
                        <p>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Vertical</h3>
                    <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Horizontal</h3>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }}>
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>

                    <h3>Horizontal and Vertical</h3>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>

                    <h3>Frozen Columns</h3>
                    <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                        <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '36px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '36px' }} columnKey="size_0"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '36px' }} columnKey="type_0"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '36px' }} columnKey="size_1"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '36px' }} columnKey="type_1"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '36px' }} columnKey="size_2"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '36px' }} columnKey="type_2"></Column>
                    </TreeTable>
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
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <h3>Vertical</h3>
                <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>

                <h3>Horizontal</h3>
                <TreeTable value={this.state.nodes} scrollable style={{width: '600px'}}>
                    <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                    <Column field="size" header="Size" style={{width:'350px'}}></Column>
                    <Column field="type" header="Type" style={{width:'350px'}}></Column>
                </TreeTable>

                <h3>Horizontal and Vertical</h3>
                <TreeTable value={this.state.nodes} scrollable style={{width: '600px'}} scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                    <Column field="size" header="Size" style={{width:'350px'}}></Column>
                    <Column field="type" header="Type" style={{width:'350px'}}></Column>
                </TreeTable>

                <h3>Frozen Columns</h3>
                <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{width:'250px', height: '36px'}}></Column>
                    <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_0"></Column>
                    <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_0"></Column>
                    <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_1"></Column>
                    <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_1"></Column>
                    <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_2"></Column>
                    <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_2"></Column>
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
            <h3>Vertical</h3>
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Horizontal</h3>
            <TreeTable value={nodes} scrollable style={{width: '600px'}}>
                <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                <Column field="size" header="Size" style={{width:'350px'}}></Column>
                <Column field="type" header="Type" style={{width:'350px'}}></Column>
            </TreeTable>

            <h3>Horizontal and Vertical</h3>
            <TreeTable value={nodes} scrollable style={{width: '600px'}} scrollHeight="200px">
                <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                <Column field="size" header="Size" style={{width:'350px'}}></Column>
                <Column field="type" header="Type" style={{width:'350px'}}></Column>
            </TreeTable>

            <h3>Frozen Columns</h3>
            <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                <Column field="name" header="Name" expander frozen style={{width:'250px', height: '36px'}}></Column>
                <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_0"></Column>
                <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_0"></Column>
                <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_1"></Column>
                <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_1"></Column>
                <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_2"></Column>
                <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_2"></Column>
            </TreeTable>
        </div>
    )
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
            <h3>Vertical</h3>
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Horizontal</h3>
            <TreeTable value={nodes} scrollable style={{width: '600px'}}>
                <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                <Column field="size" header="Size" style={{width:'350px'}}></Column>
                <Column field="type" header="Type" style={{width:'350px'}}></Column>
            </TreeTable>

            <h3>Horizontal and Vertical</h3>
            <TreeTable value={nodes} scrollable style={{width: '600px'}} scrollHeight="200px">
                <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                <Column field="size" header="Size" style={{width:'350px'}}></Column>
                <Column field="type" header="Type" style={{width:'350px'}}></Column>
            </TreeTable>

            <h3>Frozen Columns</h3>
            <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                <Column field="name" header="Name" expander frozen style={{width:'250px', height: '36px'}}></Column>
                <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_0"></Column>
                <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_0"></Column>
                <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_1"></Column>
                <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_1"></Column>
                <Column field="size" header="Size" style={{width:'250px', height: '36px'}} columnKey="size_2"></Column>
                <Column field="type" header="Type" style={{width:'250px', height: '36px'}} columnKey="type_2"></Column>
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
                                    <LiveEditor name="TreeTableScrollDemo" sources={[key, value]} service="NodeService" data="treetablenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
