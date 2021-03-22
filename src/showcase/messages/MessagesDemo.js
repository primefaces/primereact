import React, { Component } from 'react';
import { Messages } from '../../components/messages/Messages';
import { Message } from '../../components/message/Message';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { MessagesDoc } from './MessagesDoc';

export class MessagesDemo extends Component {

    constructor(props) {
        super(props);

        this.addMessages = this.addMessages.bind(this);
        this.clearMessages = this.clearMessages.bind(this);
    }

    componentDidMount() {
        this.msgs1.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);

        this.msgs3.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" />
                    <div className="p-ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }

    addMessages() {
        this.msgs2.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }

    clearMessages() {
        this.msgs2.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="messages">
                        <h1>Messages</h1>
                        <p>Messages is used to display inline messages with various severities.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Severities</h5>
                        <Messages ref={(el) => this.msgs1 = el} />

                        <h5>Dynamic</h5>
                        <Button type="button" onClick={this.addMessages} label="Show" className="p-mr-2" />
                        <Button type="button" onClick={this.clearMessages} icon="pi pi-times" label="Clear" className="p-button-secondary" />

                        <Messages ref={(el) => this.msgs2 = el} />

                        <h5>Static Content</h5>
                        <Messages ref={(el) => this.msgs3 = el} />

                        <h5>Inline Message</h5>
                        <p>Message component is used to display inline messages mostly within forms.</p>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-3">
                                <Message severity="info" text="Message Content" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Message severity="success" text="Message Content" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Message severity="warn" text="Message Content" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Message severity="error" text="Message Content" />
                            </div>
                        </div>

                        <h5>Validation Message</h5>
                        <div className="p-formgroup-inline p-mb-2">
                            <label htmlFor="username1" className="p-sr-only">Username</label>
                            <InputText id="username1" placeholder="Username" className="p-invalid p-mr-2" />
                            <Message severity="error" text="Username is required" />
                        </div>
                        <div className="p-formgroup-inline">
                            <label htmlFor="email" className="p-sr-only">email</label>
                            <InputText id="email" placeholder="Email" className="p-invalid p-mr-2" />
                            <Message severity="error" />
                        </div>

                        <h5>Form Layout</h5>
                        <div className="p-field p-fluid">
                            <label htmlFor="username2">Username</label>
                            <InputText id="username2" aria-describedby="username-help" className="p-invalid p-mr-2" />
                            <small id="username-help" className="p-error">Username is not available.</small>
                        </div>
                    </div>
                </div>

                <MessagesDoc></MessagesDoc>
            </div>
        )
    }
}
