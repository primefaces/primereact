import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';

export function MultipleDoc(props) {
    const code = {
        basic: `
<div className="p-inputgroup w-full md:w-30rem">
    <span className="p-inputgroup-addon">
        <i className="pi pi-clock"></i>
    </span>
    <span className="p-inputgroup-addon">
        <i className="pi pi-star-fill"></i>
    </span>
    <InputNumber placeholder="Price" />
    <span className="p-inputgroup-addon">$</span>
    <span className="p-inputgroup-addon">.00</span>
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';

export default function MultipleDemo() {
    return (
        <div className="card flex justify-content-center">
            <div className="p-inputgroup w-full md:w-30rem">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-clock"></i>
                </span>
                <span className="p-inputgroup-addon">
                    <i className="pi pi-star-fill"></i>
                </span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">$</span>
                <span className="p-inputgroup-addon">.00</span>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';

export default function MultipleDemo() {
    return (
        <div className="card flex justify-content-center">
            <div className="p-inputgroup w-full md:w-30rem">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-clock"></i>
                </span>
                <span className="p-inputgroup-addon">
                    <i className="pi pi-star-fill"></i>
                </span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">$</span>
                <span className="p-inputgroup-addon">.00</span>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Multiple add-ons can be placed inside the same group.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="p-inputgroup w-full md:w-30rem">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-clock"></i>
                    </span>
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-star-fill"></i>
                    </span>
                    <InputNumber placeholder="Price" />
                    <span className="p-inputgroup-addon">$</span>
                    <span className="p-inputgroup-addon">.00</span>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
