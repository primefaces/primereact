/* eslint-disable no-console */
import React from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { useMountEffect } from '../../../lib/hooks/useMountEffect';

export function BasicDoc(props) {
    useMountEffect(() => {
        console.log('Mounted');
    });

    const code = {
        basic: `
useMountEffect(() => {
    console.log('Mounted');
});
        `,
        javascript: `
import React from 'react'; 
import { useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    useMountEffect(() => {
        console.log('Mounted');
    });

    return (
        <div className="card flex justify-content-center">
            <span className="text-lg font-semibold text-color">Open console to see the effect</span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    useMountEffect(() => {
        console.log('Mounted');
    });

    return (
        <div className="card flex justify-content-center">
            <span className="text-lg font-semibold text-color">Open console to see the effect</span>
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
            <div className="card flex justify-content-center">
                <span className="text-lg font-semibold text-color">Open console to see the effect</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
