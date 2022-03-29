import React, { useState, useEffect, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { CustomerService } from '../../service/CustomerService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataTableLazyDemo = () => {

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
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    let loadLazyTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyParams]) // eslint-disable-line react-hooks/exhaustive-deps

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
                <img alt={rowData.representative.name} src={`${contextPath}/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    return (
        <div>
            <Head>
                <title>React Table Component - Lazy</title>
                <meta name="description" content="Lazy mode is handy to deal with large datasets." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Lazy</span></h1>
                    <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime <b>paging</b>, <b>sorting</b> and <b>filtering</b> happens. Sample belows imitates
                        lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                        there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                        Also, the implementation of <b>checkbox selection</b> in lazy tables is left entirely to the user. Since the DataTable does not know what will happen to the data on the next page or whether there are instant data changes, the selection array can be implemented in several ways. One of them is as in the example below.</p>
                </div>

                <DocActions github="datatable/lazy.js" />
            </div>

            <div className="content-section implementation">
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

            <DataTableLazyDemoDoc></DataTableLazyDemoDoc>
        </div>
    );
}

export default DataTableLazyDemo;

const DataTableLazyDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

export class DataTableLazyDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            totalRecords: 0,
            customers: null,
            selectAll: false,
            selectedCustomers: null,
            selectedRepresentative: null,
            lazyParams: {
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
            }
        };

        this.loadLazyData = this.loadLazyData.bind(this);
        this.onPage = this.onPage.bind(this);
        this.onSort = this.onSort.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.onSelectAllChange = this.onSelectAllChange.bind(this);

        this.customerService = new CustomerService();
        this.loadLazyTimeout = null;
    }

    loadLazyData() {
        this.setState({ loading: true });

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            this.customerService.getCustomers({ lazyEvent: JSON.stringify(this.state.lazyParams) }).then(data => {
                this.setState({
                    totalRecords: data.totalRecords,
                    customers: data.customers,
                    loading: false
                });
            });
        }, Math.random() * 1000 + 250);
    }

    onPage(event) {
        this.setState({ lazyParams: event }, this.loadLazyData);
    }

    onSort(event) {
        this.setState({ lazyParams: event }, this.loadLazyData);
    }

    onFilter(event) {
        event['first'] = 0;
        this.setState({ lazyParams: event }, this.loadLazyData);
    }

    onSelectionChange(event) {
        const value = event.value;
        this.setState({ selectedCustomers: value, selectAll: value.length === this.state.totalRecords });
    }

    onSelectAllChange(event) {
        const selectAll = event.checked;

        if (selectAll) {
            this.customerService.getCustomers().then(data => {
                this.setState({
                    selectAll: true,
                    selectedCustomers: data.customers
                });
            });
        }
        else {
            this.setState({
                selectAll: false,
                selectedCustomers: []
            });
        }
    }

    componentDidMount() {
        this.loadLazyData();
    }

    representativeBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.customers} lazy filterDisplay="row" responsiveLayout="scroll" dataKey="id"
                        paginator first={this.state.lazyParams.first} rows={10} totalRecords={this.state.totalRecords} onPage={this.onPage}
                        onSort={this.onSort} sortField={this.state.lazyParams.sortField} sortOrder={this.state.lazyParams.sortOrder}
                        onFilter={this.onFilter} filters={this.state.lazyParams.filters} loading={this.state.loading}
                        selection={this.state.selectedCustomers} onSelectionChange={this.onSelectionChange}
                        selectAll={this.state.selectAll} onSelectAllChange={this.onSelectAllChange}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                        <Column field="country.name" sortable header="Country" filterField="country.name" body={this.countryBodyTemplate} filter filterPlaceholder="Search by country" />
                        <Column field="company" sortable filter header="Company" filterPlaceholder="Search by company" />
                        <Column field="representative.name" header="Representative" body={this.representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
                    </DataTable>
                </div>
            </div>
        );
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const DataTableLazyDemo = () => {

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
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const DataTableLazyDemo = () => {

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
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./CustomerService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>
        <script src="https://unpkg.com/primereact/paginator/paginator.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { MultiSelect } = primereact.multiselect;

const DataTableLazyDemo = () => {

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
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableLazyDemo', sources: sources, service: 'CustomerService' })
                }
            </TabView>
        </div>
    )
})
