import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const InputSwitchDoc = memo(() => {

    const sources = {
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
            <script src="https://unpkg.com/primereact/core/core.min.js"></script>
            <script src="https://unpkg.com/primereact/inputswitch/inputswitch.min.js"></script>`,
            content: `
const { useState } = React;
const { InputSwitch } = primereact.inputswitch;

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
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
        <TabView>
            <TabPanel header="Documentation">
                <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { InputSwitch } from 'primereact/inputswitch';
`}
</CodeHighlight>

                <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/inputswitch/inputswitch.min.js"></script>
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
                <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>checked</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies whether a inputswitch should be checked or not.</td>
                            </tr>
                            <tr>
                                <td>trueValue</td>
                                <td>any</td>
                                <td>true</td>
                                <td>Value in checked state.</td>
                            </tr>
                            <tr>
                                <td>falseValue</td>
                                <td>any</td>
                                <td>false</td>
                                <td>Value in unchecked state.</td>
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
                <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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

                <h5>Accessibility</h5>
            <DevelopmentSection>
                <h6>Screen Reader</h6>
                <p>InputSwitch component uses a hidden native checkbox element with <i>switch</i> role internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.</p>
<CodeHighlight>
{`
<label htmlFor="switch1">Remember Me</label>
<InputSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<InputSwitch aria-labelledby="switch2" />

<InputSwitch aria-label="Remember Me" />
`}
</CodeHighlight>
                <h6>Keyboard Support</h6>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i>tab</i></td>
                                <td>Moves focus to the switch.</td>
                            </tr>
                            <tr>
                                <td><i>space</i></td>
                                <td>Toggles the checked state.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
                <h5>Dependencies</h5>
                <p>None.</p>
            </TabPanel>

            {
                useLiveEditorTabs({ name: 'InputSwitchDemo', sources: sources })
            }
        </TabView>
    </div>
    );
})

export default InputSwitchDoc;
