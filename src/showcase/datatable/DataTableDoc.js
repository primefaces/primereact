import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class DataTableDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressBar } from 'primereact/progressbar';
import './DataTableDemo.css';

export class DataTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            selectedCustomers: null,
            globalFilter: null,
            selectedRepresentatives: null,
            dateFilter: null,
            selectedStatus: null
        };

        this.representatives = [
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

        this.statuses = [
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ];

        this.customerService = new CustomerService();

        //body cells
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        //filters
        this.representativeItemTemplate = this.representativeItemTemplate.bind(this);
        this.onRepresentativeFilterChange = this.onRepresentativeFilterChange.bind(this);
        this.onDateFilterChange = this.onDateFilterChange.bind(this);
        this.filterDate = this.filterDate.bind(this);       //custom filter function
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.onStatusFilterChange = this.onStatusFilterChange.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({customers: data}));
    }

    renderHeader() {
        return (
            <div className="table-header">
                List of Customers
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                </span>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }

    actionBodyTemplate() {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    statusBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    nameBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    countryBodyTemplate(rowData) {
        let { name, code } = rowData.country;

        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <img src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
            </React.Fragment>
        );
    }

    representativeBodyTemplate(rowData) {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    dateBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    renderRepresentativeFilter() {
        return (
            <MultiSelect className="p-column-filter" value={this.state.selectedRepresentatives} options={this.representatives}
                onChange={this.onRepresentativeFilterChange} itemTemplate={this.representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    representativeItemTemplate(option) {
        const src = "showcase/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    onRepresentativeFilterChange(event) {
        this.dt.filter(event.value, 'representative.name', 'in');
        this.setState({selectedRepresentatives: event.value});
    }

    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({dateFilter: event.value});
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    renderStatusFilter() {
        return (
            <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={this.onStatusFilterChange}
                        itemTemplate={this.statusItemTemplate} showClear placeholder="Select a Status" className="p-column-filter"/>
        );
    }

    statusItemTemplate(option) {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    onStatusFilterChange(event) {
        this.dt.filter(event.value, 'status', 'equals');
        this.setState({selectedStatus: event.value});
    }

    render() {
        const header = this.renderHeader();
        const representativeFilter = this.renderRepresentativeFilter();
        const dateFilter = this.renderDateFilter();
        const statusFilter = this.renderStatusFilter();

        return (
            <div className="datatable-doc-demo">
                <div className="card">
                    <DataTable ref={(el) => this.dt = el} value={this.state.customers}
                        header={header} className="p-datatable-customers" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                        selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({selectedCustomers: e.value})}
                        paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                        <Column selectionMode="multiple" style={{width:'3em'}}/>
                        <Column field="name" header="Name" body={this.nameBodyTemplate} sortable filter filterPlaceholder="Search by name" />
                        <Column sortField="country.name" filterField="country.name" header="Country" body={this.countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
                        <Column sortField="representative.name" filterField="representative.name" header="Representative" body={this.representativeBodyTemplate} sortable filter filterElement={representativeFilter} />
                        <Column field="date" header="Date" body={this.dateBodyTemplate} sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterElement={statusFilter} />
                        <Column field="activity" header="Activity" body={this.activityBodyTemplate} sortable filter filterMatchMode="gte" filterPlaceholder="Minimum" />
                        <Column body={this.actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
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
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressBar } from 'primereact/progressbar';
import './DataTableDemo.css';

const DataTableDemo = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedRepresentatives, setSelectedRepresentatives] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const dt = useRef(null);
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
        customerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderHeader = () => {
        return (
            <div className="table-header">
                List of Customers
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </span>
            </div>
        );
    }

    const activityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }

    const actionBodyTemplate = () => {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        let { name, code } = rowData.country;

        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <img src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    const renderRepresentativeFilter = () => {
        return (
            <MultiSelect className="p-column-filter" value={selectedRepresentatives} options={representatives}
                onChange={onRepresentativeFilterChange} itemTemplate={representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    const representativeItemTemplate = (option) => {
        const src = "showcase/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    const onRepresentativeFilterChange = (event) => {
        dt.current.filter(event.value, 'representative.name', 'in');
        setSelectedRepresentatives(event.value);
    }

    const renderDateFilter = () => {
        return (
            <Calendar value={dateFilter} onChange={onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    const onDateFilterChange = (event) => {
        if (event.value !== null)
            dt.current.filter(formatDate(event.value), 'date', 'equals');
        else
            dt.current.filter(null, 'date', 'equals');

        setDateFilter(event.value);
    }

    const filterDate = (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    }

    const formatDate = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    const renderStatusFilter = () => {
        return (
            <Dropdown value={selectedStatus} options={statuses} onChange={onStatusFilterChange}
                        itemTemplate={statusItemTemplate} showClear placeholder="Select a Status" className="p-column-filter"/>
        );
    }

    const statusItemTemplate = (option) => {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    const onStatusFilterChange = (event) => {
        dt.current.filter(event.value, 'status', 'equals');
        setSelectedStatus(event.value);
    }

    const header = renderHeader();
    const representativeFilterElement = renderRepresentativeFilter();
    const dateFilterElement = renderDateFilter();
    const statusFilterElement = renderStatusFilter();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable ref={dt} value={customers}
                    header={header} className="p-datatable-customers" dataKey="id" rowHover globalFilter={globalFilter}
                    selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column selectionMode="multiple" style={{width:'3em'}}/>
                    <Column field="name" header="Name" body={nameBodyTemplate} sortable filter filterPlaceholder="Search by name" />
                    <Column sortField="country.name" filterField="country.name" header="Country" body={countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
                    <Column sortField="representative.name" filterField="representative.name" header="Representative" body={representativeBodyTemplate} sortable filter filterElement={representativeFilterElement} />
                    <Column field="date" header="Date" body={dateBodyTemplate} sortable filter filterMatchMode="custom" filterFunction={filterDate} filterElement={dateFilterElement} />
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterElement} />
                    <Column field="activity" header="Activity" body={activityBodyTemplate} sortable filter filterMatchMode="gte" filterPlaceholder="Minimum" />
                    <Column body={actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
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
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressBar } from 'primereact/progressbar';
import './DataTableDemo.css';

const DataTableDemo = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedRepresentatives, setSelectedRepresentatives] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const dt = useRef(null);
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
        customerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderHeader = () => {
        return (
            <div className="table-header">
                List of Customers
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </span>
            </div>
        );
    }

    const activityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }

    const actionBodyTemplate = () => {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        let { name, code } = rowData.country;

        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <img src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    const renderRepresentativeFilter = () => {
        return (
            <MultiSelect className="p-column-filter" value={selectedRepresentatives} options={representatives}
                onChange={onRepresentativeFilterChange} itemTemplate={representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    const representativeItemTemplate = (option) => {
        const src = "showcase/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    const onRepresentativeFilterChange = (event) => {
        dt.current.filter(event.value, 'representative.name', 'in');
        setSelectedRepresentatives(event.value);
    }

    const renderDateFilter = () => {
        return (
            <Calendar value={dateFilter} onChange={onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    const onDateFilterChange = (event) => {
        if (event.value !== null)
            dt.current.filter(formatDate(event.value), 'date', 'equals');
        else
            dt.current.filter(null, 'date', 'equals');

        setDateFilter(event.value);
    }

    const filterDate = (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    }

    const formatDate = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    const renderStatusFilter = () => {
        return (
            <Dropdown value={selectedStatus} options={statuses} onChange={onStatusFilterChange}
                        itemTemplate={statusItemTemplate} showClear placeholder="Select a Status" className="p-column-filter"/>
        );
    }

    const statusItemTemplate = (option) => {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    const onStatusFilterChange = (event) => {
        dt.current.filter(event.value, 'status', 'equals');
        setSelectedStatus(event.value);
    }

    const header = renderHeader();
    const representativeFilterElement = renderRepresentativeFilter();
    const dateFilterElement = renderDateFilter();
    const statusFilterElement = renderStatusFilter();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable ref={dt} value={customers}
                    header={header} className="p-datatable-customers" dataKey="id" rowHover globalFilter={globalFilter}
                    selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column selectionMode="multiple" style={{width:'3em'}}/>
                    <Column field="name" header="Name" body={nameBodyTemplate} sortable filter filterPlaceholder="Search by name" />
                    <Column sortField="country.name" filterField="country.name" header="Country" body={countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
                    <Column sortField="representative.name" filterField="representative.name" header="Representative" body={representativeBodyTemplate} sortable filter filterElement={representativeFilterElement} />
                    <Column field="date" header="Date" body={dateBodyTemplate} sortable filter filterMatchMode="custom" filterFunction={filterDate} filterElement={dateFilterElement} />
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterElement} />
                    <Column field="activity" header="Activity" body={activityBodyTemplate} sortable filter filterMatchMode="gte" filterPlaceholder="Minimum" />
                    <Column body={actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
                </DataTable>
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'src/demo/DataTableDemo.css': {
                content: `
.datatable-doc-demo .p-paginator .p-paginator-current {
    margin-left: auto;
}

.datatable-doc-demo .p-progressbar {
    height: .5rem;
    background-color: #D8DADC;
}

.datatable-doc-demo .p-progressbar .p-progressbar-value {
    background-color: #607D8B;
}

.datatable-doc-demo .table-header {
    display: flex;
    justify-content: space-between;
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

.datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {
    cursor: auto;
}

.datatable-doc-demo .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
}

.datatable-doc-demo .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 960px) {
    .datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,
    .datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-tbody > tr {
        border-bottom: 1px solid var(--layer-2);
    }

    .datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none !important;
        width: 100% !important;
        float: left;
        clear: left;
        border: 0 none;
    }

    .datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
        padding: .4rem;
        min-width: 30%;
        display: inline-block;
        margin: -.4rem 1rem -.4rem -.4rem;
        font-weight: bold;
    }

    .datatable-doc-demo .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {
        margin-top: .5rem;
    }
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { DataTable } from 'primereact/datatable';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a product interface having code, name, description, image, category, quantity, price, inventoryStatus and rating properties is used to define an object to be displayed by the datatable.
                Products are loaded by a CustomerService that connects to a server to fetch the products with a axios. Note that this is only for demo purposes, DataTable does not have any restrictions on how data is provided.
            </p>

<CodeHighlight lang="js">
{`
import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
		return axios.get('showcase/demo/data/products-small.json').then(res => res.data.data);
	}

	getProducts() {
		return axios.get('showcase/demo/data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
		return axios.get('showcase/demo/data/products-orders-small.json').then(res => res.data.data);
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
                            <td>loadingBody</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function to return the body content of the column to display when virtual scroll loads the new data.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Footer content of the column.</td>
                        </tr>
                        <tr>
                            <td>sortable</td>
                            <td>any</td>
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
                            <td>filter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if a column can be filtered.</td>
                        </tr>
                        <tr>
                            <td>filterMatchMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
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
                            <td>editorValidator</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Validator function to validate the cell input value.</td>
                        </tr>
                        <tr>
                            <td>editorValidatorEvent</td>
                            <td>string</td>
                            <td>click</td>
                            <td>Event to trigger the validation, possible values are "click" and "blur".</td>
                        </tr>
                        <tr>
                            <td>onBeforeEditorShow</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke before the cell editor is shown.</td>
                        </tr>
                        <tr>
                            <td>onBeforeEditorHide</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke before the cell editor is hidden.</td>
                        </tr>
                        <tr>
                            <td>onEditorInit</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke when cell edit is initiated.</td>
                        </tr>
                        <tr>
                            <td>onEditorSubmit</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to execute when editor is submitted.</td>
                        </tr>
                        <tr>
                            <td>onEditorCancel</td>
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
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} alt={rowData.image} className="product-image" />;
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
            See <Link to="/paginator">paginator</Link> component for more information about further customization options such as <i>paginator template</i>.</p>

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

            <p>Elements of the paginator can be customized using the <i>paginatorTemplate</i> by the DataTable. Refer to the template section of the <Link to="/paginator"> paginator documentation</Link> for further options.</p>
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
<CodeHighlight lang="js">
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
            <p>Filtering is enabled by setting the <i>filter</i> property as true on a column. Default match mode is "startsWith" and this can be configured using <i>filterMatchMode</i> property that also accepts                 "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom" as available modes.</p>
 <CodeHighlight>
{`
<DataTable value={products}>
    <Column field="code" header="Code" filter></Column>
    <Column field="name" header="Name" filter filterPlaceholder="Search"></Column>
    <Column field="category" header="Category" filter filterMatchMode="contains"></Column>
    <Column field="quantity" header="Quantity" filter filterMatchMode="endsWith"></Column>
</DataTable>
`}
</CodeHighlight>

            <p>An optional global filter feature is available to search all fields with the same keyword,
                to implement this place an input component whose value is bound to the globalFilter property of the DataTable.</p>
<CodeHighlight lang="js">
{`
export const DataTableFilterDemo = () => {

    const [products, setProducts] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    } ,[])

    let header = (
        <div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50"/>
        </div>
    );

    return (
        <DataTable value={products} paginator rows={10} header={header} globalFilter={globalFilter}>
            <Column field="code" header="Code" filter></Column>
            <Column field="name" header="Name" filter></Column>
            <Column field="category" header="Category" filter></Column>
            <Column field="quantity" header="Quantity" filter></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

            <p>By default, input fields are used as filter elements and this can be customized using the <i>filterElement</i> property of the Column that calls the filter function of the table instance by passing the value, field and the match mode.</p>
<CodeHighlight lang="js">
{`
export const DataTableCustomFilterDemo = () => {

    const [products, setProducts] = useState([]);
    const [inventoryStatus, setInventoryStatus] = useState(null);
    const dt = useRef(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    } ,[])

    const onStatusChange = (event) => {
        dt.current.filter(event.value, 'inventoryStatus', 'equals');
        setInventoryStatus(event.value);
    }

    let inventoryStatuses = [
            {label: 'All Status', value: null},
            {label: 'INSTOCK', value: 'INSTOCK'},
            {label: 'LOWSTOCK', value: 'LOWSTOCK'},
            {label: 'OUTOFSTOCK', value: 'OUTOFSTOCK'}
        ];

    let statusFilter = <Dropdown style={{width: '100%'}} className="ui-column-filter"
        value={inventoryStatus} options={inventoryStatuses} onChange={onStatusChange}/>

    return (
        <DataTable ref={dt} value={products}>
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

            <p>Custom filtering is implemented by setting the <i>filterMatchMode</i> property as "custom" and providing a function that takes the data value along with the filter value to return a boolean.</p>
<CodeHighlight lang="js">
{`
export const DataTableFilterDemo = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    const codeFilter = (value, filter) => {
        return filter > value;
    }

    return (
        <DataTable value={products}>
            <Column field="code" header="Code" filter filterMatchMode="custom" filterFunction={codeFilter}></Column>
            <Column field="name" header="Name" filter></Column>
            <Column field="category" header="Category" filter></Column>
            <Column field="inventoryStatus" header="Status" filter></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

            <p>Getting access to the filtered data is provided by the <i>onValueChange</i> callback.</p>
            <CodeHighlight lang="js">
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
            <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the <i>selection</i> property for reading and updated using <i>onSelectionChange</i> callback.
                Alternatively column based selection can be done using radio buttons or checkboxes using <i>selectionMode</i> of a particular column. In addition <i>onRowSelect</i>-<i>onRowUnselect</i> events are provided as optional callbacks.</p>

            <p>In single mode, selection binding is an object reference.</p>

<CodeHighlight lang="js">
{`
export const DataTableSelectionDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <DataTable value={products} selectionMode="single"
            selection={selectedProduct} onSelectionChange={e => setSelectedProduct(e.value)}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="inventoryStatus" header="Status"></Column>
        </DataTable>
    );
}
`}
</CodeHighlight>

            <p>In multiple mode, selection binding should be an array and multiple items can either be selected using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default.
                On touch enabled devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>

<CodeHighlight lang="js">
{`
export const DataTableSelectionDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    return (
        <DataTable value={products} selectionMode="multiple"
            selection={selectedProducts} onSelectionChange={e => setSelectedProducts(e.value)}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="inventoryStatus" header="Status"></Column>
        </DataTable>
    );

}
`}
</CodeHighlight>

            <p>If you prefer a radioButton or a checkbox instead of a row click, use the <i>selectionMode</i> of a column instead.
                 Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
            <p>Tip: Use <i>showSelectionElement</i> function in case you need to hide selection element for a particular row.</p>
<CodeHighlight>
{`
<DataTable value={products} selection={selectedProducts} onSelectionChange={e => setSelectedProducts(e.value))}>
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
            to decide whether to keep the cell open or not, provide a <i>editorValidator</i> function that validates the value. Optionally <i>onEditorSubmit</i> and <i>onEditorCancel</i>
            events are available at the column component to provide callbacks whenever an editor is submitted or cancelled.</p>

<CodeHighlight>
{`
<DataTable value={products}>
    <Column field="code" header="Code" editor={codeEditor} editorValidator={requiredValidator} />
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
<DataTable value={products} editMode="row">
    <Column field="code" header="Code" />
    <Column field="name" header="Name" />
    <Column field="inventoryStatuses" header="Status" editor={statusEditor} onRowEditorValidator={onRowEditorValidator} />
    <Column rowEditor />
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const onRowEditorValidator = (rowData) => {
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
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} alt={rowData.image} className="product-image" />;
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
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
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
            <p>RowGrouping has two modes defined be the <i>rowGroupMode</i> property, in "subheader" option rows are grouped by a groupField and in "rowspan" mode grouping
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
            <DataTable header="SubHeader" value={products} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="name"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price"></Column>
            </DataTable>

            <DataTable header="RowSpan" value={products} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="name"
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
<DataTable value={products} scrollable scrollHeight="200px">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

            <p>Horizontal Scrolling requires a width of DataTable to be defined and explicit widths on columns.</p>
<CodeHighlight>
{`
<DataTable value={products} scrollable scrollHeight="200px" style={{width: '600px'}}>
    <Column field="code" header="Code" style={{width:'250px'}}></Column>
    <Column field="name" header="Name" style={{width:'250px'}}></Column>
    <Column field="category" header="Category" style={{width:'250px'}}></Column>
    <Column field="quantity" header="Quantity" style={{width:'250px'}}></Column>
</DataTable>
`}
</CodeHighlight>

            <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. Widths of the frozen section is specified by the <i>frozenWidth</i> property.</p>

<CodeHighlight>
{`
<DataTable value={products} scrollable scrollHeight="200px" style={{width: '800px'}} frozenWidth="200px">
    <Column field="code" header="Code" style={{width:'250px'}} frozen></Column>
    <Column field="name" header="Name" style={{width:'250px'}}></Column>
    <Column field="category" header="Category" style={{width:'250px'}}></Column>
    <Column field="quantity" header="Quantity" style={{width:'250px'}}></Column>
    <Column field="price" header="Price" style={{width:'250px'}}></Column>
    <Column field="rating" header="Rating" style={{width:'250px'}}></Column>
    <Column field="description" header="Description" style={{width:'250px'}}></Column>
    <Column field="inventoryStatus" header="Status" style={{width:'250px'}}></Column>
</DataTable>
`}
</CodeHighlight>

            <p>Note that frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. Provide fixed height to cells to avoid alignment issues.</p>
            <CodeHighlight>
{`
<DataTable value={products} scrollable scrollHeight="200px" style={{width: '800px'}} frozenWidth="200px">
    <Column field="code" header="Code" style={{width:'250px', height: '25px'}} frozen></Column>
    <Column field="name" header="Name" style={{width:'250px', height: '25px'}}></Column>
    <Column field="category" header="Category" style={{width:'250px', height: '25px'}}></Column>
    <Column field="quantity" header="Quantity" style={{width:'250px', height: '25px'}}></Column>
</DataTable>
`}
</CodeHighlight>

            <p>One or more rows can be displayed as fixed using the <i>frozenValue</i> property.</p>
<CodeHighlight>
{`
<DataTable header="Frozen Rows" value={products} frozenValue={frozenProducts} scrollable scrollHeight="200px" style={{marginTop:'30px'}}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

            <p>When using frozen columns with column grouping, use <i>frozenHeaderColumnGroup</i> and <i>frozenFooterColumnGroup</i> properties along with
            <i>headerColumnGroup</i> and <i>footerColumnGroup</i>.</p>

            <p>Virtual scrolling is enabled using <i>virtualScroll</i> and <i>onVirtualScroll</i> properties combined with lazy loading so that data is loaded on the fly during scrolling.
            For smooth scrolling twice the amount of rows property is loaded on a lazy load event. In addition, to avoid performance problems row height is not calculated automatically and
            should be provided using <i>virtualRowHeight</i> property which defaults to 28px. View the <Link to="/datatable/scroll">scrolling demo</Link> for a sample implementation.</p>

<CodeHighlight>
{`
<DataTable value={lazyProducts} scrollable scrollHeight="200px" virtualScroll
    rows={10} totalRecords={lazyTotalRecords} lazy onVirtualScroll={loadProductsLazy} style={{marginTop:'30px'}}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`}
</CodeHighlight>

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
            <p>DataTable display can be optimized according to screen sizes, this example demonstrates a sample demo where columns are stacked on small screens.</p>
<CodeHighlight>
{`
<DataTable value={products} className="p-datatable-responsive-demo">
    <Column field="code" header="Code" body={bodyTemplate}></Column>
    <Column field="name" header="Name" body={bodyTemplate}></Column>
    <Column field="category" header="Category" body={bodyTemplate}></Column>
    <Column field="quantity" header="Quantity" body={bodyTemplate}></Column>
</DataTable>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const bodyTemplate = (data, props) => {
    return (
        <React.Fragment>
            <span className="p-column-title">{props.header}</span>
            {data[props.field]}
        </React.Fragment>
    );
}
`}
</CodeHighlight>

<CodeHighlight lang="scss">
{`
.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .p-datatable {
        &.p-datatable-responsive-demo {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr > td {
                text-align: left;
                display: block;
                border: 0 none !important;
                width: 100% !important;
                float: left;
                clear: left;

                .p-column-title {
                    padding: .4rem;
                    min-width: 30%;
                    display: inline-block;
                    margin: -.4em 1em -.4em -.4rem;
                    font-weight: bold;
                }
            }
        }
    }
}
`}
</CodeHighlight>

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
                            <td>Template of the paginator. For details, refer to the template section of the <Link to="/paginator">paginator documentation</Link> for further options.</td>
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
                            <td>any</td>
                            <td>null</td>
                            <td>Target element to attach the paginator dropdown overlay.</td>
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
                            <td>Specifies the selection mode, valid values are "single" and "multiple".</td>
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
                            <td>Algorithm to define if a row is selected, valid values are "equals" that compares by reference and <br/> "deepEquals" that compares all fields.</td>
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
                            <td>Defines whether metaKey is requred or not for the selection. <br/>
                                When true metaKey needs to be pressed to select or unselect an item and <br/>
                                when set to false selection of each item
                                can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
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
                            <td>frozenHeaderColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnGroup component for header of frozen columns.</td>
                        </tr>
                        <tr>
                            <td>frozenFooterColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnGroup component for footer of frozen columns.</td>
                        </tr>
                        <tr>
                            <td>rowExpansionTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that receives the row data as the parameter and returns the expanded row content.</td>
                        </tr>
                        <tr>
                            <td>expandedRows</td>
                            <td>array/object</td>
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
                            <td>Defines whether the overall table width should change on column resize, <br/> valid values are "fit" and "expand".</td>
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
                            <td>virtualScroll</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the data should be loaded on demand during scroll.</td>
                        </tr>
                        <tr>
                            <td>virtualScrollDelay</td>
                            <td>number</td>
                            <td>250</td>
                            <td>Delay in virtual scroll before doing a call to lazy load.</td>
                        </tr>
                        <tr>
                            <td>virtualRowHeight</td>
                            <td>number</td>
                            <td>28</td>
                            <td>Height of a row to use in calculations of virtual scrolling.</td>
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
                            <td>Function that takes the row data and <br/> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
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
                            <td>Defines where a stateful table keeps its state, <br/> valid values are "session" for sessionStorage, "local" for localStorage and "custom".</td>
                        </tr>
                        <tr>
                            <td>editMode</td>
                            <td>string</td>
                            <td>cell</td>
                            <td>Defines editing mode, options are "cell" and "row".</td>
                        </tr>
                        <tr>
                            <td>exportFunction</td>
                            <td>function</td>
                            <td>null</td>
                            <td>A function to implement custom export. Need to return string value. <br />
                                event.data: Field data. <br />
                                event.rows: Column field.</td>
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
                            <td>When enabled, background of the rows change on hover..</td>
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
                            <td>event.originalEvent: Browser event <br/>
                                event.value: Selection object
                            </td>
                            <td>Callback to invoke when selection changes.</td>
                        </tr>
                        <tr>
                            <td>onContextMenuSelectionChange</td>
                            <td>event.originalEvent: Browser event <br/>
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
                            <td>onVirtualScroll</td>
                            <td>event.first: Index of the first row. <br />
                                event.rows: Rows per page.</td>
                            <td>Callback to invoke during virtual scrolling.</td>
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
                            <td>rowEditorValidator</td>
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
                            <td>restoreTableState</td>
                            <td>state</td>
                            <td>Stored states can be loaded at any time using this method if there is a stateStorage property.</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <h5>Styling</h5>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                            <td>p-datatable-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-footer</td>
                            <td>Footer section.</td>
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
                            <td>p-column-filter</td>
                            <td>Filter element in header.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-scrollable-header</td>
                            <td>Container of header in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-scrollable-body</td>
                            <td>Container of body in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-scrollable-footer</td>
                            <td>Container of footer in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-responsive</td>
                            <td>Container element of a responsive datatable.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-emptymessage</td>
                            <td>Cell containing the empty message.</td>
                        </tr>
                        <tr>
                            <td>p-rowgroup-header</td>
                            <td>Header of a rowgroup.</td>
                        </tr>
                        <tr>
                            <td>p-rowgroup-footer</td>
                            <td>Footer of a rowgroup.</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Dependencies</h5>
                <p>None.</p>
            </div>

            </TabPanel>
            {
                useLiveEditorTabs({ name: 'DataTableDemo', sources: this.sources, service: 'CustomerService', data: 'customers-large', extFiles: this.extFiles })
            }
        </TabView>
    </div>
        );
    }
}
