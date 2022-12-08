import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function NumbersDoc(props) {
    const code = {
        basic: `
<label htmlFor="numbers">Numbers</label>
<InputText id="numbers" keyfilter="num" />
        `,
        javascript: `
import { InputText } from 'primereact/inputtext';

export default function NumbersDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="numbers">Numbers</label>
            <InputText id="numbers" keyfilter="num" />
        </div>
    )
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';

export default function NumbersDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="numbers">Numbers</label>
            <InputText id="numbers" keyfilter="num" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Numbers</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="numbers">Numbers</label>
                    <InputText id="numbers" keyfilter="num" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
