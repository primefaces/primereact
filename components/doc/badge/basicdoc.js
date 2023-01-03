import { Badge } from '../../lib/badge/Badge';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const code = {
        basic: `
<Badge value="2"></Badge>
        `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Badge value="2"></Badge>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
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
                    Text to display is defined with the <i>value</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Badge value="2"></Badge>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
