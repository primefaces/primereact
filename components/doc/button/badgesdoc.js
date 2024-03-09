import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function BadgesDoc(props) {
    const code = {
        basic: `
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BadgesDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BadgesDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Buttons have built-in badge support with <i>badge</i> and <i>badgeClassName</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button type="button" label="Emails" badge="8" />
                <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
