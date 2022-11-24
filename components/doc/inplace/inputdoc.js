import React, { useState } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Inplace, InplaceDisplay, InplaceContent } from '../../../components/lib/inplace/Inplace';
import { InputText } from '../../../components/lib/inputtext/InputText';

export function InputDemo(props) {
    const [text, setText] = useState('');

    const code = {
        basic: `
 <Inplace closable>
    <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
    <InplaceContent>
        <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
    </InplaceContent>
</Inplace>
        `,
        javascript: `
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export const InputDemo = () => {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Inplace closable>
                <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                    <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                </InplaceContent>
            </Inplace>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export const InputDemo = () => {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            <Inplace closable>
                <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                    <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                </InplaceContent>
            </Inplace>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Input Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Inplace closable>
                    <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
                    <InplaceContent>
                        <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                    </InplaceContent>
                </Inplace>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
