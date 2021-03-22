import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Toast } from '../../components/toast/Toast';
import { CustomerService } from '../service/CustomerService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
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
            <React.Fragment>
                <img alt={data.representative.name} src={`showcase/demo/images/avatar/${data.representative.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    footerTemplate(data) {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{this.calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    representativeBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
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
import { Toast } from 'primereact/toast';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

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
            <React.Fragment>
                <img alt={data.representative.name} src={\`showcase/demo/images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    footerTemplate(data) {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{this.calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    representativeBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
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
            <div className="datatable-rowgroup-demo">
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
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableRowGroupDemo = () => {
    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const toast = useRef(null);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`showcase/demo/images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        )
    }

    const onRowGroupExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const onRowGroupCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    return (
        <div className="datatable-rowgroup-demo">
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Subheader Grouping</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupField="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expandable Row Groups</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupField="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowGroupExpand} onRowCollapse={onRowGroupCollapse}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RowSpan Grouping</h5>
                <DataTable value={customers} rowGroupMode="rowspan" groupField="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}>
                    <Column header="#" headerStyle={{ width: '3em' }} body={(data, props) => props.rowIndex + 1}></Column>
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate}></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableRowGroupDemo = () => {
    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const toast = useRef(null);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`showcase/demo/images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{data.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        )
    }

    const onRowGroupExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const onRowGroupCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    return (
        <div className="datatable-rowgroup-demo">
            <Toast ref={toast}></Toast>
            <div className="card">
                <h5>Subheader Grouping</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupField="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expandable Row Groups</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupField="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowGroupExpand} onRowCollapse={onRowGroupCollapse}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RowSpan Grouping</h5>
                <DataTable value={customers} rowGroupMode="rowspan" groupField="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}>
                    <Column header="#" headerStyle={{ width: '3em' }} body={(data, props) => props.rowIndex + 1}></Column>
                    <Column field="representative.name" header="Representative" body={representativeBodyTemplate}></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>
        </div>
    );
}
                `
            }
        };

        this.extFiles = {
            'src/demo/DataTableDemo.css': {
                content: `
.datatable-rowgroup-demo .p-rowgroup-footer td {
    font-weight: 700;
}

.datatable-rowgroup-demo .p-rowgroup-header span {
    font-weight: 700;
}

.datatable-rowgroup-demo .p-rowgroup-header .p-row-toggler {
    vertical-align: middle;
    margin-right: .25rem;
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
                    {
                        useLiveEditorTabs({ name: 'DataTableRowGroupDemo', sources: this.sources, service: 'CustomerService', data: 'customers-medium', extFiles: this.extFiles  })
                    }
                </TabView>
            </div>
        )
    }
}
