import { useState } from 'react';
import { Paginator } from '../../lib/paginator/Paginator';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);

    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    };

    const code = {
        basic: `
<Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>
        `,
        javascript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function BasicDoc() {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);

    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    };

    return (
        <Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function BasicDoc() {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);

    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    };

    return (
        <Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Paginator is a generic widget to display content in paged format.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
