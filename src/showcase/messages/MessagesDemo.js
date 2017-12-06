import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Messages} from '../../components/messages/Messages';
import {Message} from '../../components/message/Message';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class MessagesDemo extends Component {
        
    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }

    showInfo() {
        this.messages.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
    }

    showWarn() {
        this.messages.show({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showError() {
        this.messages.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSticky() {
        this.messages.show({ severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true });
    }

    showMultiple() {
        this.messages.show([
            { severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks' },
            { severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks' },
            { severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
        ]);
    }

    clear() {
        this.messages.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Messages</h1>
                        <p>Messages is used to display inline messages.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Messages ref={(el) => { this.messages = el; }}></Messages>

                    <h3>Severities</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.clear} icon="fa-close" style={{ float: 'right' }} label="Clear" />
                        </div>
                    </div>

                    <h3>Inline Message CSS</h3>
                    <p>CSS helpers to display inline messages mostly within forms.</p>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="info" text="PrimeNG Rocks"></Message>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="success" text="Record Saved"></Message>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="warn" text="Are you sure?"></Message>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="error" text="Field is required"></Message>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Username" className="ui-state-error"/>
                        <Message severity="error" text="Field is required"></Message>
                    </div>
                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Email" className="ui-state-error"/>
                        <Message severity="error"></Message>
                    </div>
                </div>

                <MessagesDoc></MessagesDoc>
            </div>
        )
    }
}

export class MessagesDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {Messages} from 'primereact/components/messages/Messages';
import {Message} from 'primereact/components/message/Message';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>A single message is specified by the Message interface in PrimeReact that defines various properties such as  severity,
               summary and detail. Messages are displayed by using the <i>show</i> method on the ref of the Messages instance.</p>

<CodeHighlight className="html">
{`
<Messages ref={(el) => { this.messages = el; }}></Messages>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });

`}
</CodeHighlight>

            <h3>Message API</h3>
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
                            <td>severity</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Severity of the message.</td>
                        </tr>
                        <tr>
                            <td>summary</td>
                            <td>element</td>
                            <td>null</td>
                            <td>Summary content of the message.</td>
                        </tr>
                        <tr>
                            <td>detail</td>
                            <td>element</td>
                            <td>null</td>
                            <td>Detail content of the message.</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether the message can be closed manually using the close icon.</td>
                        </tr>
                        <tr>
                            <td>sticky</td>
                            <td>element</td>
                            <td>null</td>
                            <td>When enabled, message is not removed automatically.</td>
                        </tr>
                        <tr>
                            <td>life</td>
                            <td>number</td>
                            <td>3000</td>
                            <td>Delay in milliseconds to close the message automatically.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
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
                            <td>onClick</td>
                            <td>message: Clicked message instance </td>
                            <td>Callback to invoke when a message is clicked.</td>
                        </tr>
                        <tr>
                            <td>onRemove</td>
                            <td>message: Closed message instance </td>
                            <td>Callback to invoke when a message is removed.</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <h3>Severities</h3>
            <p>There are four possible values for the severity of a message.</p>

            <ul>
                <li>success</li>
                <li>info</li>
                <li>warn</li>
                <li>error</li>
            </ul>

            <h3>Showing Messages</h3>
            <p>Show method accepts either a single message or an array of messages.</p>

<CodeHighlight className="html">
{`
<Messages ref={(el) => { this.messages = el; }}></Messages>

<Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
<Button onClick={this.showInfo} label="Info" className="ui-button-info" />
<Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
<Button onClick={this.showError} label="Error" className="ui-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
showSuccess() {
    this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}

showInfo() {
    this.messages.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
}

showWarn() {
    this.messages.show({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
}

showError() {
    this.messages.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
}

showMultiple() {
    this.messages.show([
        {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]);
}

`}
                </CodeHighlight>

                <h3>Clearing Messages</h3>
                <p><i>clear()</i> method removes all messages.</p>

                <CodeHighlight className="html">
{`
this.messages.clear();

`}
</CodeHighlight>

                <h3>Closable</h3>
                <p>Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set closable to false.</p>

                <CodeHighlight className="javascript">
{`
this.messages.show({ closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

`}
                </CodeHighlight>

                <h3>Sticky</h3>
                <p>Messages are cleared automatically after the timeout defined by life property which is 3 seconds by default. Use sticky mode to make them stay until
                they are manually removed.</p>

<CodeHighlight className="javascript">
    {`
//sticky
this.messages.show({ sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

//automatically removed after 5 seconds
this.messages.show({ life: 5000, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

`}
</CodeHighlight>


                    <h3>Message Component</h3>
                    <p>Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message.</p>
<CodeHighlight className="html">
{`
<h3>Inline Message CSS</h3>
<p>CSS helpers to display inline messages mostly within forms.</p>
<Message severity="info" text="PrimeNG Rocks"></Message>
<Message severity="success" text="Record Saved"></Message>
<Message severity="warn" text="Are you sure?"></Message>
<Message severity="error" text="Field is required"></Message>

`}
</CodeHighlight>

            <h3>Properties</h3>
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
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
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
                            <td>ui-messages</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-info</td>
                            <td>Container element when displaying info messages.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-warn</td>
                            <td>Container element when displaying warning messages.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-error</td>
                            <td>Container element when displaying error messages.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-success</td>
                            <td>Container element when displaying success messages.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-close</td>
                            <td>Close icon.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-icon</td>
                            <td>Severity icon.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-summary</td>
                            <td>Summary of a message.</td>
                        </tr>
                        <tr>
                            <td>ui-messages-detail</td>
                            <td>Detail of a message.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/messages" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
import React, {Component} from 'react';
import {Messages} from 'primereact/components/messages/Messages';
import {Message} from 'primereact/components/message/Message';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';

export class MessagesDemo extends Component {
        
    constructor() {
        super();

        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }

    showInfo() {
        this.messages.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
    }

    showWarn() {
        this.messages.show({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showError() {
        this.messages.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSticky() {
        this.messages.show({ severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true });
    }

    showMultiple() {
        this.messages.show([
            { severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks' },
            { severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks' },
            { severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
        ]);
    }

    clear() {
        this.messages.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Messages</h1>
                        <p>Messages is used to display inline messages.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Messages ref={(el) => { this.messages = el; }}></Messages>

                    <h3>Severities</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.clear} icon="fa-close" style={{ float: 'right' }} label="Clear" />
                        </div>
                    </div>

                    <h3>Inline Message CSS</h3>
                    <p>CSS helpers to display inline messages mostly within forms.</p>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="info" text="PrimeNG Rocks"></Message>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="success" text="Record Saved"></Message>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="warn" text="Are you sure?"></Message>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Message severity="error" text="Field is required"></Message>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Username" className="ng-dirty ng-invalid"/>
                        <Message severity="error" text="Field is required"></Message>
                    </div>
                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Email" className="ng-dirty ng-invalid"/>
                        <Message severity="error"></Message>
                    </div>
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}