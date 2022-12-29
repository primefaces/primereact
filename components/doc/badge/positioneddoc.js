import { Badge } from '../../lib/badge/Badge';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionedDoc(props) {
    const code = {
        basic: `
<i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
<i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
<i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i> 
            `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function PositionedDoc() {

    return (
        <div className="card flex justify-content-center">
            <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
            <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
            <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function PositionedDoc() {

    return (
        <div className="card flex justify-content-center">
            <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
            <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
            <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Positioned Demo Content.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge value="2"></Badge>
                </i>
                <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge value="10+" severity="danger"></Badge>
                </i>
                <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge severity="danger"></Badge>
                </i>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
