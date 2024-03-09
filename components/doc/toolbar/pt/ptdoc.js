import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toolbar } from '@/components/lib/toolbar/Toolbar';
import React from 'react';

export function PTDoc(props) {
    const startContent = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" severity="help" />
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-times" severity="danger" />
        </React.Fragment>
    );

    const code = {
        basic: `
<Toolbar
    pt={{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
    }}
    start={startContent}
    end={endContent}
></Toolbar>
        `,
        javascript: `
import React from 'react'; 
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const startContent = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" severity='help' />
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-times" severity="danger" />
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar
                pt={{
                    root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
                }}
                start={startContent}
                end={endContent}
            ></Toolbar>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const startContent = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" severity='help' />
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-times" severity="danger" />
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar
                pt={{
                    root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
                }}
                start={startContent}
                end={endContent}
            ></Toolbar>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Toolbar
                    pt={{
                        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
                    }}
                    start={startContent}
                    end={endContent}
                ></Toolbar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
