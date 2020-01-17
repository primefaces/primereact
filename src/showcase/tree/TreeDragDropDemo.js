import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeDragDropDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - DragDrop</h1>
                        <p>Nodes can be reordered using drag and drop.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Tree value={this.state.nodes} dragdropScope="demo" onDragDrop={event => this.setState({nodes: event.value})} />
                </div>

                <TreeDragDropDemoDoc />
            </div>
        )
    }
}

export class TreeDragDropDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export class TreeDragDropDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - DragDrop</h1>
                        <p>Nodes can be reordered using drag and drop.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Tree value={this.state.nodes} dragdropScope="demo" onDragDrop={event => this.setState({nodes: event.value})} />
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
        );
    }
}
