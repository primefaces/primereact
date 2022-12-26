import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function LoadingDoc(props) {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    const code = {
        basic: `
<Button label="Submit" loading />
<Button label="Submit" iconPos="right" loading />
<Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
<Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
        `,
        javascript: `
import React, { useState } from "react";
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function LoadingDoc() {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Submit" loading />
            <Button label="Submit" iconPos="right" loading />
            <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
            <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function LoadingDoc() {
    const [loading1, setLoading1] = useState<boolean>(false);
    const [loading2, setLoading2] = useState<boolean>(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Submit" loading />
            <Button label="Submit" iconPos="right" loading />
            <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
            <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
        </div>
    )
}
        `,
        css: `
/* ButtonDemo.css */

.button-demo .p-button {
    margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
}         
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Loading on a button is specified with <i>loading</i> attribute and loading icon can be change with <i>loadingIcon</i> property. To display only a loading, leave label as undefined.
                </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Submit" loading />
                <Button label="Submit" iconPos="right" loading />
                <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
