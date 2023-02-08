import React from 'react';
import { useMouse } from '../../../lib/hooks/Hooks';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ResetDoc(props) {
    const { ref, x, y, reset } = useMouse();

    const code = {
        basic: `
<h2>Move your mouse!</h2>
<div ref={ref} onMouseOut={reset} style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
    <p>
        The mouse position is: {x}, {y}
    </p>
</div>
        `,
        javascript: `
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ElementDemo() {
    const { ref, x, y, reset } = useMouse();

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h2>Move your mouse!</h2>
            <div ref={ref} onMouseOut={reset} style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
                <p>
                    The mouse position is: {x}, {y}
                </p>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ElementDemo() {
    const { ref, x, y, reset } = useMouse();

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h2>Move your mouse!</h2>
            <div ref={ref} onMouseOut={reset} style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
                <p>
                    The mouse position is: {x}, {y}
                </p>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <h2>Move your mouse!</h2>
                <div ref={ref} onMouseOut={reset} style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
                    <p>
                        The mouse position is: {x}, {y}
                    </p>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
