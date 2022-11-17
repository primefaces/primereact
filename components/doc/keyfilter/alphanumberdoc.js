import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function AlphanumbericDoc(props) {
    const code = {
        basic: `
<label htmlFor="alphanum">Alphanumberic</label>
<InputText id="alphanum" keyfilter="alphanum" />
        `,
        javascript: `
import { InputText } from 'primereact/inputtext';

export default function AlphanumbericDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="alphanum">Alphanumberic</label>
            <InputText id="alphanum" keyfilter="alphanum" />
        </div>
    )
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';

export default function AlphanumbericDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="alphanum">Alphanumberic</label>
            <InputText id="alphanum" keyfilter="alphanum" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Alphanumberic</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="alphanum">Alphanumberic</label>
                    <InputText id="alphanum" keyfilter="alphanum" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
