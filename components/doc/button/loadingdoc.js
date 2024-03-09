import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useState } from 'react';

export function LoadingDoc(props) {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const code = {
        basic: `
<Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        `,
        javascript: `
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDemo() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDemo() {
    const [loading, setLoading] = useState<boolean>(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Busy state is controlled with the <i>loading</i> property.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
