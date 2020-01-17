import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            loading: true,
        };

        this.nodeService = new NodeService();

        this.loadOnExpand = this.loadOnExpand.bind(this);
    }

    createLazyNodes() {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    loadOnExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...this.state.nodes];
                value[parseInt(event.node.key, 10)] = node;
                this.setState({
                    nodes: value,
                    loading: false
                });
            }, 500);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.nodeService.getTreeNodes().then(data => this.setState(
                {
                    nodes: this.createLazyNodes(),
                    loading: false
                }
            ));
        }, 2000);
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Lazy</h1>
                        <p>Lazy loading is useful when dealing with huge datasets.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Lazy Loading</h3>
                    <Tree value={this.state.nodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
                </div>

                <TreeLazyDemoDoc />
            </div>
        )
    }
}

export class TreeLazyDemoDoc extends Component {

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

export class TreeLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            loading: true,
        };

        this.nodeService = new NodeService();

        this.loadOnExpand = this.loadOnExpand.bind(this);
    }

    createLazyNodes() {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    loadOnExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...this.state.nodes];
                value[parseInt(event.node.key, 10)] = node;
                this.setState({
                    nodes: value,
                    loading: false
                });
            }, 500);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.nodeService.getTreeNodes().then(data => this.setState(
                {
                    nodes: this.createLazyNodes(),
                    loading: false
                }
            ));
        }, 2000);
    }

    render() {
        return (
            <div>

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Lazy</h1>
                        <p>Lazy loading is useful when dealing with huge datasets.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Lazy Loading</h3>
                    <Tree value={this.state.nodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
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
