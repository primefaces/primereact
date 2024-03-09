import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useState } from 'react';
import { Inplace, InplaceContent, InplaceDisplay } from '../../../components/lib/inplace/Inplace';
import { InputText } from '../../../components/lib/inputtext/InputText';

export function InputDoc(props) {
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

export default function InputDemo() {
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

export default function InputDemo() {
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
                <p>
                    Inplace can be used within a form to display a value as read only before making it editable. The <i>closable</i> property adds a close button next to the content to switch back to read only mode.
                </p>
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
