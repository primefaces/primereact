import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HorizontalScrollDoc(props) {
    const [customers, setCustomers] = useState([]);

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both">
    <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
    <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
    <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function HorizontalScrollDemo() {
    const [customers, setCustomers] = useState([]);

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both">
                <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
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

export default function HorizontalScrollDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    const balanceTemplate = (rowData: Customer) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both">
                <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
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
                    Horizontal scrolling in addition to vertical scrolling is configured with setting <i>scrollDirection</i> as <i>both</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both">
                    <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
