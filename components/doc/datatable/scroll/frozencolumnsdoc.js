import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { ToggleButton } from '../../../lib/togglebutton/ToggleButton';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FrozenColumnsDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [balanceFrozen, setBalanceFrozen] = useState(false);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const balanceTemplate = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const code = {
        basic: `
<ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)}
    onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
<DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both" className="mt-4" tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" style={{ minWidth: '160px' }} frozen className="font-bold"></Column>
    <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
    <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
    <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from './service/CustomerService';

export default function FrozenColumnsDemo() {
    const [customers, setCustomers] = useState([]);
    const [balanceFrozen, setBalanceFrozen] = useState(false);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []);

    const balanceTemplate = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
            <DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both" className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ minWidth: '160px' }} frozen className="font-bold"></Column>
                <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ToggleButton } from 'primereact/togglebutton';
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

export default function FrozenColumnsDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [balanceFrozen, setBalanceFrozen] = useState<boolean>(false);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []);

    const balanceTemplate = (rowData: Customer) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
            <DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both" className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ minWidth: '160px' }} frozen className="font-bold"></Column>
                <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
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
                    A column can be fixed during horizontal scrolling by enablng the <i>frozen</i> property. The location is defined with the <i>alignFrozen</i> that can be <i>left</i> or <i>right</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
                <DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both" className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" style={{ minWidth: '160px' }} frozen className="font-bold"></Column>
                    <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
