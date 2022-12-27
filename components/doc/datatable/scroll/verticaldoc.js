import React, { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { CustomerService } from '../../../../service/CustomerService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ScrollVerticalDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

const ScrollVerticalDoc = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

const ScrollVerticalDoc = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <p>Vertical demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={customers} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
