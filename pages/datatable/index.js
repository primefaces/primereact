import React, { Component } from 'react';
import { FilterMatchMode, FilterOperator } from '../../components/lib/api/Api';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { InputText } from '../../components/lib/inputtext/InputText';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import { Button } from '../../components/lib/button/Button';
import { ProgressBar } from '../../components/lib/progressbar/ProgressBar';
import { Calendar } from '../../components/lib/calendar/Calendar';
import { MultiSelect } from '../../components/lib/multiselect/MultiSelect';
import { Slider } from '../../components/lib/slider/Slider';
import { CustomerService } from '../../service/CustomerService';
import { DataTableDoc } from '../../components/doc/datatable';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class DataTableDemo extends Component {

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
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.representativesItemTemplate = this.representativesItemTemplate.bind(this);
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
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
            <div className="flex justify-content-between align-items-center flex-wrap">
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
                <img alt="flag" src={`${this.contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    representativeBodyTemplate(rowData) {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={`${this.contextPath}/images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
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
                <img alt={option.name} src={`${this.contextPath}/images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
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
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    statusFilterTemplate(options) {
        return <Dropdown value={options.value} options={this.statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    statusItemTemplate(option) {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    activityFilterTemplate(options) {
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
            <div>
                <Head>
                    <title>React Table Component</title>
                    <meta name="description" content="DataTable displays data in tabular format" />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>
                    </div>

                    <DocActions github="datatable/index.js" />
                </div>

                <div className="content-section implementation datatable-doc-demo">
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

                <DataTableDoc></DataTableDoc>
            </div>
        );
    }
}
