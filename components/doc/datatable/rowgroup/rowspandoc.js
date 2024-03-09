import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { Tag } from '@/components/lib/tag/Tag';
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function RowSpanRowGroupDoc(props) {
    const [customers, setCustomers] = useState([]);

    const loadDemoData = () => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`} width="32" />
                <span className="font-bold">{rowData.representative.name}</span>
            </div>
        );
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    const code = {
        basic: `
<DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
        sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
    <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function RowSpanGroupingDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width="32" />
                <span className="font-bold">{rowData.representative.name}</span>
            </div>
        );
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
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

export default function RowSpanGroupingDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width="32" />
                <span className="font-bold">{rowData.representative.name}</span>
            </div>
        );
    };

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
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
                    When <i>rowGroupMode</i> is configured to be <i>rowspan</i>, the grouping column spans multiple rows.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                        <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                        <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
                        <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
                        <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
