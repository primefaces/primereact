import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ToggleButtonDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

export class ToggleButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked1: false,
            checked2: false
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <ToggleButton checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />

                    <h5>Customized</h5>
                    <ToggleButton checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />
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
import { ToggleButton } from 'primereact/togglebutton';

const ToggleButtonDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onIcon="pi pi-check" offIcon="pi pi-times" aria-label="Confirmation" />

                <h5>Customized</h5>
                <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '10em'}} aria-label="Confirmation" />
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
import { ToggleButton } from 'primereact/togglebutton';

const ToggleButtonDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />

                <h5>Customized</h5>
                <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />
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
        <script src="https://unpkg.com/primereact/togglebutton/togglebutton.min.js"></script>`,
            content: `
const { useState } = React;
const { ToggleButton } = primereact.togglebutton;

const ToggleButtonDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />

                <h5>Customized</h5>
                <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />
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
import { ToggleButton } from 'primereact/togglebutton';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/togglebutton/togglebutton.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>ToggleButton is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} />
`}
</CodeHighlight>

                    <h5>Labels and Icons</h5>
                    <p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>

<CodeHighlight>
{`
<ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" checked={checked2} onChange={(e) => setChecked2(e.value)} />
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
                                    <td>onIcon</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Icon for the on state.</td>
                                </tr>
                                <tr>
                                    <td>offIcon</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Icon for the off state.</td>
                                </tr>
                                <tr>
                                    <td>onLabel</td>
                                    <td>string</td>
                                    <td>yes</td>
                                    <td>Label for the on state.</td>
                                </tr>
                                <tr>
                                    <td>offLabel</td>
                                    <td>string</td>
                                    <td>no</td>
                                    <td>Label for the off state.</td>
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
                                    <td>checked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies the on/off state of the button.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>iconPos</td>
                                    <td>string</td>
                                    <td>left</td>
                                    <td>Position of the icon, valid values are "left" and "right".</td>
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
                                        event.value: Value as the checked state.</td>
                                    <td>Callback to invoke on value change.</td>
                                </tr>
                                <tr>
                                    <td>onFocus</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when autocomplete gets focus.</td>
                                </tr>
                                <tr>
                                    <td>onBlur</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when autocomplete loses focus.</td>
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
                                    <td>p-togglebutton</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-button-icon-left</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>p-button-text</td>
                                    <td>Label element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>ToggleButton component uses an element with <i>button</i> role and updates <i>aria-pressed</i> state for screen readers. Value to describe the component can be defined with <i>aria-labelledby</i> or <i>aria-label</i> props, it is highly suggested to use
                    either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state.</p>
<CodeHighlight>
{`
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
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
                                    <td>Moves focus to the button.</td>
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
                    useLiveEditorTabs({ name: 'ToggleButtonDemo', sources: sources })
                }
            </TabView>
        </div>
    );
})

export default ToggleButtonDoc;
