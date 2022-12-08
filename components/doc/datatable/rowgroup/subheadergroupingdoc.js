import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { CustomerService } from '../../../../service/CustomerService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function SubHeaderGroupingDoc(props) {
    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        customerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img
                    alt={data.representative.name}
                    src={`${contextPath}/images/avatar/${data.representative.image}`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    width="32"
                    style={{ verticalAlign: 'middle' }}
                />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>
                    Total Customers
                </td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img
                    alt={rowData.country.name}
                    src={`${contextPath}/images/flag/flag_placeholder.png`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    className={`flag flag-${rowData.country.code}`}
                    width="30"
                />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
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
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const SubHeaderGroupingDoc = () => {

    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

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
    }

    return (
        <div className="card datatable-rowgroup-demo">
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const SubHeaderGroupingDoc = () => {

    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

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
    }

    return (
        <div className="card datatable-rowgroup-demo">
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Group customers by their representative.</p>
            </DocSectionText>
            <div className="card">
                <DataTable
                    value={customers}
                    rowGroupMode="subheader"
                    groupRowsBy="representative.name"
                    sortMode="single"
                    sortField="representative.name"
                    sortOrder={1}
                    scrollable
                    scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate}
                    rowGroupFooterTemplate={footerTemplate}
                    responsiveLayout="scroll"
                >
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
