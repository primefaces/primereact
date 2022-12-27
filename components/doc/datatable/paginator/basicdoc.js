import { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Button } from '../../../lib/button/Button';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PaginatorBasicDoc(props) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    const code = {
        basic: `
<DataTable value={customers} paginator responsiveLayout="scroll"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';

const PaginatorBasicDoc = () => {
    const [customers, setCustomers] = useState([]);

    

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    return (
        <div className="card">
            <DataTable value={customers} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';

const PaginatorBasicDoc = () => {
    const [customers, setCustomers] = useState([]);

    

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    return (
        <div className="card">
            <DataTable value={customers} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
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
                <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
            </DocSectionText>
            <div className="card">
                <DataTable
                    value={customers}
                    paginator
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                    rows={5}
                    rowsPerPageOptions={[5, 10, 20, 50]}
                    paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}
                >
                    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
