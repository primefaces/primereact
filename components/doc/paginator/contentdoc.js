import { useState } from 'react';
import { Paginator } from '../../lib/paginator/Paginator';
import { Button } from '../../lib/button/Button';
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

<div className="image-gallery">
    <img alt={contentFirst} src={\`images/nature/nature\${contentFirst + 1}.jpg\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
</div>
        `,
        javascript: `
import { useState } from "react";
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
        <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
        leftContent={leftContent} rightContent={rightContent}
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

        <div className="image-gallery">
            <img alt={contentFirst} src={\`images/nature/nature\${contentFirst + 1}.jpg\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
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
        <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
        leftContent={leftContent} rightContent={rightContent}
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

        <div className="image-gallery">
            <img alt={contentFirst} src={\`images/nature/nature\${contentFirst + 1}.jpg\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
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

                <div className="image-gallery">
                    <img alt={contentFirst} src={`images/nature/nature${contentFirst + 1}.jpg`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
