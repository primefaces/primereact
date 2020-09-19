import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { TabView,TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class PasswordDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import { Password } from 'primereact/password';

export class PasswordDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <Password />
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
import React from 'react';
import {Password} from 'primereact/password';

const PasswordDemo = () => {

    return (
        <div>
            <h5>Password</h5>
            <Password/>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Password} from 'primereact/password';

const PasswordDemo = () => {

    return (
        <div>
            <h5>Password</h5>
            <Password/>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.p-password-panel .p-password-meter {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAoAgMAAABhr+t0AAAADFBMVEXx8fHjHD39uB5KpWRhxht7AAAAJUlEQVR4AWMYDGAUhCKBgAFSNqpsFS5AR2Wjyv4TAz7QVNmoMgB5UksJhzldcwAAAABJRU5ErkJggg==);
}
            `
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
<Password value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
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
                                        <td>feedback</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show the strength indicator or not.</td>
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

                    <TabPanel header="Source">
                        <LiveEditor name="PasswordDemo" sources={this.sources} service="NodeService" data="treenodes" extFiles={this.extFiles} />
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}
