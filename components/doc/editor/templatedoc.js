import { useState } from 'react';
import { Editor } from '../../lib/editor/Editor';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
<Editor style={{ height: '320px' }} value={text} onTextChange={(e) => setText(e.htmlValue)} />
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
        <Editor style={{ height: '320px' }} value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

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
        <Editor style={{ height: '320px' }} value={text} onTextChange={(e: EditorTextChangeParams) => setText(e.htmlValue)} headerTemplate={header} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Toolbar of the editor is customized with the <i>headerTemplate</i> property. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.
                </p>
            </DocSectionText>
            <div className="card">
                <Editor style={{ height: '320px' }} value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} />
            </div>
            <DocSectionCode code={code} dependencies={{ quill: '1.3.7' }}/>
        </>
    );
}
