import React, { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { CustomerService } from '../../../../service/CustomerService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Button } from '../../../lib/button/Button';
import { Dialog } from '../../../lib/dialog/Dialog';

export function ScrollFlexibleDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />;
    };

    const code = {
        basic: `
<Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
<Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
    <DataTable value={customers} scrollable scrollHeight="flex">
        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
        <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
        <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
        <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
    </DataTable>
</Dialog>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CustomerService } from '../service/CustomerService';

const ScrollFlexibleDoc = () => {

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />;
    };

    return (
        <div className="card">
            <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
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
import { CustomerService } from '../service/CustomerService';

const ScrollFlexibleDoc = () => {
    
    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />;
    };

    return (
        <div className="card">
            <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
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
                    Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data
                    viewport adjusts itself according to the size changes.
                </p>
            </DocSectionText>
            <div className="card">
                <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
                <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
                    <DataTable value={customers} scrollable scrollHeight="flex">
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                        <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </Dialog>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
