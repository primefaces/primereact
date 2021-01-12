import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableSortDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Sort</span></h1>
                        <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and
                            used with metaKey.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Single Column</h5>
                        <DataTable value={this.state.products}>
                            <Column field="code" header="Code" sortable></Column>
                            <Column field="name" header="Name" sortable></Column>
                            <Column field="category" header="Category" sortable></Column>
                            <Column field="quantity" header="Quantity" sortable></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Multiple Columns</h5>
                        <p>Use metakey to add a column to the sort selection.</p>
                        <DataTable value={this.state.products} sortMode="multiple">
                            <Column field="code" header="Code" sortable></Column>
                            <Column field="name" header="Name" sortable></Column>
                            <Column field="category" header="Category" sortable></Column>
                            <Column field="quantity" header="Quantity" sortable></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Presort</h5>
                        <DataTable value={this.state.products} sortField="category" sortOrder={-1}>
                            <Column field="code" header="Code" sortable></Column>
                            <Column field="name" header="Name" sortable></Column>
                            <Column field="category" header="Category" sortable></Column>
                            <Column field="quantity" header="Quantity" sortable></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Removable Sort</h5>
                        <DataTable value={this.state.products} removableSort>
                            <Column field="code" header="Code" sortable></Column>
                            <Column field="name" header="Name" sortable></Column>
                            <Column field="category" header="Category" sortable></Column>
                            <Column field="quantity" header="Quantity" sortable></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableSortDemoDoc></DataTableSortDemoDoc>
            </div>
        );
    }
}

export class DataTableSortDemoDoc extends Component {

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

export class DataTableSortDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Single Column</h5>
                    <DataTable value={this.state.products}>
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Multiple Columns</h5>
                    <p>Use metakey to add a column to the sort selection.</p>
                    <DataTable value={this.state.products} sortMode="multiple">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Presort</h5>
                    <DataTable value={this.state.products} sortField="category" sortOrder={-1}>
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Removable Sort</h5>
                    <DataTable value={this.state.products} removableSort>
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
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
import ProductService from '../service/ProductService';

const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <div className="card">
                <h5>Single Column</h5>
                <DataTable value={products}>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Multiple Columns</h5>
                <p>Use metakey to add a column to the sort selection.</p>
                <DataTable value={products} sortMode="multiple">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Presort</h5>
                <DataTable value={products} sortField="category" sortOrder={-1}>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Removable Sort</h5>
                <DataTable value={products} removableSort>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
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
import ProductService from '../service/ProductService';

const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <div className="card">
                <h5>Single Column</h5>
                <DataTable value={products}>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Multiple Columns</h5>
                <p>Use metakey to add a column to the sort selection.</p>
                <DataTable value={products} sortMode="multiple">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Presort</h5>
                <DataTable value={products} sortField="category" sortOrder={-1}>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Removable Sort</h5>
                <DataTable value={products} removableSort>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>
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
                    {
                        useLiveEditorTabs({ name: 'DataTableSortDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
