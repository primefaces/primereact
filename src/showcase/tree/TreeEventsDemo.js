import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {Growl} from '../../components/growl/Growl';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeEventsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            selectedNodeKey: null
        };

        this.nodeService = new NodeService();

        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    onExpand(event) {
        this.growl.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    }

    onCollapse(event) {
        this.growl.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    }

    onSelect(event) {
        this.growl.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    onUnselect(event) {
        this.growl.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Events</h1>
                        <p>An event is provided each type of user interaction such as expand, collapse and selection.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <h3 className="first">Events</h3>
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey} onSelectionChange={e => this.setState({selectedNodeKey: e.value})}
                            onExpand={this.onExpand} onCollapse={this.onCollapse} onSelect={this.onSelect} onUnselect={this.onUnselect} />
                </div>

                <TreeEventsDemoDoc />
            </div>
        )
    }
}

export class TreeEventsDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {Tree} from 'primereact/tree';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

export class TreeEventsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            selectedNodeKey: null
        };

        this.nodeService = new NodeService();

        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    onExpand(event) {
        this.growl.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    }

    onCollapse(event) {
        this.growl.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    }

    onSelect(event) {
        this.growl.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    onUnselect(event) {
        this.growl.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <h3 className="first">Events</h3>
                <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey} onSelectionChange={e => this.setState({selectedNodeKey: e.value})}
                        onExpand={this.onExpand} onCollapse={this.onCollapse} onSelect={this.onSelect} onUnselect={this.onUnselect} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {Tree} from 'primereact/tree';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

const TreeEventsDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const nodeService = new NodeService();
    let growl = useRef(null);

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onExpand = (event) => {
        growl.current.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    };

    const onCollapse = (event) => {
        growl.current.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    };

    const onSelect = (event) => {
        growl.current.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    const onUnselect = (event) => {
        growl.current.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    };

    return (
        <div>
            <Growl ref={growl} />

            <h3 className="first">Events</h3>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} />
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {Tree} from 'primereact/tree';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

const TreeEventsDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>(null);
    const nodeService = new NodeService();
    let growl = useRef<any>(null);

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onExpand = (event: any) => {
        growl.current.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    };

    const onCollapse = (event: any) => {
        growl.current.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    };

    const onSelect = (event: any) => {
        growl.current.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    const onUnselect = (event: any) => {
        growl.current.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    };

    return (
        <div>
            <Growl ref={growl} />

            <h3 className="first">Events</h3>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} />
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tree" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeEventsDemo" sources={this.sources} service="NodeService" data="treenodes" />
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
        );
    }
}
