import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight}  from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class TriStateCheckboxDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="p-field-checkbox p-m-0">
                        <TriStateCheckbox value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                        <label>{String(this.state.value)}</label>
                    </div>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

const TriStateCheckboxDemo = () => {
    const [value, setValue] = useState(null);

    return (
        <div>
            <div className="card">
                <div className="p-field-checkbox p-m-0">
                    <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
                    <label>{String(value)}</label>
                </div>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

const TriStateCheckboxDemo = () => {
    const [value, setValue] = useState(null);

    return (
        <div>
            <div className="card">
                <div className="p-field-checkbox p-m-0">
                    <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
                    <label>{String(value)}</label>
                </div>
            </div>
        </div>
    );
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
import {TriStateCheckbox} from 'primereact/tristatecheckbox';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>TriStateCheckbox is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>
<CodeHighlight>
{`
<TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
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
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the native checkbox element.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the TriStateCheckbox.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the checkbox element .</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
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
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the element value cannot be altered.</td>
                                </tr>
                                <tr>
                                    <td>tooltip</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                </tr>
                                <tr>
                                    <td>ariaLabelledBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                                    <td>onChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Current Value
                                    </td>
                                    <td>Callback to invoke on value change</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                    <td>p-chkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-tristatechkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-chkbox-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>p-chkbox-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TriStateCheckboxDemo', sources: this.sources })
                }
            </TabView>
        </div>
        )
    }
}
