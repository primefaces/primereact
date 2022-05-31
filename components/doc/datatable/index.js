import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const DataTableDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

export class DataTableDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: null,
            selectedCustomers: null,
            filters: {
                'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
                'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'representative': { value: null, matchMode: FilterMatchMode.IN },
                'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
            },
            globalFilterValue: '',
            loading: true
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
        ]

        this.customerService = new CustomerService();
        this.onGlobalFilterChange = this.onGlobalFilterChange.bind(this);
        this.representativeFilterTemplate = this.representativeFilterTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.dateFilterTemplate = this.dateFilterTemplate.bind(this);
        this.balanceBodyTemplate = this.balanceBodyTemplate.bind(this);
        this.balanceFilterTemplate = this.balanceFilterTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.statusFilterTemplate = this.statusFilterTemplate.bind(this);
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.activityFilterTemplate = this.activityFilterTemplate.bind(this);
        this.representativeRowFilterTemplate = this.representativeRowFilterTemplate.bind(this);
        this.statusRowFilterTemplate = this.statusRowFilterTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({ customers: this.getCustomers(data), loading: false }));
    }

    getCustomers(data) {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    formatDate(value) {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    onGlobalFilterChange(e) {
        const value = e.target.value;
        let filters = { ...this.state.filters };
        filters['global'].value = value;

        this.setState({ filters, globalFilterValue: value });
    }

    renderHeader() {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Customers</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={this.state.globalFilterValue} onChange={this.onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    countryBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt="flag" src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    representativeBodyTemplate(rowData) {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={\`images/avatar/\${representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{representative.name}</span>
            </React.Fragment>
        );
    }

    representativeFilterTemplate(options) {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    }

    representativesItemTemplate(option) {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    dateBodyTemplate(rowData) {
        return this.formatDate(rowData.date);
    }

    dateFilterTemplate(options) {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    balanceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.balance);
    }

    balanceFilterTemplate(options) {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
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

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    activityFilterTemplate(options) {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        )
    }

    representativeRowFilterTemplate(options) {
        return <MultiSelect value={options.value} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    statusRowFilterTemplate(options) {
        return <Dropdown value={options.value} options={this.statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    actionBodyTemplate() {
        return <Button type="button" icon="pi pi-cog"></Button>;
    }

    render() {
        const header = this.renderHeader();

        return (
            <div className="datatable-doc-demo">
                <div className="card">
                    <DataTable value={this.state.customers} paginator className="p-datatable-customers" header={header} rows={10}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                        dataKey="id" rowHover selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({ selectedCustomers: e.value })}
                        filters={this.state.filters} filterDisplay="menu" loading={this.state.loading} responsiveLayout="scroll"
                        globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                        <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={this.countryBodyTemplate} filter filterPlaceholder="Search by country" />
                        <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={this.representativeBodyTemplate}
                            filter filterElement={this.representativeFilterTemplate} />
                        <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={this.dateBodyTemplate}
                            filter filterElement={this.dateFilterTemplate} />
                        <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={this.balanceBodyTemplate} filter filterElement={this.balanceFilterTemplate} />
                        <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={this.statusBodyTemplate} filter filterElement={this.statusFilterTemplate} />
                        <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={this.activityBodyTemplate} filter filterElement={this.activityFilterTemplate} />
                        <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={this.actionBodyTemplate} />
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
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableDemo = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => { setCustomers(getCustomers(data)); setLoading(false) });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Customers</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={\`images/avatar/\${representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    }

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
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

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        )
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog"></Button>;
    }

    const header = renderHeader();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={customers} paginator className="p-datatable-customers" header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                    dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                    <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeFilterTemplate} />
                    <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}
                        filter filterElement={dateFilterTemplate} />
                    <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                    <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                    <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                    <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
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
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableDemo = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => { setCustomers(getCustomers(data)); setLoading(false) });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Customers</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={\`images/avatar/\${representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    }

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
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

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        )
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog"></Button>;
    }

    const header = renderHeader();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={customers} paginator className="p-datatable-customers" header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                    dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                    <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeFilterTemplate} />
                    <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}
                        filter filterElement={dateFilterTemplate} />
                    <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                    <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                    <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                    <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
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
        <link rel="stylesheet" href="./DataTableDemo.css" />
        <script src="./CustomerService.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/calendar/calendar.min.js"></script>
        <script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>
        <script src="https://unpkg.com/primereact/slider/slider.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { FilterMatchMode, FilterOperator } = primereact.api;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { InputText } = primereact.inputtext;
const { InputNumber } = primereact.inputnumber;
const { Button } = primereact.button;
const { Dropdown } = primereact.dropdown;
const { Calendar } = primereact.calendar;
const { MultiSelect } = primereact.multiselect;
const { ProgressBar } = primereact.progressbar;
const { Slider } = primereact.slider;

const DataTableDemo = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => { setCustomers(getCustomers(data)); setLoading(false) });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Customers</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={\`images/avatar/\${representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`images/avatar/\${option.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    }

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
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

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    const activityFilterTemplate = (options) => {
        return (
            <>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </>
        )
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog"></Button>;
    }

    const header = renderHeader();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={customers} paginator className="p-datatable-customers" header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                    dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                    <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeFilterTemplate} />
                    <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}
                        filter filterElement={dateFilterTemplate} />
                    <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                    <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                    <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                    <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
                `
        }
    }

    const extFiles = {
        'demo/DataTableDemo.css': {
            content: `
.datatable-doc-demo .p-paginator .p-paginator-current {
    margin-left: auto;
}
.datatable-doc-demo .p-progressbar {
    height: 0.5rem;
    background-color: #d8dadc;
}
.datatable-doc-demo .p-progressbar .p-progressbar-value {
    background-color: #607d8b;
}
.datatable-doc-demo .p-datepicker {
    min-width: 25rem;
}
.datatable-doc-demo .p-datepicker td {
    font-weight: 400;
}
.datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
}
.datatable-doc-demo .p-datatable.p-datatable-customers .p-paginator {
    padding: 1rem;
}
.datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {
    text-align: left;
}
.datatable-doc-demo .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { DataTable } from 'primereact/datatable';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/column/column.min.js"></script>
<script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a product interface having code, name, description, image, category, quantity, price, inventoryStatus and rating properties is used to define an object to be displayed by the datatable.
                        Products are loaded by a CustomerService that connects to a server to fetch the products. Note that this is only for demo purposes, DataTable does not have any restrictions on how data is provided.
                    </p>

<CodeHighlight lang="js">
{`
export default class ProductService {

    getProductsSmall() {
		return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
	}

	getProducts() {
		return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
	}
}
`}
</CodeHighlight>

                    <p>Following sample datatable has 4 columns and retrieves the data from a service on componentDidMount.</p>
<CodeHighlight lang="js">
    {`
export const DataTableDemo = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <DataTable value={products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    );

}
`}
</CodeHighlight>

                    <p>Dynamic columns are also possible by creating the column component dynamically.</p>
<CodeHighlight lang="js">
{`
export const DataTableDemo = () => {

    const [products, setProducts] = useState([]);

    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <DataTable value={products}>
            {dynamicColumns}
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <h5>Column Component</h5>
                    <p>Column component defines various options to specify corresponding features.</p>

                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>columnKey</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of a column if field property is not defined. Only utilized by reorderableColumns feature at the moment.</td>
                                </tr>
                                <tr>
                                    <td>field</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property of a row data.</td>
                                </tr>
                                <tr>
                                    <td>sortField</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property of a row data used for sorting, defaults to field.</td>
                                </tr>
                                <tr>
                                    <td>filterField</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property of a row data used for filtering, defaults to field.</td>
                                </tr>
                                <tr>
                                    <td>exportField</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property of a row data used for exporting, defaults to field.</td>
                                </tr>
                                <tr>
                                    <td>header</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Header content of the column.</td>
                                </tr>
                                <tr>
                                    <td>body</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Body content of the column.</td>
                                </tr>
                                <tr>
                                    <td>footer</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Footer content of the column.</td>
                                </tr>
                                <tr>
                                    <td>sortable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines if a column is sortable.</td>
                                </tr>
                                <tr>
                                    <td>sortFunction</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Sort function for custom sorting.</td>
                                </tr>
                                <tr>
                                    <td>sortableDisabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, the data of columns with this property cannot be sorted or changed by the user.</td>
                                </tr>
                                <tr>
                                    <td>dataType</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Depending on the dataType of the column, suitable match modes are displayed.</td>
                                </tr>
                                <tr>
                                    <td>filter</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines if a column can be filtered.</td>
                                </tr>
                                <tr>
                                    <td>filterMatchMode</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
                                </tr>
                                <tr>
                                    <td>filterType</td>
                                    <td>string</td>
                                    <td>text</td>
                                    <td>Type of the filter input field.</td>
                                </tr>
                                <tr>
                                    <td>filterPlaceholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines placeholder of the input fields.</td>
                                </tr>
                                <tr>
                                    <td>filterMaxlength</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Specifies the maximum number of characters allowed in the filter element.</td>
                                </tr>
                                <tr>
                                    <td>filterElement</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Element for custom filtering.</td>
                                </tr>
                                <tr>
                                    <td>filterFunction</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Custom filter function.</td>
                                </tr>
                                <tr>
                                    <td>excludeGlobalFilter</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to exclude from global filtering or not.</td>
                                </tr>
                                <tr>
                                    <td>filterHeaderStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the filter header.</td>
                                </tr>
                                <tr>
                                    <td>filterHeaderClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the filter header.</td>
                                </tr>
                                <tr>
                                    <td>showFilterMenu</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to display the filter overlay.</td>
                                </tr>
                                <tr>
                                    <td>showFilterOperator</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When enabled, match all and match any operator selector is displayed.</td>
                                </tr>
                                <tr>
                                    <td>showClearButton</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Displays a button to clear the column filtering.</td>
                                </tr>
                                <tr>
                                    <td>showApplyButton</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Displays a button to apply the column filtering.</td>
                                </tr>
                                <tr>
                                    <td>showFilterMatchModes</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to show the match modes selector.</td>
                                </tr>
                                <tr>
                                    <td>showFilterMenuOptions</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to show the match modes selector and match operator selector.</td>
                                </tr>
                                <tr>
                                    <td>showAddButton</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When enabled, a button is displayed to add more rules.</td>
                                </tr>
                                <tr>
                                    <td>filterMatchModeOptions</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of label-value pairs to override the global match mode options.</td>
                                </tr>
                                <tr>
                                    <td>maxConstraints</td>
                                    <td>number</td>
                                    <td>2</td>
                                    <td>Maximum number of constraints for a column filter.</td>
                                </tr>
                                <tr>
                                    <td>filterMenuClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the column filter overlay.</td>
                                </tr>
                                <tr>
                                    <td>filterMenuStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the column filter overlay.</td>
                                </tr>
                                <tr>
                                    <td>align</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Aligns the content of the column, valid values are left, right and center.</td>
                                </tr>
                                <tr>
                                    <td>alignHeader</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Aligns the header of the column, valid values are left, right and center.</td>
                                </tr>
                                <tr>
                                    <td>alignFrozen</td>
                                    <td>string</td>
                                    <td>left</td>
                                    <td>Position of a frozen column, valid values are left and right.</td>
                                </tr>
                                <tr>
                                    <td>hidden</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the column is rendered.</td>
                                </tr>
                                <tr>
                                    <td>onFilterClear</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when the filter meta is cleared.</td>
                                </tr>
                                <tr>
                                    <td>onFilterApplyClick</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when the apply button is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onFilterMatchModeChange</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when the match mode option is changed.</td>
                                </tr>
                                <tr>
                                    <td>onFilterOperatorChange</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when the filter operator option is changed.</td>
                                </tr>
                                <tr>
                                    <td>onFilterConstraintAdd</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when a new constraint is added.</td>
                                </tr>
                                <tr>
                                    <td>onFilterConstraintRemove</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when a constraint is removed.</td>
                                </tr>
                                <tr>
                                    <td>filterClear</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of clear element in menu.</td>
                                </tr>
                                <tr>
                                    <td>filterApply</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of apply element in menu.</td>
                                </tr>
                                <tr>
                                    <td>filterHeader</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of header element in menu.</td>
                                </tr>
                                <tr>
                                    <td>filterFooter</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of footer element in menu.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the column.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the column.</td>
                                </tr>
                                <tr>
                                    <td>headerStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the header.</td>
                                </tr>
                                <tr>
                                    <td>headerClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the header.</td>
                                </tr>
                                <tr>
                                    <td>bodyStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the body.</td>
                                </tr>
                                <tr>
                                    <td>bodyClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the body.</td>
                                </tr>
                                <tr>
                                    <td>footerStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the footer.</td>
                                </tr>
                                <tr>
                                    <td>footerClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the footer.</td>
                                </tr>
                                <tr>
                                    <td>expander</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Displays an icon to toggle row expansion.</td>
                                </tr>
                                <tr>
                                    <td>frozen</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the column is fixed in horizontal scrolling or not.</td>
                                </tr>
                                <tr>
                                    <td>selectionMode</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines column based selection mode, options are "single" and "multiple".</td>
                                </tr>
                                <tr>
                                    <td>colSpan</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Number of columns to span for grouping.</td>
                                </tr>
                                <tr>
                                    <td>rowSpan</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Number of rows to span for grouping.</td>
                                </tr>
                                <tr>
                                    <td>editor</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function to provide the cell editor input.</td>
                                </tr>
                                <tr>
                                    <td>cellEditValidator</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Validator function to validate the cell input value.</td>
                                </tr>
                                <tr>
                                    <td>cellEditValidatorEvent</td>
                                    <td>string</td>
                                    <td>click</td>
                                    <td>Event to trigger the validation, possible values are "click" and "blur".</td>
                                </tr>
                                <tr>
                                    <td>onBeforeCellEditShow</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke before the cell editor is shown.</td>
                                </tr>
                                <tr>
                                    <td>onBeforeCellEditHide</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke before the cell editor is hidden.</td>
                                </tr>
                                <tr>
                                    <td>onCellEditInit</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when cell edit is initiated.</td>
                                </tr>
                                <tr>
                                    <td>onCellEditComplete</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to execute when editor is submitted.</td>
                                </tr>
                                <tr>
                                    <td>onCellEditCancel</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to execute when editor is cancelled.</td>
                                </tr>
                                <tr>
                                    <td>rowReorder</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether this column displays an icon to reorder the rows.</td>
                                </tr>
                                <tr>
                                    <td>rowReorderIcon</td>
                                    <td>string</td>
                                    <td>pi pi-bars</td>
                                    <td>Icon of the drag handle to reorder rows.</td>
                                </tr>
                                <tr>
                                    <td>rowEditor</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Displays icons to edit row.</td>
                                </tr>
                                <tr>
                                    <td>exportable</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Defines whether the column is exported or not.</td>
                                </tr>
                                <tr>
                                    <td>reorderable</td>
                                    <td>boolean</td>
                                    <td>null</td>
                                    <td>Used to defined reorderableColumns per column when reorderableColumns of table is enabled, defaults to value of reorderableColumns.</td>
                                </tr>
                                <tr>
                                    <td>resizeable</td>
                                    <td>boolean</td>
                                    <td>null</td>
                                    <td>Used to defined resizeableColumns per column when resizeableColumns of table is enabled, defaults to value of resizeableColumns.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Table Layout</h5>
                    <p>Default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents
                        set <i>autoLayout</i> property to true. Note that Scrollable and/or Resizable tables do not support auto layout due to technical limitations.
                    </p>

                    <h5>Templates</h5>
                    <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where current row data and column properties are passed to the body template.
                        On the other hand, <i>header</i> and <i>footer</i> properties of a column are used to define the content of these sections by accepting either simple string values or JSX for advanced content. Similarly DataTable itself
                        also provides <i>header</i> and <i>footer</i> properties for the main header and footer of the table.</p>

<CodeHighlight lang="js">
{`
export const DataTableTemplatingDemo = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`images/product/\${rowData.image}\`} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readonly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = \`In total there are \${products ? products.length : 0} products.\`;

    return (
        <DataTable value={products} header={header} footer={footer}>
            <Column field="name" header="Name"></Column>
            <Column header="Image" body={imageBodyTemplate}></Column>
            <Column field="price" header="Price" body={priceBodyTemplate}></Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
            <Column header="Status" body={statusBodyTemplate}></Column>
        </DataTable>
    );

}
`}
</CodeHighlight>

                    <h5>Size</h5>
                    <p>In addition to the regular table, a smal and a large version are available with different paddings.</p>

<CodeHighlight lang="js">
{`
<DataTable value={products} header="Small Table" size="small">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<DataTable value={products} header="Small Table" size="normal">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<DataTable value={products} header="Small Table" size="large">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Column Group</h5>
                    <p>Columns can be grouped at header and footer sections by defining a ColumnGroup component as the <i>headerColumnGroup</i> and <i>footerColumnGroup</i> properties.</p>

<CodeHighlight lang="js">
    {`
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

export const DataTableColGroupDemo = () => {

    const sales = [
        {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
        {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
        {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
        {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
        {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
        {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
        {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
        {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
        {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
        {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
    ];

    const lastYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.lastYearSale}%\`;
    }

    const thisYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.thisYearSale}%\`;
    }

    const lastYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.lastYearProfit)}\`;
    }

    const thisYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.thisYearProfit)}\`;
    }

    const formatCurrency = (value) =>  {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const lastYearTotal = () => {
        let total = 0;
        for(let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    }

    const thisYearTotal = () => {
        let total = 0;
        for(let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    }

    let headerGroup = <ColumnGroup>
                        <Row>
                            <Column header="Product" rowSpan={3} />
                            <Column header="Sale Rate" colSpan={4} />
                        </Row>
                        <Row>
                            <Column header="Sales" colSpan={2} />
                            <Column header="Profits" colSpan={2} />
                        </Row>
                        <Row>
                            <Column header="Last Year" sortable field="lastYearSale"/>
                            <Column header="This Year" sortable field="thisYearSale"/>
                            <Column header="Last Year" sortable field="lastYearProfit"/>
                            <Column header="This Year" sortable field="thisYearProfit"/>
                        </Row>
                    </ColumnGroup>;

    let footerGroup = <ColumnGroup>
                        <Row>
                            <Column footer="Totals:" colSpan={3} footerStyle={{textAlign: 'right'}}/>
                            <Column footer={lastYearTotal} />
                            <Column footer={thisYearTotal} />
                        </Row>
                        </ColumnGroup>;
    return (
        <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
            <Column field="product" />
            <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
            <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
            <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
            <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <p>When using sorting with column groups, define sort properties like sortable at columns inside column groups not at the direct children of DataTable component.</p>

                    <h5>Pagination</h5>
                    <p>Pagination is enabled by setting <i>paginator</i> property to true, <i>rows</i> property defines the number of rows per page and optionally <i>pageLinks</i> specify the the number of page links to display.
                        See <Link href="/paginator">paginator</Link> component for more information about further customization options such as <i>paginator template</i>.</p>

                    <p>Pagination can either be used in <b>Controlled</b> or <b>Uncontrolled</b> manner. In controlled mode, <i>first</i> and <i>onPage</i> properties need to be defined to control the paginator state.</p>
<CodeHighlight lang="js">
{`
export const DataTablePaginatorDemo = () => {

    const [products, setProducts] = useState([]);
    const [first, setFirst] = useState(0);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <DataTable value={products} paginator rows={10} first={first} onPage={(e) => setFirst(e.first)}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <p>In uncontrolled mode, only <i>paginator</i> and <i>rows</i> need to be enabled. Index of the first record can be still be provided using the <i>first</i> property in uncontrolled mode however
                        it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the paginator state, prefer to use the component as controlled.</p>
<CodeHighlight lang="js">
{`
export const DataTablePaginatorDemo = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <DataTable value={products} paginator rows={10}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <p>Elements of the paginator can be customized using the <i>paginatorTemplate</i> by the DataTable. Refer to the template section of the <Link href="/paginator"> paginator documentation</Link> for further options.</p>
<CodeHighlight>
{`
<DataTable value={products} paginator rows={10} first={start}
    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Sorting</h5>
                    <p>Enabling <i>sortable</i> property at column component would be enough to make a column sortable. The property to use when sorting is <i>field</i> by default and can be customized using <i>sortField</i>.</p>
<CodeHighlight>
{`
<Column field="name" header="Name" sortable/>
`}
</CodeHighlight>

                    <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<CodeHighlight>
{`
<DataTable value={products} sortMode="multiple">
`}
</CodeHighlight>


                    <p>In case you'd like to display the table as sorted per a single column by default on mount, use <i>sortField</i> and <i>sortOrder</i> properties in <b>Controlled</b> or <b>Uncontrolled</b> manner.
                        In controlled mode, <i>sortField</i>, <i>sortOrder</i> and <i>onSort</i> properties need to be defined to control the sorting state.</p>

<CodeHighlight>
{`
const onSort = (e) => {
    setSortField(e.sortField);
    setSortOrder(e.sortOrder);
}
`}
</CodeHighlight>
<CodeHighlight>
    {`
<DataTable value={products} sortField={sortField} sortOrder={sortOrder} onSort={onSort}>
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
</DataTable>
`}
</CodeHighlight>

                    <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects instead.</p>
<CodeHighlight>
{`
<DataTable value={products} multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)}>
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
let multiSortMeta = [];
multiSortMeta.push({field: 'code', order: 1});
multiSortMeta.push({field: 'name', order: -1});
`}
</CodeHighlight>

                    <p>In uncontrolled mode, no additional properties need to be enabled. Initial sort field can be still be provided using the <i>sortField</i> property in uncontrolled mode however
                        it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the sorting state, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<DataTable value={products} sortField="name" sortOrder={1}>
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
</DataTable>
`}
</CodeHighlight>

                    <p>To customize sorting algorithm, define a sortFunction that sorts the list.</p>
<CodeHighlight>
{`
<DataTable value={products} >
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable sortFunction={mysort}></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const mysort = (event) => {
    //event.field = Field to sort
    //event.order = Sort order
}
`}
</CodeHighlight>

                    <p>Getting access to the sorted data is provided by the <i>onValueChange</i> callback.</p>
<CodeHighlight>
{`
<DataTable value={products} onValueChange={sortedData => console.log(sortedData)}>
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Filtering</h5>
                    <p>DataTable has advanced filtering capabilities that does the heavy lifting while providing flexible customization. Filtering has two layout alternatives defined with the <i>filterDisplay</i>.
                        In <b>row</b> setting, filter elements are displayed in a separate row at the header section whereas
                        in <i>menu</i> mode filter elements are displayed inside an overlay. The template filter gets a <i>value</i>, <i>filterCallback</i> and <i>filterApplyCallback</i>,
                        use value to populate the filter with your own form components and call the filterCallback with the event of your choice like onInput, onChange, onClick.
                        FilterCallback adds new values in hidden 'filters' state in DataTable and when filterApplyCallback is called, data is filtered. The filterApplyCallback method can be used directly if you want to filter by value directly.</p>
<CodeHighlight lang="js">
{`
const DataTableFilterDemo = () => {
    const [customers, setCustomers] = useState(null);
    const filters = {
        'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    }

    return (
        <DataTable value={customers} filters={filters}>
            <Column field="name" header="Name" filter></Column>
        </DataTable>
    )
}
`}
</CodeHighlight>

                    <h6>Filter Row</h6>
                    <p>Input field is displayed in a separate header row.</p>
<CodeHighlight>
{`
<DataTable value={customers} filters={filters} filterDisplay="row">
    <Column field="name" header="Name" filter></Column>
</DataTable>
`}
</CodeHighlight>

                    <h6>Filter Menu</h6>
                    <p>Input field is displayed in an overlay.</p>
<CodeHighlight>
{`
<DataTable value={customers} filters={filters} filterDisplay="menu">
    <Column field="name" header="Name" filter></Column>
</DataTable>
`}
</CodeHighlight>

                    <h6>Multiple Constraints</h6>
                    <p>In "menu" display, it is possible to add more constraints to a same filter. In this case, metadata could be an array of constraints. The operator
                        defines whether all or any of the constraints should match.</p>

<CodeHighlight lang="js">
{`
const filters = {
    'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
}
`}
</CodeHighlight>

                    <h6>Populate Filters</h6>
                    <p>Providing a filters with predefined values would be enough to display the table as filtered by default. This approach can also be used to clear filters progammatically.</p>
<CodeHighlight lang="js">
{`
const filters = {
    'name': {operator: FilterOperator.AND, constraints: [
        {value: 'Prime', matchMode: FilterMatchMode.STARTS_WITH},
        {value: 'React', matchMode: FilterMatchMode.CONTAINS}
    ]}
}
`}
</CodeHighlight>

                    <h6>Match Modes</h6>
                    <p>Depending on the <i>dataType</i> of the column, suitable match modes are displayed. Default configuration is available at <i>PrimeReact.filterMatchModeOptions</i> which can be used to customize the modes globally for all tables.</p>
<CodeHighlight lang="js">
{`
PrimeReact.filterMatchModeOptions = {
    text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS
    ],
    numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
    ],
    date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER
    ]
}
`}
</CodeHighlight>

                    <p>If you need to override the match modes for a particular column use the <i>filterMatchModeOptions</i> property and provide an array with label-value pairs.</p>
<CodeHighlight lang="js">
{`
const matchModes = [
    {label: 'Starts With', value: FilterMatchMode.STARTS_WITH},
    {label: 'Contains', value: FilterMatchMode.CONTAINS},
];
...
<Column field="name" header="Name" filterMatchModeOptions={matchModes} />
`}
</CodeHighlight>

                    <h6>Custom Filter</h6>
                    <p>Custom filtering is implemented using the <i>FilterService</i>, first register your filter and add it to your <i>filterMatchModeOptions</i>.</p>
<CodeHighlight lang="js">
{`
import {FilterService} from 'primereact/api';

FilterService.register('myfilter', (a,b) => a === b);
...

const matchModes = [
    {label: 'My Filter', value: "myfilter"},
    {label: 'Starts With', value: FilterMatchMode.STARTS_WITH},
    {label: 'Contains', value: FilterMatchMode.CONTAINS},
]
`}
</CodeHighlight>

                    <p>By default, input fields are used as filter elements and this can be customized using the <i>filterElement</i> property of the Column that calls the filter function of the table instance by passing the value, field and the match mode.</p>
<CodeHighlight lang="js">
{`
export const DataTableCustomFilterDemo = () => {

    const [products, setProducts] = useState([]);
    const filters = {
        'inventoryStatus': { value: null, matchMode: FilterMatchMode.EQUALS }
    };

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    } ,[])

    const onStatusChange = (e, options) => {
        options.filterCallback(event.value);
    }

    let inventoryStatuses = [
            {label: 'All Status', value: null},
            {label: 'INSTOCK', value: 'INSTOCK'},
            {label: 'LOWSTOCK', value: 'LOWSTOCK'},
            {label: 'OUTOFSTOCK', value: 'OUTOFSTOCK'}
        ];

    let statusFilter = (options) => <Dropdown style={{width: '100%'}} className="ui-column-filter"
        value={options.value} options={inventoryStatuses} onChange={(e) => onStatusChange(e, options)}/>

    return (
        <DataTable value={products} filters={filters}>
            <Column field="code" header="Code" filter></Column>
            <Column field="name" header="Name" filter></Column>
            <Column field="category" header="Category" filter></Column>
            <Column field="inventoryStatus" header="Status" filter filterElement="statusFilter"></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <p>In case you'd like to display the table as filtered by default on mount, use <i>filters</i> property in <b>Controlled</b> or <b>Uncontrolled</b> manner.
                        In controlled mode, <i>filters</i> and <i>onFilter</i> properties need to be defined to control the filtering state.</p>

<CodeHighlight lang="js">
{`
export const DataTableDefaultFilteredDemo = () => {

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        'inventoryStatus': {
            value: 'INSTOCK'
        });

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    } ,[])

    return (
        <DataTable value={products} filters={filters} onFilter={(e) => setFilters(e.filters)}>
            <Column field="code" header="Code" filter></Column>
            <Column field="name" header="Name" filter></Column>
            <Column field="category" header="Category" filter></Column>
            <Column field="inventoryStatus" header="Status" filter></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <p>In uncontrolled filtering, no additional properties need to be enabled. Initial filtering can be still be provided using the <i>filters</i> property in uncontrolled mode however
                        it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the filtering state, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<DataTable value={products}>
    <Column field="code" header="Code" filter></Column>
    <Column field="name" header="Name" filter></Column>
    <Column field="category" header="Category" filter></Column>
    <Column field="inventoryStatus" header="Status" filter></Column>
</DataTable>
`}
</CodeHighlight>


                    <p>Getting access to the filtered data is provided by the <i>onValueChange</i> callback.</p>
<CodeHighlight>
{`
<DataTable value={products} onValueChange={filteredData => console.log(filteredData)}>
    <Column field="code" header="Code" filter></Column>
    <Column field="name" header="Name" filter></Column>
    <Column field="category" header="Category" filter></Column>
    <Column field="inventoryStatus" header="Status" filter></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Selection</h5>
                    <p>DataTable provides single and multiple selection modes on click of a row or cell. Selected rows are bound to the <i>selection</i> property for reading and updated using <i>onSelectionChange</i> callback.
                        Alternatively column based selection can be done using radio buttons or checkboxes using <i>selectionMode</i> of a particular column. In addition <i>onRowSelect</i>-<i>onRowUnselect</i> / <i>onCellSelect</i>-<i>onCellUnselect</i> events are provided as optional callbacks.</p>

                    <p>In single mode, selection binding is an object reference.</p>

<CodeHighlight lang="js">
{`
export const DataTableSelectionDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <>
            <DataTable value={products} selectionMode="single"
                selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>

            <DataTable value={products} selectionMode="single" cellSelection
                selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>
        </>
    );
}
`}
</CodeHighlight>

                    <p>In multiple mode, selection binding should be an array and multiple items can either be selected using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default.
                        On touch enabled devices metaKeySelection is turned off automatically. Also, ShiftKey is supported for range selection. In addition, the rectangular selection can be dragged over the desired rows or cells thanks to the dragSelection property. In this way, a range of rows or cells can be selected.</p>

<CodeHighlight lang="js">
{`
export const DataTableSelectionDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const [selectedProducts4, setSelectedProducts4] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    return (
        <>
            <DataTable value={products} selectionMode="multiple"
                selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>

            <DataTable value={products} selectionMode="multiple"
                selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>

            <DataTable value={products} selectionMode="multiple" cellSelection
                selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>

            <DataTable value={products} selectionMode="multiple" cellSelection dragSelection
                selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>
        </>
    );

}
`}
</CodeHighlight>

                    <p>If you prefer a radiobutton or a checkbox instead of a row click, use the <i>selectionMode</i> of a column instead.
                        Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
                    <p>Tip: Use <i>showSelectionElement</i> function in case you need to hide selection element for a particular row.</p>
<CodeHighlight>
{`
<h5>Row and Checkbox Selection</h5>
<DataTable value={products} selection={selectedProducts} onSelectionChange={e => setSelectedProducts(e.value))}>
    <Column selectionMode="multiple" />
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="inventoryStatus" header="Status"></Column>
</DataTable>

<h5>Checkbox-Only Selection</h5>
<DataTable value={products} selection={selectedProducts} selectionMode="checkbox" onSelectionChange={e => setSelectedProducts(e.value))}>
    <Column selectionMode="multiple" />
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="inventoryStatus" header="Status"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Cell Editing</h5>
                    <p>Incell editing feature provides a way to quickly edit data inside the table. A cell editor is defined using the <i>editor</i> property
                        that refers to a function to return an input element for the editing.</p>

<CodeHighlight>
{`
<DataTable value={products}>
    <Column field="code" header="Code" editor={codeEditor}></Column>
    <Column field="name" header="Name" editor={nameEditor}></Column>
    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={statusEditor}></Column>
    <Column field="price" header="Price" editor={priceEditor}></Column>
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const onEditorValueChange = (props, value) => {
    let updatedProducts = [...props.value];
    updatedProducts[props.rowIndex][props.field] = value;
    setProducts(updatedProducts);
}

const inputTextEditor = (props, field) => {
    return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(props, e.target.value)} />;
}

const codeEditor = (props) => {
    return inputTextEditor(props, 'code');
}

const nameEditor = (props) => {
    return inputTextEditor(props, 'name');
}

const priceEditor = (props) => {
    return inputTextEditor(props, 'price');
}

const statusEditor = (props) => {
    return (
        <Dropdown value={props.rowData['inventoryStatus']} options={statuses} optionLabel="label" optionValue="value"
            onChange={(e) => onEditorValueChange(props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
            itemTemplate={(option) => {
                return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
            }} />
    );
}
`}
</CodeHighlight>

                    <p>Clicking outside the cell or hitting enter key closes the cell, however this may not be desirable if the input is invalid. In order
                        to decide whether to keep the cell open or not, provide a <i>cellEditValidator</i> function that validates the value. Optionally <i>onCellEditComplete</i> and <i>onCellEditCancel</i>
                        events are available at the column component to provide callbacks whenever an editor is submitted or cancelled.</p>

<CodeHighlight>
{`
<DataTable value={products}>
    <Column field="code" header="Code" editor={codeEditor} cellEditValidator={requiredValidator} />
    <Column field="name" header="Name" editor={nameEditor} />
    <Column field="price" header="Price" editor={priceDateEditor} />
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
    {`
const requiredValidator = (e) => {
    let props = e.columnProps;
    let value = props.rowData[props.field];
    return value && value.length > 0;
}
`}
</CodeHighlight>

                    <h5>Row Editing</h5>
                    <p>Row editing toggles the visibility of the all editors in the row at once and provides additional options to save and cancel editing.</p>

<CodeHighlight>
{`
<DataTable value={products} editMode="row" rowEditValidator={onRowEditValidator}>
    <Column field="code" header="Code" />
    <Column field="name" header="Name" />
    <Column field="inventoryStatuses" header="Status" editor={statusEditor} />
    <Column rowEditor />
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
    {`
const onRowEditValidator = (rowData) => {
    let value = rowData['inventoryStatuses'];
    return value.length > 0;
}
`}
</CodeHighlight>

                    <h5>ContextMenu</h5>
                    <p>DataTable provides exclusive integration with ContextMenu.  <i>contextMenuSelection</i> and <i>onContextMenuSelectionChange</i> are used to get a reference of the the selected row
                        and <i>onContextMenu</i> callback is utilized to display a particular context menu.</p>
<CodeHighlight lang="js">
{`
export const DataTableContextMenuDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);

    const menuModel = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
    ];

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    const viewProduct = (product) => {
        toast.current.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    const deleteProduct = (product) => {
        let products = [...products];
        products = products.filter((p) => p.id !== product.id);
        toast.current.show({severity: 'info', summary: 'Product Deleted', detail: product.name});
        setProducts(products);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>

            <DataTable value={products} contextMenuSelection={selectedProduct}
                onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
                onContextMenu={e => cm.current.show(e.originalEvent)}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} />
            </DataTable>
        </div>
    );
}
`}
</CodeHighlight>

                    <h5>Expandable Rows</h5>
                    <p>Row expansion allows displaying detailed content for a particular row. To use this feature, add an <i>expander</i> column, define a <i>rowExpansionTemplate</i> as a function to return the expanded content and bind to
                        <i>expandedRows</i> property to read the expanded rows along with the <i>onRowToggle</i> property to update it. <i>expandedRows</i> property either accepts an array of row data or a map whose key is the dataKey of the record.
                        Using expandable rows with a dataKey is suggested for better performance.</p>

<CodeHighlight lang="js">
    {`
export const DataTableRowExpansionDemo = () => {

    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsWithOrdersSmall().then(data => setProducts(data));
    }, [])

    const onRowExpand = (event) => {
        toast.current.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    const onRowCollapse = (event) => {
        toast.current.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    const expandAll = () => {
        let _expandedRows = {};
        products.forEach(p => expandedRows[\`\${p.id}\`] = true);

        setExpandedRows(_expandedRows);
    }

    const collapseAll = () => {
        setExpandedRows(null);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    }

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={\`order-badge order-\${rowData.status.toLowerCase()}\`}>{rowData.status}</span>;
    }

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`images/product/\${rowData.image}\`} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readonly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const rowExpansionTemplate = (data) => {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    const header = (
        <div className="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        </div>
    );

    return (
        <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            onRowExpand={onRowExpand} onRowCollapse={onRowCollapse}
            rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
            <Column expander style={{ width: '3em' }} />
            <Column field="name" header="Name" sortable />
            <Column header="Image" body={imageBodyTemplate} />
            <Column field="price" header="Price" sortable body={priceBodyTemplate} />
            <Column field="category" header="Category" sortable />
            <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
            <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <h5>Column Resize</h5>
                    <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                        In "expand" mode, table width also changes along with the column width. <i>onColumnResizeEnd</i> is a callback that passes the resized column header as a parameter.</p>
<CodeHighlight>
{`
<DataTable value={products} resizableColumns>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

                    <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<CodeHighlight>
{`
<DataTable value={products} resizableColumns>
    <Column field="code" header="Code" style={{width:'20%'}}></Column>
    <Column field="name" header="Name" style={{width:'40%'}}></Column>
    <Column field="category" header="Category" style={{width:'20%'}}></Column>
    <Column field="quantity" header="Quantity" style={{width:'30%'}}></Column>
</DataTable>
`}
</CodeHighlight>

                    <p>You can choose which columns are <i>resizeable</i> per column.</p>
<CodeHighlight>
{`
<DataTable value={products} resizableColumns>
    <Column field="code" header="Code" style={{width:'20%'}}></Column>
    <Column field="name" header="Name" style={{width:'40%'}}></Column>
    <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false} />
    <Column field="quantity" header="Quantity" style={{width:'30%'}}></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Column Reorder</h5>
                    <p>Columns can be reordered using drag drop by setting the <i>reorderableColumns</i> to true. <i>onColReorder</i> is a callback that is invoked when a column is reordered.
                        DataTable keeps the column order state internally using keys that identifies a column using the <i>field</i> property. If the column has no field, use columnKey instead.</p>

<CodeHighlight>
{`
<DataTable value={products} reorderableColumns>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Row Reorder</h5>
                    <p>Data can be reordered using drag drop by adding a reorder column that will display an icon as a drag handle. <i>onRowReorder</i> is a callback that is invoked when a column is reordered, use
                        this callback to update the new order. The reorder icon can be customized using <i>rowReorderIcon</i> of the column component.</p>
                    <p>Tip: Use <i>showRowReorderElement</i> function in case you need to hide selection element for a particular row.</p>

<CodeHighlight>
{`
<DataTable value={products} reorderableColumns onRowReorder={(e) => setProducts(e.value)}>
    <Column rowReorder style={{width: '2em'}} />
    <Column columnKey="code" field="code" header="Code"></Column>
    <Column columnKey="name" field="name" header="Name"></Column>
    <Column columnKey="category" field="category" header="Category"></Column>
    <Column columnKey="quantity" field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Data Export</h5>
                    <p>DataTable can export its data in CSV format using exportCSV() method.</p>
<CodeHighlight lang="js">
{`
export const DataTableExportDemo = () => {

    const [products, setProducts] = useState([]);
    const dt = useRef(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    const export = () => {
        dt.exportCSV();
    }

    const header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={export}></Button></div>;

    return (
        <DataTable value={products} header={header} ref={dt}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <h5>RowGrouping</h5>
                    <p>RowGrouping has two modes defined be the <i>rowGroupMode</i> property, in "subheader" option rows are grouped by a groupRowsBy and in "rowspan" mode grouping
                        is done based on the sort field. In both cases, data should be sorted initally using the properties such as sortField and sortOrder. In "subheader" mode,
                        <i>rowGroupHeaderTemplate</i> property should be defined to provide the content of the header and optionally <i>rowGroupFooterTemplate</i> is available to provide a footer
                        for the group.</p>

<CodeHighlight lang="js">
{`
const DataTableRowGroupDemo = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    const headerTemplate = (data) => {
        return data.name;
    }

    const footerTemplate = (data, index) => {
        return ([
                    <td key={data.brand + '_footerTotalLabel'} colSpan="3" style={{textAlign: 'right'}}>Total Price</td>,
                    <td key={data.brand + '_footerTotalValue'}>{calculateGroupTotal(data.name)}</td>
                ]
        );
    }

    const calculateGroupTotal = (name) => {
        let total = 0;

        if (products) {
            for (let product of products) {
                if (product.name === name) {
                    total += product.price;
                }
            }
        }

        return total;
    }

    return (
        <div>
            <DataTable header="SubHeader" value={products} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupRowsBy="name"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price"></Column>
            </DataTable>

            <DataTable header="RowSpan" value={products} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupRowsBy="name"
                style={{marginTop:'30px'}}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price"></Column>
            </DataTable>
        </div>
    );

}
`}
</CodeHighlight>

                    <h5>Scrolling</h5>
                    <p>DataTable supports both horizontal and vertical scrolling as well as frozen columns and rows. Scrollable DataTable is enabled using <i>scrollable</i> property and <i>scrollHeight</i> to define the viewport height.</p>
<CodeHighlight>
{`
<DataTable value={products} scrollable scrollHeight="400px">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h5>Column Widths of a Scrollable Table</h5>
                    <p>Scrollable table uses flex layout so there are a couple of rules to consider when adjusting the widths of columns.</p>
                    <ul>
                        <li>Use <i>min-width</i> in vertical scrolling only so that when there is enough space columns may grow and for smaller screens a horizontal scrollbar is displayed to provide responsive design.</li>
                        <li>When horizontal scrolling is enabled, prefer <i>width</i> instead of <i>min-width</i>.</li>
                        <li>In vertical scrolling only, use <i>flex</i> to disable grow and shrink while defining a initial width. When horizontal scrolling is enabled, this is not required as columns do not grow or shrink in horizontal scrolling.</li>
                    </ul>

<CodeHighlight>
{`
<Column field="code" header="Code" style={{ flex: '0 0 4rem' }}></Column>
`}
</CodeHighlight>

                    <h6>Flex Scroll</h6>
                    <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set scrollHeight option as flex. In example below, table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as maximizing.</p>

<CodeHighlight>
{`
<Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
<Dialog header="Flex Scroll" visible={dialogVisible} onHide={() => setDialogVisible(false)} style={{ width: '50vw' }} maximizable modal contentStyle={{ height: '300px' }}>
    <DataTable value={products} scrollable scrollHeight="flex">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</Dialog>
`}
</CodeHighlight>

                    <h6>Full Page Scroll</h6>
                    <p>FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size. See the <router-link to="/datatable/flexscroll">full page</router-link> demo for an example.</p>
<CodeHighlight>
{`
<div style={{ height: 'calc(100vh - 143px)' }}>
    <DataTable value={products} scrollable scrollHeight="flex">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</div>
`}
</CodeHighlight>

                    <h6>Horizontal Scrolling</h6>
                    <p>For horizontal scrolling, it is required to set <i>scrollDirection</i> to "horizontal" and give fixed widths to columns.</p>
<CodeHighlight>
{`
<DataTable value={products} scrollable scrollDirection="horizontal">
    <Column field="code" header="Code" style={{ width: '200px' }}></Column>
    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
    <Column field="category" header="Category" style={{ width: '200px' }}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '200px' }}></Column>
    <Column field="code" header="Code" style={{ width: '200px' }}></Column>
    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
    <Column field="category" header="Category" style={{ width: '200px' }}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '200px' }}></Column>
</DataTable>
`}
</CodeHighlight>

                    <h6>Horizontal and Vertical Scrolling</h6>
                    <p>Set <i>scrollDirection</i> to "both" and give fixed widths to columns to scroll both ways.</p>
<CodeHighlight>
{`
<DataTable value={products} scrollable scrollDirection="both" scrollHeight="400px">
    <Column field="code" header="Code" style={{ width: '200px' }}></Column>
    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
    <Column field="category" header="Category" style={{ width: '200px' }}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '200px' }}></Column>
    <Column field="code" header="Code" style={{ width: '200px' }}></Column>
    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
    <Column field="category" header="Category" style={{ width: '200px' }}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '200px' }}></Column>
</DataTable>
`}
</CodeHighlight>

                    <h6>Frozen Rows</h6>
                    <p>Frozen rows are used to fix certain rows while scrolling, this data is defined with the <i>frozenValue</i> property.</p>

<CodeHighlight>
{`
<DataTable value={customers} frozenValue={lockedCustomers} scrollable scrollHeight="400px">
    <Column field="name" header="Name"></Column>
    <Column field="country.name" header="Country"></Column>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="status" header="Status"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h6>Frozen Columns</h6>
                    <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. In addition <i>alignFrozen</i> is available to define whether the column should
                        be fixed on the left or right.</p>

<CodeHighlight>
{`
<DataTable value={customers} scrollable scrollHeight="400px" scrollDirection="both">
    <Column field="name" header="Name" style={{ width:'200px' }} frozen></Column>
    <Column field="id" header="Id" style={{ width:'100px' }}  frozen></Column>
    <Column field="name" header="Name" style={{ width:'200px' }} </Column>
    <Column field="country.name" header="Country" style={{ width:'200px' }} ></Column>
    <Column field="date" header="Date" style={{ width:'200px' }} ></Column>
    <Column field="company" header="Company" style={{ width:'200px' }} ></Column>
    <Column field="status" header="Status" style={{ width:'200px' }} ></Column>
    <Column field="activity" header="Activity" style={{ width:'200px' }} ></Column>
    <Column field="representative.name" header="Representative" style={{ width:'200px' }} ></Column>
    <Column field="balance" header="Balance" style={{ width:'200px' }} frozen alignFrozen="right"></Column>
</DataTable>
`}
</CodeHighlight>

                    <h6>Scrollable RowGroup</h6>
                    <p>Row groups with subheaders have exclusive support for filtering, when the table scrolls the subheaders stay fixed as long as their
                        data are still displayed. No additional configuration is required to enable this feature. View the <router-link to="/datatable/rowgroup">Row Group</router-link> demo for an example.</p>

                    <h5>Lazy Loading</h5>
                    <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                        lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                        there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                    <p>In lazy mode, pagination, sorting and filtering must be used in controlled mode in addition to enabling <i>lazy</i> property. Here is a sample paging implementation with in memory data.</p>
<CodeHighlight lang="js">
{`
export const DataTableLazyDemo = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [dataSource, setDataSource] = useState([]);

    useEffect((() => {
        productService = new ProductService();
        productService.getProducts().then(data => {
            setDataSource(data);
            setTotalRecords(data.length);
            setProducts(datasource.slice(0, rows));
            setLoading(false);
        });
    }, []);

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + rows;

            setFirst(startIndex);
            setProducts(datasource.slice(startIndex, endIndex));
            setLoading(false);
        }, 250);
    }

    return (
        <DataTable value={products} paginator rows={rows} totalRecords={totalRecords}
            lazy first={first} onPage={onPage} loading={loading}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    )
}
`}
</CodeHighlight>

                    <h5>TableState</h5>
                    <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again,
                        table would render the data using its last settings. Enabling state is easy as defining a unique <i>stateKey</i>, the storage to keep the state is defined with the <i>stateStorage</i> property that accepts session for sessionStorage and local for localStorage.
                        Also, a special storage implementation can be made with <i>customSaveState</i> and <i>customRestoreState</i> methods using <i>stateStorage="custom"</i>.
                        Currently following features are supported by TableState; paging, sorting, filtering, column resizing, column reordering, row expansion and row selection.</p>

<CodeHighlight lang="js">
{`
export const DataTableStateDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <DataTable value={products} selectionMode="multiple" resizableColumns
                    selection={selectedProducts} onSelectionChange={e => setSelectedProducts(e.value)}
                    paginator rows={10} stateKey="tablestatedemo-session">
            <Column field="code" header="Code" sortable filter></Column>
            <Column field="name" header="Name" sortable filter></Column>
            <Column field="category" header="Category" sortable filter></Column>
            <Column field="quantity" header="Quantity" sortable filter></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

                    <h5>Responsive</h5>
                    <p>DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens
                        and second one is defining a breakpoint to display the cells of a row as stacked. Scrollable tables use the scroll layout approach internally and do not require additional configuration.</p>

                    <h6>Scroll Layout</h6>
                    <p>Set <i>responsiveLayout</i> to scroll to enabled this layout. Note that, when scroll mode is enabled table-layout automatically switches to auto from fixed
                        as a result table widths are likely to differ and resizable columns are not supported. Read more about <a href="https://www.w3schools.com/cssref/pr_tab_table-layout.asp">table-layout</a> for more details.</p>

<CodeHighlight>
{`
<DataTable value={products} responsiveLayout="scroll">

</DataTable>
`}
</CodeHighlight>

                    <h6>Stack Layout</h6>
                    <p>In stack layout, columns are displayed as stacked after a certain breakpoint. Default is '960px'.</p>
<CodeHighlight>
{`
<DataTable value={products} responsiveLayout="stack" breakpoint="640px">

</DataTable>
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of objects to display.</td>
                                </tr>
                                <tr>
                                    <td>header</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Header content of the table.</td>
                                </tr>
                                <tr>
                                    <td>footer</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Footer content of the table.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                                <tr>
                                    <td>tableStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the table element.</td>
                                </tr>
                                <tr>
                                    <td>tableClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the table element.</td>
                                </tr>
                                <tr>
                                    <td>paginator</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When specified as true, enables the pagination.</td>
                                </tr>
                                <tr>
                                    <td>paginatorPosition</td>
                                    <td>string</td>
                                    <td>bottom</td>
                                    <td>Position of the paginator, options are "top","bottom" or "both".</td>
                                </tr>
                                <tr>
                                    <td>alwaysShowPaginator</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to show it even there is only one page.</td>
                                </tr>
                                <tr>
                                    <td>paginatorClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the paginator element.</td>
                                </tr>
                                <tr>
                                    <td>paginatorTemplate</td>
                                    <td>string|object</td>
                                    <td>FirstPageLink PrevPageLink PageLinks <br /> NextPageLink LastPageLink RowsPerPageDropdown</td>
                                    <td>Template of the paginator. For details, refer to the template section of the <Link href="/paginator">paginator documentation</Link> for further options.</td>
                                </tr>
                                <tr>
                                    <td>paginatorLeft</td>
                                    <td>Element</td>
                                    <td>null</td>
                                    <td>Content for the left side of the paginator.</td>
                                </tr>
                                <tr>
                                    <td>paginatorRight</td>
                                    <td>Element</td>
                                    <td>null</td>
                                    <td>Content for the right side of the paginator.</td>
                                </tr>
                                <tr>
                                    <td>pageLinkSize</td>
                                    <td>number</td>
                                    <td>5</td>
                                    <td>Number of page links to display.</td>
                                </tr>
                                <tr>
                                    <td>rowsPerPageOptions</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>Array of integer values to display inside rows per page dropdown.</td>
                                </tr>
                                <tr>
                                    <td>currentPageReportTemplate</td>
                                    <td>string</td>
                                    <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                                    <td>Template of the current page report element. Available placeholders are
                                        &#123;currentPage&#125;, &#123;totalPages&#125;, &#123;rows&#125;, &#123;first&#125;, &#123;last&#125; and &#123;totalRecords&#125;
                                    </td>
                                </tr>
                                <tr>
                                    <td>paginatorDropdownAppendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>first</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Index of the first row to be displayed.</td>
                                </tr>
                                <tr>
                                    <td>rows</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Number of rows to display per page.</td>
                                </tr>
                                <tr>
                                    <td>totalRecords</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Number of total records, defaults to length of value when not defined.</td>
                                </tr>
                                <tr>
                                    <td>lazy</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines if data is loaded and interacted with in lazy manner.</td>
                                </tr>
                                <tr>
                                    <td>sortField</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the field to sort data by default.</td>
                                </tr>
                                <tr>
                                    <td>sortOrder</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Order to sort the data by default.</td>
                                </tr>
                                <tr>
                                    <td>multiSortMeta</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>
                                </tr>
                                <tr>
                                    <td>sortMode</td>
                                    <td>string</td>
                                    <td>single</td>
                                    <td>Defines whether sorting works on single column or on multiple columns.</td>
                                </tr>
                                <tr>
                                    <td>defaultSortOrder</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Default sort order of an unsorted column.</td>
                                </tr>
                                <tr>
                                    <td>removableSort</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, columns can have an un-sorted state.</td>
                                </tr>
                                <tr>
                                    <td>emptyMessage</td>
                                    <td>any</td>
                                    <td>No records found</td>
                                    <td>Text to display when there is no data.</td>
                                </tr>
                                <tr>
                                    <td>selectionMode</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Specifies the selection mode, valid values are "single", "multiple", "radiobutton" and "checkbox".</td>
                                </tr>
                                <tr>
                                    <td>dragSelection</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, a rectangle that can be dragged can be used to make a range selection.</td>
                                </tr>
                                <tr>
                                    <td>selection</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Selected row in single mode or an array of values in multiple mode.</td>
                                </tr>
                                <tr>
                                    <td>contextMenuSelection</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Selected row in single mode or an array of values in multiple mode.</td>
                                </tr>
                                <tr>
                                    <td>compareSelectionBy</td>
                                    <td>string</td>
                                    <td>deepEquals</td>
                                    <td>Algorithm to define if a row is selected, valid values are "equals" that compares by reference and <br /> "deepEquals" that compares all fields.</td>
                                </tr>
                                <tr>
                                    <td>dataKey</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>A property to uniquely identify a record in data.</td>
                                </tr>
                                <tr>
                                    <td>metaKeySelection</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Defines whether metaKey is requred or not for the selection. <br />
                                        When true metaKey needs to be pressed to select or unselect an item and <br />
                                        when set to false selection of each item
                                        can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                                </tr>
                                <tr>
                                    <td>selectionPageOnly</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.</td>
                                </tr>
                                <tr>
                                    <td>selectionAutoFocus</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When a selectable row is clicked on RadioButton and Checkbox selection, it automatically decides whether to focus on elements such as checkbox or radio.</td>
                                </tr>
                                <tr>
                                    <td>selectOnEdit</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.</td>
                                </tr>
                                <tr>
                                    <td>headerColumnGroup</td>
                                    <td>ColumnGroup</td>
                                    <td>null</td>
                                    <td>ColumnGroup component for header.</td>
                                </tr>
                                <tr>
                                    <td>footerColumnGroup</td>
                                    <td>ColumnGroup</td>
                                    <td>null</td>
                                    <td>ColumnGroup component for footer.</td>
                                </tr>
                                <tr>
                                    <td>rowExpansionTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that receives the row data as the parameter and returns the expanded row content.</td>
                                </tr>
                                <tr>
                                    <td>expandedRows</td>
                                    <td>array|object</td>
                                    <td>null</td>
                                    <td>A collection of rows or a map object row data keys that are expanded.</td>
                                </tr>
                                <tr>
                                    <td>resizableColumns</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, columns can be resized using drag and drop.</td>
                                </tr>
                                <tr>
                                    <td>columnResizeMode</td>
                                    <td>string</td>
                                    <td>fit</td>
                                    <td>Defines whether the overall table width should change on column resize, <br /> valid values are "fit" and "expand".</td>
                                </tr>
                                <tr>
                                    <td>reorderableColumns</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, columns can be reordered using drag and drop.</td>
                                </tr>
                                <tr>
                                    <td>filters</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of FilterMetadata objects to provide external filters.</td>
                                </tr>
                                <tr>
                                    <td>globalFilter</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the global filter to use in filtering.</td>
                                </tr>
                                <tr>
                                    <td>filterDelay</td>
                                    <td>number</td>
                                    <td>300</td>
                                    <td>Delay in milliseconds before filtering the data.</td>
                                </tr>
                                <tr>
                                    <td>filterLocale</td>
                                    <td>string</td>
                                    <td>undefined</td>
                                    <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                                </tr>
                                <tr>
                                    <td>scrollable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When specified, enables horizontal and/or vertical scrolling.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Height of the scroll viewport.</td>
                                </tr>
                                <tr>
                                    <td>scrollDirection</td>
                                    <td>string</td>
                                    <td>vertical|horizontal</td>
                                    <td>Orientation of the scrolling, options are "vertical", "horizontal" and "both".</td>
                                </tr>
                                <tr>
                                    <td>virtualScrollerOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.
                                        <br /><b>Note:</b> Currently only vertical orientation mode is supported.</td>
                                </tr>
                                <tr>
                                    <td>frozenWidth</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Width of the frozen part in scrollable DataTable.</td>
                                </tr>
                                <tr>
                                    <td>frozenValue</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>Items of the frozen part in scrollable DataTable.</td>
                                </tr>
                                <tr>
                                    <td>csvSeparator</td>
                                    <td>string</td>
                                    <td>,</td>
                                    <td>Character to use as the csv separator.</td>
                                </tr>
                                <tr>
                                    <td>exportFilename</td>
                                    <td>string</td>
                                    <td>download</td>
                                    <td>Name of the exported file.</td>
                                </tr>
                                <tr>
                                    <td>rowGroupMode</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines the row grouping mode, valid values are "subheader" and "rowgroup".</td>
                                </tr>
                                <tr>
                                    <td>autoLayout</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the cell widths scale according to their content or not.</td>
                                </tr>
                                <tr>
                                    <td>rowClassName</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that takes the row data and <br /> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
                                </tr>
                                <tr>
                                    <td>cellClassName</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that takes the cell data and <br /> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
                                </tr>
                                <tr>
                                    <td>rowGroupHeaderTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function to provide the content of row group header.</td>
                                </tr>
                                <tr>
                                    <td>rowGroupFooterTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function to provide the content of row group footer.</td>
                                </tr>
                                <tr>
                                    <td>loading</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Displays a loader to indicate data load is in progress.</td>
                                </tr>
                                <tr>
                                    <td>loadingIcon</td>
                                    <td>string</td>
                                    <td>pi pi-spinner</td>
                                    <td>The icon to show while indicating data load is in progress.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>stateKey</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of a stateful table to use in state storage.</td>
                                </tr>
                                <tr>
                                    <td>stateStorage</td>
                                    <td>string</td>
                                    <td>session</td>
                                    <td>Defines where a stateful table keeps its state, <br /> valid values are "session" for sessionStorage, "local" for localStorage and "custom".</td>
                                </tr>
                                <tr>
                                    <td>editMode</td>
                                    <td>string</td>
                                    <td>cell</td>
                                    <td>Defines editing mode, options are "cell" and "row".</td>
                                </tr>
                                <tr>
                                    <td>editingRows</td>
                                    <td>array|object</td>
                                    <td>null</td>
                                    <td>A collection of rows to represent the current editing data in row edit mode.</td>
                                </tr>
                                <tr>
                                    <td>exportFunction</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>A function to implement custom export. Need to return string value. <br />
                                        event.data: Field data. <br />
                                        event.field: Column field.
                                        event.rowData: Row data.
                                        event.column: Column.</td>
                                </tr>
                                <tr>
                                    <td>expandableRowGroups</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Makes row groups toggleable, default is false.</td>
                                </tr>
                                <tr>
                                    <td>rowHover</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, background of the rows change on hover.</td>
                                </tr>
                                <tr>
                                    <td>showGridlines</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to show grid lines between cells.</td>
                                </tr>
                                <tr>
                                    <td>stripedRows</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to displays rows with alternating colors.</td>
                                </tr>
                                <tr>
                                    <td>size</td>
                                    <td>string</td>
                                    <td>normal</td>
                                    <td>Define to set alternative sizes. Valid values: "small", "normal" and "large".</td>
                                </tr>
                                <tr>
                                    <td>responsiveLayout</td>
                                    <td>string</td>
                                    <td>stack</td>
                                    <td>Defines the responsive mode, valid options are "stack" and "scroll".</td>
                                </tr>
                                <tr>
                                    <td>breakpoint</td>
                                    <td>string</td>
                                    <td>960px</td>
                                    <td>The breakpoint to define the maximum width boundary when using stack responsive layout.</td>
                                </tr>
                                <tr>
                                    <td>filterDisplay</td>
                                    <td>string</td>
                                    <td>menu</td>
                                    <td>Layout of the filter elements, valid values are "row" and "menu".</td>
                                </tr>
                                <tr>
                                    <td>expandedRowIcon</td>
                                    <td>string</td>
                                    <td>pi pi-chevron-down</td>
                                    <td>Icon of the row toggler to display the row as expanded.</td>
                                </tr>
                                <tr>
                                    <td>collapsedRowIcon</td>
                                    <td>string</td>
                                    <td>pi pi-chevron-up</td>
                                    <td>Icon of the row toggler to display the row as collapsed.</td>
                                </tr>
                                <tr>
                                    <td>globalFilterFields</td>
                                    <td>string[]</td>
                                    <td>null</td>
                                    <td>Define fields to be filtered globally.</td>
                                </tr>
                                <tr>
                                    <td>showSelectionElement</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row.</td>
                                </tr>
                                <tr>
                                    <td>showRowReorderElement</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that returns a boolean by passing the row data to decide if the row reorder element should be displayed per row.</td>
                                </tr>
                                <tr>
                                    <td>isDataSelectable</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that returns a boolean to decide whether the data should be selectable.</td>
                                </tr>
                                <tr>
                                    <td>customSaveState</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>A function to implement custom saveState with stateStorage="custom". <br />
                                        state: the object to be stored. </td>
                                </tr>
                                <tr>
                                    <td>customRestoreState</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>A function to implement custom restoreState with stateStorage="custom". Need to return state object.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onSelectionChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Selection object
                                    </td>
                                    <td>Callback to invoke when selection changes.</td>
                                </tr>
                                <tr>
                                    <td>onContextMenuSelectionChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Selection object
                                    </td>
                                    <td>Callback to invoke when a row selected with right click.</td>
                                </tr>
                                <tr>
                                    <td>onRowToggle</td>
                                    <td>event.data: Expanded rows</td>
                                    <td>Callback to invoke when a row is toggled or collapsed.</td>
                                </tr>
                                <tr>
                                    <td>onColumnResizeEnd</td>
                                    <td>event.element: DOM element of the resized column.<br />
                                        event.column: Properties of the resized column.<br />
                                        event.delta: Change in column width</td>
                                    <td>Callback to invoke when a column is resized.</td>
                                </tr>
                                <tr>
                                    <td>onColumnResizerClick</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.element: DOM element of the column.<br />
                                        event.column: Properties of the column.</td>
                                    <td>Callback to invoke when a resizer element is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onColumnResizerDoubleClick</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.element: DOM element of the column.<br />
                                        event.column: Properties of the column.</td>
                                    <td>Callback to invoke when a resizer element is double clicked.</td>
                                </tr>
                                <tr>
                                    <td>onSort</td>
                                    <td>event.sortField: Field to sort against. <br />
                                        event.sortOrder: Sort order as integer. <br />
                                        event.multiSortMeta: MultiSort metadata.</td>
                                    <td>Callback to invoke on sort.</td>
                                </tr>
                                <tr>
                                    <td>onPage</td>
                                    <td>event.first: Index of the first row. <br />
                                        event.rows: Rows per page.</td>
                                    <td>Callback to invoke on pagination.</td>
                                </tr>
                                <tr>
                                    <td>onFilter</td>
                                    <td>event.filters: Collection of active filters.</td>
                                    <td>Callback to invoke on filtering.</td>
                                </tr>
                                <tr>
                                    <td>onAllRowsSelect</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.data: Selected rows data. <br />
                                        event.type: Type of the selection, valid value is "all".</td>
                                    <td>Callback to invoke when all rows are selected using the header checkbox.</td>
                                </tr>
                                <tr>
                                    <td>onAllRowsUnselect</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.data: Unselected rows data. <br />
                                        event.type: Type of the selection, valid value is "all".</td>
                                    <td>Callback to invoke when all rows are unselected using the header checkbox.</td>
                                </tr>
                                <tr>
                                    <td>onRowClick</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Clicked row data <br />
                                        event.index: Clicked row data index</td>
                                    <td>Callback to invoke when a row is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onRowDoubleClick</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Clicked row data <br />
                                        event.index: Clicked row data index</td>
                                    <td>Callback to invoke when a row is double clicked.</td>
                                </tr>
                                <tr>
                                    <td>onRowSelect</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.data: Selected row data. <br />
                                        event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                                    <td>Callback to invoke when a row is selected.</td>
                                </tr>
                                <tr>
                                    <td>onRowUnselect</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.data: Unselected row data. <br />
                                        event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                                    <td>Callback to invoke when a row is unselected.</td>
                                </tr>
                                <tr>
                                    <td>onRowExpand</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.data: Expanded row data.</td>
                                    <td>Callback to invoke when a row is expanded.</td>
                                </tr>
                                <tr>
                                    <td>onRowCollapse</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.data: Collapsed row data.</td>
                                    <td>Callback to invoke when a row is collapsed.</td>
                                </tr>
                                <tr>
                                    <td>onContextMenu</td>
                                    <td>event.originalEvent: Original event instance. <br />
                                        event.data: Collapsed row data</td>
                                    <td>Callback to invoke when a context menu is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onColReorder</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.dragIndex: Index of the dragged column <br />
                                        event.dropIndex: Index of the dropped column <br />
                                        event.columns: Columns array after reorder.</td>
                                    <td>Callback to invoke when a column is reordered.</td>
                                </tr>
                                <tr>
                                    <td>onRowOrder</td>
                                    <td>event.originalEvent: Browser event. <br />
                                        event.value: New value after reorder <br />
                                        event.dragIndex: Index of the dragged row <br />
                                        event.dropIndex: Index of the drop location</td>
                                    <td>Callback to invoke when a row is reordered.</td>
                                </tr>
                                <tr>
                                    <td>onValueChange</td>
                                    <td>value: Value displayed by the table.</td>
                                    <td>Callback to invoke after filtering and sorting to pass the rendered value.</td>
                                </tr>
                                <tr>
                                    <td>rowEditValidator</td>
                                    <td>data: Editing row data</td>
                                    <td>Callback to invoke to validate the editing row when the save icon is clicked on row editing mode.</td>
                                </tr>
                                <tr>
                                    <td>onRowEditInit</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Editing row data </td>
                                    <td>Callback to invoke when the editing icon is clicked on row editing mode.</td>
                                </tr>
                                <tr>
                                    <td>onRowEditSave</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Editing row data</td>
                                    <td>Callback to invoke when the save icon is clicked on row editing mode.</td>
                                </tr>
                                <tr>
                                    <td>onRowEditCancel</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Editing row data <br />
                                        event.index: Editing row data index</td>
                                    <td>Callback to invoke when the cancel icon is clicked on row editing mode.</td>
                                </tr>
                                <tr>
                                    <td>onRowEditChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Editing rows data <br />
                                        event.index: Current editing row data index</td>
                                    <td>Callback to invoke when the row editor is programmatically shown/hidden on row editing mode.</td>
                                </tr>
                                <tr>
                                    <td>onRowEditComplete</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.data: Original rows data <br />
                                        event.newData: Editing rows data <br />
                                        event.field: Column field <br />
                                        event.index: Current editing row data index </td>
                                    <td>Callback to invoke when row edit is completed.</td>
                                </tr>
                                <tr>
                                    <td>onStateSave</td>
                                    <td>state: Table state</td>
                                    <td>Callback to invoke table state is saved.</td>
                                </tr>
                                <tr>
                                    <td>onStateRestore</td>
                                    <td>state: Table state</td>
                                    <td>Callback to invoke table state is restored.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Methods</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>reset</td>
                                    <td>-</td>
                                    <td>Resets sort, filter, paginator and columnorder state.</td>
                                </tr>
                                <tr>
                                    <td>exportCSV</td>
                                    <td>-</td>
                                    <td>Exports the data to CSV format.</td>
                                </tr>
                                <tr>
                                    <td>filter</td>
                                    <td>value: the filter value <br />
                                        field: the filter field <br />
                                        mode: filter match mode.
                                    </td>
                                    <td>Filters the data.</td>
                                </tr>
                                <tr>
                                    <td>closeEditingCell</td>
                                    <td>-</td>
                                    <td>Closes the current editing cell when incell editing is enabled.</td>
                                </tr>
                                <tr>
                                    <td>resetColumnOrder</td>
                                    <td>-</td>
                                    <td>Resets column order when reorderableColumns is enabled.</td>
                                </tr>
                                <tr>
                                    <td>resetScroll</td>
                                    <td>-</td>
                                    <td>Resets scroll position.</td>
                                </tr>
                                <tr>
                                    <td>restoreTableState</td>
                                    <td>state</td>
                                    <td>Stored states can be loaded at any time using this method if there is a stateStorage property.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-datatable</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-scrollable</td>
                                    <td>Container element when table is scrollable.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-header</td>
                                    <td>Header section.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-footer</td>
                                    <td>Footer section.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-wrapper</td>
                                    <td>Wrapper of table element.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-table</td>
                                    <td>Table element.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-thead</td>
                                    <td>Table thead element.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-tbody</td>
                                    <td>Table tbody element.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-tfoot</td>
                                    <td>Table tfoot element.</td>
                                </tr>
                                <tr>
                                    <td>p-column-title</td>
                                    <td>Title of a column.</td>
                                </tr>
                                <tr>
                                    <td>p-sortable-column</td>
                                    <td>Sortable column header.</td>
                                </tr>
                                <tr>
                                    <td>p-frozen-column</td>
                                    <td>Frozen column header.</td>
                                </tr>
                                <tr>
                                    <td>p-rowgroup-header</td>
                                    <td>Header of a rowgroup.</td>
                                </tr>
                                <tr>
                                    <td>p-rowgroup-footer</td>
                                    <td>Footer of a rowgroup.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-row-expansion</td>
                                    <td>Expanded row content.</td>
                                </tr>
                                <tr>
                                    <td>p-row-toggler</td>
                                    <td>Toggle element for row expansion.</td>
                                </tr>
                                <tr>
                                    <td>p-datatable-emptymessage</td>
                                    <td>Cell containing the empty message.</td>
                                </tr>
                                <tr>
                                    <td>p-row-editor-init</td>
                                    <td>Pencil button of row editor.</td>
                                </tr>
                                <tr>
                                    <td>p-row-editor-init</td>
                                    <td>Save button of row editor.</td>
                                </tr>
                                <tr>
                                    <td>p-row-editor-init</td>
                                    <td>Cancel button of row editor.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>DataTable uses a <i>table</i> element whose attributes can be extended with the <i>tableProps</i> option. This property allows passing aria roles and attributes like <i>aria-label</i> and <i>aria-describedby</i> to define the table for readers. Default
                        role of the table is <i>table</i>. Header, body and footer elements use <i>rowgroup</i>, rows use <i>row</i> role, header cells have <i>columnheader</i> and body cells use <i>cell</i> roles. Sortable headers utilizer <i>aria-sort</i> attribute
                        either set to "ascending" or "descending".</p>

                        <p>Built-in checkbox and radiobutton components for row selection use <i>checkbox</i> and <i>radiobutton</i> roles respectively with <i>aria-checked</i> state attribute. The label to describe them is retrieved from the 
                        <i>aria.selectRow</i> and <i>aria.unselectRow</i> properties of the <Link href="/locale">locale</Link> API. Similarly header checkbox uses <i>selectAll</i> and <i>unselectAll</i> keys. When a row is selected, <i>aria-selected</i> is set to true on a row.</p>

                        <p>The element to expand or collapse a row is a <i>button</i> with <i>aria-expanded</i> and <i>aria-controls</i> properties. Value to describe the buttons is derived from <i>aria.expandRow</i> and <i>aria.collapseRow</i> properties of the <Link href="/locale">locale</Link> API.</p>

                        <p>The filter menu button use <i>aria.showFilterMenu</i> and <i>aria.hideFilterMenu</i> properties as <i>aria-label</i> in addition to the <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define the relation between the button and the overlay. Popop menu has <i>dialog</i> role with <i>aria-modal</i> 
                        as focus is kept within the overlay. The operator dropdown use <i>aria.filterOperator</i> and filter constraints dropdown use <i>aria.filterConstraint</i> properties. Buttons to add rules on the other hand utilize <i>aria.addRule</i> and <i>aria.removeRule</i> properties. The footer buttons similarly use
                        <i>aria.clear</i> and <i>aria.apply</i> properties. <i>filterInputProps</i> of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well.</p>

                        <p>Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with <i>aria.editRow</i>, <i>aria.cancelEdit</i> and <i>aria.saveEdit</i> used for the <i>aria-label</i>.</p>

                        <p>Paginator is a standalone component used inside the DataTable, refer to the <Link href="/paginator">paginator</Link> for more information about the accessibility features.</p>

                        <h5>Sortable Headers Keyboard Support</h5>
                        <p>Any button element inside the DataTable used for cases like filter, row expansion, edit are tabbable and can be used with <i>space</i> and <i>enter</i> keys.</p>
                        
                        <h6>Sortable Headers Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>tab</i></td>
                                        <td>Moves through the headers.</td>
                                    </tr>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Sorts the column.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Sorts the column.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Filter Menu Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>tab</i></td>
                                        <td>Moves through the elements inside the popup.</td>
                                    </tr>
                                    <tr>
                                        <td><i>escape</i></td>
                                        <td>Hides the popup.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Selection Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>tab</i></td>
                                        <td>Moves focus to the first selected row, if there is none then first row receives the focus.</td>
                                    </tr>
                                    <tr>
                                        <td><i>up arrow</i></td>
                                        <td>Moves focus to the previous row.</td>
                                    </tr>
                                    <tr>
                                        <td><i>down arrow</i></td>
                                        <td>Moves focus to the next row.</td>
                                    </tr>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Toggles the selected state of the focused row depending on the metaKeySelection setting.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Toggles the selected state of the focused row depending on the metaKeySelection setting.</td>
                                    </tr>
                                    <tr>
                                        <td><i>home</i></td>
                                        <td>Moves focus to the first row.</td>
                                    </tr>
                                    <tr>
                                        <td><i>end</i></td>
                                        <td>Moves focus to the last row.</td>
                                    </tr>
                                    <tr>
                                        <td><i>shift</i> + <i>down arrow</i></td>
                                        <td>Moves focus to the next row and toggles the selection state.</td>
                                    </tr>
                                    <tr>
                                        <td><i>shift</i> + <i>up arrow</i></td>
                                        <td>Moves focus to the previous row and toggles the selection state.</td>
                                    </tr>
                                    <tr>
                                        <td><i>shift</i> + <i>space</i></td>
                                        <td>Selects the rows between the most recently selected row and the focused row.</td>
                                    </tr>
                                    <tr>
                                        <td><i>control</i> + <i>shift</i> + <i>home</i></td>
                                        <td>Selects the focused rows and all the options up to the first one.</td>
                                    </tr>
                                    <tr>
                                        <td><i>control</i> + <i>shift</i> + <i>end</i></td>
                                        <td>Selects the focused rows and all the options down to the last one.</td>
                                    </tr>
                                    <tr>
                                        <td><i>control</i> + <i>a</i></td>
                                        <td>Selects all rows.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>

                </TabPanel>
                {
                    useLiveEditorTabs({ name: 'DataTableDemo', sources: sources, service: 'CustomerService', data: 'customers-large', extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default DataTableDoc;
