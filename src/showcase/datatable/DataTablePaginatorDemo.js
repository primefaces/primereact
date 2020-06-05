import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import {Button} from "../../components/button/Button";
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        const paginatorLeft = <Button icon="pi pi-refresh"/>;

        return (
            <div className="datatable-paginator-demo">
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Paginator</h1>
                        <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} paginatorLeft={paginatorLeft}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rows={10} rowsPerPageOptions={[5,10,20]} >
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from "primereact/button";

export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        const paginatorLeft = <Button icon="pi pi-refresh"/>;

        return (
            <div className="datatable-paginator-demo">
                <DataTable value={this.state.cars} paginator={true} paginatorLeft={paginatorLeft}
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
import {Button} from "primereact/button";

const DataTablePaginatorDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button icon="pi pi-refresh"/>;

    return (
        <div className="datatable-paginator-demo">
            <DataTable value={cars} paginator={true} paginatorLeft={paginatorLeft}
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
import {Button} from "primereact/button";

const DataTablePaginatorDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button icon="pi pi-refresh"/>;

    return (
        <div className="datatable-paginator-demo">
            <DataTable value={cars} paginator={true} paginatorLeft={paginatorLeft}
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataTablePaginatorDemo" sources={[key, value]} service="CarService" data="cars-large" extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
