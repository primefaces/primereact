import { useState } from 'react';
import { Editor } from '../../lib/editor/Editor';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [text, setText] = useState('');

    const code = {
        basic: `
<Editor style={{ height: '320px' }} value={text} onTextChange={(e) => setText(e.htmlValue)} />
        `,
        javascript: `
import { useState } from "react";
import { Editor } from "primereact/editor";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <Editor style={{ height: '320px' }} value={text} onTextChange={(e) => setText(e.htmlValue)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Editor } from "primereact/editor";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <Editor style={{ height: '320px' }} value={text} onTextChange={(e: EditorTextChangeParams) => setText(e.htmlValue)} />
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
                <Editor style={{ height: '320px' }} value={text} onTextChange={(e) => setText(e.htmlValue)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
