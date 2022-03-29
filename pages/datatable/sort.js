import React, { useState, useEffect, useRef, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { ProductService } from '../../service/ProductService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Head>
                <title>React Table Component - Sort</title>
                <meta name="description" content="Enabling sortable property on a column is enough to make a column sortable." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Sort</span></h1>
                    <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and
                        used with metaKey.</p>
                </div>

                <DocActions github="datatable/sort.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Single Column</h5>
                    <DataTable value={products} responsiveLayout="scroll">
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
                    <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Presort</h5>
                    <DataTable value={products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Removable Sort</h5>
                    <DataTable value={products} removableSort responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Sortable Disabled</h5>
                    <p>Use metakey to add a column to the multiple sort selection.</p>
                    <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableSortDemoDoc></DataTableSortDemoDoc>
        </div>
    );
}

export default DataTableSortDemo;

export const DataTableSortDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

export class DataTableSortDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            multiSortMeta: [{ field: 'category', order: -1 }]
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
                    <DataTable value={this.state.products} responsiveLayout="scroll">
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
                    <DataTable value={this.state.products} sortMode="multiple" responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Presort</h5>
                    <DataTable value={this.state.products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Removable Sort</h5>
                    <DataTable value={this.state.products} removableSort responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="quantity" header="Quantity" sortable></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Sortable Disabled</h5>
                    <p>Use metakey to add a column to the multiple sort selection.</p>
                    <DataTable value={this.state.products} sortMode="multiple" removableSort multiSortMeta={this.state.multiSortMeta} onSort={(e) => this.setState({multiSortMeta: e.multiSortMeta})} responsiveLayout="scroll">
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
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
import { ProductService } from '../service/ProductService';

const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
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
                <DataTable value={products} responsiveLayout="scroll">
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
                <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Presort</h5>
                <DataTable value={products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Removable Sort</h5>
                <DataTable value={products} removableSort responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Sortable Disabled</h5>
                <p>Use metakey to add a column to the multiple sort selection.</p>
                <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
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
import { ProductService } from '../service/ProductService';

const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
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
                <DataTable value={products} responsiveLayout="scroll">
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
                <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Presort</h5>
                <DataTable value={products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Removable Sort</h5>
                <DataTable value={products} removableSort responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Sortable Disabled</h5>
                <p>Use metakey to add a column to the multiple sort selection.</p>
                <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
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

const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
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
                <DataTable value={products} responsiveLayout="scroll">
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
                <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Presort</h5>
                <DataTable value={products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Removable Sort</h5>
                <DataTable value={products} removableSort responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Sortable Disabled</h5>
                <p>Use metakey to add a column to the multiple sort selection.</p>
                <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
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


    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableSortDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    )
})
