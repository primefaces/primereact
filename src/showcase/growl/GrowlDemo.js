import React, { Component } from 'react';
import { Growl } from '../../components/growl/Growl';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { GrowlDoc } from './GrowlDoc';
import './GrowlDemo.scss';

export class GrowlDemo extends Component {

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
        this.growl.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showInfo() {
        this.growl.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }

    showWarn() {
        this.growl.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    showError() {
        this.growl.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    showTopLeft() {
        this.growlTL.show({severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000});
    }

    showBottomLeft() {
        this.growlBL.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    showBottomRight() {
        this.growlBR.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showSticky() {
        this.growl.show({severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true});
    }

    showConfirm() {
        this.growlBC.show({ severity: 'warn', sticky: true, content: (
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
        this.growl.show([
            {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
            {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
            {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
        ]);
    }

    clear() {
        this.growl.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction growl-demo">
                    <AppInlineHeader changelogText="growl">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <Growl ref={(el) => this.growlTL = el} position="top-left" />
                    <Growl ref={(el) => this.growlBL = el} position="bottom-left" />
                    <Growl ref={(el) => this.growlBR = el} position="bottom-right" />
                    <Growl ref={(el) => this.growlBC = el} position="bottom-center" />

                    <div className="card growl-demo">
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

                <GrowlDoc />
            </div>
        )
    }
}
