import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function PaginatorBasicDoc(props) {
    const [customers, setCustomers] = useState([]);

    const loadDemoData = () => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    };

    const code = {
        basic: `
<DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function PaginatorBasicDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
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

export default function PaginatorBasicDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
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
                    Pagination is enabled by adding <i>paginator</i> property and defining <i>rows</i> per page.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
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
