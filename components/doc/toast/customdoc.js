import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CustomDoc(props) {
    const toastBC = useRef(null);

    const showConfirm = () => {
        toastBC.current.show({
            severity: 'warn',
            sticky: true,
            content: (
                <div className="flex flex-column" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <h4>Are you sure?</h4>
                        <p>Confirm to proceed</p>
                    </div>
                    <div className="grid p-fluid">
                        <div className="col-6">
                            <Button type="button" label="Yes" className="p-button-success" />
                        </div>
                        <div className="col-6">
                            <Button type="button" label="No" className="p-button-secondary" />
                        </div>
                    </div>
                </div>
            )
        });
    };

    const code = {
        basic: `
<Toast ref={toastBC} position="bottom-center" />
<Button type="button" onClick={showConfirm} label="Confirm" className="ui-button-warning" />
        `,
        javascript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function CustomDoc() {
    const toastBC = useRef(null);

    const showConfirm = () => {
        toastBC.current.show({ severity: 'warn', sticky: true, content: (
            <div className="flex flex-column" style={{flex: '1'}}>
                <div className="text-center">
                    <i className="pi pi-exclamation-triangle" style={{fontSize: '3rem'}}></i>
                    <h4>Are you sure?</h4>
                    <p>Confirm to proceed</p>
                </div>
                <div className="grid p-fluid">
                    <div className="col-6">
                        <Button type="button" label="Yes" className="p-button-success" />
                    </div>
                    <div className="col-6">
                        <Button type="button" label="No" className="p-button-secondary" />
                    </div>
                </div>
            </div>
        ) });
    }

    return (
        <div>
            <Toast ref={toastBC} position="bottom-center" />
            <Button type="button" onClick={showConfirm} label="Confirm" className="ui-button-warning" />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function CustomDoc() {
    const toastBC = useRef<Toast>(null);

    const showConfirm = () => {
        toastBC.current?.show({ severity: 'warn', sticky: true, content: (
            <div className="flex flex-column" style={{flex: '1'}}>
                <div className="text-center">
                    <i className="pi pi-exclamation-triangle" style={{fontSize: '3rem'}}></i>
                    <h4>Are you sure?</h4>
                    <p>Confirm to proceed</p>
                </div>
                <div className="grid p-fluid">
                    <div className="col-6">
                        <Button type="button" label="Yes" className="p-button-success" />
                    </div>
                    <div className="col-6">
                        <Button type="button" label="No" className="p-button-secondary" />
                    </div>
                </div>
            </div>
        ) });
    }

    return (
        <div>
            <Toast ref={toastBC} position="bottom-center" />
            <Button type="button" onClick={showConfirm} label="Confirm" className="ui-button-warning" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toastBC} position="bottom-center" />
                <div>
                    <Button type="button" onClick={showConfirm} label="Confirm" className="ui-button-warning md:w-auto md:mr-1 w-full mb-1" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
