import React, { Component } from 'react';
import classNames from 'classnames';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
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
import './DataTableDemo.css';

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
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import './DataTableDemo.css';

const DataTableStyleDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowClass = (data) => {
        return {
            'row-accessories': data.category === 'Accessories'
        }
    }

    const stockBodyTemplate = (rowData) => {
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

    return (
        <div className="datatable-style-demo">
            <div className="card">
                <DataTable value={products} rowClassName={rowClass}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
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
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import './DataTableDemo.css';

const DataTableStyleDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowClass = (data) => {
        return {
            'row-accessories': data.category === 'Accessories'
        }
    }

    const stockBodyTemplate = (rowData) => {
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

    return (
        <div className="datatable-style-demo">
            <div className="card">
                <DataTable value={products} rowClassName={rowClass}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
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
.datatable-style-demo .outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.datatable-style-demo .lowstock {
    font-weight: 700;
    color: #FFA726;
}

.datatable-style-demo .instock {
    font-weight: 700;
    color: #66BB6A;
}

.datatable-style-demo .row-accessories {
    background-color: rgba(0, 0, 0, 0.15) !important;
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
                        useLiveEditorTabs({ name: 'DataTableStyleDemo', sources: this.sources, service: 'ProductService', data: 'products-small', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
