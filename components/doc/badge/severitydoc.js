import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';

export function SeverityDoc(props) {
    const code = {
        basic: `
<Badge value="2"></Badge>
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="12" severity="warning"></Badge>
<Badge value="3" severity="danger"></Badge>
<Badge value="7" severity="secondary"></Badge>
<Badge value="5" severity="contrast"></Badge>
        `,
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Badge value="2"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge >
            <Badge value="12" severity="warning"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="7" severity="secondary"></Badge>
            <Badge value="5" severity="contrast"></Badge>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Badge value="2"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge >
            <Badge value="12" severity="warning"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="7" severity="secondary"></Badge>
            <Badge value="5" severity="contrast"></Badge>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Severity defines the color of the badge, possible values are <i>success</i>, <i>info</i>, <i>warning</i> and <i>danger</i> in addition to the default theme color.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Badge value="2" />
                <Badge value="8" severity="success" />
                <Badge value="4" severity="info" />
                <Badge value="12" severity="warning" />
                <Badge value="3" severity="danger" />
                <Badge value="7" severity="secondary" />
                <Badge value="5" severity="contrast" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
