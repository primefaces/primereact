import React, {Component} from 'react';
import {Link} from 'react-router';
import {Messages} from '../../components/messages/Messages';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class MessagesDemo extends Component {
        
    constructor() {
        super();
        this.state = {messages:null};
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.setState({messages:[{severity:'success', summary:'Success Message', detail:'Order submitted'}]});
    }

    showInfo() {
        this.setState({messages:[{severity:'info', summary:'Info Message', detail:'PrimeReact rocks'}]});
    }

    showWarn() {
        this.setState({messages:[{severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'}]});
    }

    showError() {
        this.setState({messages:[{severity:'error', summary:'Error Message', detail:'Validation failed'}]});
    }

    showMultiple() {
        this.setState({messages:[
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]});
    }

    clear() {
        this.setState({messages:[]});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Messages</h1>
                        <p>Messages is used to display messages inline.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Messages value={this.state.messages} closable={true}></Messages>

                    <div>
                        <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        <Button onClick={this.showMultiple} label="Multiple" />
                        <Button onClick={this.clear} icon="fa-close" style={{float:'right'}} label="Clear"/>
                    </div>
                </div>
                <MessagesDoc></MessagesDoc>
            </div>
        )
    }
}

export class MessagesDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {Messages} from 'primereact/components/messages/Messages';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>A single message is specified by Message interface in PrimeReact that defines the severity, summary and detail properties.
               Messages to display are defined using the value property which should an array of Message instances.</p>
<CodeHighlight className="html">
{`
<Messages value={this.state.messages}></Messages>

`}
</CodeHighlight>

            <h3>Severities</h3>
            <p>Here are the possible values for the severity of a message.</p>
            
            <ul>
                <li>
                    success
                </li>
                <li>
                    info
                </li>
                <li>
                    warn
                </li>
                <li>
                    error
                </li>
            </ul>
            
            <h3>Showing Messages</h3>
            <p>Adding messages to the array is enough to display them. Similarly removing a message from the array is also removed from the UI.</p>

<CodeHighlight className="html">
{`
<Messages value={this.state.messages}></Messages>

<Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
<Button onClick={this.showInfo} label="Info" className="ui-button-info" />
<Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
<Button onClick={this.showError} label="Error" className="ui-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />
<Button onClick={this.clear} icon="fa-close" style={{float:'right'}} label="Clear"/>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
showSuccess() {
    this.setState({messages:[{severity:'success', summary:'Success Message', detail:'Order submitted'}]});
}

showInfo() {
    this.setState({messages:[{severity:'info', summary:'Info Message', detail:'PrimeReact rocks'}]});
}

showWarn() {
    this.setState({messages:[{severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'}]});
}

showError() {
    this.setState({messages:[{severity:'error', summary:'Error Message', detail:'Validation failed'}]});
}

showMultiple() {
    this.setState({messages:[
        {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]});
}

clear() {
    this.setState({messages:[]});
}

`}
</CodeHighlight>

            <h3>Closable</h3>
            <p>Messages are closable by default resulting in a close icon being displayed on top right corner.</p>

<CodeHighlight className="html">
{`
<Messages value={this.state.messages}></Messages>

`}
</CodeHighlight>

            <p>In order to disable closable messages, set closable to false.</p>

<CodeHighlight className="html">
{`
<Messages value={this.state.messages} closable={false}></Messages>

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
                            <td>closable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines if message box can be closed by the click icon..</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
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
                            <td>onClear</td>
                            <td>-</td>
                            <td>Callback to invoke when clear icon is clicked</td>
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/messages" className="btn-viewsource" target="_blank">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class MessagesDemo extends Component {
        
    constructor() {
        super();
        this.state = {messages:null};
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.setState({messages:[{severity:'success', summary:'Success Message', detail:'Order submitted'}]});
    }

    showInfo() {
        this.setState({messages:[{severity:'info', summary:'Info Message', detail:'PrimeReact rocks'}]});
    }

    showWarn() {
        this.setState({messages:[{severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'}]});
    }

    showError() {
        this.setState({messages:[{severity:'error', summary:'Error Message', detail:'Validation failed'}]});
    }

    showMultiple() {
        this.setState({messages:[
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]});
    }

    clear() {
        this.setState({messages:[]});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Messages</h1>
                        <p>Messages is used to display messages inline.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Messages value={this.state.messages} closable={true}></Messages>

                    <div>
                        <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        <Button onClick={this.showMultiple} label="Multiple" />
                        <Button onClick={this.clear} icon="fa-close" style={{float:'right'}} label="Clear"/>
                    </div>
                </div>
                <MessagesDoc></MessagesDoc>
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