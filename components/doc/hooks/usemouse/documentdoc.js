import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMouse } from '@/components/lib/hooks/Hooks';

export function DocumentDoc(props) {
    const { x, y } = useMouse();

    const code = {
        basic: `
const { x, y } = useMouse();
        `,
        javascript: `
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function DocumentDemo() {
    const { x, y } = useMouse();

    return (
        <div className="card flex justify-content-center gap-3 text-xl">
            <span>
                X: <strong>{x}</strong>
            </span>
            <span>
                Y: <strong>{y}</strong>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function DocumentDemo() {
    const { x, y } = useMouse();

    return (
        <div className="card flex justify-content-center gap-3 text-xl">
            <span>
                X: <strong>{x}</strong>
            </span>
            <span>
                Y: <strong>{y}</strong>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>ref</i> is not used, the document is used as the target.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-3 text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
