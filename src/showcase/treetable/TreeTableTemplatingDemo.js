import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { Button } from '../../components/button/Button';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeTableTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    actionTemplate(node, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    render() {
        const header = "File Viewer";
        const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Templating</h1>
                        <p>Custom content at header, body and footer sections are supported via templating.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} header={header} footer={footer}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                        <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                    </TreeTable>
                </div>

                <TreeTableTemplatingDemoDoc />
            </div>
        )
    }
}

class TreeTableTemplatingDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export class TreeTableTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    actionTemplate(node, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    render() {
        const header = "File Viewer";
        const footer = <div style={{textAlign:'left'}}><Button icon="pi pi-refresh" tooltip="Reload"/></div>;

        return (
            <div>
                <TreeTable value={this.state.nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
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
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TreeTableTemplatingDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{textAlign:'left'}}><Button icon="pi pi-refresh" tooltip="Reload"/></div>;

    return (
        <div>
            <TreeTable value={nodes} header={header} footer={footer}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
                <Column body={actionTemplate} style={{textAlign:'center', width: '8em'}}/>
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
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TreeTableTemplatingDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node: any, column: any) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{textAlign:'left'}}><Button icon="pi pi-refresh" tooltip="Reload"/></div>;

    return (
        <div>
            <TreeTable value={nodes} header={header} footer={footer}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
                <Column body={actionTemplate} style={{textAlign:'center', width: '8em'}}/>
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
                                    <LiveEditor name="TreeTableTemplatingDemo" sources={[key, value]} service="NodeService" data="treetablenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
