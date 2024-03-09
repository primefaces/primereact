import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { Tag } from '@/components/lib/tag/Tag';
import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function ExpandableRowGroupDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);

    const loadDemoData = () => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    };

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${data.representative.image}`} width="32" style={{ verticalAlign: 'middle' }} className="ml-2" />
                <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
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

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
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
<DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
    sortMode="single" sortField="representative.name" sortOrder={1}
    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" style={{ width: '20%' }}></Column>
    <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
    <Column field="company" header="Company" style={{ width: '20%' }}></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
    <Column field="date" header="Date" style={{ width: '20%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function ExpandableRowGroupDemo() {
    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${data.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} className="ml-2" />
                <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
    };

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

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
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
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="company" header="Company" style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="date" header="Date" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable, DataTableRowToggleEvent, DataTableExpandedRows } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    image: string;
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

export default function ExpandableRowGroupDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data: Customer) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${data.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} className="ml-2" />
                <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data: Customer) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
    };

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

    const calculateCustomerTotal = (name: string) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
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
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="company" header="Company" style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="date" header="Date" style={{ width: '20%' }}></Column>
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
                    When <i>expandableRowGroups</i> is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the <i>expandedRows</i> and <i>onRowToggle</i> properties.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable
                        value={customers}
                        rowGroupMode="subheader"
                        groupRowsBy="representative.name"
                        sortMode="single"
                        sortField="representative.name"
                        sortOrder={1}
                        expandableRowGroups
                        expandedRows={expandedRows}
                        onRowToggle={(e) => setExpandedRows(e.data)}
                        rowGroupHeaderTemplate={headerTemplate}
                        rowGroupFooterTemplate={footerTemplate}
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                        <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
                        <Column field="company" header="Company" style={{ width: '20%' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
                        <Column field="date" header="Date" style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
