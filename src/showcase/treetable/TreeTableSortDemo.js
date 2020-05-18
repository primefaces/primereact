import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: []
        };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => {
            this.setState({nodes1: data});

            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Sort</h1>
                        <p>TreeTable supports both single column and multiple column sorting.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Column Sorting</h3>
                    <TreeTable value={this.state.nodes1} defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>

                    <h3>Multiple Column Sorting</h3>
                    <TreeTable value={this.state.nodes2} sortMode="multiple" defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>

                <TreeTableSortDemoDoc />
            </div>
        );
    }
}

class TreeTableSortDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: []
        };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => {
            this.setState({nodes1: data});

            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <h3>Single Column Sorting</h3>
                <TreeTable value={this.state.nodes1} defaultSortOrder={-1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>

                <h3>Multiple Column Sorting</h3>
                <TreeTable value={this.state.nodes2} sortMode="multiple" defaultSortOrder={-1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Single Column Sorting</h3>
            <TreeTable value={nodes1} defaultSortOrder={-1}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>

            <h3>Multiple Column Sorting</h3>
            <TreeTable value={nodes2} sortMode="multiple" defaultSortOrder={-1}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Single Column Sorting</h3>
            <TreeTable value={nodes1} defaultSortOrder={-1}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>

            <h3>Multiple Column Sorting</h3>
            <TreeTable value={nodes2} sortMode="multiple" defaultSortOrder={-1}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
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
                <LiveEditor name="TreeTableSortDemo" sources={this.sources} service="NodeService" data="treetablenodes" />
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
