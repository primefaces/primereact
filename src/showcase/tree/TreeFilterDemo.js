import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Filter</h1>
                        <p>Filtering updates the node based on the constraints.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Lenient Filter Mode</h3>
                    <Tree value={this.state.nodes1} filter={true} />

                    <h3>Strict Filter Mode</h3>
                    <Tree value={this.state.nodes2} filter={true} filterMode="strict" />
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
