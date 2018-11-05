import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Growl } from '../../components/growl/Growl';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class TreeTableSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nodes1: [], 
            nodes2: [], 
            nodes3: [], 
            nodes4: [], 
            nodes5: [], 
            selectedNodeKey1: null, 
            selectedNodeKey2: null, 
            selectedNodeKeys1: [], 
            selectedNodeKeys2: [], 
            selectedNodeKeys3: [] 
        };

        this.nodeservice = new NodeService();
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
    }

    onSelect(event) {
        this.growl.show({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    onUnselect(event) {
        this.growl.show({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes1: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes2: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes3: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes4: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes5: data}));
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Selection</h1>
                        <p>TreeTable supports single, multiple and checkbox based selection modes.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <h3 className="first">Single</h3>
                    <TreeTable value={this.state.nodes1} selectionMode="single" selectionKeys={this.state.selectedNodeKey1} onSelectionChange={e => this.setState({selectedNodeKey1: e.value})}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Multiple</h3>
                    <TreeTable value={this.state.nodes2} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({selectedNodeKeys1: e.value})} metaKeySelection={false}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Multiple with MetaKey</h3>
                    <TreeTable value={this.state.nodes3} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({selectedNodeKeys2: e.value})} metaKeySelection={true}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Events</h3>
                    <TreeTable value={this.state.nodes4} selectionMode="single" selectionKeys={this.state.selectedNodeKey2} onSelectionChange={e => this.setState({selectedNodeKey2: e.value})}
                        onSelect={this.onSelect} onUnselect={this.onUnselect}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Checkbox</h3>
                    <TreeTable value={this.state.nodes5} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({selectedNodeKeys3: e.value})}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableSelectionDoc />
            </div>
        )
    }
}

export class TreeTableSelectionDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';

export class TreeTableSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { data1: [], data2: [], data3: [], selectedFile: null, selectedFiles1: [], selectedFiles2: [] };

        this.nodeservice = new NodeService();

        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.onMultiMetaKeySelectionChange = this.onMultiMetaKeySelectionChange.bind(this);
        this.onCheckboxSelectionChange = this.onCheckboxSelectionChange.bind(this);
    }

    onSelectionChange(e) {
        this.setState({ selectedFile: e.selection });
    }

    onMultiMetaKeySelectionChange(e) {
        this.setState({ selectedFiles1: e.selection });
    }

    onCheckboxSelectionChange(e) {
        this.setState({ selectedFiles2: e.selection });
    }

    componentDidMount() {
        this.nodeservice.getNodes().then(data => this.setState({data1: data}));
        this.nodeservice.getNodes().then(data => this.setState({data2: data}));
        this.nodeservice.getNodes().then(data => this.setState({data3: data}));
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">

                    <h3>Single Selection</h3>
                    <TreeTable value={this.state.data1} selectionMode="single" header="Single Selection" selectionChange={this.onSelectionChange}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>Selected Node: {this.state.selectedFile && this.state.selectedFile.data.name}</div>

                    <h3>Multiple Selection with Metakey</h3>
                    <TreeTable value={this.state.data2} selectionMode="multiple" header="Multiple Selection with MetaKey" selectionChange={this.onMultiMetaKeySelectionChange}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles1.map((obj, i) => {
                                return <span key={i}>{i !== 0 ? "," : ""} {obj.data.name}</span>
                            })
                        }
                    </div>

                    <h3>Multiple Selection with Checkbox</h3>
                    <TreeTable value={this.state.data3} selectionMode="checkbox" header="Checkbox Selection" selectionChange={this.onCheckboxSelectionChange}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles2.map((obj, i) => {
                                return <span key={i}>{i !== 0 ? "," : ""} {obj.data.name}</span>
                            })
                        }
                    </div>
                </div>

                <TreeTableSelectionDoc />
            </div>
        )
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}