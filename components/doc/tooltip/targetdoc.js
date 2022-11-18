import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Badge } from '../../lib/badge/Badge';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TargetDoc(props) {
    const code = {
        basic: `
<Tooltip target=".custom-target-icon" />

<i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge" data-pr-tooltip="No notifications" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '2rem', cursor: 'pointer' }}>
    <Badge severity="danger"></Badge>
</i>
        `,
        javascript: `
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';

export default function TargetDoc() {

    return (
        <div>
            <Tooltip target=".custom-target-icon" />

            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge" data-pr-tooltip="No notifications" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '2rem', cursor: 'pointer' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `,
        typescript: `
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';

export default function TargetDoc() {
    
    return (
        <div>
            <Tooltip target=".custom-target-icon" />

            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge" data-pr-tooltip="No notifications" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '2rem', cursor: 'pointer' }}>
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
                <p>Target</p>
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
