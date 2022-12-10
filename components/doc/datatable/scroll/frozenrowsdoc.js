import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Button } from '../../../lib/button/Button';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ScrollFrozenRowsDoc(props) {
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState(null);
    const [loading, setLoading] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersMedium().then((data) => {
            setUnlockedCustomers(data);
        });

        setLockedCustomers([
            {
                id: 5135,
                name: 'Geraldine Bisset',
                country: {
                    name: 'France',
                    code: 'fr'
                },
                company: 'Bisset Group',
                status: 'proposal',
                date: '2019-05-05',
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                }
            }
        ]);
        setLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />;
    };

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...unlockedCustomers, data];
        } else {
            _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    };

    const code = {
        basic: `
<DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';

const ScrollFrozenRowsDoc = () => {
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState(null);
    const [loading, setLoading] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersMedium().then((data) => {
            setUnlockedCustomers(data);
        });

        setLockedCustomers([
            {
                id: 5135,
                name: 'Geraldine Bisset',
                country: {
                    name: 'France',
                    code: 'fr'
                },
                company: 'Bisset Group',
                status: 'proposal',
                date: '2019-05-05',
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                }
            }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />;
    };

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...unlockedCustomers, data];
        } else {
            _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    };

    return (
        <div className="card">
            <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
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

const ScrollFrozenRowsDoc = () => {
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState(null);
    const [loading, setLoading] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersMedium().then((data) => {
            setUnlockedCustomers(data);
        });

        setLockedCustomers([
            {
                id: 5135,
                name: 'Geraldine Bisset',
                country: {
                    name: 'France',
                    code: 'fr'
                },
                company: 'Bisset Group',
                status: 'proposal',
                date: '2019-05-05',
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                }
            }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />;
    };

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...unlockedCustomers, data];
        } else {
            _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    };

    return (
        <div className="card">
            <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Frozen Rows demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
