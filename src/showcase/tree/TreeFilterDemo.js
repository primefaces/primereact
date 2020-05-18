import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: null,
            nodes2: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes1: data, nodes2: data}));
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Filter</h1>
                        <p>Filtering updates the node based on the constraints.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Lenient Filter Mode</h3>
                    <Tree value={this.state.nodes1} filter={true} />

                    <h3>Strict Filter Mode</h3>
                    <Tree value={this.state.nodes2} filter={true} filterMode="strict" />
                </div>

                <TreeFilterDemoDoc />
            </div>
        )
    }
}

export class TreeFilterDemoDoc extends Component {

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
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export class TreeFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: null,
            nodes2: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes1: data, nodes2: data}));
    }

    render() {
        return (
            <div>
                <h3 className="first">Lenient Filter Mode</h3>
                <Tree value={this.state.nodes1} filter={true} />

                <h3>Strict Filter Mode</h3>
                <Tree value={this.state.nodes2} filter={true} filterMode="strict" />
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
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

const TreeFilterDemo = () => {
    const [nodes1, setNodes1] = useState(null);
    const [nodes2, setNodes2] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => {
            setNodes1(data);
            setNodes2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3 className="first">Lenient Filter Mode</h3>
            <Tree value={nodes1} filter={true} />

            <h3>Strict Filter Mode</h3>
            <Tree value={nodes2} filter={true} filterMode="strict" />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

const TreeFilterDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => {
            setNodes1(data);
            setNodes2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3 className="first">Lenient Filter Mode</h3>
            <Tree value={nodes1} filter={true} />

            <h3>Strict Filter Mode</h3>
            <Tree value={nodes2} filter={true} filterMode="strict" />
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tree" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeFilterDemo" sources={this.sources} service="NodeService" data="treenodes" activeButtonIndex={this.state.activeIndex} />
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
        );
    }
}
