import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { InputText } from '../../components/inputtext/InputText';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { InputText } from 'primereact/inputtext';
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
                <TreeTable value={this.state.nodes}>
                    <Column field="name" header="Name" expander style={{height: '3.5em'}}></Column>
                    <Column field="size" header="Size" editor={this.sizeEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}></Column>
                    <Column field="type" header="Type" editor={this.typeEditor} style={{height: '3.5em'}}></Column>
                </TreeTable>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

const TreeTableEditDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (props, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, props.node.key);
        editedNode.data[props.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (props, field) => {
        return (
            <InputText type="text" value={props.node.data[field]}
                    onChange={(e) => onEditorValueChange(props, e.target.value)} />
        );
    };

    const sizeEditor = (props) => {
        return inputTextEditor(props, 'size');
    };

    const typeEditor = (props) => {
        return inputTextEditor(props, 'type');
    };

    const requiredValidator = (props) => {
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div>
            <TreeTable value={nodes}>
                <Column field="name" header="Name" expander style={{height: '3.5em'}}></Column>
                <Column field="size" header="Size" editor={sizeEditor} editorValidator={requiredValidator} style={{height: '3.5em'}}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{height: '3.5em'}}></Column>
            </TreeTable>
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

const TreeTableEditDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (props: any, value: string) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, props.node.key);
        editedNode.data[props.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes: any, key: string) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list: any = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (props: any, field: string) => {
        return (
            <InputText type="text" value={props.node.data[field]}
                    onChange={(e) => onEditorValueChange(props, (e.target as HTMLInputElement).value)} />
        );
    };

    const sizeEditor = (props: any) => {
        return inputTextEditor(props, 'size');
    };

    const typeEditor = (props: any) => {
        return inputTextEditor(props, 'type');
    };

    const requiredValidator = (props: any) => {
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div>
            <TreeTable value={nodes}>
                <Column field="name" header="Name" expander style={{height: '3.5em'}}></Column>
                <Column field="size" header="Size" editor={sizeEditor} editorValidator={requiredValidator} style={{height: '3.5em'}}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{height: '3.5em'}}></Column>
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/treetable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeTableEditDemo" sources={this.sources} service="NodeService" data="treetablenodes" />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
