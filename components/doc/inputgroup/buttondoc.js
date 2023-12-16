import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { InputText } from '@/components/lib/inputtext/InputText';

export function ButtonDoc(props) {
    const code = {
        basic: `
<div className="p-inputgroup flex-1">
    <Button label="Search" />
    <InputText placeholder="Keyword" />
</div>

<div className="p-inputgroup flex-1">
    <InputText placeholder="Keyword" />
    <Button icon="pi pi-search" className="p-button-warning" />
</div>

<div className="p-inputgroup flex-1">
    <Button icon="pi pi-check" className="p-button-success" />
    <InputText placeholder="Vote" />
    <Button icon="pi pi-times" className="p-button-danger" />
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <Button label="Search" />
                <InputText placeholder="Keyword" />
            </div>

            <div className="p-inputgroup flex-1">
                <InputText placeholder="Keyword" />
                <Button icon="pi pi-search" className="p-button-warning" />
            </div>

            <div className="p-inputgroup flex-1">
                <Button icon="pi pi-check" className="p-button-success" />
                <InputText placeholder="Vote" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <Button label="Search" />
                <InputText placeholder="Keyword" />
            </div>

            <div className="p-inputgroup flex-1">
                <InputText placeholder="Keyword" />
                <Button icon="pi pi-search" className="p-button-warning" />
            </div>

            <div className="p-inputgroup flex-1">
                <Button icon="pi pi-check" className="p-button-success" />
                <InputText placeholder="Vote" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Buttons can be placed at either side of an input element.</p>
            </DocSectionText>
            <div className="card flex flex-column md:flex-row gap-3">
                <div className="p-inputgroup flex-1">
                    <Button label="Search" />
                    <InputText placeholder="Keyword" />
                </div>

                <div className="p-inputgroup flex-1">
                    <InputText placeholder="Keyword" />
                    <Button icon="pi pi-search" className="p-button-warning" />
                </div>

                <div className="p-inputgroup flex-1">
                    <Button icon="pi pi-check" className="p-button-success" />
                    <InputText placeholder="Vote" />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
