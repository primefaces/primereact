import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Password} from '../../components/password/Password';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class PasswordDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Password</h1>
                        <p>Password displays strength indicator for password fields.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("password")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Password</h3>
                    <Password/>
                </div>

                <PasswordDoc />
            </div>
        );
    }
}

class PasswordDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {Password} from 'primereact/password';

export class PasswordDemo extends Component {

    render() {
        return (
            <div>
                <h3>Password</h3>
                <Password/>
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
            <h3>Password</h3>
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
            <h3>Password</h3>
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
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                        {`
import {Password} from 'primereact/password';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Password is used as a controlled component with <i>value</i> and <i>onChange</i> properties.</p>
                        <CodeHighlight className="language-jsx">
                        {`
<Password value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
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
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
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

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="PasswordDemo" sources={[key, value]} service="NodeService" data="treenodes" extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}
