import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableStripedDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: null
        };

        this.productService = new ProductService();
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Striped Rows</span></h1>
                        <p>Adding <i>p-datatable-striped</i> displays striped rows.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={this.state.products} className="p-datatable-striped">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableStripedDemoDoc />
            </div>
        );
    }
}

export class DataTableStripedDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';

export class DataTableStripedDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: null
        };

        this.productService = new ProductService();
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.products} className="p-datatable-striped">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
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

const DataTableStyleDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const yearTemplate = (rowData) => {
        let year = rowData.year;
        let fontWeight = year > 2010 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{rowData.year}</span>;
    };

    const rowClassName = (rowData) => {
        let brand = rowData.brand;

        return {'p-highlight' : (brand === 'Jaguar')};
    };

    return (
        <div>
            <p>This datatable highlights cell with a bolder font weight whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
            <DataTable value={cars} rowClassName={rowClassName}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" body={yearTemplate} />
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

const DataTableStyleDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const yearTemplate = (rowData: any) => {
        let year = rowData.year;
        let fontWeight: any = year > 2010 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{rowData.year}</span>;
    };

    const rowClassName = (rowData: any) => {
        let brand = rowData.brand;

        return {'p-highlight' : (brand === 'Jaguar')};
    };

    return (
        <div>
            <p>This datatable highlights cell with a bolder font weight whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
            <DataTable value={cars} rowClassName={rowClassName}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" body={yearTemplate} />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
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
                        <LiveEditor name="DataTableStyleDemo" sources={this.sources} service="CarService" data="cars-small" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
