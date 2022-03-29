import React, { useState, useEffect, useRef, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { CustomerService } from '../../service/CustomerService';
import { Toast } from '../../components/lib/toast/Toast';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataTableRowGroupDemo = () => {

    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const toast = useRef(null);
    const customerService = new CustomerService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        customerService.getCustomersMedium().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={`${contextPath}/images/avatar/${data.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <img alt={rowData.country.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width="30" />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={`${contextPath}/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
        <div>
            <Head>
                <title>React Table Component - Row Grouping</title>
                <meta name="description" content="Rows can either be grouped by a separate grouping row or using rowspan." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Row Grouping</span></h1>
                    <p>Rows can either be grouped by a separate grouping row or using rowspan.</p>
                </div>

                <DocActions github="datatable/rowgroup.js" />
            </div>

            <div className="content-section implementation datatable-rowgroup-demo">
                <Toast ref={toast}></Toast>

                <div className="card">
                    <h5>Subheader Grouping</h5>
                    <p>Group customers by their representative.</p>
                    <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                        rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Expandable Row Groups</h5>
                    <p>Group customers by their representative.</p>
                    <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll"
                        expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                        onRowExpand={onRowGroupExpand} onRowCollapse={onRowGroupCollapse}
                        rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                        <Column field="date" header="Date"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>RowSpan Grouping</h5>
                    <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                        <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
                        <Column field="representative.name" header="Representative" body={representativeBodyTemplate}></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                        <Column field="date" header="Date"></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableRowGroupDemoDoc></DataTableRowGroupDemoDoc>
        </div>
    );
}

export default DataTableRowGroupDemo;

export const DataTableRowGroupDemoDoc = memo(() => {

    const sources = {
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
            expandedRows: []
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
                <img alt={data.representative.name} src={\`images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <img alt={rowData.country.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
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
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                    <DataTable value={this.state.customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate} responsiveLayout="scroll">
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country" header="Country" body={this.countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Expandable Row Groups</h5>
                    <p>Group customers by their representative.</p>
                    <DataTable value={this.state.customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll"
                        expandableRowGroups expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                        onRowExpand={this.onRowGroupExpand} onRowCollapse={this.onRowGroupCollapse}
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country" header="Country" body={this.countryBodyTemplate}></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="status" header="Status" body={this.statusBodyTemplate}></Column>
                        <Column field="date" header="Date"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>RowSpan Grouping</h5>
                    <DataTable value={this.state.customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                        <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
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
                <img alt={data.representative.name} src={\`images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <img alt={rowData.country.name} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
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
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expandable Row Groups</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll"
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowGroupExpand} onRowCollapse={onRowGroupCollapse}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RowSpan Grouping</h5>
                <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                    <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
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
                <img alt={data.representative.name} src={\`images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <img alt={rowData.country.name} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
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
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expandable Row Groups</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll"
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowGroupExpand} onRowCollapse={onRowGroupCollapse}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RowSpan Grouping</h5>
                <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                    <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./DataTableDemo.css" />
        <script src="./CustomerService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Toast } = primereact.toast;

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
                <img alt={data.representative.name} src={\`images/avatar/\${data.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <img alt={rowData.country.name} src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width="30" />
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
                <img alt={rowData.representative.name} src={\`images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
                <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} responsiveLayout="scroll">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expandable Row Groups</h5>
                <p>Group customers by their representative.</p>
                <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll"
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowGroupExpand} onRowCollapse={onRowGroupCollapse}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country" body={countryBodyTemplate}></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RowSpan Grouping</h5>
                <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} responsiveLayout="scroll">
                    <Column header="#" headerStyle={{ width: '3em' }} body={(data, options) => options.rowIndex + 1}></Column>
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

    const extFiles = {
        'demo/DataTableDemo.css': {
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

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableRowGroupDemo', sources: sources, service: 'CustomerService', data: 'customers-medium', extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})
