import React, { Component } from 'react';
import { Toast } from '../../components/toast/Toast';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ToastDoc } from './ToastDoc';
import './ToastDemo.scss';

export class ToastDemo extends Component {

    constructor(props) {
        super(props);
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showTopLeft = this.showTopLeft.bind(this);
        this.showBottomLeft = this.showBottomLeft.bind(this);
        this.showBottomRight = this.showBottomRight.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.toast.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showInfo() {
        this.toast.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }

    showWarn() {
        this.toast.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    showError() {
        this.toast.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    showTopLeft() {
        this.toastTL.show({severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000});
    }

    showBottomLeft() {
        this.toastBL.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    showBottomRight() {
        this.toastBR.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showSticky() {
        this.toast.show({severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true});
    }

    showConfirm() {
        this.toastBC.show({ severity: 'warn', sticky: true, content: (
            <div className="p-flex p-flex-column" style={{flex: '1'}}>
                <div className="p-text-center">
                    <i className="pi pi-exclamation-triangle" style={{fontSize: '3rem'}}></i>
                    <h4>Are you sure?</h4>
                    <p>Confirm to proceed</p>
                </div>
                <div className="p-grid p-fluid">
                    <div className="p-col-6">
                        <Button type="button" label="Yes" className="p-button-success" />
                    </div>
                    <div className="p-col-6">
                        <Button type="button" label="No" className="p-button-secondary" />
                    </div>
                </div>
            </div>
        ) });
    }

    showMultiple() {
        this.toast.show([
            {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
            {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
            {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
        ]);
    }

    clear() {
        this.toast.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction toast-demo">
                    <AppInlineHeader changelogText="toast">
                        <h1>Toast</h1>
                        <p>Toast is used to display messages in an overlay.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />
                    <Toast ref={(el) => this.toastTL = el} position="top-left" />
                    <Toast ref={(el) => this.toastBL = el} position="bottom-left" />
                    <Toast ref={(el) => this.toastBR = el} position="bottom-right" />
                    <Toast ref={(el) => this.toastBC = el} position="bottom-center" />

                    <div className="card toast-demo">
                        <h5>Severities</h5>
                        <Button label="Success" className="p-button-success" onClick={this.showSuccess} />
                        <Button label="Info" className="p-button-info" onClick={this.showInfo} />
                        <Button label="Warn" className="p-button-warning" onClick={this.showWarn} />
                        <Button label="Error" className="p-button-danger" onClick={this.showError} />

                        <h5>Positions</h5>
                        <Button label="Top Left" className="p-mr-2" onClick={this.showTopLeft} />
                        <Button label="Bottom Left" className="p-button-warning" onClick={this.showBottomLeft} />
                        <Button label="Bottom Right" className="p-button-success" onClick={this.showBottomRight} />

                        <h5>Options</h5>
                        <Button onClick={this.showMultiple} label="Multiple" className="p-button-warning" />
                        <Button onClick={this.showSticky} label="Sticky" />

                        <h5>Clear</h5>
                        <Button onClick={this.clear} label="Clear" />

                        <h5>Custom</h5>
                        <Button type="button" onClick={this.showConfirm} label="Confirm" className="ui-button-warning" />
                    </div>
                </div>

                <ToastDoc />
            </div>
        )
    }
}
