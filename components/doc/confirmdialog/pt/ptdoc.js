import React, { useState } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { ConfirmDialog } from '../../../lib/confirmdialog/ConfirmDialog';
import { Button } from '../../../lib/button/Button';

export function PTDoc(props) {
    const [visible, setVisible] = useState(false);

    const code = {
        basic: `
<ConfirmDialog 
pt={{ headerTitle: { className: 'text-primary' } }} 
visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />
        `,
        javascript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function PTDemo() {
    return (
        <>
            <ConfirmDialog 
            pt={{ headerTitle: { className: 'text-primary' } }} 
            visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function PTDemo() {
    return (
        <>
            <ConfirmDialog 
            pt={{ headerTitle: { className: 'text-primary' } }} 
            visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <ConfirmDialog pt={{ headerTitle: { className: 'text-primary' } }} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
