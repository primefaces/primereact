import { InputText } from '../../lib/inputtext/InputText';
import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ButtonDoc(props) {
    const code = {
        basic: `
<Button label="Search"/> <InputText placeholder="Keyword"/>
<InputText placeholder="Keyword"/> <Button icon="pi pi-search" className="p-button-warning"/>
<Button icon="pi pi-check" className="p-button-success"/> <InputText placeholder="Vote"/> <Button icon="pi pi-times" className="p-button-danger"/>
        `,
        javascript: `
import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function ButtonDoc() {

    return (
        <div className="grid p-fluid">
            <div className="col-12 md:col-4">
                <div className="p-inputgroup">
                    <Button label="Search" />
                    <InputText placeholder="Keyword" />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="p-inputgroup">
                    <InputText placeholder="Keyword" />
                    <Button icon="pi pi-search" className="p-button-warning" />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="p-inputgroup">
                    <Button icon="pi pi-check" className="p-button-success" />
                    <InputText placeholder="Vote" />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </div>
        </div>  
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function ButtonDoc() {

    return (
        <div className="grid p-fluid">
            <div className="col-12 md:col-4">
                <div className="p-inputgroup">
                    <Button label="Search" />
                    <InputText placeholder="Keyword" />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="p-inputgroup">
                    <InputText placeholder="Keyword" />
                    <Button icon="pi pi-search" className="p-button-warning" />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="p-inputgroup">
                    <Button icon="pi pi-check" className="p-button-success" />
                    <InputText placeholder="Vote" />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Button Addons</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <Button label="Search" />
                            <InputText placeholder="Keyword" />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <InputText placeholder="Keyword" />
                            <Button icon="pi pi-search" className="p-button-warning" />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <Button icon="pi pi-check" className="p-button-success" />
                            <InputText placeholder="Vote" />
                            <Button icon="pi pi-times" className="p-button-danger" />
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
