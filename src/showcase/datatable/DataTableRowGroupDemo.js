import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Toast } from '../../components/toast/Toast';
import { CustomerService } from '../service/CustomerService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataTableDemo.scss';

export class DataTableRowGroupDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            expandedRowGroups: []
        };

        this.customerService = new CustomerService();
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.onRowGroupExpand = this.onRowGroupExpand.bind(this);
        this.onRowGroupCollapse = this.onRowGroupCollapse.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersMedium().then(data => this.setState({ customers: data }));
    }

    headerTemplate(data) {
        return (
            <>
                <img alt={data.representative.name} src={`showcase/demo/images/avatar/${data.representative.image}`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </>
        );
    }

    footerTemplate(data) {
        return (
            <>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{this.calculateCustomerTotal(data.representative.name)}</td>
            </>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    representativeBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </>
        )
    }

    onRowGroupExpand(event) {
        this.toast.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    onRowGroupCollapse(event) {
        this.toast.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    calculateCustomerTotal(name) {
        let total = 0;

        if (this.state.customers) {
            for (let customer of this.state.customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Row Grouping</span></h1>
                        <p>Rows can either be grouped by a separate grouping row or using rowspan.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-rowgroup-demo">
                    <Toast ref={(el) => this.toast = el}></Toast>

                    <div className="card">
                        <h5>Subheader Grouping</h5>
                        <p>Group customers by their representative.</p>
                        <DataTable value={this.state.customers} rowGroupMode="subheader" groupField="representative.name"
                            sortMode="single" sortField="representative.name" sortOrder={1}
                            rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                            <Column field="representative.name" header="Representative"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                            <Column field="company" header="Company"></Column>
                            <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                            <Column field="date" header="Date"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Expandable Row Groups</h5>
                        <p>Group customers by their representative.</p>
                        <DataTable value={this.state.customers} rowGroupMode="subheader" groupField="representative.name"
                            sortMode="single" sortField="representative.name" sortOrder={1}
                            expandableRowGroups expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                            onRowExpand={this.onRowGroupExpand} onRowCollapse={this.onRowGroupCollapse}
                            rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                            <Column field="representative.name" header="Representative"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                            <Column field="company" header="Company"></Column>
                            <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                            <Column field="date" header="Date"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>RowSpan Grouping</h5>
                        <DataTable value={this.state.customers} rowGroupMode="rowspan" groupField="representative.name"
                            sortMode="single" sortField="representative.name" sortOrder={1}>
                            <Column header="#" headerStyle={{ width: '3em' }} body={(data, props) => props.rowIndex + 1}></Column>
                            <Column field="representative.name" header="Representative" body={this.representativeBodyTemplate}></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                            <Column field="company" header="Company"></Column>
                            <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                            <Column field="date" header="Date"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableColGroupDemoDoc></DataTableColGroupDemoDoc>
            </div>
        );
    }
}

export class DataTableColGroupDemoDoc extends Component {

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

export class DataTableRowGroupDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            expandedRowGroups: []
        };

        this.customerService = new CustomerService();
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.onRowGroupExpand = this.onRowGroupExpand.bind(this);
        this.onRowGroupCollapse = this.onRowGroupCollapse.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersMedium().then(data => this.setState({ customers: data }));
    }

    headerTemplate(data) {
        return (
            <>
                <img alt={data.representative.name} src={\`showcase/demo/images/avatar/\${data.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </>
        );
    }

    footerTemplate(data) {
        return (
            <>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{this.calculateCustomerTotal(data.representative.name)}</td>
            </>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    representativeBodyTemplate(rowData) {
        return (
            <>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </>
        )
    }

    onRowGroupExpand(event) {
        this.toast.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    onRowGroupCollapse(event) {
        this.toast.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    calculateCustomerTotal(name) {
        let total = 0;

        if (this.state.customers) {
            for (let customer of this.state.customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Subheader Grouping</h5>
                    <p>Group customers by their representative.</p>
                    <DataTable value={this.state.customers} rowGroupMode="subheader" groupField="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1}
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                        <Column field="representative.name" header="Representative"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                        <Column field="date" header="Date"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Expandable Row Groups</h5>
                    <p>Group customers by their representative.</p>
                    <DataTable value={this.state.customers} rowGroupMode="subheader" groupField="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1}
                        expandableRowGroups expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                        onRowExpand={this.onRowGroupExpand} onRowCollapse={this.onRowGroupCollapse}
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                        <Column field="representative.name" header="Representative"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                        <Column field="date" header="Date"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>RowSpan Grouping</h5>
                    <DataTable value={this.state.customers} rowGroupMode="rowspan" groupField="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1}>
                        <Column header="#" headerStyle={{ width: '3em' }} body={(data, props) => props.rowIndex + 1}></Column>
                        <Column field="representative.name" header="Representative" body={this.representativeBodyTemplate}></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                        <Column field="date" header="Date"></Column>
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

const DataTableRowGroupDemo = () => {
    const [car, setCar] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return data.brand;
    };

    const footerTemplate = (data, index) => {
        return (
            <>
                <td key={data.brand + '_footerTotalLabel'} colSpan={3} style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{calculateGroupTotal(data.brand)}</td>
            </>
        );
    };

    const calculateGroupTotal = (brand) => {
        let total = 0;

        if (cars) {
            for (let car of cars) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    };

    return (
        <div>
            <DataTable header="Toggleable Row Groups" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}
                expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="SubHeader" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} style={{marginTop:'30px'}}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="RowSpan" value={cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                style={{marginTop:'30px'}}>
                <Column field="brand" header="Brand" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="vin" header="Vin" />
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

const DataTableRowGroupDemo = () => {
    const [cars, setCars] = useState<any>([]);
    const [expandedRows, setExpandedRows] = useState<any>([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data: any) => {
        return data.brand;
    };

    const footerTemplate = (data: any, index: number) => {
        return (
            <>
                <td key={data.brand + '_footerTotalLabel'} colSpan={3} style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{calculateGroupTotal(data.brand)}</td>
            </>
        );
    };

    const calculateGroupTotal = (brand: string) => {
        let total = 0;

        if (cars) {
            for (let car of cars) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    };

    return (
        <div>
            <DataTable header="Toggleable Row Groups" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}
                expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="SubHeader" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} style={{marginTop:'30px'}}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="RowSpan" value={cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                style={{marginTop:'30px'}}>
                <Column field="brand" header="Brand" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="vin" header="Vin" />
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
                        <LiveEditor name="DataTableRowGroupDemo" sources={this.sources} service="CarService" data="cars-medium" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
