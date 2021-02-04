import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { TabView,TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class PasswordDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import './PasswordDemo.css';

export class PasswordDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            value2: null,
            value3: null,
            value4: null
        };
    }

    render() {
        const header = <h6>Pick a password</h6>;
        const footer = (
            <>
                <Divider />
                <p className="p-mt-2">Suggestions</p>
                <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </>
        );

        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <Password value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} feedback={false} />

                    <h5>Password Meter</h5>
                    <Password value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />

                    <h5>Show Password</h5>
                    <Password value={this.state.value3} onChange={(e) => this.setState({ value3: e.target.value })} toggleMask />

                    <h5>Templating</h5>
                    <Password value={this.state.value4} onChange={(e) => this.setState({ value4: e.target.value })} header={header} footer={footer} />
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
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import './PasswordDemo.css';

const PasswordDemo = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);

    const header = <h6>Pick a password</h6>;
    const footer = (
        <>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Password value={value1} onChange={(e) => setValue1(e.target.value)} feedback={false} />

                <h5>Password Meter</h5>
                <Password value={value2} onChange={(e) => setValue2(e.target.value)} />

                <h5>Show Password</h5>
                <Password value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask />

                <h5>Templating</h5>
                <Password value={value4} onChange={(e) => setValue4(e.target.value)} header={header} footer={footer} />
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import './PasswordDemo.css';

const PasswordDemo = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);

    const header = <h6>Pick a password</h6>;
    const footer = (
        <>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Password value={value1} onChange={(e) => setValue1(e.target.value)} feedback={false} />

                <h5>Password Meter</h5>
                <Password value={value2} onChange={(e) => setValue2(e.target.value)} />

                <h5>Show Password</h5>
                <Password value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask />

                <h5>Templating</h5>
                <Password value={value4} onChange={(e) => setValue4(e.target.value)} header={header} footer={footer} />
            </div>
        </div>
    );
}
                `
            },
        }

        this.extFiles = {
            'src/demo/PasswordDemo.css': {
                content: `
.p-password input {
    width: 15rem;
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
import {Password} from 'primereact/password';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Password is used as a controlled component with <i>value</i> and <i>onChange</i> properties.</p>
<CodeHighlight>
{`
<Password value={value} onChange={(e) => setValue(e.target.value)} />
`}
</CodeHighlight>

                        <h5>Properties</h5>
                        <p>Password accepts all valid properties of an input element in addition the the custom properties below.</p>

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
                                        <td>Value of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>promptLabel</td>
                                        <td>string</td>
                                        <td>Please enter a password</td>
                                        <td>Text to prompt password entry.</td>
                                    </tr>
                                    <tr>
                                        <td>weakLabel</td>
                                        <td>string</td>
                                        <td>Weak</td>
                                        <td>Text for a weak password.</td>
                                    </tr>
                                    <tr>
                                        <td>mediumLabel</td>
                                        <td>string</td>
                                        <td>Medium</td>
                                        <td>Text for a medium password.</td>
                                    </tr>
                                    <tr>
                                        <td>strongLabel</td>
                                        <td>string</td>
                                        <td>Strong</td>
                                        <td>Text for a strong password.</td>
                                    </tr>
                                    <tr>
                                        <td>mediumRegex</td>
                                        <td>string</td>
                                        <td>{`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).`}</td>
                                        <td>Regex for a medium level password.</td>
                                    </tr>
                                    <tr>
                                        <td>strongRegex</td>
                                        <td>string</td>
                                        <td>{`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})`}</td>
                                        <td>Regex for a strong level password.</td>
                                    </tr>
                                    <tr>
                                        <td>feedback</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show the strength indicator or not.</td>
                                    </tr>
                                    <tr>
                                        <td>toggleMask</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to show an icon to display the password as plain text.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Id of the element or "body" for document where the overlay should be appended to.</td>
                                    </tr>
                                    <tr>
                                        <td>header</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Template of panel header if "feedback" is enabled.</td>
                                    </tr>
                                    <tr>
                                        <td>content</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Template of panel content if "feedback" is enabled.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Template of panel footer if "feedback" is enabled.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Template of mask icon if "toggleMask" is enabled.</td>
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
                                        <td>style</td>
                                        <td>object</td>
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
                                        <td>inputStyle</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Inline style of the input field.</td>
                                    </tr>
                                    <tr>
                                        <td>inputClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the input field.</td>
                                    </tr>
                                    <tr>
                                        <td>panelClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the overlay panel element.</td>
                                    </tr>
                                    <tr>
                                        <td>panelStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the overlay panel element.</td>
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
                                        <td>p-password</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-password-input</td>
                                        <td>Input Element</td>
                                    </tr>
                                    <tr>
                                        <td>p-password-panel</td>
                                        <td>Container of password panel</td>
                                    </tr>
                                    <tr>
                                        <td>p-password-meter</td>
                                        <td>Meter element of password strength</td>
                                    </tr>
                                    <tr>
                                        <td>p-password-info</td>
                                        <td>Text to display strength</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'PasswordDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }

}
