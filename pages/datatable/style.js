import React, { useState, useEffect, memo } from 'react';
import { classNames } from '../../components/lib/utils/ClassNames';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { ProductService } from '../../service/ProductService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

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
        <div>
            <Head>
                <title>React Table Component - Styling</title>
                <meta name="description" content="Particular rows and cells can be styled based on data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Styling</span></h1>
                    <p>Particular rows and cells can be styled based on data.</p>
                </div>

                <DocActions github="datatable/style.js" />
            </div>

            <div className="content-section implementation datatable-style-demo">
                <div className="card">
                    <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableStyleDemoDoc></DataTableStyleDemoDoc>
        </div>
    );
}

export default DataTableStyleDemo;

export const DataTableStyleDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
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
                    <DataTable value={this.state.products} rowClassName={this.rowClass} responsiveLayout="scroll">
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
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
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
                <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
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
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
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
                <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./DataTableDemo.css" />
        <script src="./ProductService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { classNames } = primereact.core;

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
                <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
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

    const extFiles = {
        'demo/DataTableDemo.css': {
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

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableStyleDemo', sources: sources, service: 'ProductService', data: 'products-small', extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})
