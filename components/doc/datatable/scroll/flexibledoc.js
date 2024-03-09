import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { Dialog } from '@/components/lib/dialog/Dialog';
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function FlexibleScrollDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    const loadDemoData = () => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    };

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    const code = {
        basic: `
<Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
<Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
        modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
    <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="country.name" header="Country"></Column>
        <Column field="representative.name" header="Representative"></Column>
        <Column field="company" header="Company"></Column>
    </DataTable>
</Dialog>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CustomerService } from './service/CustomerService';

export default function FlexibleScrollDemo() {
    const [customers, setCustomers] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return (
        <div className="card">
        <Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
        <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
            <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
        </Dialog>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
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

export default function FlexibleScrollDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return (
        <div className="card">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
                    modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
                <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="company" header="Company"></Column>
                </DataTable>
            </Dialog>
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
                    Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data
                    viewport adjusts itself according to the size changes.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card flex justify-content-center">
                    <Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
                    <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
                        <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                            <Column field="name" header="Name"></Column>
                            <Column field="country.name" header="Country"></Column>
                            <Column field="representative.name" header="Representative"></Column>
                            <Column field="company" header="Company"></Column>
                        </DataTable>
                    </Dialog>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
