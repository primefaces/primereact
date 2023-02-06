import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Paginator } from '../../lib/paginator/Paginator';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ContentDoc(props) {
    const [contentFirst, setContentFirst] = useState(0);

    const onContentPageChange = (event) => {
        setContentFirst(event.first);
    };

    const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => setContentFirst(0)} />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    const code = {
        basic: `
<Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
leftContent={leftContent} rightContent={rightContent}
template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator

<div className="p-3 text-center">
    <img alt={contentFirst} src={\`/images/nature/nature\${contentFirst + 1}.jpg\`} />
</div>
        `,
        javascript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';

export default function ContentDoc() {
    const [contentFirst, setContentFirst] = useState(0);

    const onContentPageChange = (event) => {
        setContentFirst(event.first);
    };

    const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => setContentFirst(0)} />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    return (
        <div className="card">
            <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
            leftContent={leftContent} rightContent={rightContent}
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
            <div className="p-3 text-center">
                <img alt={contentFirst} src={\`https://primefaces.org/cdn/primereact/images/nature/nature\${contentFirst + 1}.jpg\`} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';

export default function ContentDoc() {
    const [contentFirst, setContentFirst] = useState(0);

    const onContentPageChange = (event) => {
        setContentFirst(event.first);
    };

    const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => setContentFirst(0)} />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    return (
        <div className="card">
            <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
            leftContent={leftContent} rightContent={rightContent}
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
            <div className="p-3 text-center">
                <img alt={contentFirst} src={\`https://primefaces.org/cdn/primereact/images/nature/nature\${contentFirst + 1}.jpg\`} />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Left and Right Content</p>
            </DocSectionText>
            <div className="card">
                <Paginator
                    first={contentFirst}
                    rows={1}
                    totalRecords={12}
                    onPageChange={onContentPageChange}
                    leftContent={leftContent}
                    rightContent={rightContent}
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                ></Paginator>

                <div className="p-3 text-center">
                    <img alt={contentFirst} src={`https://primefaces.org/cdn/primereact/images/nature/nature${contentFirst + 1}.jpg`} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
