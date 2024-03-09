import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ConfirmDialog } from '@/components/lib/confirmdialog/ConfirmDialog';
import { useState } from 'react';

export function PTDoc(props) {
    const [visible, setVisible] = useState(false);

    const code = {
        basic: `
<ConfirmDialog
    visible={visible}
    onHide={() => setVisible(false)}
    message="Are you sure you want to proceed?"
    header="Confirmation"
    icon="pi pi-exclamation-triangle"
    pt={{
        headerTitle: {
            className: 'text-primary'
        }
    }}
/>
        `,
        javascript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function PTDemo() {
    return (
        <>
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                pt={{
                    headerTitle: {
                        className: 'text-primary'
                    }
                }}
            />
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
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                pt={{
                    headerTitle: {
                        className: 'text-primary'
                    }
                }}
            />
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
