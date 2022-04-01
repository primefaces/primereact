import React, { useState, useRef } from 'react';
import { ConfirmPopup, confirmPopup } from '../../components/lib/confirmpopup/ConfirmPopup';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import ConfirmPopupDoc from '../../components/doc/confirmpopup';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ConfirmPopupDemo = () => {

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const button = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

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
                <Toast ref={toast} />

                <div className="card">
                    <ConfirmPopup />

                    <h5>Basic</h5>
                    <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                    <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                    <h5>Using ConfirmPopup tag</h5>
                    <ConfirmPopup target={button.current} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                        icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                    <Button ref={button} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
                </div>
            </div>

            <ConfirmPopupDoc />
        </div>
    )
}

export default ConfirmPopupDemo;
