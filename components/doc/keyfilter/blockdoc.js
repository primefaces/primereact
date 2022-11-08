import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BlockDoc(props) {
    const code = {
        basic: `
<label htmlFor="block">Block {\`< > * !\`}</label>
<InputText id="block" keyfilter={/^[^<>*!]+$/}/>
        `,
        javascript: `
import { InputText } from 'primereact/inputtext';

export default function BlockDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="block">Block {\`< > * !\`}</label>
            <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
        </div>
    )
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';

export default function BlockDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="block">Block {\`< > * !\`}</label>
            <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}> Block {`< > * !`} </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="block">Block {`< > * !`}</label>
                    <InputText id="block" keyfilter={/^[^<>*!]+$/} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
