import { Badge } from '../../lib/badge/Badge';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NumbersDemo(props) {
    const code = {
        basic: `
<Badge value="2" className="mr-2"></Badge>
<Badge value="8" severity="success" className="mr-2"></Badge>
<Badge value="4" severity="info" className="mr-2"></Badge >
<Badge value="12" severity="warning" className="mr-2"></Badge>
<Badge value="3" severity="danger"></Badge>
        `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export const NumbersDemo = () => {

    return (
        <div className="card flex justify-content-center">
            <Badge value="2" className="mr-2"></Badge>
            <Badge value="8" severity="success" className="mr-2"></Badge>
            <Badge value="4" severity="info" className="mr-2"></Badge >
            <Badge value="12" severity="warning" className="mr-2"></Badge>
            <Badge value="3" severity="danger"></Badge>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export const NumbersDemo = () => {

    return (
        <div className="card flex justify-content-center">
            <Badge value="2" className="mr-2"></Badge>
            <Badge value="8" severity="success" className="mr-2"></Badge>
            <Badge value="4" severity="info" className="mr-2"></Badge >
            <Badge value="12" severity="warning" className="mr-2"></Badge>
            <Badge value="3" severity="danger"></Badge>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Numbers Demo Content.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="8" severity="success" className="mr-2"></Badge>
                <Badge value="4" severity="info" className="mr-2"></Badge>
                <Badge value="12" severity="warning" className="mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
