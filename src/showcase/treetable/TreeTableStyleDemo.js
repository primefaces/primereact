import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTableStyleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.sizeTemplate = this.sizeTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    sizeTemplate(node) {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{size}</span>;
    }

    rowClassName(node) {
        return {'p-highlight' : (node.children && node.children.length === 3)};
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Styling</h1>
                        <p>Particular rows and cells can be styled based on data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                    <TreeTable value={this.state.nodes} rowClassName={this.rowClassName}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size" body={this.sizeTemplate}></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableStyleDemoDoc />
            </div>
        )
    }
}

class TreeTableStyleDemoDoc extends Component {

    shouldComponentUpdate(){
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
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableStyleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.sizeTemplate = this.sizeTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    sizeTemplate(node) {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{size}</span>;
    }

    rowClassName(node) {
        return {'p-highlight' : (node.children && node.children.length === 3)};
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Styling</h1>
                        <p>Particular rows and cells can be styled based on data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                    <TreeTable value={this.state.nodes} rowClassName={this.rowClassName}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size" body={this.sizeTemplate}></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
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
