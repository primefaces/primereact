import { useState } from 'react';
import { Paginator } from '../../../lib/paginator/Paginator';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const code = {
        basic: `
<Paginator
    first={first}
    rows={rows}
    totalRecords={120}
    rowsPerPageOptions={[10, 20, 30]}
    onPageChange={onPageChange}
    pt={{
        pageButton: ({ context }) => ({
            className: context.active ? 'bg-primary' : undefined
        })
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function PTDemo() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card">
            <Paginator
                first={first}
                rows={rows}
                totalRecords={120}
                rowsPerPageOptions={[10, 20, 30]}
                onPageChange={onPageChange}
                pt={{
                    pageButton: ({ context }) => ({
                        className: context.active ? 'bg-primary' : undefined
                    })
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

export default function PTDemo() {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card">
            <Paginator
                first={first}
                rows={rows}
                totalRecords={120}
                rowsPerPageOptions={[10, 20, 30]}
                onPageChange={onPageChange}
                pt={{
                    pageButton: ({ context }) => ({
                        className: context.active ? 'bg-primary' : undefined
                    })
                }}
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={120}
                    rowsPerPageOptions={[10, 20, 30]}
                    onPageChange={onPageChange}
                    pt={{
                        pageButton: ({ context }) => ({
                            className: context.active ? 'bg-primary' : undefined
                        })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
