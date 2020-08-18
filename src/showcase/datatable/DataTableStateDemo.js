import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { CustomerService } from '../service/CustomerService';
import { InputText } from '../../components/inputtext/InputText';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableStateDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            globalFilter1: null,
            globalFilter2: null,
            globalFilter3: null,
            selectedCustomer1: null,
            selectedCustomer2: null,
            selectedCustomer3: null,
            selectedRepresentative: null,
            selectedStatus: null
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
        this.onCustomSaveState = this.onCustomSaveState.bind(this);
        this.onCustomRestoreState = this.onCustomRestoreState.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersMedium().then(data => this.setState({ customers: data }));
    }

    onCustomSaveState(state) {
        window.sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    onCustomRestoreState() {
        return JSON.parse(window.sessionStorage.getItem('dt-state-demo-custom'));
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.country.code} src="showcase/demo/images/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </>
        );
    }

    representativeBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    renderHeader(globalFilterKey) {
        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => this.setState({ [`${globalFilterKey}`]: e.target.value })} placeholder="Global Search" />
            </span>
        );
    }

    render() {
        const header1 = this.renderHeader('globalFilter1');
        const header2 = this.renderHeader('globalFilter2');
        const header3 = this.renderHeader('globalFilter3');
        const representativeFilter = <MultiSelect value={this.state.selectedRepresentative} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => this.setState({ selectedRepresentative: e.value })} optionLabel="name" optionValue="name" placeholder="All" className="p-column-filter" />;
        const statusFilter = <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={(e) => this.setState({ selectedStatus: e.value })} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>State</span></h1>
                        <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again,
                            table would render the data using its last settings.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Session Storage</h5>
                        <DataTable value={this.state.customers} paginator rows={10} header={header1}
                            selection={this.state.selectedCustomer1} onSelectionChange={e => this.setState({ selectedCustomer1: e.value })} selectionMode="single" dataKey="id"
                            stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                            <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                            <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterMatchMode="contains" filterPlaceholder="Search by country"></Column>
                            <Column header="Representative" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative.name" filterMatchMode="in" filterElement={representativeFilter}></Column>
                            <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterMatchMode="equals" filterElement={statusFilter}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Local Storage</h5>
                        <DataTable value={this.state.customers} paginator rows={10} header={header2}
                            selection={this.state.selectedCustomer2} onSelectionChange={e => this.setState({ selectedCustomer2: e.value })} selectionMode="single" dataKey="id"
                            stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                            <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                            <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterMatchMode="contains" filterPlaceholder="Search by country"></Column>
                            <Column header="Representative" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative.name" filterMatchMode="in" filterElement={representativeFilter}></Column>
                            <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterMatchMode="equals" filterElement={statusFilter}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Custom Storage</h5>
                        <DataTable value={this.state.customers} paginator rows={10} header={header3}
                            selection={this.state.selectedCustomer2} onSelectionChange={e => this.setState({ selectedCustomer2: e.value })} selectionMode="single" dataKey="id"
                            stateStorage="custom" customSaveState={this.onCustomSaveState} customRestoreState={this.onCustomRestoreState} emptyMessage="No customers found.">
                            <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                            <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterMatchMode="contains" filterPlaceholder="Search by country"></Column>
                            <Column header="Representative" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative.name" filterMatchMode="in" filterElement={representativeFilter}></Column>
                            <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterMatchMode="equals" filterElement={statusFilter}></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableStateDemoDoc></DataTableStateDemoDoc>
            </div>
        );
    }
}

export class DataTableStateDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';

export class DataTableStateDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            globalFilter1: null,
            globalFilter2: null,
            globalFilter3: null,
            selectedCustomer1: null,
            selectedCustomer2: null,
            selectedCustomer3: null,
            selectedRepresentative: null,
            selectedStatus: null
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
        this.onCustomSaveState = this.onCustomSaveState.bind(this);
        this.onCustomRestoreState = this.onCustomRestoreState.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersMedium().then(data => this.setState({ customers: data }));
    }

    onCustomSaveState(state) {
        window.sessionStorage.setItem('dt-state-demo-custom', JSON.stringify(state));
    }

    onCustomRestoreState() {
        return JSON.parse(window.sessionStorage.getItem('dt-state-demo-custom'));
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.country.code} src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </>
        );
    }

    representativeBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    renderHeader(globalFilterKey) {
        return (
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => this.setState({ [\`\${globalFilterKey}\`]: e.target.value })} placeholder="Global Search" />
            </span>
        );
    }

    render() {
        const header1 = this.renderHeader('globalFilter1');
        const header2 = this.renderHeader('globalFilter2');
        const header3 = this.renderHeader('globalFilter3');
        const representativeFilter = <MultiSelect value={this.state.selectedRepresentative} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => this.setState({ selectedRepresentative: e.value })} optionLabel="name" optionValue="name" placeholder="All" className="p-column-filter" />;
        const statusFilter = <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={(e) => this.setState({ selectedStatus: e.value })} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

        return (
            <div>
                <div className="card">
                    <h5>Session Storage</h5>
                    <DataTable value={this.state.customers} paginator rows={10} header={header1}
                        selection={this.state.selectedCustomer1} onSelectionChange={e => this.setState({ selectedCustomer1: e.value })} selectionMode="single" dataKey="id"
                        stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterMatchMode="contains" filterPlaceholder="Search by country"></Column>
                        <Column header="Representative" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative.name" filterMatchMode="in" filterElement={representativeFilter}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterMatchMode="equals" filterElement={statusFilter}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Local Storage</h5>
                    <DataTable value={this.state.customers} paginator rows={10} header={header2}
                        selection={this.state.selectedCustomer2} onSelectionChange={e => this.setState({ selectedCustomer2: e.value })} selectionMode="single" dataKey="id"
                        stateStorage="local" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterMatchMode="contains" filterPlaceholder="Search by country"></Column>
                        <Column header="Representative" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative.name" filterMatchMode="in" filterElement={representativeFilter}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterMatchMode="equals" filterElement={statusFilter}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Custom Storage</h5>
                    <DataTable value={this.state.customers} paginator rows={10} header={header3}
                        selection={this.state.selectedCustomer2} onSelectionChange={e => this.setState({ selectedCustomer2: e.value })} selectionMode="single" dataKey="id"
                        stateStorage="custom" customSaveState={this.onCustomSaveState} customRestoreState={this.onCustomRestoreState} emptyMessage="No customers found.">
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column header="Country" body={this.countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterMatchMode="contains" filterPlaceholder="Search by country"></Column>
                        <Column header="Representative" body={this.representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative.name" filterMatchMode="in" filterElement={representativeFilter}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterMatchMode="equals" filterElement={statusFilter}></Column>
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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableStateDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);
    const [selectedCars1, setSelectedCars1] = useState(null);
    const [selectedCars2, setSelectedCars2] = useState(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const displaySelection = (data) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    return (
        <div>
            <h3>Session Storage</h3>
            <DataTable value={cars1} selectionMode="multiple" resizableColumns footer={displaySelection(selectedCars1)}
                selection={selectedCars1} onSelectionChange={e => setSelectedCars1(e.value)} paginator rows={10} stateKey="tablestatedemo-session">
                <Column field="vin" header="Vin" sortable filter/>
                <Column field="year" header="Year" sortable filter/>
                <Column field="brand" header="Brand" sortable filter/>
                <Column field="color" header="Color" sortable filter/>
            </DataTable>

            <h3>Local Storage</h3>
            <DataTable value={cars2} selectionMode="multiple" resizableColumns footer={displaySelection(selectedCars2)}
                selection={selectedCars2} onSelectionChange={e => setSelectedCars2(e.value)} paginator rows={10}
                stateStorage="local" stateKey="tablestatedemo-local">
                <Column field="vin" header="Vin" sortable filter/>
                <Column field="year" header="Year" sortable filter/>
                <Column field="brand" header="Brand" sortable filter/>
                <Column field="color" header="Color" sortable filter/>
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableStateDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);
    const [selectedCars1, setSelectedCars1] = useState(null);
    const [selectedCars2, setSelectedCars2] = useState(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const displaySelection = (data: any) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    return (
        <div>
            <h3>Session Storage</h3>
            <DataTable value={cars1} selectionMode="multiple" resizableColumns footer={displaySelection(selectedCars1)}
                selection={selectedCars1} onSelectionChange={e => setSelectedCars1(e.value)} paginator rows={10} stateKey="tablestatedemo-session">
                <Column field="vin" header="Vin" sortable filter/>
                <Column field="year" header="Year" sortable filter/>
                <Column field="brand" header="Brand" sortable filter/>
                <Column field="color" header="Color" sortable filter/>
            </DataTable>

            <h3>Local Storage</h3>
            <DataTable value={cars2} selectionMode="multiple" resizableColumns footer={displaySelection(selectedCars2)}
                selection={selectedCars2} onSelectionChange={e => setSelectedCars2(e.value)} paginator rows={10}
                stateStorage="local" stateKey="tablestatedemo-local">
                <Column field="vin" header="Vin" sortable filter/>
                <Column field="year" header="Year" sortable filter/>
                <Column field="brand" header="Brand" sortable filter/>
                <Column field="color" header="Color" sortable filter/>
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
                        <LiveEditor name="DataTableStateDemo" sources={this.sources} service="CarService" data="cars-medium" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
