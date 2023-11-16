import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';

export function PTDoc(props) {
    const code = {
        basic: `
<Badge value="2" 
    pt={{ root: { className: 'bg-primary border-round-sm' } }} />
        `,
        javascript: `
import React from 'react'; 
import { Badge } from 'primereact/badge';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Badge value="2" pt={{ root: { className: 'bg-primary border-round-sm' } }} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Badge } from 'primereact/badge';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Badge value="2" pt={{ root: { className: 'bg-primary border-round-sm' } }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Badge value="2" pt={{ root: { className: 'bg-primary border-round-sm' } }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
