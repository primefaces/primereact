import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const PasswordDoc = memo(() => {

    const sources = {
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
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };
    }

    render() {
        const header = <h6>Pick a password</h6>;
        const footer = (
            <React.Fragment>
                <Divider />
                <p className="mt-2">Suggestions</p>
                <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </React.Fragment>
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
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
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
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./PasswordDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/password/password.min.js"></script>
        <script src="https://unpkg.com/primereact/divider/divider.min.js"></script>`,
            content: `
const { useState } = React;
const { Password } = primereact.password;
const { Divider } = primereact.divider;

const PasswordDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
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
        }
    }

    const extFiles = {
        'demo/PasswordDemo.css': {
            content: `
.p-password input {
width: 15rem;
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
import { Password } from 'primereact/password';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/password/password.min.js"></script>
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
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the input element.</td>
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
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
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
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
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
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay becomes hidden.</td>
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

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. Screen reader
                    is notified about the changes to the strength of the password using a section that has <i>aria-live</i> while typing.</p>
<CodeHighlight>
{`
<label htmlFor="pwd1">Password</label>
<Password id="pwd1" />

<span id="pwd1">Password</span>
<Password aria-labelledby="pwd2" />

<Password aria-label="Password"/>
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
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Hides the strength meter if open.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'PasswordDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})

export default PasswordDoc;
