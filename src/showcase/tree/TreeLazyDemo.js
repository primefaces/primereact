import React, { Component } from 'react';
import {Tree} from '../../components/tree/Tree';
import {Button} from '../../components/button/Button';
import {Growl} from '../../components/growl/Growl';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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
            
            let value = [...this.state.lazyNodes];
            value[parseInt(event.node.key)] = node; 
            this.setState({
                nodes: value,
                loading: false
            });
        }, 2000);   
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
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Lazy Loading</h3>
                    <Tree value={this.state.lazyNodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
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


`}
</CodeHighlight>

                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
