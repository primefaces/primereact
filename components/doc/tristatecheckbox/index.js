import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const TriStateCheckboxDoc = memo(() => {

    const sources = {
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
                    <div className="field-checkbox m-0">
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
                <div className="field-checkbox m-0">
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
                <div className="field-checkbox m-0">
                    <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
                    <label>{String(value)}</label>
                </div>
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
        <script src="https://unpkg.com/primereact/tristatecheckbox/tristatecheckbox.min.js"></script>`,
            content: `
const { useState } = React;
const { TriStateCheckbox } = primereact.tristatecheckbox;

const TriStateCheckboxDemo = () => {
    const [value, setValue] = useState(null);

    return (
        <div>
            <div className="card">
                <div className="field-checkbox m-0">
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

        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
`}
</CodeHighlight>

                        <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/tristatecheckbox/tristatecheckbox.min.js"></script>
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
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the TriStateCheckbox.</td>
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
                                    <td>readOnly</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the value cannot be changed.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
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
                                        event.value: Current Value
                                    </td>
                                    <td>Callback to invoke on value change</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>TriStateCheckbox component uses an element with <i>checkbox</i> role. Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Component adds an element with
                     <i>aria-live</i> attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the <i>trueLabel</i>, <i>falseLabel</i> and <i>nullLabel</i> keys of the <i>aria</i>
                        property from the <Link href="/locale">locale</Link> API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification.</p>
<CodeHighlight>
{`
<span id="chkbox1">Remember Me</span>
<TriStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Remember Me" />
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
                                    <td>Moves focus to the checkbox.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles between the values.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TriStateCheckboxDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default TriStateCheckboxDoc;
