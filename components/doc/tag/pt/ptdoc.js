import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tag } from '@/components/lib/tag/Tag';

export function PTDoc(props) {
    const code = {
        basic: `
<Tag
    value="New"
    pt={{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
    }}
></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"
                pt={{
                    root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
                }}
            ></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"
                pt={{
                    root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
                }}
            ></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Tag
                    value="New"
                    pt={{
                        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
                    }}
                ></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
