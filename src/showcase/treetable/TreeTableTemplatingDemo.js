import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { Button } from '../../components/button/Button';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
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
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Templating</h1>
                        <p>Custom content at header, body and footer sections are supported via templating.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} header={header} footer={footer}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
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
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/treetable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeTableTemplatingDemo" sources={this.sources} service="NodeService" data="treetablenodes" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
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
