import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { InputText } from '@/components/lib/inputtext/InputText';

export function BasicDoc(props) {
    const code = {
        basic: `
<div className="p-inputgroup flex-1">
    <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
    </span>
    <InputText placeholder="Username" />
</div>

<div className="p-inputgroup flex-1">
    <span className="p-inputgroup-addon">$</span>
    <InputNumber placeholder="Price" />
    <span className="p-inputgroup-addon">.00</span>
</div>

<div className="p-inputgroup flex-1">
    <span className="p-inputgroup-addon">www</span>
    <InputText placeholder="Website" />
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function BasicDemo() {
    return (
        <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">$</span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">.00</span>
            </div>

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">www</span>
                <InputText placeholder="Website" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function BasicDemo() {
    return (
        <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">$</span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">.00</span>
            </div>

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">www</span>
                <InputText placeholder="Website" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    An InputGroup is created by wrapping the input and add-ons inside an element with a <i>p-inputgroup</i> class where add-ons also should be inside an element with <i>.p-inputgroup-addon</i> class.
                </p>
            </DocSectionText>
            <div className="card flex flex-column md:flex-row gap-3">
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Price" />
                    <span className="p-inputgroup-addon">.00</span>
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">www</span>
                    <InputText placeholder="Website" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
