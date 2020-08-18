import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableColResizeDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
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
                        <h1>DataTable <span>Column Resize</span></h1>
                        <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                            In "expand" mode, table width also changes along with the column width. onColumnResize is a callback that passes the resized column header as a parameter.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Fit Mode</h5>
                        <DataTable value={this.state.products} resizableColumns columnResizeMode="fit">
                            <Column field="code" header="Code" style={{width:'20%'}}/>
                            <Column field="name" header="Name" style={{width:'40%'}}/>
                            <Column field="category" header="Category" style={{width:'20%'}}/>
                            <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Expand Mode</h5>
                        <DataTable value={this.state.products} resizableColumns columnResizeMode="expand">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableColResizeDemoDoc></DataTableColResizeDemoDoc>
            </div>
        );
    }
}

export class DataTableColResizeDemoDoc extends Component {

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

export class DataTableColResizeDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
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
                    <h5>Fit Mode</h5>
                    <DataTable value={this.state.products} resizableColumns columnResizeMode="fit">
                        <Column field="code" header="Code" style={{width:'20%'}}/>
                        <Column field="name" header="Name" style={{width:'40%'}}/>
                        <Column field="category" header="Category" style={{width:'20%'}}/>
                        <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Expand Mode</h5>
                    <DataTable value={this.state.products} resizableColumns columnResizeMode="expand">
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

const DataTableColResizeDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Fit Mode</h3>
            <DataTable value={cars1} resizableColumns columnResizeMode="fit">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
            </DataTable>

            <h3>Expand Mode</h3>
            <DataTable value={cars1} resizableColumns columnResizeMode="expand">
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Scrollable Mode</h3>
            <DataTable value={cars2} resizableColumns scrollable scrollHeight="200px">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
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

const DataTableColResizeDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Fit Mode</h3>
            <DataTable value={cars1} resizableColumns columnResizeMode="fit">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
            </DataTable>

            <h3>Expand Mode</h3>
            <DataTable value={cars1} resizableColumns columnResizeMode="expand">
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Scrollable Mode</h3>
            <DataTable value={cars2} resizableColumns scrollable scrollHeight="200px">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
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
                        <LiveEditor name="DataTableColResizeDemo" sources={this.sources} service="CarService" data="treenodes" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
