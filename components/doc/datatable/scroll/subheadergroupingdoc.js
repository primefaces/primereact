import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ScrollSubHeaderGroupingDoc(props) {
    const [customersGrouped, setCustomersGrouped] = useState(null);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomersGrouped(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const statusTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    };

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{rowData.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (rowData) => {
        return <td className="font-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
    };

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customersGrouped) {
            for (let customer of customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    const code = {
        basic: `
<DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

const ScrollSubHeaderGroupingDoc = () => {
    const [customersGrouped, setCustomersGrouped] = useState(null);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomersGrouped(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (rowData) => {
        return <td className="font-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
    };

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customersGrouped) {
            for (let customer of customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    return (
        <div className="card">
            <DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
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

const ScrollSubHeaderGroupingDoc = () => {
    const [customersGrouped, setCustomersGrouped] = useState(null);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomersGrouped(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (rowData) => {
        return <td className="font-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
    };

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customersGrouped) {
            for (let customer of customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    return (
        <div className="card">
            <DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
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
       `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Frozen Columns demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable
                    value={customersGrouped}
                    rowGroupMode="subheader"
                    groupRowsBy="representative.name"
                    sortMode="single"
                    sortField="representative.name"
                    sortOrder={1}
                    scrollable
                    scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate}
                    rowGroupFooterTemplate={footerTemplate}
                >
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
