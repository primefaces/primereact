import React, { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { CustomerService } from '../../../../service/CustomerService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ScrollHorizontalAndVerticalWithFooterDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const code = {
        basic: `
<DataTable value={customers} scrollable scrollHeight="400px" loading={loading}>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const ScrollHorizontalAndVerticalWithFooterDoc = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px" loading={loading}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const ScrollHorizontalAndVerticalWithFooterDoc = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px" loading={loading}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Horizontal and Vertical with Footer demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={customers} scrollable scrollHeight="400px" loading={loading} scrollDirection="both">
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
            <DocSectionCode code={code} />
        </>
    );
}
