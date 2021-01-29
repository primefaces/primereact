import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class InputSwitchDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export class InputSwitchDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: true
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <InputSwitch checked={this.state.checked1} onChange={(e) => this.setState({ checked1: e.value })} />

                    <h5>Preselection</h5>
                    <InputSwitch checked={this.state.checked2} onChange={(e) => this.setState({ checked2: e.value })} />
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
import { InputSwitch } from 'primereact/inputswitch';

const InputSwitchDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />

                <h5>Preselection</h5>
                <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
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
import { InputSwitch } from 'primereact/inputswitch';

const InputSwitchDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />

                <h5>Preselection</h5>
                <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
            </div>
        </div>
    );
}
                `
            },
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
import {InputSwitch} from 'primereact/inputswitch';
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>InputSwitch is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
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
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the input element.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the input element.</td>
                                </tr>
                                <tr>
                                    <td>checked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies whether a inputswitch should be checked or not.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
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
                                        event.value: Checked state as a boolean.</td>
                                    <td>Callback to invoke on value change.</td>
                                </tr>
                                <tr>
                                    <td>onFocus</td>
                                    <td>event: Browser event.</td>
                                    <td>Callback to invoke when the element receives focus.</td>
                                </tr>
                                <tr>
                                    <td>onBlur</td>
                                    <td>event: Browser event.</td>
                                    <td>Callback to invoke when the element loses focus.</td>
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
                                    <td>p-inputswitch</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-inputswitch-checked</td>
                                    <td>Container element in active state.</td>
                                </tr>
                                <tr>
                                    <td>p-inputswitch-slider</td>
                                    <td>Slider element behind the handle.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'InputSwitchDemo', sources: this.sources })
                }
            </TabView>
        </div>
        );
    }
}
