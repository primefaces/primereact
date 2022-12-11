import React, { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { CustomerService } from '../../../../service/CustomerService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { ToggleButton } from '../../../lib/togglebutton/ToggleButton';

export function ScrollFrozenColumnsDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const balanceTemplate2 = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const code = {
        basic: `
<ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />
<DataTable value={customers} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="mt-3">
    <Column field="name" header="Name" style={{ width: '160px' }} frozen></Column>
    <Column field="id" header="Id" style={{ width: '100px' }}></Column>
    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '200px' }}></Column>
    <Column field="date" header="Date" style={{ width: '200px' }}></Column>
    <Column field="company" header="Company" style={{ width: '200px' }}></Column>
    <Column field="status" header="Status" style={{ width: '200px' }}></Column>
    <Column field="activity" header="Activity" style={{ width: '200px' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '200px' }}></Column>
    <Column field="balance" header="Balance" body={balanceTemplate2} style={{ width: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from '../service/CustomerService';

const ScrollFrozenColumnsDoc = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const balanceTemplate2 = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />
            <DataTable value={customers} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="mt-3">
                <Column field="name" header="Name" style={{ width: '160px' }} frozen></Column>
                <Column field="id" header="Id" style={{ width: '100px' }}></Column>
                <Column field="name" header="Name" style={{ width: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '200px' }}></Column>
                <Column field="date" header="Date" style={{ width: '200px' }}></Column>
                <Column field="company" header="Company" style={{ width: '200px' }}></Column>
                <Column field="status" header="Status" style={{ width: '200px' }}></Column>
                <Column field="activity" header="Activity" style={{ width: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '200px' }}></Column>
                <Column field="balance" header="Balance" body={balanceTemplate2} style={{ width: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
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
import { CustomerService } from '../service/CustomerService';

const ScrollFrozenColumnsDoc = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const balanceTemplate2 = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />
            <DataTable value={customers} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="mt-3">
                <Column field="name" header="Name" style={{ width: '160px' }} frozen></Column>
                <Column field="id" header="Id" style={{ width: '100px' }}></Column>
                <Column field="name" header="Name" style={{ width: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '200px' }}></Column>
                <Column field="date" header="Date" style={{ width: '200px' }}></Column>
                <Column field="company" header="Company" style={{ width: '200px' }}></Column>
                <Column field="status" header="Status" style={{ width: '200px' }}></Column>
                <Column field="activity" header="Activity" style={{ width: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '200px' }}></Column>
                <Column field="balance" header="Balance" body={balanceTemplate2} style={{ width: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Frozen Columns demo content.</p>
            </DocSectionText>
            <div className="card">
                <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />
                <DataTable value={customers} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="mt-3">
                    <Column field="name" header="Name" style={{ width: '160px' }} frozen></Column>
                    <Column field="id" header="Id" style={{ width: '100px' }}></Column>
                    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ width: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ width: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ width: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ width: '200px' }}></Column>
                    <Column field="activity" header="Activity" style={{ width: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ width: '200px' }}></Column>
                    <Column field="balance" header="Balance" body={balanceTemplate2} style={{ width: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
