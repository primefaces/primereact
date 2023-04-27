import { Button } from '../../lib/button/Button';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ButtonDoc(props) {
    const code = {
        basic: `
<div className="p-inputgroup">
    <Button label="Search" />
    <InputText placeholder="Keyword" />
</div>

<div className="p-inputgroup">
    <InputText placeholder="Keyword" />
    <Button icon="pi pi-search" className="p-button-warning" />
</div>

<div className="p-inputgroup">
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
