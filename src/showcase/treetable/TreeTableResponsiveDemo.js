import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './TreeTableDemo.scss';

export class TreeTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.nameTemplate = this.nameTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    nameTemplate(node) {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Responsive</span></h1>
                        <p>TreeTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation treetable-responsive-demo">
                    <div className="card">
                        <TreeTable value={this.state.nodes} header="Responsive">
                            <Column field="name" header="Name" body={this.nameTemplate} expander></Column>
                            <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                            <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableResponsiveDemoDoc />
            </div>
        )
    }
}

class TreeTableResponsiveDemoDoc extends Component {

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
import './TreeTableDemo.css';

export class TreeTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.nameTemplate = this.nameTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    nameTemplate(node) {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className="treetable-responsive-demo">
                <div className="card">
                    <TreeTable value={this.state.nodes} header="Responsive">
                        <Column field="name" header="Name" body={this.nameTemplate} expander></Column>
                        <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                        <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
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
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

const TreeTableResponsiveDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const nameTemplate = (node) => {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        )
    }

    return (
        <div className="treetable-responsive-demo">
            <div className="card">
                <TreeTable value={nodes} header="Responsive">
                    <Column field="name" header="Name" body={nameTemplate} expander></Column>
                    <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                    <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                </TreeTable>
            </div>
        </div>
    );
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
import './TreeTableDemo.css';

const TreeTableResponsiveDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const nameTemplate = (node) => {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        )
    }

    return (
        <div className="treetable-responsive-demo">
            <div className="card">
                <TreeTable value={nodes} header="Responsive">
                    <Column field="name" header="Name" body={nameTemplate} expander></Column>
                    <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                    <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                </TreeTable>
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'src/demo/TreeTableDemo.css': {
                content: `
.treetable-responsive-demo .sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    .treetable-responsive-demo .sm-invisible {
        display: none;
    }

    .treetable-responsive-demo .sm-visible {
        display: inline;
        margin-right: .5rem;
    }
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
                        useLiveEditorTabs({ name: 'TreeTableResponsiveDemo', sources: this.sources, service: 'NodeService', data: 'treetablenodes', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
