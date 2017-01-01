import React, {Component} from 'react';
import {Messages} from '../../components/messages/Messages';
import {Button} from '../../components/button/Button';

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
            {severity:'info', summary:'Message 1', detail:'PrimeNG rocks'},
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
                    <Messages value={this.state.messages} onClear={this.clear}></Messages>

                    <div>
                        <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        <Button onClick={this.showMultiple} label="Multiple" />
                        <Button onClick={this.clear} icon="fa-close" style={{float:'right'}} label="Clear"/>
                    </div>
                </div>
            </div>
        )
    }
}