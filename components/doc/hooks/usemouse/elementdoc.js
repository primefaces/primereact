import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMouse } from '@/components/lib/hooks/Hooks';

export function ElementDoc(props) {
    const { ref, x, y } = useMouse();

    const code = {
        basic: `
const { ref, x, y } = useMouse();
        `,
        javascript: `
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ElementDemo() {
    const { ref, x, y } = useMouse();

    return (
        <div className="card flex justify-content-center">
            <div ref={ref} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ElementDemo() {
    const { ref, x, y } = useMouse();

    return (
        <div className="card flex justify-content-center">
            <div ref={ref} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Hover the mouse over the element to track the mouse position.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div ref={ref} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                    <span>
                        X: <strong>{x}</strong>
                    </span>
                    <span>
                        Y: <strong>{y}</strong>
                    </span>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
