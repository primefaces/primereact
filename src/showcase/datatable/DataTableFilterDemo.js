import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { CustomerService } from '../service/CustomerService';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { ProgressBar } from '../../components/progressbar/ProgressBar';
import { Calendar } from '../../components/calendar/Calendar';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DataTableFilterDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: null,
            loading: false,
            selectedRepresentative: null,
            selectedDate: null,
            selectedStatus: null,
            globalFilter: null
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
        ]

        this.customerService = new CustomerService();
        this.representativesItemTemplate = this.representativesItemTemplate.bind(this);
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.onRepresentativesChange = this.onRepresentativesChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.filterDate = this.filterDate.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({ customers: data }));
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

    onRepresentativesChange(e) {
        this.dt.filter(e.value, 'representative.name', 'in');
        this.setState({ selectedRepresentative: e.value });
    }

    onDateChange(e) {
        this.dt.filter(e.value, 'date', 'custom');
        this.setState({ selectedDate: e.value });
    }

    onStatusChange(e) {
        this.dt.filter(e.value, 'status', 'equals');
        this.setState({ selectedStatus: e.value })
    }

    nameBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Country</span>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </>
        );
    }

    representativeBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{rowData.representative.name}</span>
            </>
        );
    }

    dateBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </>
        );
    }

    statusBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>
            </>
        );
    }

    activityBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </>
        );
    }

    representativesItemTemplate(option) {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`showcase/demo/images/avatar/${option.image}`} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    statusItemTemplate(option) {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    render() {
        const header = (
            <div className="table-header">
                List of Customers
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
                </span>
            </div>
        );

        const representativeFilter = <MultiSelect value={this.state.selectedRepresentative} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={this.onRepresentativesChange} optionLabel="name" optionValue="name" placeholder="All" className="p-column-filter" />;
        const dateFilter = <Calendar value={this.state.selectedDate} onChange={this.onDateChange} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date"/>;
        const statusFilter = <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={this.onStatusChange} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Filter</span></h1>
                        <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                            property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword.
                            By default input fields are generated as filter elements and using templating any component can be used as a filter.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-filter-demo">
                    <div className="card">
                        <DataTable ref={(el) => this.dt = el} value={this.state.customers} paginator rows={10}
                            header={header} className="p-datatable-customers"
                            globalFilter={this.state.globalFilter} emptyMessage="No customers found." loading={this.state.loading}>
                            <Column field="name" header="Name" body={this.nameBodyTemplate} filter filterPlaceholder="Search by name" />
                            <Column field="country" header="Country" body={this.countryBodyTemplate} filter filterPlaceholder="Search by country" filterMatchMode="contains" />
                            <Column field="representative.name" header="Representative" body={this.representativeBodyTemplate} filter filterElement={representativeFilter} />
                            <Column field="date" header="Date" body={this.dateBodyTemplate} filter filterElement={dateFilter} filterFunction={this.filterDate} />
                            <Column field="status" header="Status" body={this.statusBodyTemplate} filter filterElement={statusFilter}/>
                            <Column field="activity" header="Activity" body={this.activityBodyTemplate} filter filterPlaceholder="Minimum" filterMatchMode="gte" />
                        </DataTable>
                    </div>
                </div>

                <DataTableFilterDemoDoc></DataTableFilterDemoDoc>
            </div>
        );
    }
}

export class DataTableFilterDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { CustomerService } from '../service/CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';

export class DataTableFilterDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: null,
            loading: false,
            selectedRepresentative: null,
            selectedDate: null,
            selectedStatus: null,
            globalFilter: null
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
        ]

        this.customerService = new CustomerService();
        this.representativesItemTemplate = this.representativesItemTemplate.bind(this);
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.onRepresentativesChange = this.onRepresentativesChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.filterDate = this.filterDate.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({ customers: data }));
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

    onRepresentativesChange(e) {
        this.dt.filter(e.value, 'representative.name', 'in');
        this.setState({ selectedRepresentative: e.value });
    }

    onDateChange(e) {
        this.dt.filter(e.value, 'date', 'custom');
        this.setState({ selectedDate: e.value });
    }

    onStatusChange(e) {
        this.dt.filter(e.value, 'status', 'equals');
        this.setState({ selectedStatus: e.value })
    }

    nameBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Country</span>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </>
        );
    }

    representativeBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{rowData.representative.name}</span>
            </>
        );
    }

    dateBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </>
        );
    }

    statusBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>
            </>
        );
    }

    activityBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </>
        );
    }

    representativesItemTemplate(option) {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`showcase/demo/images/avatar/\${option.image}\`} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    statusItemTemplate(option) {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    render() {
        const header = (
            <div className="table-header">
                List of Customers
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
                </span>
            </div>
        );

        const representativeFilter = <MultiSelect value={this.state.selectedRepresentative} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => this.setState({ selectedRepresentative: e.value })} optionLabel="name" optionValue="name" placeholder="All" className="p-column-filter" />;
        const dateFilter = <Calendar value={this.state.selectedDate} onChange={(e) => this.setState({ selectedDate: e.value })} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date"/>;
        const statusFilter = <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={(e) => this.setState({ selectedStatus: e.value })} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

        return (
            <div className="datatable-filter-demo">
                <div className="card">
                    <DataTable ref={(el) => this.dt = el} value={this.state.customers} paginator rows={10}
                        header={header} className="p-datatable-customers"
                        globalFilter={this.state.globalFilter} emptyMessage="No customers found." loading={this.state.loading}>
                        <Column field="name" header="Name" body={this.nameBodyTemplate} filter filterPlaceholder="Search by name" />
                        <Column field="country" header="Country" body={this.countryBodyTemplate} filter filterPlaceholder="Search by country" filterMatchMode="contains" />
                        <Column field="representative.name" header="Representative" body={this.representativeBodyTemplate} filter filterElement={representativeFilter} />
                        <Column field="date" header="Date" body={this.dateBodyTemplate} filter filterElement={dateFilter} filterFunction={this.filterDate} />
                        <Column field="status" header="Status" body={this.statusBodyTemplate} filter filterElement={statusFilter}/>
                        <Column field="activity" header="Activity" body={this.activityBodyTemplate} filter filterPlaceholder="Minimum" filterMatchMode="gte" />
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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {CarService} from '../service/CarService';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';

const DataTableFilterDemo = () => {
    const [cars, setCars] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedColors, setSelectedColors] = useState(null);

    const brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    const colors = [
        {label: 'White', value: 'White'},
        {label: 'Green', value: 'Green'},
        {label: 'Silver', value: 'Silver'},
        {label: 'Black', value: 'Black'},
        {label: 'Red', value: 'Red'},
        {label: 'Maroon', value: 'Maroon'},
        {label: 'Brown', value: 'Brown'},
        {label: 'Orange', value: 'Orange'},
        {label: 'Blue', value: 'Blue'}
    ];

    const carservice = new CarService();
    let dt = useRef(null);

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onBrandChange = (event) => {
        dt.current.filter(event.value, 'brand', 'equals');
        setSelectedBrand(event.value);
    };

    const onColorChange = (event) => {
        dt.current.filter(event.value, 'color', 'in');
        setSelectedColors(event.value);
    };

    const header = (
        <div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50"/>
        </div>
    );

    const brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={selectedBrand} options={brands} onChange={onBrandChange} showClear />;
    const colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select Colors" value={selectedColors} options={colors} onChange={onColorChange} />;

    return (
        <div>
            <DataTable ref={dt} value={cars} paginator rows={10} header={header}
                globalFilter={globalFilter} emptyMessage="No records found">
                <Column field="vin" header="Vin" filter filterPlaceholder="Vin starts with"/>
                <Column field="year" header="Year" filter filterPlaceholder="Year contains" filterMatchMode="contains" />
                <Column field="brand" header="Brand" filter filterElement={brandFilter} />
                <Column field="color" header="Color" filter filterElement={colorFilter} />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {CarService} from '../service/CarService';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';

const DataTableFilterDemo = () => {
    const [cars, setCars] = useState([]);
    const [globalFilter, setGlobalFilter] = useState<any>(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedColors, setSelectedColors] = useState(null);

    const brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    const colors = [
        {label: 'White', value: 'White'},
        {label: 'Green', value: 'Green'},
        {label: 'Silver', value: 'Silver'},
        {label: 'Black', value: 'Black'},
        {label: 'Red', value: 'Red'},
        {label: 'Maroon', value: 'Maroon'},
        {label: 'Brown', value: 'Brown'},
        {label: 'Orange', value: 'Orange'},
        {label: 'Blue', value: 'Blue'}
    ];

    const carservice = new CarService();
    let dt = useRef<any>(null);

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onBrandChange = (event: any) => {
        dt.current.filter(event.value, 'brand', 'equals');
        setSelectedBrand(event.value);
    };

    const onColorChange = (event: any) => {
        dt.current.filter(event.value, 'color', 'in');
        setSelectedColors(event.value);
    };

    const header = (
        <div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Global Search" size="50"/>
        </div>
    );

    const brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={selectedBrand} options={brands} onChange={onBrandChange} showClear />;
    const colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select Colors" value={selectedColors} options={colors} onChange={onColorChange} />;

    return (
        <div>
            <DataTable ref={dt} value={cars} paginator rows={10} header={header}
                globalFilter={globalFilter} emptyMessage="No records found">
                <Column field="vin" header="Vin" filter filterPlaceholder="Vin starts with"/>
                <Column field="year" header="Year" filter filterPlaceholder="Year contains" filterMatchMode="contains" />
                <Column field="brand" header="Brand" filter filterElement={brandFilter} />
                <Column field="color" header="Color" filter filterElement={colorFilter} />
            </DataTable>
        </div>
    );
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
                    <TabPanel header="Source">
                        <LiveEditor name="DataTableFilterDemo" sources={this.sources} service="CarService" data="cars-large" />
<CodeHighlight lang="scss">
{`
.datatable-filter-demo {
    .p-paginator {
        .p-paginator-current {
            margin-left: auto;
        }
    }

    .p-progressbar {
        height: .5rem;
        background-color: #D8DADC;

        .p-progressbar-value {
            background-color: #607D8B;
        }
    }

    .table-header {
        display: flex;
        justify-content: space-between;
    }

    .p-datepicker {
        min-width: 25rem;

        td {
            font-weight: 400;
        }
    }

    .p-datatable.p-datatable-customers {
        .p-datatable-header {
            padding: 1rem;
            text-align: left;
            font-size: 1.5rem;
        }

        .p-paginator {
            padding: 1rem;
        }

        .p-datatable-thead > tr > th {
            text-align: left;
        }

        .p-datatable-tbody > tr > td {
            cursor: auto;
        }

        .p-dropdown-label:not(.p-placeholder) {
            text-transform: uppercase;
        }
    }

    /* Responsive */
    .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
        display: none;
    }

    @media screen and (max-width: 960px) {
        .p-datatable {
            &.p-datatable-customers {
                .p-datatable-thead > tr > th,
                .p-datatable-tfoot > tr > td {
                    display: none !important;
                }

                .p-datatable-tbody > tr {
                    border-bottom: 1px solid var(--layer-2);

                    > td {
                        text-align: left;
                        display: block;
                        border: 0 none !important;
                        width: 100% !important;
                        float: left;
                        clear: left;
                        border: 0 none;

                        .p-column-title {
                            padding: .4rem;
                            min-width: 30%;
                            display: inline-block;
                            margin: -.4rem 1rem -.4rem -.4rem;
                            font-weight: bold;
                        }

                        .p-progressbar {
                            margin-top: .5rem;
                        }
                    }
                }
            }
        }
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
