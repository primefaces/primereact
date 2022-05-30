import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const MultiStateCheckboxDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export class MultiStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'public'
        };

        this.options = [
            { value: 'public', icon: 'pi pi-globe' },
            { value: 'protected', icon: 'pi pi-lock-open' },
            { value: 'private', icon: 'pi pi-lock' }
        ];
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="field-checkbox m-0">
                        <MultiStateCheckbox value={this.state.value} options={this.options} optionValue="value" onChange={(e) => this.setState({ value: e.value })} />
                        <label>{this.state.value}</label>
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
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

const MultiStateCheckboxDemo = () => {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div>
            <div className="card">
                <div className="field-checkbox m-0">
                    <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                    <label>{value}</label>
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
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

const MultiStateCheckboxDemo = () => {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div>
            <div className="card">
                <div className="field-checkbox m-0">
                    <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                    <label>{value}</label>
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
        <script src="https://unpkg.com/primereact/multistatecheckbox/multistatecheckbox.min.js"></script>`,
            content: `
const { useState } = React;
const { MultiStateCheckbox } = primereact.multistatecheckbox;

const MultiStateCheckboxDemo = () => {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div>
            <div className="card">
                <div className="field-checkbox m-0">
                    <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                    <label>{value}</label>
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
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/multistatecheckbox/multistatecheckbox.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>MultiStateCheckbox is used as a controlled input with <i>value</i>, <i>options</i> and <i>onChange</i> properties. The <i>optionValue</i> field refers to the value of each option.</p>
<CodeHighlight lang="js">
{`
const [value, setValue] = useState('public');
const options = [
    { value: 'public', icon: 'pi pi-globe' },
    { value: 'protected', icon: 'pi pi-lock-open' },
    { value: 'private', icon: 'pi pi-lock' }
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<MultiStateCheckbox value={value} options={options} onChange={(e) => setValue(e.value)} optionValue="value" />
`}
</CodeHighlight>

                <h5>Icons</h5>
                <p>Icon of each option is defined with the <i>icon</i> property of an option object. For templating use <i>iconTemplate</i> to render custom content inside the checkbox.</p>

                <h5>Option</h5>
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
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>The icon of the option. This is optional. The <i>iconTemplate</i> property can be used instead.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the checkbox element when the option is selected.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the checkbox element when the option is selected.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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
                                <td>Value of the MultiStateCheckbox.</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array to display as the available options.</td>
                            </tr>
                            <tr>
                                <td>optionValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use as the value of an option, defaults to the option itself when not defined.</td>
                            </tr>
                            <tr>
                                <td>optionLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to refer to the option label, used by screen readers only. Defaults to optionValue.</td>
                            </tr>
                            <tr>
                                <td>iconTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of icon for the selected option.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A property to uniquely match the value in options for better performance.</td>
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
                                <td>empty</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>If false, the empty state is skipped in the chekbox.</td>
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
                                <td>p-multistatechkbox</td>
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
                    <p>MultiStateCheckbox component uses an element with <i>checkbox</i> role. Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Component adds an element with
                     <i>aria-live</i> attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the <i>optionLabel</i> property that defaults to <i>optionValue</i> if not defined. Unchecked state label on the other hand is
                     retrieved from <i>nullLabel</i> key of the <i>aria</i>  property from the <Link href="/locale">locale</Link> API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification.</p>
<CodeHighlight>
{`
<span id="chkbox1">Access Type</span>
<MultiStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Access Type" />
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
                useLiveEditorTabs({ name: 'MultiStateCheckboxDemo', sources: sources })
            }
        </TabView>
    </div>
    )
})

export default MultiStateCheckboxDoc;
