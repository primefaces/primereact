import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import './TreeTableDemo.scss';

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
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Edit</span></h1>
                        <p>Incell editing provides a quick and user friendly way to manipulate data.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation treetable-editing-demo">
                    <div className="card">
                        <TreeTable value={this.state.nodes}>
                            <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                            <Column field="size" header="Size" editor={this.sizeEditor} editorValidator={this.requiredValidator} style={{ height: '3.5em' }}></Column>
                            <Column field="type" header="Type" editor={this.typeEditor} style={{ height: '3.5em' }}></Column>
                        </TreeTable>
                    </div>
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
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.scss';

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
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
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
                <div className="card">
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                        <Column field="size" header="Size" editor={this.sizeEditor} editorValidator={this.requiredValidator} style={{ height: '3.5em' }}></Column>
                        <Column field="type" header="Type" editor={this.typeEditor} style={{ height: '3.5em' }}></Column>
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
        <div className="treetableedit-demo">
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
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
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
        <div className="treetableedit-demo">
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

        this.extFiles = {
            'index.css': `
.treetableedit-demo .p-treetable tr {
    outline: 0 none;
}
            `
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <LiveEditor name="TreeTableEditDemo" sources={this.sources} service="NodeService" data="treetablenodes" extFiles={this.extFiles} />

<CodeHighlight lang="scss">
{`
.treetable-editing-demo {
    .p-treetable .p-treetable-tbody > tr > td.p-cell-editing {
        padding-top: 0;
        padding-bottom: 0;
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
