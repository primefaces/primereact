import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';
import { DataTable } from '../../lib/datatable/DataTable';
import { Column } from '../../lib/column/Column';
import { CustomerService } from '../../../service/CustomerService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LazyDoc(props) {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [lazyParams, setLazyParams] = useState({
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

    const customerService = new CustomerService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    let loadLazyTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyParams]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        setLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            customerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event) => {
        setLazyParams(event);
    };

    const onSort = (event) => {
        setLazyParams(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setLazyParams(event);
    };

    const onSelectionChange = (event) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            customerService.getCustomers().then((data) => {
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
            <React.Fragment>
                <img
                    alt={rowData.representative.name}
                    src={`${contextPath}/images/avatar/${rowData.representative.image}`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    width={32}
                    style={{ verticalAlign: 'middle' }}
                />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    };

    const countryBodyTemplate = (rowData) => {
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

    const code = {
        basic: `
<DataTable value={customers} lazy filterDisplay="row" responsiveLayout="scroll" dataKey="id"
    paginator first={lazyParams.first} rows={10} totalRecords={totalRecords} onPage={onPage}
    onSort={onSort} sortField={lazyParams.sortField} sortOrder={lazyParams.sortOrder}
    onFilter={onFilter} filters={lazyParams.filters} loading={loading}
    selection={selectedCustomers} onSelectionChange={onSelectionChange}
    selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
    <Column field="company" sortable filter header="Company" filterPlaceholder="Search by company" />
    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const LazyDoc = () => {

    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [lazyParams, setLazyParams] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            'name': { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            'company': { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' },
        }
    });

    const customerService = new CustomerService();

    let loadLazyTimeout = null;

    useEffect(() => {
        loadLazyData();
    },[lazyParams]) // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        setLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            customerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then(data => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    }

    const onPage = (event) => {
        setLazyParams(event);
    }

    const onSort = (event) => {
        setLazyParams(event);
    }

    const onFilter = (event) => {
        event['first'] = 0;
        setLazyParams(event);
    }

    const onSelectionChange = (event) => {
        const value = event.value;
        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    }

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            customerService.getCustomers().then(data => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        }
        else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="card">
                <DataTable value={customers} lazy filterDisplay="row" responsiveLayout="scroll" dataKey="id"
                    paginator first={lazyParams.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyParams.sortField} sortOrder={lazyParams.sortOrder}
                    onFilter={onFilter} filters={lazyParams.filters} loading={loading}
                    selection={selectedCustomers} onSelectionChange={onSelectionChange}
                    selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column field="company" sortable filter header="Company" filterPlaceholder="Search by company" />
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
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

const LazyDoc = () => {

    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [lazyParams, setLazyParams] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            'name': { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            'company': { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' },
        }
    });

    const customerService = new CustomerService();

    let loadLazyTimeout = null;

    useEffect(() => {
        loadLazyData();
    },[lazyParams]) // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        setLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            customerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then(data => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    }

    const onPage = (event) => {
        setLazyParams(event);
    }

    const onSort = (event) => {
        setLazyParams(event);
    }

    const onFilter = (event) => {
        event['first'] = 0;
        setLazyParams(event);
    }

    const onSelectionChange = (event) => {
        const value = event.value;
        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    }

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            customerService.getCustomers().then(data => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        }
        else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="card">
                <DataTable value={customers} lazy filterDisplay="row" responsiveLayout="scroll" dataKey="id"
                    paginator first={lazyParams.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyParams.sortField} sortOrder={lazyParams.sortOrder}
                    onFilter={onFilter} filters={lazyParams.filters} loading={loading}
                    selection={selectedCustomers} onSelectionChange={onSelectionChange}
                    selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column field="company" sortable filter header="Company" filterPlaceholder="Search by company" />
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
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
                <p>
                    Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime <b>paging</b>, <b>sorting</b> and <b>filtering</b> happens. Sample
                    belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                    there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist. Also, the implementation of <b>checkbox selection</b> in lazy tables
                    is left entirely to the user. Since the DataTable does not know what will happen to the data on the next page or whether there are instant data changes, the selection array can be implemented in several ways. One of them is as in
                    the example below.
                </p>
            </DocSectionText>
            <div className="card">
                <DataTable
                    value={customers}
                    lazy
                    filterDisplay="row"
                    responsiveLayout="scroll"
                    dataKey="id"
                    paginator
                    first={lazyParams.first}
                    rows={10}
                    totalRecords={totalRecords}
                    onPage={onPage}
                    onSort={onSort}
                    sortField={lazyParams.sortField}
                    sortOrder={lazyParams.sortOrder}
                    onFilter={onFilter}
                    filters={lazyParams.filters}
                    loading={loading}
                    selection={selectedCustomers}
                    onSelectionChange={onSelectionChange}
                    selectAll={selectAll}
                    onSelectAllChange={onSelectAllChange}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column field="company" sortable filter header="Company" filterPlaceholder="Search by company" />
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
