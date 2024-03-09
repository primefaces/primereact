import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';
import { Button } from '@/components/lib/button/Button';

export function ButtonDoc(props) {
    const code = {
        basic: `
<Button type="button" label="Emails">
    <Badge value="8"></Badge>
</Button>
<Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
    <Badge value="8" severity="danger"></Badge>
</Button>
            `,
        javascript: `
import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Button type="button" label="Emails">
                <Badge value="8"></Badge>
            </Button>
            <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                <Badge value="8" severity="danger"></Badge>
            </Button>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Button type="button" label="Emails">
                <Badge value="8"></Badge>
            </Button>
            <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                <Badge value="8" severity="danger"></Badge>
            </Button>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Buttons have built-in support for badges to display a badge inline.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Button type="button" label="Emails">
                    <Badge value="8"></Badge>
                </Button>
                <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                    <Badge value="8" severity="danger"></Badge>
                </Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
