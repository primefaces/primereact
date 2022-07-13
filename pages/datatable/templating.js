import React, { useState, useEffect, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { ProductService } from '../../service/ProductService';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { Button } from '../../components/lib/button/Button';
import { Rating } from '../../components/lib/rating/Rating';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataTableTemplatingDemo = () => {

    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={`${contextPath}/images/product/${rowData.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div>
            <Head>
                <title>React Table Component - Templating</title>
                <meta name="description" content="Custom content at header, body and footer sections are supported via templating." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Templating</span></h1>
                    <p>Custom content at header, body and footer sections are supported via templating.</p>
                </div>

                <DocActions github="datatable/templating.js" />
            </div>

            <div className="content-section implementation datatable-templating-demo">
                <div className="card">
                    <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
                        <Column field="name" header="Name"></Column>
                        <Column header="Image" body={imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                        <Column header="Status" body={statusBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableTemplatingDemoDoc></DataTableTemplatingDemoDoc>
        </div>
    );
}

export default DataTableTemplatingDemo;

export const DataTableTemplatingDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './DataTableDemo.css';

export class DataTableTemplatingDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    imageBodyTemplate(rowData) {
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    statusBodyTemplate(rowData) {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    render() {
        const header = (
            <div className="table-header">
                Products
                <Button icon="pi pi-refresh" />
            </div>
        );
        const footer = \`In total there are \${this.state.products ? this.state.products.length : 0} products.\`;

        return (
            <div className="datatable-templating-demo">
                <div className="card">
                    <DataTable value={this.state.products} header={header} footer={footer} responsiveLayout="scroll">
                        <Column field="name" header="Name"></Column>
                        <Column header="Image" body={this.imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate}></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="rating" header="Reviews" body={this.ratingBodyTemplate}></Column>
                        <Column header="Status" body={this.statusBodyTemplate}></Column>
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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './DataTableDemo.css';

const DataTableTemplatingDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = \`In total there are \${products ? products.length : 0} products.\`;

    return (
        <div className="datatable-templating-demo">
            <div className="card">
                <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './DataTableDemo.css';

const DataTableTemplatingDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = \`In total there are \${products ? products.length : 0} products.\`;

    return (
        <div className="datatable-templating-demo">
            <div className="card">
                <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
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
    <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
    <script src="https://unpkg.com/primereact/rating/rating.min.js"></script>
    <script src="https://unpkg.com/primereact/button/button.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Rating } = primereact.rating;
const { Button } = primereact.button;

const DataTableTemplatingDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = \`In total there are \${products ? products.length : 0} products.\`;

    return (
        <div className="datatable-templating-demo">
            <div className="card">
                <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
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
.datatable-templating-demo .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.datatable-templating-demo .product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableTemplatingDemo', sources: sources, service: 'ProductService', data: 'products-small', extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})
