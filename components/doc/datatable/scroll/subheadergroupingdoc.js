import React, { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { CustomerService } from '../../../../service/CustomerService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import getConfig from 'next/config';

export function ScrollSubHeaderGroupingDoc(props) {
    const [customersGrouped, setCustomersGrouped] = useState(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomersGrouped(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img
                    alt="flag"
                    src={`${contextPath}/images/flag/flag_placeholder.png`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    className={`flag flag-${rowData.country.code}`}
                    width={30}
                />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const statusTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    };

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img
                    alt={rowData.representative.name}
                    src={`${contextPath}/images/avatar/${rowData.representative.image}`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    width="32"
                    style={{ verticalAlign: 'middle' }}
                />
                <span className="image-text">{rowData.representative.name}</span>
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
import { CustomerService } from '../service/CustomerService';

const ScrollSubHeaderGroupingDoc = () => {
    const [customersGrouped, setCustomersGrouped] = useState(null);
    
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomersGrouped(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
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
import { CustomerService } from '../service/CustomerService';

const ScrollSubHeaderGroupingDoc = () => {
    const [customersGrouped, setCustomersGrouped] = useState(null);
    
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomersGrouped(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
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
            <DocSectionCode code={code} />
        </>
    );
}
