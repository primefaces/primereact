import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';

export function PositionDoc(props) {
    const code = {
        basic: `
<i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
    <Badge value="2"></Badge>
</i>
<i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
    <Badge value="5+" severity="danger"></Badge>
</i>
<i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
    <Badge severity="danger"></Badge>
</i>
            `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-4">
            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="2"></Badge>
            </i>
            <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="5+" severity="danger"></Badge>
            </i>
            <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-4">
            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="2"></Badge>
            </i>
            <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="5+" severity="danger"></Badge>
            </i>
            <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A Badge can be positioned at the top right corner of an element by adding <i>p-overlay-badge</i> style class to the element and embedding the badge inside.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-4">
                <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge value="2"></Badge>
                </i>
                <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge value="5+" severity="danger"></Badge>
                </i>
                <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge severity="danger"></Badge>
                </i>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
