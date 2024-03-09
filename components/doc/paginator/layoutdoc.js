import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Paginator } from '@/components/lib/paginator/Paginator';
import { useState } from 'react';

export function LayoutDoc(props) {
    const [first, setFirst] = useState(0);

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    const code = {
        basic: `
<Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} 
    template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        `,
        javascript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function LayoutDemo() {
    const [first, setFirst] = useState(0);

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

export default function LayoutDemo() {
    const [first, setFirst] = useState<number>(0);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Order and content of the default UI elements of the paginator is defined with the <i>layout</i> option of the <i>template</i> property. Default token names for the elements are as follows;
                </p>
                <ul className="mb-4 line-height-4">
                    <li>
                        <i>FirstPageLink</i>
                    </li>
                    <li>
                        <i>PrevPageLink</i>
                    </li>
                    <li>
                        <i>NextPageLink</i>
                    </li>
                    <li>
                        <i>LastPageLink</i>
                    </li>
                    <li>
                        <i>PageLinks</i>
                    </li>
                    <li>
                        <i>RowsPerPageDropdown</i>
                    </li>
                    <li>
                        <i>CurrentPageReport</i>
                    </li>
                    <li>
                        <i>JumpToPageInput</i>
                    </li>
                </ul>
            </DocSectionText>
            <div className="card">
                <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
