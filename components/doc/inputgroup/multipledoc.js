import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function MultipleDoc(props) {
    const code = {
        basic: `
<span className="p-inputgroup-addon"><i className="pi pi-clock"></i></span>
<span className="p-inputgroup-addon"><i className="pi pi-star-fill"></i></span>
<InputNumber placeholder="Price" />
<span className="p-inputgroup-addon">$</span>
<span className="p-inputgroup-addon">.00</span>

        `,
        javascript: `
import { InputNumber } from 'primereact/inputnumber';

export default function MultipleDoc() {

    return (
        <div className="p-inputgroup">
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
    )
}
        `,
        typescript: `
import { InputNumber } from 'primereact/inputnumber';

export default function MultipleDoc() {

    return (
        <div className="p-inputgroup">
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
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Multiple Addons</DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid">
                    <div className="p-inputgroup">
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
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
