import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function MoneyDoc(props) {
    const code = {
        basic: `
<label htmlFor="money">Money</label>
<InputText id="money" keyfilter="money" />
        `,
        javascript: `
import { InputText } from 'primereact/inputtext';

export default function MoneyDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="money">Money</label>
            <InputText id="money" keyfilter="money" />
        </div>
    )
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';

export default function MoneyDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="money">Money</label>
            <InputText id="money" keyfilter="money" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Money</DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="money">Money</label>
                    <InputText id="money" keyfilter="money" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
