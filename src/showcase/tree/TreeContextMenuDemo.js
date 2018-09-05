import React, { Component } from 'react';
import {Tree} from '../../components/tree/Tree';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TreeContextMenuDemo extends Component {

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
                        <h1>Tree - ContextMenu</h1>
                        <p>Tree has exclusive integration with the ContextMenu component.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Tree value={this.state.nodes} />
                </div>

                <TreeContextMenuDemoDoc />
            </div>
        )
    }
}

export class TreeContextMenuDemoDoc extends Component {

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
