import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

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
                        <h1>TreeTable - Selection</h1>
                        <p>TreeTable provides single and multiple selection modes on click of a row. 
                            Selected rows are bound to the selection property and onNodeSelect-onNodeUnselect events are provided as optional callbacks. 
                            In addition built-in checkbox based selection is available as alternative.</p>
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

export class TreeTableSelectionDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section source">
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