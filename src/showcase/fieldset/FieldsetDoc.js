import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class FieldsetDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Fieldset } from 'primereact/fieldset';

export class FieldsetDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Regular</h5>
                    <Fieldset legend="Header">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>

                    <h5>Toggleable</h5>
                    <Fieldset legend="Header" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>
                </div>
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
import { Fieldset } from 'primereact/fieldset';

const FieldsetDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Regular</h5>
                <Fieldset legend="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Fieldset>

                <h5>Toggleable</h5>
                <Fieldset legend="Header" toggleable>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Fieldset>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Fieldset } from 'primereact/fieldset';

const FieldsetDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Regular</h5>
                <Fieldset legend="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Fieldset>

                <h5>Toggleable</h5>
                <Fieldset legend="Header" toggleable>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Fieldset>
            </div>
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
import { Fieldset } from 'primereact/fieldset';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Panel is a container component that accepts content as its children.</p>
<CodeHighlight>
{`
<Fieldset legend="Header">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Fieldset>
`}
</CodeHighlight>

                        <p>Instead of simple strings, <i>legend</i> propery also can be used to provide custom content as JSX.</p>

                        <h5>Toggleable</h5>
                        <p>Content of the fieldset can be expanded and collapsed using <i>toggleable</i> option. A toggleable fieldset can either be used as a Controlled or Uncontrolled component.</p>

                        <p>In controlled mode, <i>collapsed</i> and <i>onToggle</i> properties need to be defined to control the collapsed state.</p>
<CodeHighlight>
{`
<Fieldset legend="Header" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Fieldset>
`}
</CodeHighlight>

                        <p>In uncontrolled mode, only <i>toggleable</i> property needs to be enabled. Initial state can be still be provided using the <i>collapsed</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the collapsed state, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<Fieldset legend="Header" toggleable>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Fieldset>
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
                                        <td>legend</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Header text of the fieldset.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>toggleable</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When specified, content can toggled by clicking the legend.</td>
                                    </tr>
                                    <tr>
                                        <td>collapsed</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines the default visibility state of the content.</td>
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
                                        <td>event.originalEvent: Browser event </td>
                                        <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                                    </tr>
                                    <tr>
                                        <td>onExpand</td>
                                        <td>event.originalEvent: Browser event </td>
                                        <td>Callback to invoke when a tab gets expanded.</td>
                                    </tr>
                                    <tr>
                                        <td>onToggle</td>
                                        <td>event.originalEvent: browser event <br />
                                event.value: Collapsed state as a boolean
                            </td>
                                        <td>Callback to invoke when a tab gets expanded.</td>
                                    </tr>
                                    <tr>
                                        <td>onClick</td>
                                        <td>event Browser event </td>
                                        <td>Callback to invoke when fieldset is clicked.</td>
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
                                        <td>p-fieldset</td>
                                        <td>Fieldset element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-fieldset-toggleable</td>
                                        <td>Toggleable fieldset element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-fieldset-legend</td>
                                        <td>Legend element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-fieldset-content</td>
                                        <td>Content element.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'FieldsetDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}
