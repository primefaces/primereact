import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../service/CustomerService';

export function LazyLoadDoc(props) {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(
            () => {
                CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                    setTotalRecords(data.totalRecords);
                    setCustomers(data.customers);
                    setLoading(false);
                });
            },
            Math.random() * 1000 + 250
        );
    };

    const onPage = (event) => {
        setlazyState(event);
    };

    const onSort = (event) => {
        setlazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setlazyState(event);
    };

    const onSelectionChange = (event) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            CustomerService.getCustomers().then((data) => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        } else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const code = {
        basic: `
<DataTable value={customers} lazy filterDisplay="row" dataKey="id" paginator
        first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
        onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
        onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
        selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
    <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
    <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function LazyLoadDemo() {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event) => {
        setlazyState(event);
    };

    const onSort = (event) => {
        setlazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setlazyState(event);
    };

    const onSelectionChange = (event) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            CustomerService.getCustomers().then((data) => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        } else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={customers} lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                    onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
                <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
                <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableSelectAllChangeEvent,
    DataTablePageEvent, DataTableSortEvent, DataTableFilterEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

interface LazyTableState {
    first: number;
    rows: number;
    page: number;
    sortField?: string;
    sortOrder?: number;
    filters: DataTableFilterMeta;
}

export default function LazyLoadDemo() {
    const [loading, setLoading] = useState<boolean>(false);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [customers, setCustomers] = useState<Customer[] | null>(null);
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedCustomers, setSelectedCustomers] = useState<Customer[] | null>(null);
    const [lazyState, setlazyState] = useState<LazyTableState>({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event: DataTablePageEvent) => {
        setlazyState(event);
    };

    const onSort = (event: DataTableSortEvent) => {
        setlazyState(event);
    };

    const onFilter = (event: DataTableFilterEvent) => {
        event['first'] = 0;
        setlazyState(event);
    };

    const onSelectionChange = (event: DataTableSelectionChangeEvent) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event: DataTableSelectAllChangeEvent) => {
        const selectAll = event.checked;

        if (selectAll) {
            CustomerService.getCustomers().then((data) => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        } else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={customers} lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                    onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
                <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
                <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
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
                    Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime <i>paging</i>, <i>sorting</i> and <i>filtering</i> occurs. Sample
                    below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection.
                </p>
                <p>
                    Enabling the <i>lazy</i> property and assigning the logical number of rows to <i>totalRecords</i> by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually
                    records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist.
                </p>
                <p>
                    Note that, the implementation of <i>checkbox selection</i> in lazy mode needs to be handled manually as in this example since the DataTable cannot know about the whole dataset.
                </p>
            </DocSectionText>
            <div className="card">
                <DataTable
                    value={customers}
                    lazy
                    filterDisplay="row"
                    dataKey="id"
                    paginator
                    first={lazyState.first}
                    rows={10}
                    totalRecords={totalRecords}
                    onPage={onPage}
                    onSort={onSort}
                    sortField={lazyState.sortField}
                    sortOrder={lazyState.sortOrder}
                    onFilter={onFilter}
                    filters={lazyState.filters}
                    loading={loading}
                    tableStyle={{ minWidth: '75rem' }}
                    selection={selectedCustomers}
                    onSelectionChange={onSelectionChange}
                    selectAll={selectAll}
                    onSelectAllChange={onSelectAllChange}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
                    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
                    <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
