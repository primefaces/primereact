import React, { Component } from 'react';
import { ConfirmPopup, confirmPopup } from '../../components/lib/confirmpopup/ConfirmPopup';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import { ConfirmPopupDoc } from '../../components/doc/confirmpopup';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class ConfirmPopupDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.confirm1 = this.confirm1.bind(this);
        this.confirm2 = this.confirm2.bind(this);
    }

    accept() {
        this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    reject() {
        this.toast.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    confirm1(event) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirm2(event) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: this.accept,
            reject: this.reject
        });
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Confirmation Popup Component</title>
                    <meta name="description" content="ConfirmPopup displays a confirmation overlay displayed relatively to its target." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>ConfirmPopup</h1>
                        <p>ConfirmPopup displays a confirmation overlay displayed relatively to its target.</p>
                    </div>
                    <DocActions github="confirmpopup/index.js" />
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Basic</h5>
                        <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                        <Button onClick={this.confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                        <h5>Using ConfirmPopup tag</h5>
                        <ConfirmPopup target={this.button} visible={this.state.visible} onHide={() => this.setState({ visible: false })} message="Are you sure you want to proceed?"
                            icon="pi pi-exclamation-triangle" accept={this.accept} reject={this.reject} />
                        <Button ref={(el) => this.button = el} onClick={() => this.setState({ visible: true })} icon="pi pi-check" label="Confirm" />
                    </div>
                </div>

                <ConfirmPopupDoc />
            </div>
        )
    }
}
