import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function PaginatorTemplateDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const code = {
        basic: `
<TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function PaginatorTemplateDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    return (
        <div className="card">
            <TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { TreeTable } from 'primereact/treetable';
import { TreeNode } from 'primereact/treenode';
import { Column } from 'primereact/column';

export default function PaginatorTemplateDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    return (
        <div className="card">
            <TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Paginator UI is customized using the <i>paginatorTemplate</i> property. Each element can also be customized further with your own UI to replace the default one, refer to the <Link href="/paginator">Paginator</Link> component for
                    more information about the advanced customization options.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable
                    value={nodes}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}
                    tableStyle={{ minWidth: '50rem' }}
                >
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
