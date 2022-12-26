import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function AlphabeticDoc(props) {
    const code = {
        basic: `
<label htmlFor="alpha">Alphabetic</label>
<InputText id="alpha" keyfilter="alpha" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function AlpahbeticDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="alpha">Alphabetic</label>
            <InputText id="alpha" keyfilter="alpha" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function AlpahbeticDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="alpha">Alphabetic</label>
            <InputText id="alpha" keyfilter="alpha" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Alphabetic</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="alpha">Alphabetic</label>
                    <InputText id="alpha" keyfilter="alpha" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
