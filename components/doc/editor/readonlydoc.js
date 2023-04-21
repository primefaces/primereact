import { Editor } from '../../lib/editor/Editor';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ReadOnlyDoc(props) {
    const code = {
        basic: `
<Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
        `,
        javascript: `
import React from "react";
import { Editor } from "primereact/editor";

export default function ReadOnlyDemo() {

    return (
        <div className="card">
            <Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
        </div>        
    )
}
        `,
        typescript: `
import React from "react";
import { Editor } from "primereact/editor";

export default function ReadOnlyDemo() {
    return (
        <div className="card">
            <Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
        </div>    
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>readOnly</i> is present, the value cannot be edited.
                </p>
            </DocSectionText>
            <div className="card">
                <Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
            </div>
            <DocSectionCode code={code} dependencies={{ quill: '1.3.7' }} />
        </>
    );
}
