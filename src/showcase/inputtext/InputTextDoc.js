import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class InputTextDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

export class InputTextDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <InputText value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} />
                    <span className="p-ml-2">{this.state.value1}</span>

                    <h5>Floating Label</h5>
                    <span className="p-float-label">
                        <InputText id="username" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                        <label htmlFor="username">Username</label>
                    </span>

                    <h5>Left Icon</h5>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} placeholder="Search" />
                    </span>

                    <h5>Right Icon</h5>
                    <span className="p-input-icon-right">
                        <i className="pi pi-spin pi-spinner" />
                        <InputText value={this.state.value4} onChange={(e) => this.setState({value4: e.target.value})} />
                    </span>

                    <h5>Help Text</h5>
                    <div className="p-field">
                        <label htmlFor="username1" className="p-d-block">Username</label>
                        <InputText id="username1" aria-describedby="username1-help" className="p-d-block"/>
                        <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
                    </div>

                    <h5>Invalid</h5>
                    <div className="p-field">
                        <label htmlFor="username2" className="p-d-block">Username</label>
                        <InputText id="username2" aria-describedby="username2-help" className="p-invalid p-d-block" />
                        <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
                    </div>

                    <h5>Disabled</h5>
                    <InputText value={this.state.value5} disabled />

                    <h5>Sizes</h5>
                    <div className="sizes">
                        <InputText type="text" className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
                        <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Large" />
                    </div>
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
import { InputText } from 'primereact/inputtext';

const InputTextDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                <span className="p-ml-2">{value1}</span>

                <h5>Floating Label</h5>
                <span className="p-float-label">
                    <InputText id="username" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>

                <h5>Left Icon</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
                </span>

                <h5>Right Icon</h5>
                <span className="p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText value={value4} onChange={(e) => setValue4(e.target.value)} />
                </span>

                <h5>Help Text</h5>
                <div className="p-field">
                    <label htmlFor="username1" className="p-d-block">Username</label>
                    <InputText id="username1" aria-describedby="username1-help" className="p-d-block"/>
                    <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
                </div>

                <h5>Invalid</h5>
                <div className="p-field">
                    <label htmlFor="username2" className="p-d-block">Username</label>
                    <InputText id="username2" aria-describedby="username2-help" className="p-invalid p-d-block" />
                    <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
                </div>

                <h5>Disabled</h5>
                <InputText value={value5} disabled />

                <h5>Sizes</h5>
                <div className="sizes">
                    <InputText type="text" className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
                    <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
                    <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Large" />
                </div>
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
import { InputText } from 'primereact/inputtext';

const InputTextDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                <span className="p-ml-2">{value1}</span>

                <h5>Floating Label</h5>
                <span className="p-float-label">
                    <InputText id="username" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>

                <h5>Left Icon</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
                </span>

                <h5>Right Icon</h5>
                <span className="p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText value={value4} onChange={(e) => setValue4(e.target.value)} />
                </span>

                <h5>Help Text</h5>
                <div className="p-field">
                    <label htmlFor="username1" className="p-d-block">Username</label>
                    <InputText id="username1" aria-describedby="username1-help" className="p-d-block"/>
                    <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
                </div>

                <h5>Invalid</h5>
                <div className="p-field">
                    <label htmlFor="username2" className="p-d-block">Username</label>
                    <InputText id="username2" aria-describedby="username2-help" className="p-invalid p-d-block" />
                    <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
                </div>

                <h5>Disabled</h5>
                <InputText value={value5} disabled />

                <h5>Sizes</h5>
                <div className="sizes">
                    <InputText type="text" className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
                    <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
                    <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Large" />
                </div>
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
import { InputText } from 'primereact/inputtext';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
<CodeHighlight>
{`
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
`}
</CodeHighlight>

                        <h5>Float Label</h5>
                        <p>A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.</p>
<CodeHighlight>
{`
<span className="p-float-label">
    <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="in">Username</label>
</span>
`}
</CodeHighlight>

                        <h5>KeyFilter</h5>
                        <p>InputText has built-in key filtering support to block certain keys, refer to <Link to="/keyfilter">keyfilter</Link> page for more information.</p>

                        <h5>Properties</h5>
                        <p>InputText passes any valid attribute to the underlying input element. Extended properties are as follows;</p>
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
                                        <td>keyfilter</td>
                                        <td>string/regex</td>
                                        <td>null</td>
                                        <td>Format definition of the keys to block.</td>
                                    </tr>
                                    <tr>
                                        <td>validateOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>
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
                                        <td>p-inputtext</td>
                                        <td>Input element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'InputTextDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}
