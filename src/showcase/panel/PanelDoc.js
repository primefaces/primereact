import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class PanelDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Panel } from 'primereact/panel';

export class PanelDemo extends Component {

    render() {
        return (
            <div>
                <h5>Regular</h5>
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>

                <h5>Advanced</h5>
                <Panel header="Header" toggleable>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {Panel} from 'primereact/panel';

const PanelDemo = () => {

    return (
        <div>
            <Panel header="Godfather I">
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Panel>

                <Panel header="Godfather I" style={{marginTop:'2em'}} toggleable>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Panel>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Panel} from 'primereact/panel';

const PanelDemo = () => {

    return (
        <div>
            <Panel header="Godfather I">
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Panel>

                <Panel header="Godfather I" style={{marginTop:'2em'}} toggleable>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Panel>
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

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Panel } from 'primereact/panel';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>Panel is a container component that accepts content as its children.</p>
<CodeHighlight>
{`
<Panel header="Header">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Panel>
`}
</CodeHighlight>

            <p>Instead of simple strings, <i>header</i> propery also can be used to provide custom content as JSX.</p>

            <h5>Toggleable</h5>
            <p>Content of the panel can be expanded and collapsed using <i>toggleable</i> option. A toggleable panel can either be used as a Controlled or Uncontrolled component.</p>

            <p>In controlled mode, <i>collapsed</i> and <i>onToggle</i> properties needs to be defined to control the collapsed state.</p>

<CodeHighlight>
{`
<Panel header="Header" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Panel>
`}
</CodeHighlight>

            <p>In uncontrolled mode, only <i>toggleable</i> property needs to be enabled. Initial state can be still be provided using the <i>collapsed</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the collapsed state, prefer to use the component as controlled.</p>

            <CodeHighlight>
{`
<Panel header="Header" toggleable>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Panel>
`}
</CodeHighlight>

            <h5>Properties</h5>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Header text of the panel.</td>
                        </tr>
                        <tr>
                            <td>toggleable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if content of panel can be expanded and collapsed.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>collapsed</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines the initial state of panel content, supports one or two-way binding as well.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Events</h5>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onCollapse</td>
                            <td>event.originalEvent: browser event </td>
                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                        </tr>
                        <tr>
                            <td>onExpand</td>
                            <td>event.originalEvent: browser event </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                        <tr>
                            <td>onToggle</td>
                            <td>event.originalEvent: browser event <br />
                                event.value: collapsed state as a boolean
                             </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styling</h5>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-panel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-panel-titlebar</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-panel-title</td>
                            <td>Title text of panel.</td>
                        </tr>
                        <tr>
                            <td>p-panel-titlebar-toggler</td>
                            <td>Toggle icon.</td>
                        </tr>
                        <tr>
                            <td>p-panel-content</td>
                            <td>Content of panel.</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Dependencies</h5>
                <ul>
                    <li>react-transition-group</li>
                </ul>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <LiveEditor name="PanelDemo" sources={this.sources} />
            </TabPanel>
        </TabView>
    </div>
        );
    }
}
