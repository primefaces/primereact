import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';

export function TemplateDoc(props) {
    const content = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span className="ml-2 font-medium">PRIME</span>
        </>
    );

    const code = {
        basic: `
<Chip template={content} />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function TemplateDemo() {
    const content = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span className="ml-2 font-medium">PRIME</span>
        </>
    );

    return (
        <div className="card">
            <Chip className="pl-0 pr-3" template={content} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function TemplateDemo() {
    const content = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span className="ml-2 font-medium">PRIME</span>
        </>
    );

    return (
        <div className="card">
            <Chip className="pl-0 pr-3" template={content} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>template</i> property allows displaying custom content inside a chip.
                </p>
            </DocSectionText>
            <div className="card">
                <Chip className="pl-0 pr-3" template={content} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
