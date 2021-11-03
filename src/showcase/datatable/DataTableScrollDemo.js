import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Button } from '../../components/button/Button';
import { Dialog } from '../../components/dialog/Dialog';
import { ToggleButton } from '../../components/togglebutton/ToggleButton';
import { CustomerService } from '../service/CustomerService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';
import './DataTableDemo.scss';

export class DataTableScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers1: [],
            customers2: [],
            customersGrouped: null,
            lockedCustomers: [],
            unlockedCustomers: null,
            loading: false,
            dialogVisible: false,
            balanceFrozen: false
        };

        this.customerService = new CustomerService();
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.dialogFooterTemplate = this.dialogFooterTemplate.bind(this);
        this.balanceTemplate1 = this.balanceTemplate1.bind(this);
        this.balanceTemplate2 = this.balanceTemplate2.bind(this);
        this.lockTemplate = this.lockTemplate.bind(this);
        this.countryTemplate = this.countryTemplate.bind(this);
        this.statusTemplate = this.statusTemplate.bind(this);
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
    }

    openDialog() {
        this.setState({ dialogVisible: true });
    }

    closeDialog() {
        this.setState({ dialogVisible: false });
    }

    dialogFooterTemplate() {
        return <Button label="Ok" icon="pi pi-check" onClick={this.closeDialog} />
    }

    balanceTemplate1(rowData) {
        return this.formatCurrency(rowData.balance);
    }

    balanceTemplate2(rowData) {
        return (
            <span className="p-text-bold">
                {this.formatCurrency(rowData.balance)}
            </span>
        )
    }

    lockTemplate(rowData, options) {
        const icon = options.frozenRow ? 'pi pi-lock-open' : 'pi pi-lock';
        const disabled = options.frozenRow ? false : this.state.lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => this.toggleLock(rowData, options.frozenRow, options.rowIndex)} />
    }

    countryTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    statusTemplate(rowData) {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    headerTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    footerTemplate(rowData) {
        return <td className="p-text-bold">Total Customers: {this.calculateCustomerTotal(rowData.representative.name)}</td>;
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    calculateCustomerTotal(name) {
        let total = 0;

        if (this.state.customersGrouped) {
            for (let customer of this.state.customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    toggleLock(data, frozen, index) {
        let lockedCustomers, unlockedCustomers;

        if (frozen) {
            lockedCustomers = this.state.lockedCustomers.filter((c, i) => i !== index);
            unlockedCustomers = [...this.state.unlockedCustomers, data];
        }
        else {
            unlockedCustomers = this.state.unlockedCustomers.filter((c, i) => i !== index);
            lockedCustomers = [...this.state.lockedCustomers, data];
        }

        unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        this.setState({ lockedCustomers, unlockedCustomers });
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.customerService.getCustomersLarge().then(data => this.setState({ customers1: data, loading: false }));
        this.customerService.getCustomersMedium().then(data => this.setState({ customers2: data }));
        this.customerService.getCustomersMedium().then(data => this.setState({ unlockedCustomers: data }));
        this.customerService.getCustomersMedium().then(data => this.setState({ customersGrouped: data }));

        this.setState({
            lockedCustomers: [
                {
                    id: 5135,
                    name: "Geraldine Bisset",
                    country: {
                        name: "France",
                        code: "fr"
                    },
                    company: "Bisset Group",
                    status: "proposal",
                    date: "2019-05-05",
                    activity: 0,
                    representative: {
                        name: "Amy Elsner",
                        image: "amyelsner.png"
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Scroll</span></h1>
                        <p>Data scrolling with fixed header is available horizontally, vertically or both. ScrollHeight and ScrollWidth values can either be fixed pixels or percentages. Certain columns can be fixed as well.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="datatable/DataTableScrollDemo.js" />
                </div>

                <div className="content-section implementation datatable-scroll-demo">
                    <div className="card">
                        <h5>Vertical</h5>
                        <DataTable value={this.state.customers1} scrollable scrollHeight="400px" loading={this.state.loading}>
                            <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                            <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                            <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                            <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Flexible Scroll</h5>
                        <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                            Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                        <Button label="Show" icon="pi pi-external-link" onClick={this.openDialog} />
                    </div>

                    <Dialog header="Flex Scroll" visible={this.state.dialogVisible} style={{ width: '75vw' }} maximizable modal
                        contentStyle={{ height: '300px' }} onHide={this.closeDialog} footer={this.dialogFooterTemplate}>
                        <DataTable value={this.state.customers1} scrollable scrollHeight="flex">
                            <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                            <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                            <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                            <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                        </DataTable>
                    </Dialog>

                    <div className="card">
                        <h5>Horizontal and Vertical with Footer</h5>
                        <DataTable value={this.state.customers2} scrollable scrollHeight="400px" loading={this.state.loading} scrollDirection="both">
                            <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                            <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="balance" header="Balance" footer="Balance" body={this.balanceTemplate1} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Frozen Rows</h5>
                        <DataTable value={this.state.unlockedCustomers} frozenValue={this.state.lockedCustomers} scrollable scrollHeight="400px" loading={this.state.loading}>
                            <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                            <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                            <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                            <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                            <Column style={{ flex: '0 0 4rem' }} body={this.lockTemplate}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Frozen Columns</h5>
                        <ToggleButton checked={this.state.balanceFrozen} onChange={(e) => this.setState({ balanceFrozen: e.value })} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

                        <DataTable value={this.state.customers2} scrollable scrollHeight="400px" loading={this.state.loading} scrollDirection="both" className="p-mt-3">
                            <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                            <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                            <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="country.name" header="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="date" header="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="company" header="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="status" header="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="activity" header="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="representative.name" header="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                            <Column field="balance" header="Balance" body={this.balanceTemplate2} style={{ flexGrow: 1, flexBasis: '120px' }} alignFrozen="right" frozen={this.state.balanceFrozen}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Subheader Grouping</h5>
                        <DataTable value={this.state.customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                            sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                            rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                            <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                            <Column field="country" header="Country" body={this.countryTemplate} style={{ minWidth: '200px' }}></Column>
                            <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                            <Column field="status" header="Status" body={this.statusTemplate} style={{ minWidth: '200px' }}></Column>
                            <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableScrollDemoDoc></DataTableScrollDemoDoc>
            </div>
        );
    }
}

export class DataTableScrollDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

export class DataTableScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers1: [],
            customers2: [],
            customersGrouped: null,
            lockedCustomers: [],
            unlockedCustomers: null,
            loading: false,
            dialogVisible: false,
            balanceFrozen: false
        };

        this.customerService = new CustomerService();
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.dialogFooterTemplate = this.dialogFooterTemplate.bind(this);
        this.balanceTemplate1 = this.balanceTemplate1.bind(this);
        this.balanceTemplate2 = this.balanceTemplate2.bind(this);
        this.lockTemplate = this.lockTemplate.bind(this);
        this.countryTemplate = this.countryTemplate.bind(this);
        this.statusTemplate = this.statusTemplate.bind(this);
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
    }

    openDialog() {
        this.setState({ dialogVisible: true });
    }

    closeDialog() {
        this.setState({ dialogVisible: false });
    }

    dialogFooterTemplate() {
        return <Button label="Ok" icon="pi pi-check" onClick={this.closeDialog} />
    }

    balanceTemplate1(rowData) {
        return this.formatCurrency(rowData.balance);
    }

    balanceTemplate2(rowData) {
        return (
            <span className="p-text-bold">
                {this.formatCurrency(rowData.balance)}
            </span>
        )
    }

    lockTemplate(rowData, options) {
        const icon = options.frozenRow ? 'pi pi-lock-open' : 'pi pi-lock';
        const disabled = options.frozenRow ? false : this.state.lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => this.toggleLock(rowData, options.frozenRow, options.rowIndex)} />
    }

    countryTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    statusTemplate(rowData) {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    headerTemplate(rowData) {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    footerTemplate(rowData) {
        return <td className="p-text-bold">Total Customers: {this.calculateCustomerTotal(rowData.representative.name)}</td>;
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    calculateCustomerTotal(name) {
        let total = 0;

        if (this.state.customersGrouped) {
            for (let customer of this.state.customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    toggleLock(data, frozen, index) {
        let lockedCustomers, unlockedCustomers;

        if (frozen) {
            lockedCustomers = this.state.lockedCustomers.filter((c, i) => i !== index);
            unlockedCustomers = [...this.state.unlockedCustomers, data];
        }
        else {
            unlockedCustomers = this.state.unlockedCustomers.filter((c, i) => i !== index);
            lockedCustomers = [...this.state.lockedCustomers, data];
        }

        unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        this.setState({ lockedCustomers, unlockedCustomers });
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.customerService.getCustomersLarge().then(data => this.setState({ customers1: data, loading: false }));
        this.customerService.getCustomersMedium().then(data => this.setState({ customers2: data }));
        this.customerService.getCustomersMedium().then(data => this.setState({ unlockedCustomers: data }));
        this.customerService.getCustomersMedium().then(data => this.setState({ customersGrouped: data }));

        this.setState({
            lockedCustomers: [
                {
                    id: 5135,
                    name: "Geraldine Bisset",
                    country: {
                        name: "France",
                        code: "fr"
                    },
                    company: "Bisset Group",
                    status: "proposal",
                    date: "2019-05-05",
                    activity: 0,
                    representative: {
                        name: "Amy Elsner",
                        image: "amyelsner.png"
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div className="datatable-scroll-demo">
                <div className="card">
                    <h5>Vertical</h5>
                    <DataTable value={this.state.customers1} scrollable scrollHeight="400px" loading={this.state.loading}>
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                        <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Flexible Scroll</h5>
                    <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                        Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                    <Button label="Show" icon="pi pi-external-link" onClick={this.openDialog} />
                </div>

                <Dialog header="Flex Scroll" visible={this.state.dialogVisible} style={{ width: '75vw' }} maximizable modal
                    contentStyle={{ height: '300px' }} onHide={this.closeDialog} footer={this.dialogFooterTemplate}>
                    <DataTable value={this.state.customers1} scrollable scrollHeight="flex">
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                        <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </Dialog>

                <div className="card">
                    <h5>Horizontal and Vertical with Footer</h5>
                    <DataTable value={this.state.customers2} scrollable scrollHeight="400px" loading={this.state.loading} scrollDirection="both">
                        <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                        <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="balance" header="Balance" footer="Balance" body={this.balanceTemplate1} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Frozen Rows</h5>
                    <DataTable value={this.state.unlockedCustomers} frozenValue={this.state.lockedCustomers} scrollable scrollHeight="400px" loading={this.state.loading}>
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                        <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                        <Column style={{ flex: '0 0 4rem' }} body={this.lockTemplate}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Frozen Columns</h5>
                    <ToggleButton checked={this.state.balanceFrozen} onChange={(e) => this.setState({ balanceFrozen: e.value })} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

                    <DataTable value={this.state.customers2} scrollable scrollHeight="400px" loading={this.state.loading} scrollDirection="both" className="p-mt-3">
                        <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                        <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                        <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="country.name" header="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="date" header="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="company" header="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="status" header="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="activity" header="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="representative.name" header="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="balance" header="Balance" body={this.balanceTemplate2} style={{ flexGrow: 1, flexBasis: '120px' }} alignFrozen="right" frozen={this.state.balanceFrozen}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Subheader Grouping</h5>
                    <DataTable value={this.state.customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                        sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="country" header="Country" body={this.countryTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                        <Column field="status" header="Status" body={this.statusTemplate} style={{ minWidth: '200px' }}></Column>
                        <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
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
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableScrollDemo = () => {

    const [customers1, setCustomers1] = useState([]);
    const [customers2, setCustomers2] = useState([]);
    const [customersGrouped, setCustomersGrouped] = useState(null);
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then(data => { setCustomers1(data); setLoading(false); });
        customerService.getCustomersMedium().then(data => { setCustomers2(data) });
        customerService.getCustomersMedium().then(data => { setUnlockedCustomers(data) });
        customerService.getCustomersMedium().then(data => { setCustomersGrouped(data) });

        setLockedCustomers([
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openDialog = () => {
        setDialogVisible(true);
    }

    const closeDialog = () => {
        setDialogVisible(false);
    }

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />
    }

    const balanceTemplate1 = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceTemplate2 = (rowData) => {
        return (
            <span className="p-text-bold">
                {formatCurrency(rowData.balance)}
            </span>
        )
    }

    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock-open' : 'pi pi-lock';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />
    }

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (rowData) => {
        return <td className="p-text-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customersGrouped) {
            for (let customer of customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...unlockedCustomers, data];
        }
        else {
            _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    }

    return (
        <div className="datatable-scroll-demo">
            <div className="card">
                <h5>Vertical</h5>
                <DataTable value={customers1} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
            </div>

            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal
                contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
                <DataTable value={customers1} scrollable scrollHeight="flex">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </Dialog>

            <div className="card">
                <h5>Horizontal and Vertical with Footer</h5>
                <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both">
                    <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate1} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Rows</h5>
                <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

                <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="p-mt-3">
                    <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                    <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" body={balanceTemplate2} style={{ flexGrow: 1, flexBasis: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Subheader Grouping</h5>
                <DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
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
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableScrollDemo = () => {

    const [customers1, setCustomers1] = useState([]);
    const [customers2, setCustomers2] = useState([]);
    const [customersGrouped, setCustomersGrouped] = useState(null);
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then(data => { setCustomers1(data); setLoading(false); });
        customerService.getCustomersMedium().then(data => { setCustomers2(data) });
        customerService.getCustomersMedium().then(data => { setUnlockedCustomers(data) });
        customerService.getCustomersMedium().then(data => { setCustomersGrouped(data) });

        setLockedCustomers([
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openDialog = () => {
        setDialogVisible(true);
    }

    const closeDialog = () => {
        setDialogVisible(false);
    }

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />
    }

    const balanceTemplate1 = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceTemplate2 = (rowData) => {
        return (
            <span className="p-text-bold">
                {formatCurrency(rowData.balance)}
            </span>
        )
    }

    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock-open' : 'pi pi-lock';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />
    }

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (rowData) => {
        return <td className="p-text-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customersGrouped) {
            for (let customer of customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...unlockedCustomers, data];
        }
        else {
            _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    }

    return (
        <div className="datatable-scroll-demo">
            <div className="card">
                <h5>Vertical</h5>
                <DataTable value={customers1} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
            </div>

            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal
                contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
                <DataTable value={customers1} scrollable scrollHeight="flex">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </Dialog>

            <div className="card">
                <h5>Horizontal and Vertical with Footer</h5>
                <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both">
                    <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate1} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Rows</h5>
                <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

                <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="p-mt-3">
                    <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                    <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" body={balanceTemplate2} style={{ flexGrow: 1, flexBasis: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Subheader Grouping</h5>
                <DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
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
        <script src="https://unpkg.com/primereact/button/button.min.js"></script>
        <script src="https://unpkg.com/primereact/togglebutton/togglebutton.min.js"></script>
        <script src="https://unpkg.com/primereact/dialog/dialog.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>`,
                content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Button } = primereact.button;
const { Dialog } = primereact.dialog;
const { ToggleButton } = primereact.togglebutton;

const DataTableScrollDemo = () => {

    const [customers1, setCustomers1] = useState([]);
    const [customers2, setCustomers2] = useState([]);
    const [customersGrouped, setCustomersGrouped] = useState(null);
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    const customerService = new CustomerService();

    useEffect(() => {
        setLoading(true);

        customerService.getCustomersLarge().then(data => { setCustomers1(data); setLoading(false); });
        customerService.getCustomersMedium().then(data => { setCustomers2(data) });
        customerService.getCustomersMedium().then(data => { setUnlockedCustomers(data) });
        customerService.getCustomersMedium().then(data => { setCustomersGrouped(data) });

        setLockedCustomers([
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openDialog = () => {
        setDialogVisible(true);
    }

    const closeDialog = () => {
        setDialogVisible(false);
    }

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />
    }

    const balanceTemplate1 = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceTemplate2 = (rowData) => {
        return (
            <span className="p-text-bold">
                {formatCurrency(rowData.balance)}
            </span>
        )
    }

    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock-open' : 'pi pi-lock';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />
    }

    const countryTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        )
    }

    const statusTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const headerTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={\`showcase/demo/images/avatar/\${rowData.representative.image}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const footerTemplate = (rowData) => {
        return <td className="p-text-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customersGrouped) {
            for (let customer of customersGrouped) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...unlockedCustomers, data];
        }
        else {
            _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    }

    return (
        <div className="datatable-scroll-demo">
            <div className="card">
                <h5>Vertical</h5>
                <DataTable value={customers1} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
            </div>

            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal
                contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
                <DataTable value={customers1} scrollable scrollHeight="flex">
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </Dialog>

            <div className="card">
                <h5>Horizontal and Vertical with Footer</h5>
                <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both">
                    <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate1} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Rows</h5>
                <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

                <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="p-mt-3">
                    <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                    <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="country.name" header="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="status" header="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="activity" header="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="balance" header="Balance" body={balanceTemplate2} style={{ flexGrow: 1, flexBasis: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Subheader Grouping</h5>
                <DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
                    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                    <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                    <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
                    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
               `
            }
        };

        this.extFiles = {
            'demo/DataTableDemo.css': {
                content: `
.datatable-scroll-demo .p-datatable-frozen-tbody {
    font-weight: bold;
}

.datatable-scroll-demo .p-datatable-scrollable .p-frozen-column {
    font-weight: bold;
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
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableScrollDemo', sources: this.sources, service: 'CustomerService', data: 'customers-large,customers-xlarge', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
