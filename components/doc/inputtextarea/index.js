import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const InputTextareaDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, {Component} from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

export class InputTextareaDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: ''
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <InputTextarea value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} rows={5} cols={30} />

                    <h5>Auto Resize</h5>
                    <InputTextarea value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} rows={5} cols={30} autoResize />

                    <h5>Disabled</h5>
                    <InputTextarea value={this.state.value3} rows={5} cols={30} disabled />
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
import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

const InputTextareaDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} />

                <h5>Auto Resize</h5>
                <InputTextarea value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={30} autoResize />

                <h5>Disabled</h5>
                <InputTextarea value={value3} rows={5} cols={30} disabled />
            </div>
        </div>
    )
}
                `
            },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

const InputTextareaDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} />

                <h5>Auto Resize</h5>
                <InputTextarea value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={30} autoResize />

                <h5>Disabled</h5>
                <InputTextarea value={value3} rows={5} cols={30} disabled />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/inputtextarea/inputtextarea.min.js"></script>`,
            content: `
const { useState } = React;
const { InputTextarea } = primereact.inputtextarea;

const InputTextareaDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} />

                <h5>Auto Resize</h5>
                <InputTextarea value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={30} autoResize />

                <h5>Disabled</h5>
                <InputTextarea value={value3} rows={5} cols={30} disabled />
            </div>
        </div>
    )
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
import { InputTextarea } from 'primereact/inputtextarea';
`}
                    </CodeHighlight>

                    <h5>Import via CDN</h5>
                    <CodeHighlight>
                        {`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/inputtextarea/inputtextarea.min.js"></script>
`}
                    </CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Textarea is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
                    <CodeHighlight>
                        {`
<InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(event.target.value)} />
`}
                    </CodeHighlight>

                    <h5>AutoResize</h5>
                    <p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
                    <CodeHighlight>
                        {`
<InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(event.target.value)} autoResize />
`}
                    </CodeHighlight>

                    <h5>Properties</h5>
                    <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows;</p>
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
                                    <td>autoResize</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, height of textarea changes as being typed.</td>
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
                                    <td>p-inputtextarea</td>
                                    <td>Textarea element</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>InputTextarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.</p>
<CodeHighlight>
{`
<label htmlFor="address1">Address 1</label>
<InputTextarea id="address1" />

<span id="address2">Address 2</span>
<InputTextarea id="address2" aria-labelledby="address2" />

<InputTextarea aria-label="Address Details"/>
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
                                    <td>Moves focus to the input.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'InputTextareaDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default InputTextareaDoc;
