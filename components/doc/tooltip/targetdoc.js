import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';

export function TargetDoc(props) {
    const code = {
        basic: `
<Tooltip target=".custom-target-icon" />

<i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
    data-pr-tooltip="No notifications"
    data-pr-position="right"
    data-pr-at="right+5 top"
    data-pr-my="left center-2"
    style={{ fontSize: '2rem', cursor: 'pointer' }}>
    <Badge severity="danger"></Badge>
</i>
        `,
        javascript: `
import React from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';

export default function TargetDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-target-icon" />

            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
                data-pr-tooltip="No notifications"
                data-pr-position="right"
                data-pr-at="right+5 top"
                data-pr-my="left center-2"
                style={{ fontSize: '2rem', cursor: 'pointer' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';

export default function TargetDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-target-icon" />

            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
                data-pr-tooltip="No notifications"
                data-pr-position="right"
                data-pr-at="right+5 top"
                data-pr-my="left center-2"
                style={{ fontSize: '2rem', cursor: 'pointer' }}>
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
                    Standalone <i>Tooltip</i> component can attach to any element using the <i>target</i> property that accepts a valid query selector. In this case, content and options need to be defined with <i>data-pr</i> attributes.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Tooltip target=".custom-target-icon" />

                <i
                    className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
                    data-pr-tooltip="No notifications"
                    data-pr-position="right"
                    data-pr-at="right+5 top"
                    data-pr-my="left center-2"
                    style={{ fontSize: '2rem', cursor: 'pointer' }}
                >
                    <Badge severity="danger"></Badge>
                </i>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
