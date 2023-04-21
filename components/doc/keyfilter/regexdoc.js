import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RegexDoc(props) {
    const code = {
        basic: `
<InputText keyfilter={/[^\s]/} />
<InputText keyfilter={/^[^<>*!]+$/}  />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="spacekey" className="font-bold block mb-2">
                    Block Space
                </label>
                <InputText id="spacekey" keyfilter={/[^\s]/} className="w-full" />
            </div>
            <div className="flex-auto">
                <label htmlFor="chars" className="font-bold block mb-2">
                    Block {\`< > * !\`}
                </label>
                <InputText id="chars" keyfilter={/^[^<>*!]+$/} className="w-full" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="spacekey" className="font-bold block mb-2">
                    Block Space
                </label>
                <InputText id="spacekey" keyfilter={/[^\s]/} className="w-full" />
            </div>
            <div className="flex-auto">
                <label htmlFor="chars" className="font-bold block mb-2">
                    Block {\`< > * !\`}
                </label>
                <InputText id="chars" keyfilter={/^[^<>*!]+$/} className="w-full" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>In addition to the presets, a regular expression can be configured for customization.</p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="spacekey" className="font-bold block mb-2">
                        Block Space
                    </label>
                    <InputText id="spacekey" keyfilter={/[^\s]/} className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="chars" className="font-bold block mb-2">
                        Block {`< > * !`}
                    </label>
                    <InputText id="chars" keyfilter={/^[^<>*!]+$/} className="w-full" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
