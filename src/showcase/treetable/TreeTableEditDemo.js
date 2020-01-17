import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { InputText } from '../../components/inputtext/InputText';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTableEditDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();

        this.sizeEditor = this.sizeEditor.bind(this);
        this.typeEditor = this.typeEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onEditorValueChange(props, value) {
        let newNodes = JSON.parse(JSON.stringify(this.state.nodes));
        let editedNode = this.findNodeByKey(newNodes, props.node.key);
        editedNode.data[props.field] = value;

        this.setState({
            nodes: newNodes
        });
    }

    findNodeByKey(nodes, key) {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    inputTextEditor(props, field) {
        return (
            <InputText type="text" value={props.node.data[field]}
                    onChange={(e) => this.onEditorValueChange(props, e.target.value)} />
        );
    }

    sizeEditor(props) {
        return this.inputTextEditor(props, 'size');
    }

    typeEditor(props) {
        return this.inputTextEditor(props, 'type');
    }

    requiredValidator(props) {
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction treetableeditdemo">
                    <div className="feature-intro">
                        <h1>TreeTable - Edit</h1>
                        <p>Incell editing provides a quick and user friendly way to manipulate data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation treetableedit-demo">
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander style={{height: '3.5em'}}></Column>
                        <Column field="size" header="Size" editor={this.sizeEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}></Column>
                        <Column field="type" header="Type" editor={this.typeEditor} style={{height: '3.5em'}}></Column>
                    </TreeTable>
                </div>

                <TreeTableEditDemoDoc />
            </div>
        )
    }
}

class TreeTableEditDemoDoc extends Component {

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
import { InputText } from 'primereact/inputtext;
import { NodeService } from '../service/NodeService';

export class TreeTableEditDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();

        this.sizeEditor = this.sizeEditor.bind(this);
        this.typeEditor = this.typeEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onEditorValueChange(props, value) {
        let newNodes = JSON.parse(JSON.stringify(this.state.nodes));
        let editedNode = this.findNodeByKey(newNodes, props.node.key);
        editedNode.data[props.field] = value;

        this.setState({
            nodes: newNodes
        });
    }

    findNodeByKey(nodes, key) {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    inputTextEditor(props, field) {
        return (
            <InputText type="text" value={props.node.data[field]}}
                    onChange={(e) => this.onEditorValueChange(props, e.target.value)} />
        );
    }

    sizeEditor(props) {
        return this.inputTextEditor(props, 'size');
    }

    typeEditor(props) {
        return this.inputTextEditor(props, 'type');
    }

    requiredValidator(props) {
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Edit</h1>
                        <p>Incell editing provides a quick and user friendly way to manipulate data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander style={{height: '3.5em'}}></Column>
                        <Column field="size" header="Size" editor={this.sizeEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}></Column>
                        <Column field="type" header="Type" editor={this.typeEditor} style={{height: '3.5em'}}></Column>
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
