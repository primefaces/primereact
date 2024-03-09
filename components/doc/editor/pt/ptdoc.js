import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Editor } from '@/components/lib/editor/Editor';
import { useState } from 'react';

export function PTDoc(props) {
    const [text, setText] = useState('');

    const code = {
        basic: `
<Editor
    value={text}
    onTextChange={(e) => setText(e.htmlValue)}
    pt={{
        content: { style: { height: '320px' } },
        toolbar: { className: 'surface-ground' }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function PTDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue)}
                pt={{
                    content: { style: { height: '320px' } },
                    toolbar: { className: 'surface-ground' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function PTDemo() {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue)}
                pt={{
                    content: { style: { height: '320px' } },
                    toolbar: { className: 'surface-ground' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Editor
                    value={text}
                    onTextChange={(e) => setText(e.htmlValue)}
                    pt={{
                        content: { style: { height: '320px' } },
                        toolbar: { className: 'surface-ground' }
                    }}
                />
            </div>
            <DocSectionCode code={code} dependencies={{ quill: '1.3.7' }} />
        </>
    );
}
