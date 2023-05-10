import React from 'react';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { ProgressSpinner } from '../../../lib/progressspinner/ProgressSpinner';

export function PTDoc(props) {
    const code = {
        basic: `
<ProgressSpinner
    pt={{
        spinner: { style: { animationDuration: '0s' } },
        circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
    }}
></ProgressSpinner>
        `,
        javascript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <ProgressSpinner
                pt={{
                    spinner: { style: { animationDuration: '0s' } },
                    circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
                }}
            ></ProgressSpinner>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <ProgressSpinner
                pt={{
                    spinner: { style: { animationDuration: '0s' } },
                    circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
                }}
            ></ProgressSpinner>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <ProgressSpinner
                    pt={{
                        spinner: { style: { animationDuration: '0s' } },
                        circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
                    }}
                ></ProgressSpinner>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
