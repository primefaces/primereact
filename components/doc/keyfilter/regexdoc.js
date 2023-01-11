import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RegexDoc(props) {
    const code = {
        basic: `
<div className="p-fluid gap-2">
    <label htmlFor="spaceblock">Block space key</label>
    <InputText id="spaceblock" keyfilter={/[^\s]/} />
</div>
<div className="p-fluid gap-2">
    <label htmlFor="block">Block {\`< > * !\`}</label>
    <InputText id="block" keyfilter={/^[^<>*!]+$/} />
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDoc() {

    return (
        <div className="card flex flex-wrap justify-content-evenly ">
            <div className="flex gap-5">
                <div className="p-fluid gap-2">
                    <label htmlFor="spaceblock">Block space key</label>
                    <InputText id="spaceblock" keyfilter={/[^\s]/} />
                </div>
                <div className="p-fluid gap-2">
                    <label htmlFor="block">Block {\`< > * !\`}</label>
                    <InputText id="block" keyfilter={/^[^<>*!]+$/} />
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDoc() {

    return (
        <div className="card flex flex-wrap justify-content-evenly ">
            <div className="flex gap-5">
                <div className="p-fluid gap-2">
                    <label htmlFor="spaceblock">Block space key</label>
                    <InputText id="spaceblock" keyfilter={/[^\s]/} />
                </div>
                <div className="p-fluid gap-2">
                    <label htmlFor="block">Block {\`< > * !\`}</label>
                    <InputText id="block" keyfilter={/^[^<>*!]+$/} />
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-evenly ">
                <div className="flex gap-5">
                    <div className="p-fluid gap-2">
                        <label htmlFor="spaceblock">Block space key</label>
                        <InputText id="spaceblock" keyfilter={/[^\s]/} />
                    </div>
                    <div className="p-fluid gap-2">
                        <label htmlFor="block">Block {`< > * !`}</label>
                        <InputText id="block" keyfilter={/^[^<>*!]+$/} />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
