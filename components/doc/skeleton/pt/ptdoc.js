import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Skeleton } from '@/components/lib/skeleton/Skeleton';

export function PTDoc(props) {
    const code = {
        basic: `
<Skeleton
    pt={{
        root: { className: 'w-3rem h-3rem' }
    }}
/>
        `,
        javascript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Skeleton
                pt={{
                    root: { className: 'w-3rem h-3rem' }
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Skeleton
                pt={{
                    root: { className: 'w-3rem h-3rem' }
                }}
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Skeleton
                    pt={{
                        root: { className: 'w-3rem h-3rem' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
