import { useState } from 'react';
import { DocSectionText } from '../../common/docsectiontext';

export function StyledDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function UnstyledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function UnstyledDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-checkbox</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-checkbox-box</td>
                            <td>Container of icon.</td>
                        </tr>
                        <tr>
                            <td>p-checkbox-icon</td>
                            <td>Icon element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
