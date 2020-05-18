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
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/password" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="PasswordDemo" sources={this.sources} service="NodeService" data="treenodes" extFiles={this.extFiles} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
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
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}
