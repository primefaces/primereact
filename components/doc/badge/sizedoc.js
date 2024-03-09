import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';

export function SizeDoc(props) {
    const code = {
        basic: `
<Badge value="6" size="xlarge" severity="success"></Badge>
<Badge value="4" size="large" severity="warning"></Badge>
<Badge value="2"></Badge>
        `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center align-items-end gap-2">
            <Badge value="6" size="xlarge" severity="success"></Badge>
            <Badge value="4" size="large" severity="warning"></Badge>
            <Badge value="2"></Badge>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center align-items-end gap-2">
            <Badge value="6" size="xlarge" severity="success"></Badge>
            <Badge value="4" size="large" severity="warning"></Badge>
            <Badge value="2"></Badge>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Use the <i>size</i> property to customize the size of a Badge, currently <i>large</i> and <i>xlarge</i> are available as size options.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center align-items-end gap-2">
                <Badge value="6" size="xlarge" severity="success"></Badge>
                <Badge value="4" size="large" severity="warning"></Badge>
                <Badge value="2"></Badge>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
