import { Badge } from '../../lib/badge/Badge';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ButtonDoc(props) {
    const code = {
        basic: `
<Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
<Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>
            `,
        javascript: `
import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const ButtonDoc = () => {

    return (
        <div className="card flex justify-content-center">
            <Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
            <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const ButtonDoc = () => {

    return (
        <div className="card flex justify-content-center">
            <Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
            <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Badge - Button Demo Content.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button type="button" label="Emails" className="mr-2">
                    <Badge value="8"></Badge>
                </Button>
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning">
                    <Badge value="8" severity="danger"></Badge>
                </Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
