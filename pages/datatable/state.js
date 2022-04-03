import React, { useState, useEffect, memo } from 'react';
import { FilterMatchMode, FilterOperator } from '../../components/lib/api/Api';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { CustomerService } from '../../service/CustomerService';
import { MultiSelect } from '../../components/lib/multiselect/MultiSelect';
import { InputText } from '../../components/lib/inputtext/InputText';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataTableStateDemo = () => {

    const [customers, setCustomers] = useState(null);
    const [filters1, setFilters1] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters2, setFilters2] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters3, setFilters3] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [selectedCustomer1, setSelectedCustomer1] = useState(null);
    const [selectedCustomer2, setSelectedCustomer2] = useState(null);
    const [selectedCustomer3, setSelectedCustomer3] = useState(null);
    const representatives = [
        { name: "Amy Elsner", image: 'amyelsner.png' },
        { name: "Anna Fali", image: 'annafali.png' },
        { name: "Asiya Javayant", image: 'asiyajavayant.png' },
        { name: "Bernardo Dominic", image: 'bernardodominic.png' },
        { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
        { name: "Ioni Bowcher", image: 'ionibowcher.png' },
        { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
        { name: "Onyama Limba", image: 'onyamalimba.png' },
        { name: "Stephen Shaw", image: 'stephenshaw.png' },
        { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];
    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];
    const customerService = new CustomerService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;


    const filtersMap = {
        'filters1': { value: filters1, callback: setFilters1 },
        'filters2': { value: filters2, callback: setFilters2 },
        'filters3': { value: filters3, callback: setFilters3 },
    };

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onCustomSaveState = (state) => {
        sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    const onCustomRestoreState = () => {
        return JSON.parse(sessionStorage.getItem('dt-state-demo-custom'));
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.code} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={`${contextPath}/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`${contextPath}/images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    const onGlobalFilterChange = (event, filtersKey) => {
        const value = event.target.value;
        let filters = { ...filtersMap[filtersKey].value };
        filters['global'].value = value;

        filtersMap[filtersKey].callback(filters);
    }

    const renderHeader = (filtersKey) => {
        const filters = filtersMap[`${filtersKey}`].value;
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e, filtersKey)} placeholder="Global Search" />
            </span>
        );
    }

    const header1 = renderHeader('filters1');
    const header2 = renderHeader('filters2');
    const header3 = renderHeader('filters3');

    return (
        <div>
            <Head>
                <title>React Table Component - State</title>
                <meta name="description" content="Stateful table allows keeping the state after user interaction." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>State</span></h1>
                    <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again,
                        table would render the data using its last settings.</p>
                </div>

                <DocActions github="datatable/state.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Session Storage</h5>
                    <DataTable value={customers} paginator rows={10} header={header1} filters={filters1} onFilter={(e) => setFilters1(e.filters)}
                        selection={selectedCustomer1} onSelectionChange={e => setSelectedCustomer1(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                        stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                        <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Local Storage</h5>
                    <DataTable value={customers} paginator rows={10} header={header2} filters={filters2} onFilter={(e) => setFilters2(e.filters)}
                        selection={selectedCustomer2} onSelectionChange={e => setSelectedCustomer2(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                        stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                        <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Custom Storage</h5>
                    <DataTable value={customers} paginator rows={10} header={header3} filters={filters3} onFilter={(e) => setFilters3(e.filters)}
                        selection={selectedCustomer3} onSelectionChange={e => setSelectedCustomer3(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                        stateStorage="custom" customSaveState={onCustomSaveState} customRestoreState={onCustomRestoreState} emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                        <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableStateDemoDoc></DataTableStateDemoDoc>
        </div>
    );
}

export default DataTableStateDemo;

export const DataTableStateDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { CustomerService } from '../service/CustomerService';

export class DataTableStateDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            filters1: {
                'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
                'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'representative': { value: null, matchMode: FilterMatchMode.IN },
                'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
            },
            filters2: {
                'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
                'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'representative': { value: null, matchMode: FilterMatchMode.IN },
                'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
            },
            filters3: {
                'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
                'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'representative': { value: null, matchMode: FilterMatchMode.IN },
                'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
            },
            selectedCustomer1: null,
            selectedCustomer2: null,
            selectedCustomer3: null
        };

        this.representatives = [
            { name: "Amy Elsner", image: 'amyelsner.png' },
            { name: "Anna Fali", image: 'annafali.png' },
            { name: "Asiya Javayant", image: 'asiyajavayant.png' },
            { name: "Bernardo Dominic", image: 'bernardodominic.png' },
            { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
            { name: "Ioni Bowcher", image: 'ionibowcher.png' },
            { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
            { name: "Onyama Limba", image: 'onyamalimba.png' },
            { name: "Stephen Shaw", image: 'stephenshaw.png' },
            { name: "XuXue Feng", image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ];

        this.customerService = new CustomerService();
        this.representativeFilterTemplate = this.representativeFilterTemplate.bind(this);
        this.statusFilterTemplate = this.statusFilterTemplate.bind(this);
        this.onCustomSaveState = this.onCustomSaveState.bind(this);
        this.onCustomRestoreState = this.onCustomRestoreState.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersMedium().then(data => this.setState({ customers: data }));
    }

    onCustomSaveState(state) {
        sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    onCustomRestoreState() {
        return JSON.parse(sessionStorage.getItem('dt-state-demo-custom'));
    }

    countryBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.country.code} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    representativeBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    representativeFilterTemplate(options) {
        return <MultiSelect value={options.value} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    }

    representativesItemTemplate(option) {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    statusFilterTemplate(options) {
        return <Dropdown value={options.value} options={this.statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    statusItemTemplate(option) {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    onGlobalFilterChange(event, filtersKey) {
        const value = event.target.value;
        let filters = { ...this.state[filtersKey] };
        filters['global'].value = value;

        this.setState({ [\`\${filtersKey}\`]: filters });
    }

    renderHeader(filtersKey) {
        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={this.state[\`\${filtersKey}\`]['global'].value || ''} onChange={(e) => this.onGlobalFilterChange(e, filtersKey)} placeholder="Global Search" />
            </span>
        );
    }

    render() {
        const header1 = this.renderHeader('filters1');
        const header2 = this.renderHeader('filters2');
        const header3 = this.renderHeader('filters3');

        return (
            <div>
                <div className="card">
                    <h5>Session Storage</h5>
                    <DataTable value={this.state.customers} paginator rows={10} header={header1} filters={this.state.filters1} onFilter={(e) => this.setState({ filters1: e.filters })}
                        selection={this.state.selectedCustomer1} onSelectionChange={e => this.setState({ selectedCustomer1: e.value })} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                        stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                        <Column header="Agent" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={this.representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterElement={this.statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Local Storage</h5>
                    <DataTable value={this.state.customers} paginator rows={10} header={header2} filters={this.state.filters2} onFilter={(e) => this.setState({ filters2: e.filters })}
                        selection={this.state.selectedCustomer2} onSelectionChange={e => this.setState({ selectedCustomer2: e.value })} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                        stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                        <Column header="Agent" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={this.representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterElement={this.statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Custom Storage</h5>
                    <DataTable value={this.state.customers} paginator rows={10} header={header3} filters={this.state.filters3} onFilter={(e) => this.setState({ filters3: e.filters })}
                        selection={this.state.selectedCustomer3} onSelectionChange={e => this.setState({ selectedCustomer3: e.value })} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                        stateStorage="custom" customSaveState={this.onCustomSaveState} customRestoreState={this.onCustomRestoreState} emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                        <Column header="Agent" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={this.representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterElement={this.statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
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
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { CustomerService } from '../service/CustomerService';

const DataTableStateDemo = () => {

    const [customers, setCustomers] = useState(null);
    const [filters1, setFilters1] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters2, setFilters2] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters3, setFilters3] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [selectedCustomer1, setSelectedCustomer1] = useState(null);
    const [selectedCustomer2, setSelectedCustomer2] = useState(null);
    const [selectedCustomer3, setSelectedCustomer3] = useState(null);
    const representatives = [
        { name: "Amy Elsner", image: 'amyelsner.png' },
        { name: "Anna Fali", image: 'annafali.png' },
        { name: "Asiya Javayant", image: 'asiyajavayant.png' },
        { name: "Bernardo Dominic", image: 'bernardodominic.png' },
        { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
        { name: "Ioni Bowcher", image: 'ionibowcher.png' },
        { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
        { name: "Onyama Limba", image: 'onyamalimba.png' },
        { name: "Stephen Shaw", image: 'stephenshaw.png' },
        { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];
    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];
    const customerService = new CustomerService();

    const filtersMap = {
        'filters1': { value: filters1, callback: setFilters1 },
        'filters2': { value: filters2, callback: setFilters2 },
        'filters3': { value: filters3, callback: setFilters3 },
    };

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onCustomSaveState = (state) => {
        sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    const onCustomRestoreState = () => {
        return JSON.parse(sessionStorage.getItem('dt-state-demo-custom'));
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.code} src="contextPath}/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    const onGlobalFilterChange = (event, filtersKey) => {
        const value = event.target.value;
        let filters = { ...filtersMap[filtersKey].value };
        filters['global'].value = value;

        filtersMap[filtersKey].callback(filters);
    }

    const renderHeader = (filtersKey) => {
        const filters = filtersMap[\`\${filtersKey}\`].value;
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e, filtersKey)} placeholder="Global Search" />
            </span>
        );
    }

    const header1 = renderHeader('filters1');
    const header2 = renderHeader('filters2');
    const header3 = renderHeader('filters3');

    return (
        <div>
            <div className="card">
                <h5>Session Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header1} filters={filters1} onFilter={(e) => setFilters1(e.filters)}
                    selection={selectedCustomer1} onSelectionChange={e => setSelectedCustomer1(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Local Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header2} filters={filters2} onFilter={(e) => setFilters2(e.filters)}
                    selection={selectedCustomer2} onSelectionChange={e => setSelectedCustomer2(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Custom Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header3} filters={filters3} onFilter={(e) => setFilters3(e.filters)}
                    selection={selectedCustomer3} onSelectionChange={e => setSelectedCustomer3(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="custom" customSaveState={onCustomSaveState} customRestoreState={onCustomRestoreState} emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
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
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { CustomerService } from '../service/CustomerService';

const DataTableStateDemo = () => {

    const [customers, setCustomers] = useState(null);
    const [filters1, setFilters1] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters2, setFilters2] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters3, setFilters3] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [selectedCustomer1, setSelectedCustomer1] = useState(null);
    const [selectedCustomer2, setSelectedCustomer2] = useState(null);
    const [selectedCustomer3, setSelectedCustomer3] = useState(null);
    const representatives = [
        { name: "Amy Elsner", image: 'amyelsner.png' },
        { name: "Anna Fali", image: 'annafali.png' },
        { name: "Asiya Javayant", image: 'asiyajavayant.png' },
        { name: "Bernardo Dominic", image: 'bernardodominic.png' },
        { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
        { name: "Ioni Bowcher", image: 'ionibowcher.png' },
        { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
        { name: "Onyama Limba", image: 'onyamalimba.png' },
        { name: "Stephen Shaw", image: 'stephenshaw.png' },
        { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];
    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];
    const customerService = new CustomerService();

    const filtersMap = {
        'filters1': { value: filters1, callback: setFilters1 },
        'filters2': { value: filters2, callback: setFilters2 },
        'filters3': { value: filters3, callback: setFilters3 },
    };

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onCustomSaveState = (state) => {
        sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    const onCustomRestoreState = () => {
        return JSON.parse(sessionStorage.getItem('dt-state-demo-custom'));
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.code} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    const onGlobalFilterChange = (event, filtersKey) => {
        const value = event.target.value;
        let filters = { ...filtersMap[filtersKey].value };
        filters['global'].value = value;

        filtersMap[filtersKey].callback(filters);
    }

    const renderHeader = (filtersKey) => {
        const filters = filtersMap[\`\${filtersKey}\`].value;
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e, filtersKey)} placeholder="Global Search" />
            </span>
        );
    }

    const header1 = renderHeader('filters1');
    const header2 = renderHeader('filters2');
    const header3 = renderHeader('filters3');

    return (
        <div>
            <div className="card">
                <h5>Session Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header1} filters={filters1} onFilter={(e) => setFilters1(e.filters)}
                    selection={selectedCustomer1} onSelectionChange={e => setSelectedCustomer1(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Local Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header2} filters={filters2} onFilter={(e) => setFilters2(e.filters)}
                    selection={selectedCustomer2} onSelectionChange={e => setSelectedCustomer2(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Custom Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header3} filters={filters3} onFilter={(e) => setFilters3(e.filters)}
                    selection={selectedCustomer3} onSelectionChange={e => setSelectedCustomer3(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="custom" customSaveState={onCustomSaveState} customRestoreState={onCustomRestoreState} emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
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
        <script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>
        <script src="https://unpkg.com/primereact/dropdown/dropdown.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { FilterMatchMode, FilterOperator } = primereact.api;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { InputText } = primereact.inputtext;
const { MultiSelect } = primereact.multiselect;
const { Dropdown } = primereact.dropdown;


const DataTableStateDemo = () => {

    const [customers, setCustomers] = useState(null);
    const [filters1, setFilters1] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters2, setFilters2] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [filters3, setFilters3] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });
    const [selectedCustomer1, setSelectedCustomer1] = useState(null);
    const [selectedCustomer2, setSelectedCustomer2] = useState(null);
    const [selectedCustomer3, setSelectedCustomer3] = useState(null);
    const representatives = [
        { name: "Amy Elsner", image: 'amyelsner.png' },
        { name: "Anna Fali", image: 'annafali.png' },
        { name: "Asiya Javayant", image: 'asiyajavayant.png' },
        { name: "Bernardo Dominic", image: 'bernardodominic.png' },
        { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
        { name: "Ioni Bowcher", image: 'ionibowcher.png' },
        { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
        { name: "Onyama Limba", image: 'onyamalimba.png' },
        { name: "Stephen Shaw", image: 'stephenshaw.png' },
        { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];
    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];
    const customerService = new CustomerService();

    const filtersMap = {
        'filters1': { value: filters1, callback: setFilters1 },
        'filters2': { value: filters2, callback: setFilters2 },
        'filters3': { value: filters3, callback: setFilters3 },
    };

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onCustomSaveState = (state) => {
        sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    const onCustomRestoreState = () => {
        return JSON.parse(sessionStorage.getItem('dt-state-demo-custom'));
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.code} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    const onGlobalFilterChange = (event, filtersKey) => {
        const value = event.target.value;
        let filters = { ...filtersMap[filtersKey].value };
        filters['global'].value = value;

        filtersMap[filtersKey].callback(filters);
    }

    const renderHeader = (filtersKey) => {
        const filters = filtersMap[\`\${filtersKey}\`].value;
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e, filtersKey)} placeholder="Global Search" />
            </span>
        );
    }

    const header1 = renderHeader('filters1');
    const header2 = renderHeader('filters2');
    const header3 = renderHeader('filters3');

    return (
        <div>
            <div className="card">
                <h5>Session Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header1} filters={filters1} onFilter={(e) => setFilters1(e.filters)}
                    selection={selectedCustomer1} onSelectionChange={e => setSelectedCustomer1(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Local Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header2} filters={filters2} onFilter={(e) => setFilters2(e.filters)}
                    selection={selectedCustomer2} onSelectionChange={e => setSelectedCustomer2(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Custom Storage</h5>
                <DataTable value={customers} paginator rows={10} header={header3} filters={filters3} onFilter={(e) => setFilters3(e.filters)}
                    selection={selectedCustomer3} onSelectionChange={e => setSelectedCustomer3(e.value)} selectionMode="single" dataKey="id" responsiveLayout="scroll"
                    stateStorage="custom" customSaveState={onCustomSaveState} customRestoreState={onCustomRestoreState} emptyMessage="No customers found.">
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search by country"></Column>
                    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative" showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }}></Column>
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
                    useLiveEditorTabs({ name: 'DataTableStateDemo', sources: sources, service: 'CustomerService', data: 'customers-medium' })
                }
            </TabView>
        </div>
    )
})
