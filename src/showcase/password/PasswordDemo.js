import React, {Component} from 'react';
import {Link} from 'react-router';
import {Password} from '../../components/password/Password';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class PasswordDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Password</h1>
                        <p>Password displays strength indicator for password fields.</p>
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
    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="javascript">
                        {`
import {Password} from 'primereact/components/password/Password';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Component is defined using the Password element .</p>
                        <CodeHighlight className="html">
                        {`
<Password/>

`}
                    </CodeHighlight>
                        <h3>Attributes</h3>
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
                                        <td>ui-password-panel</td>
                                        <td>Container of password panel</td>
                                    </tr>
                                    <tr>
                                        <td>ui-password-meter</td>
                                        <td>Meter element of password strength</td>
                                    </tr>
                                    <tr>
                                        <td>ui-password-info</td>
                                        <td>Text to display strength</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/password" className="btn-viewsource" target="_blank">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class PasswordDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Password</h1>
                        <p>Password displays strength indicator for password fields.</p>
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
                        `}
                    </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}