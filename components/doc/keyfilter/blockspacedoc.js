import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BlockSpaceDoc(props) {
    const code = {
        basic: `
<label htmlFor="spaceblock">Block space key</label>
<InputText id="spaceblock" keyfilter={/[^\s]/} />
        `,
        javascript: `
import { InputText } from 'primereact/inputtext';

export default function BlockSpaceDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="spaceblock">Block space key</label>
            <InputText id="spaceblock" keyfilter={/[^\s]/} />
        </div>
    )
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';

export default function BlockSpaceDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="spaceblock">Block space key</label>
            <InputText id="spaceblock" keyfilter={/[^\s]/} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}> Block space key </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="spaceblock">Block space key</label>
                    <InputText id="spaceblock" keyfilter={/[^\s]/} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
