import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BadgesDoc(props) {
    const code = {
        basic: `
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function BadgesDoc() {

    return (
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function BadgesDoc() {

    return (
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Badges</DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button type="button" label="Emails" badge="8" />
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
