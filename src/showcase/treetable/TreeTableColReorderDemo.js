import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeTableColReorderDemo extends Component {

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
                        <h1>TreeTable - Column Reorder</h1>
                        <p>Order of the columns can be changed using drag and drop.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} reorderableColumns>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableColReorderDemoDoc />
            </div>
        )
    }
}

class TreeTableColReorderDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableColReorderDemo extends Component {

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
                <TreeTable value={this.state.nodes} reorderableColumns>
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
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

const TreeTableColReorderDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <TreeTable value={nodes} reorderableColumns>
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
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

const TreeTableColReorderDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <TreeTable value={nodes} reorderableColumns>
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
                                    <LiveEditor name="TreeTableColReorderDemo" sources={[key, value]} service="NodeService" data="treetablenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
