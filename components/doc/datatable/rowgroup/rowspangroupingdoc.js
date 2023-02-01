import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function RowSpanGroupingDoc(props) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src={'/images/flag/flag_placeholder.png'} className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={`/images/avatar/${rowData.representative.image}`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{rowData.representative.name}</span>
            </React.Fragment>
        );
    };

    const code = {
        basic: `
<DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';
import './DataTableDemo.css';

export default function RowSpanGroupingDoc() {

    const [customers, setCustomers] = useState([]);
    

    useEffect(() => {
        CustomerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`https://primereact.org/images/avatar/\${rowData.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{rowData.representative.name}</span>
            </React.Fragment>
        )
    }

    return (
        <div className="card datatable-rowgroup-demo">
            <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate}></Column>
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                <Column field="company" header="Company"></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                <Column field="date" header="Date"></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';
import './DataTableDemo.css';

export default function RowSpanGroupingDoc() {

    const [customers, setCustomers] = useState([]);
    

    useEffect(() => {
        CustomerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`https://primereact.org/images/avatar/\${rowData.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{rowData.representative.name}</span>
            </React.Fragment>
        )
    }

    return (
        <div className="card datatable-rowgroup-demo">
            <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate}></Column>
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                <Column field="company" header="Company"></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                <Column field="date" header="Date"></Column>
            </DataTable>
        </div>
    );
}
        `,
        data: `
/* CustomerService */ 
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
       `,
        extFiles: {
            'DataTableDemo.css': `
/* DataTableDemo.css */

.datatable-rowgroup-demo .p-rowgroup-footer td {
    font-weight: 700;
}

.datatable-rowgroup-demo .p-rowgroup-header span {
    font-weight: 700;
}

.datatable-rowgroup-demo .p-rowgroup-header .p-row-toggler {
    vertical-align: middle;
    margin-right: .25rem;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>RowSpan Grouping demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                    <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate}></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
