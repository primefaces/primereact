import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Editor } from '@/components/lib/editor/Editor';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [text, setText] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const code = {
        basic: `
<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function TemplateDemo() {
    const [text, setText] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function TemplateDemo() {
    const [text, setText] = useState<string>('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Toolbar is customized with the <i>headerTemplate</i> property. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.
                </p>
            </DocSectionText>
            <div className="card">
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
            </div>
            <DocSectionCode code={code} dependencies={{ quill: '1.3.7' }} />
        </>
    );
}
