import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Editor } from '@/components/lib/editor/Editor';
import { useState } from 'react';

export function BasicDoc(props) {
    const [text, setText] = useState('');

    const code = {
        basic: `
<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function BasicDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function BasicDemo() {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Editor is used as a controlled component with <i>value</i> and <i>onTextChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card">
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
            </div>
            <DocSectionCode code={code} dependencies={{ quill: '1.3.7' }} />
        </>
    );
}
