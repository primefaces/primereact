import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { CustomerService } from '../service/CustomerService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { Button } from '../../components/button/Button';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTablePaginatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: []
        };

        this.customerService = new CustomerService();
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({ customers: data }));
    }

    render() {
        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Paginator</span></h1>
                        <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={this.state.customers} paginator
                            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                            paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                            <Column field="name" header="Name"></Column>
                            <Column field="country.name" header="Country"></Column>
                            <Column field="company" header="Company"></Column>
                            <Column field="representative.name" header="Representative"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTablePaginatorDemoDoc></DataTablePaginatorDemoDoc>
            </div>
        );
    }
}

export class DataTablePaginatorDemoDoc extends Component {

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
import { Button } from 'primereact/button';

export class DataTablePaginatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: []
        };

        this.customerService = new CustomerService();
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({ customers: data }));
    }

    render() {
        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.customers} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="representative.name" header="Representative"></Column>
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
import {Button} from 'primereact/button';

const DataTablePaginatorDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button icon="pi pi-refresh"/>;

    return (
        <div className="datatable-paginator-demo">
            <DataTable value={cars} paginator paginatorLeft={paginatorLeft}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rows={10} rowsPerPageOptions={[5,10,20]} >
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
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
import {Button} from 'primereact/button';

const DataTablePaginatorDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button icon="pi pi-refresh"/>;

    return (
        <div className="datatable-paginator-demo">
            <DataTable value={cars} paginator paginatorLeft={paginatorLeft}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rows={10} rowsPerPageOptions={[5,10,20]} >
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.datatable-paginator-demo .p-paginator-current {
    float: right;
}
            `
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
                        <LiveEditor name="DataTablePaginatorDemo" sources={this.sources} service="CarService" data="cars-large" extFiles={this.extFiles} />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
