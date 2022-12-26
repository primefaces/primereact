import React, { useState, useEffect } from 'react';
import { DataTable } from '../../lib/datatable/DataTable';
import { Column } from '../../lib/column/Column';
import { CustomerService } from '../../../service/CustomerService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FlexScrollDoc(props) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
 <DataTable value={customers} scrollable scrollHeight="flex">
     <Column field="name" header="Name"></Column>
     <Column field="country.name" header="Country"></Column>
     <Column field="representative.name" header="Representative"></Column>
     <Column field="status" header="Status"></Column>
 </DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const FlexScrollDoc = () => {

    const [customers, setCustomers] = useState([]);
    

    useEffect(() => {
        CustomerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const FlexScrollDoc = () => {

    const [customers, setCustomers] = useState([]);
    

    useEffect(() => {
        CustomerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Flex Scroll demo content.</p>
            </DocSectionText>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
