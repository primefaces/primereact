import React from 'react';
import { useMouse } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';

export function DocumentDoc(props) {
    const { x, y } = useMouse();

    const code = {
        basic: `
<h2>Move your mouse!</h2>
<p>
    The mouse position is: {x}, {y}
</p>
        `,
        javascript: `
import React from 'react'; 
import { useMouse } from 'primereact/hooks';
import { useCounter } from 'primereact/hooks';

export default function DocumentDemo() {
    const { x, y } = useMouse();

    return (
        <div className="card flex flex-column align-items-center">
            <h2>Move your mouse!</h2>
            <div style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
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
import { useCounter } from 'primereact/hooks';

export default function DocumentDemo() {
    const { x, y } = useMouse();
    
    return (
        <div className="card flex flex-column align-items-center">
            <h2>Move your mouse!</h2>
            <div style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
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
            <div className="card flex flex-column align-items-center">
                <h2>Move your mouse!</h2>
                <div style={{ border: '2px solid black', padding: '20px', width: 'fit-content' }}>
                    <p>
                        The mouse position is: {x}, {y}
                    </p>
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
