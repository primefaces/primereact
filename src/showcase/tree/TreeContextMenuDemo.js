import React, { Component } from 'react';
import {Tree} from '../../components/tree/Tree';
import {ContextMenu} from '../../components/contextmenu/ContextMenu';
import {Growl} from '../../components/growl/Growl';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {},
            selectedNodeKey: null,
            menu: [
                {
                    label: 'View Key',
                    icon: 'pi pi-search',
                    command: () => {
                        this.growl.show({severity: 'success', summary: 'Node Key', detail: this.state.selectedNodeKey});
                    }
                },
                {
                    label: 'Toggle',
                    icon: 'pi pi-cog',
                    command: () => {
                        let expandedKeys = {...this.state.expandedKeys};
                        if (expandedKeys[this.state.selectedNodeKey])
                            delete expandedKeys[this.state.selectedNodeKey];
                        else
                            expandedKeys[this.state.selectedNodeKey] = true;

                        this.setState({expandedKeys: expandedKeys});
                    }
                }
            ]
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
                        <p>Tree has exclusive integration with the ContextMenu component with support for different menus depending on the node.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <ContextMenu model={this.state.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedNodeKey: null})}/>

                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({expandedKeys: e.value})}
                        contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({selectedNodeKey: event.value})}
                        onContextMenu={event => this.cm.show(event.originalEvent)} />
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
import React, { Component } from 'react';
import {Tree} from 'primereact/tree'
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

export class TreeContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {},
            selectedNodeKey: null,
            menu: [
                {
                    label: 'View Key',
                    icon: 'pi pi-search',
                    command: () => {
                        this.growl.show({severity: 'success', summary: 'Node Key', detail: this.state.selectedNodeKey});
                    }
                },
                {
                    label: 'Toggle',
                    icon: 'pi pi-cog',
                    command: () => {
                        let expandedKeys = {...this.state.expandedKeys};
                        if (expandedKeys[this.state.selectedNodeKey])
                            delete expandedKeys[this.state.selectedNodeKey];
                        else
                            expandedKeys[this.state.selectedNodeKey] = true;

                        this.setState({expandedKeys: expandedKeys});
                    }
                }
            ]
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
                        <h1>Tree - ContextMenu</h1>
                        <p>Tree has exclusive integration with the ContextMenu component with support for different menus depending on the node.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <ContextMenu model={this.state.menu} ref={el => this.cm = el} />

                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({expandedKeys: e.value})}
                        onContextMenuSelectionChange={event => this.setState({selectedNodeKey: event.value})}
                        onContextMenu={event => this.cm.show(event.originalEvent)} />
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
