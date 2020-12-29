import React, { Component } from 'react';
import { ConfirmDialog, confirmDialog } from '../../components/confirmdialog/ConfirmDialog';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import { ConfirmDialogDoc } from './ConfirmDialogDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class ConfirmDialogDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.confirm1 = this.confirm1.bind(this);
        this.confirm2 = this.confirm2.bind(this);
        this.confirmPosition = this.confirmPosition.bind(this);
    }

    accept() {
        this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    reject() {
        this.toast.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    confirm1() {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirm2() {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirmPosition(position) {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept: this.accept,
            reject: this.reject
        });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="confirmDialog">
                        <h1>ConfirmDialog</h1>
                        <p>ConfirmDialog uses a Dialog UI with <b>confirmDialog</b> method or <b>&lt;ConfirmDialog&gt;</b> tag.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Basic</h5>
                        <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="p-mr-2"></Button>
                        <Button onClick={this.confirm2} icon="pi pi-times" label="Delete"></Button>

                        <h5>Position</h5>
                        <div className="p-grid">
                            <div className="p-col-12">
                                <Button onClick={() => this.confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help p-mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                            </div>
                            <div className="p-col-12">
                                <Button onClick={() => this.confirmPosition('top-left')} icon="pi pi-arrow-down" label="TopLeft" className="p-button-warning p-mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning p-mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('top-right')} icon="pi pi-arrow-down" label="TopRight" className="p-button-warning"></Button>
                            </div>
                            <div className="p-col-12">
                                <Button onClick={() => this.confirmPosition('bottom-left')} icon="pi pi-arrow-up" label="BottomLeft" className="p-button-success p-mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success p-mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('bottom-right')} icon="pi pi-arrow-up" label="BottomRight" className="p-button-success"></Button>
                            </div>
                        </div>

                        <h5>Using ConfirmDialog tag</h5>
                        <ConfirmDialog visible={this.state.visible} onHide={() => this.setState({ visible: false })} message="Are you sure you want to proceed?"
                            header="Confirmation" icon="pi pi-exclamation-triangle" accept={this.accept} reject={this.reject} />
                        <Button onClick={() => this.setState({ visible: true })} icon="pi pi-check" label="Confirm" />
                    </div>
                </div>

                <ConfirmDialogDoc />
            </div>
        )
    }
}
