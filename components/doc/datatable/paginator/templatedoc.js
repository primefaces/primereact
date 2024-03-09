import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function PaginatorTemplateDoc(props) {
    const [customers, setCustomers] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const loadDemoData = () => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    };

    const code = {
        basic: `
<DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function PaginatorTemplateDemo() {
    const [customers, setCustomers] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function PaginatorTemplateDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        data: `
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
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
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable
                        value={customers}
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        paginatorLeft={paginatorLeft}
                        paginatorRight={paginatorRight}
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                        <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                        <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                        <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
