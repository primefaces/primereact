import React, { Component } from 'react';
import classNames from 'classnames';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataTableDemo.scss';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DataTableStyleDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.stockBodyTemplate = this.stockBodyTemplate.bind(this);
        this.rowClass = this.rowClass.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    rowClass(data) {
        return {
            'row-accessories': data.category === 'Accessories'
        }
    }

    stockBodyTemplate(rowData) {
        const stockClassName = classNames({
            'outofstock': rowData.quantity === 0,
            'lowstock': rowData.quantity > 0 && rowData.quantity < 10,
            'instock': rowData.quantity > 10
        });

        return (
            <div className={stockClassName}>
                {rowData.quantity}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Styling</span></h1>
                        <p>Particular rows and cells can be styled based on data.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-style-demo">
                    <div className="card">
                        <DataTable value={this.state.products} rowClassName={this.rowClass}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity" body={this.stockBodyTemplate}></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableStyleDemoDoc></DataTableStyleDemoDoc>
            </div>
        );
    }
}

export class DataTableStyleDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import './DataTableDemo.scss';

export class DataTableStyleDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.stockBodyTemplate = this.stockBodyTemplate.bind(this);
        this.rowClass = this.rowClass.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    rowClass(data) {
        return {
            'row-accessories': data.category === 'Accessories'
        }
    }

    stockBodyTemplate(rowData) {
        const stockClassName = classNames({
            'outofstock': rowData.quantity === 0,
            'lowstock': rowData.quantity > 0 && rowData.quantity < 10,
            'instock': rowData.quantity > 10
        });

        return (
            <div className={stockClassName}>
                {rowData.quantity}
            </div>
        );
    }

    render() {
        return (
            <div className="datatable-style-demo">
                <div className="card">
                    <DataTable value={this.state.products} rowClassName={this.rowClass}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity" body={this.stockBodyTemplate}></Column>
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
<CodeHighlight lang="scss">
{`
.datatable-style-demo {
    .outofstock {
        font-weight: 700;
        color: #FF5252;
        text-decoration: line-through;
    }

    .lowstock {
        font-weight: 700;
        color: #FFA726;
    }

    .instock {
        font-weight: 700;
        color: #66BB6A;
    }

    .row-accessories {
        background-color: rgba(0,0,0,.15) !important;
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
