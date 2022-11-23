import { Badge } from '../../lib/badge/Badge';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SizesDemo(props) {
    const code = {
        basic: `
<Badge value="6" className="mr-2" size="xlarge" severity="success"></Badge>
<Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
<Badge value="2" className="mr-2"></Badge>
        `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export const SizesDemo = () => {

    return (
        <div className="card flex justify-content-center align-items-end">
            <Badge value="6" className="mr-2" size="xlarge" severity="success"></Badge>
            <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
            <Badge value="2" className="mr-2"></Badge>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export const SizesDemo = () => {

    return (
        <div className="card flex justify-content-center align-items-end">
            <Badge value="6" className="mr-2" size="xlarge" severity="success"></Badge>
            <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
            <Badge value="2" className="mr-2"></Badge>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sizes Demo Content.</p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-end">
                <Badge value="6" className="mr-2" size="xlarge" severity="success"></Badge>
                <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
                <Badge value="2" className="mr-2"></Badge>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
