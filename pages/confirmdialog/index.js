import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from '../../components/lib/confirmdialog/ConfirmDialog';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import ConfirmDialogDoc from '../../components/doc/confirmdialog';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ConfirmDialogDemo = () => {

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    const confirmPosition = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div>
            <Head>
                <title>React Confirmation Dialog Component</title>
                <meta name="description" content="ConfirmDialog uses a Dialog UI with confirmDialog method or ConfirmDialog tag" />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>ConfirmDialog</h1>
                    <p>ConfirmDialog uses a Dialog UI with <b>confirmDialog</b> method or <b>&lt;ConfirmDialog&gt;</b> tag.</p>
                </div>
                <DocActions github="confirmdialog/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast} />

                <div className="card">
                    <ConfirmDialog />

                    <h5>Basic</h5>
                    <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                    <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>

                    <h5>Position</h5>
                    <div className="grid">
                        <div className="col-12">
                            <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                            <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                        </div>
                        <div className="col-12">
                            <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                            <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                            <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
                        </div>
                        <div className="col-12">
                            <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                            <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                            <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
                        </div>
                    </div>

                    <h5>Using ConfirmDialog tag</h5>
                    <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                    <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
                </div>
            </div>

            <ConfirmDialogDoc />
        </div>
    )
}

export default ConfirmDialogDemo;
