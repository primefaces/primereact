import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Messages} from '../../components/messages/Messages';
import {Message} from '../../components/message/Message';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

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
        this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    showInfo() {
        this.messages.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    }

    showWarn() {
        this.messages.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showError() {
        this.messages.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    showSticky() {
        this.messages.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    showMultiple() {
        this.messages.show([
            {severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'}
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
                        <p>Messages is used to display inline messages with various severities.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("messages")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Messages ref={(el) => this.messages = el} />

                    <h3 style={{marginTop: 0}}>Severities</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="p-button-success" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showInfo} label="Info" className="p-button-info" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showError} label="Error" className="p-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.clear} icon="pi pi-times" style={{float: 'right'}} label="Clear" />
                        </div>
                    </div>

                    <h3>Inline Message CSS</h3>
                    <p>CSS helpers to display inline messages mostly within forms.</p>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <Message severity="info" text="PrimeReact Rocks" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Message severity="success" text="Record Saved" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Message severity="warn" text="Are you sure?" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Message severity="error" text="Field is required" />
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Username" className="p-error" style={{marginRight: '.25em'}} />
                        <Message severity="error" text="Field is required" />
                    </div>
                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Email" className="p-error" style={{marginRight: '.25em'}} />
                        <Message severity="error" />
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
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>A single message is specified by the Message interface in PrimeReact that defines various properties such as severity,
               summary and detail. Messages are displayed by using the <i>show</i> method on the ref of the Messages instance.</p>

            <p>Note that for animations, messages requires react-transition-group package.</p>

<CodeHighlight className="language-jsx">
{`
<Messages ref={(el) => this.messages = el}></Messages>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});

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

<CodeHighlight className="language-jsx">
{`
<Messages ref={(el) => this.messages = el}></Messages>

<Button onClick={this.showSuccess} label="Success" className="p-button-success" />
<Button onClick={this.showInfo} label="Info" className="p-button-info" />
<Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
<Button onClick={this.showError} label="Error" className="p-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
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

                <CodeHighlight className="language-jsx">
{`
this.messages.clear();

`}
</CodeHighlight>

                <h3>Replacing Messages</h3>
                <p><i>replace(newMessages)</i> method adds new messages after removing all old messages.</p>

                <CodeHighlight className="language-jsx">
{`
this.messages.replace(newMessages);

`}
</CodeHighlight>

                <h3>Closable</h3>
                <p>Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set <i>closable</i> to false.</p>

                <CodeHighlight className="language-javascript">
{`
this.messages.show({closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

`}
                </CodeHighlight>

                <h3>Sticky</h3>
                <p>Messages are cleared automatically after the timeout defined by <i>life</i> property which is 3 seconds by default. Use <i>sticky</i> mode to make them stay until
                they are manually removed.</p>

<CodeHighlight className="language-javascript">
    {`
//sticky
this.messages.show({ sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

//automatically removed after 5 seconds
this.messages.show({ life: 5000, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

`}
</CodeHighlight>


                <h3>Message Component</h3>
                <p>Message component is useful in cases where a single message needs to be displayed related to an element such as forms. It has two properties, <i>severity</i> and <i>text</i> of the message.</p>
<CodeHighlight className="language-jsx">
{`
<h3>Inline Message CSS</h3>
<p>CSS helpers to display inline messages mostly within forms.</p>
<Message severity="info" text="PrimeNG Rocks"></Message>
<Message severity="success" text="Record Saved"></Message>
<Message severity="warn" text="Are you sure?"></Message>
<Message severity="error" text="Field is required"></Message>

`}
</CodeHighlight>

            <h3>Properties of Message</h3>
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
                        <tr>
                            <td>severity</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Severity level of the message.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Message text.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Properties of Messages</h3>
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

            <h3>Events of Messages</h3>
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
                            <td>onRemove</td>
                            <td>message: Removed message </td>
                            <td>Callback to invoke when a message is removed.</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>message: Clicked message </td>
                            <td>Callback to invoke when a message gets clicked.</td>
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
                            <td>p-messages</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-messages-info</td>
                            <td>Container element when displaying info messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-warn</td>
                            <td>Container element when displaying warning messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-error</td>
                            <td>Container element when displaying error messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-success</td>
                            <td>Container element when displaying success messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-close</td>
                            <td>Close icon.</td>
                        </tr>
                        <tr>
                            <td>p-messages-icon</td>
                            <td>Severity icon.</td>
                        </tr>
                        <tr>
                            <td>p-messages-summary</td>
                            <td>Summary of a message.</td>
                        </tr>
                        <tr>
                            <td>p-messages-detail</td>
                            <td>Detail of a message.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <ul>
                    <li>react-transition-group</li>
                </ul>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/messages" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/components/message';
import {InputText} from 'primereact/components/inputtext';
import {Button} from 'primereact/components/button';

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
        this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    showInfo() {
        this.messages.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    }

    showWarn() {
        this.messages.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showError() {
        this.messages.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    showSticky() {
        this.messages.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    showMultiple() {
        this.messages.show([
            {severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'}
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
                        <p>Messages is used to display inline messages with various severities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Messages ref={(el) => this.messages = el} />

                    <h3>Severities</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="p-button-success" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showInfo} label="Info" className="p-button-info" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showError} label="Error" className="p-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.clear} icon="pi pi-times" style={{ float: 'right' }} label="Clear" />
                        </div>
                    </div>

                    <h3>Inline Message CSS</h3>
                    <p>CSS helpers to display inline messages mostly within forms.</p>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <Message severity="info" text="PrimeReact Rocks" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Message severity="success" text="Record Saved" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Message severity="warn" text="Are you sure?" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Message severity="error" text="Field is required" />
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Username" className="p-error" style={{marginRight: '.25em'}} />
                        <Message severity="error" text="Field is required" />
                    </div>
                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <InputText placeholder="Email" className="p-error" style={{marginRight: '.25em'}} />
                        <Message severity="error" />
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
