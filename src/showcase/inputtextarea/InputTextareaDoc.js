import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class InputTextareaDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
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
import { InputTextarea } from 'primereact/inputtextarea';
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
                                        <td>p-inputtextarea</td>
                                        <td>Textarea element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'InputTextareaDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}
