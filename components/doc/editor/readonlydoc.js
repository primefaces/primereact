import { useState } from 'react';
import { Editor } from '../../lib/editor/Editor';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ReadOnlyDoc(props) {
    const [text, setText] = useState('');

    const code = {
        basic: `
<Editor style={{ height: '320px' }} value="ReadOnly Mode" readOnly />
        `,
        javascript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function ReadOnlyDoc() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor style={{ height: '320px' }} value="ReadOnly Mode" readOnly />
        </div>        
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function ReadOnlyDoc() {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            <Editor style={{ height: '320px' }} value="ReadOnly Mode" readOnly />
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
            <div className="card">
                <Editor style={{ height: '320px' }} value="ReadOnly Mode" readOnly />
            </div>
            <DocSectionCode code={code} dependencies={{ quill: '1.3.7' }} />
        </>
    );
}
