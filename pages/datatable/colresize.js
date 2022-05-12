import React, { useState, useEffect, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { ProductService } from '../../service/ProductService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const DataTableColResizeDemo = () => {

    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <Head>
                <title>React Table Component - Column Resize</title>
                <meta name="description" content="Columns can be resized using drag drop by setting the resizableColumns to true." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Column Resize</span></h1>
                    <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                        In "expand" mode, table width also changes along with the column width. onColumnResize is a callback that passes the resized column header as a parameter.</p>
                </div>

                <DocActions github="datatable/colresize.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Fit Mode</h5>
                    <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                        <Column field="code" header="Code" style={{width:'20%'}}/>
                        <Column field="name" header="Name" style={{width:'40%'}}/>
                        <Column field="category" header="Category" style={{width:'20%'}}/>
                        <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Expand Mode</h5>
                    <DataTable value={products} resizableColumns columnResizeMode="expand" showGridlines responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Choose Resizable Columns</h5>
                    <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                        <Column field="code" header="Code" style={{width:'20%'}}/>
                        <Column field="name" header="Name" style={{width:'40%'}}/>
                        <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                        <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                    </DataTable>
                </div>
            </div>

            <DataTableColResizeDemoDoc></DataTableColResizeDemoDoc>
        </div>
    );
}
export default DataTableColResizeDemo;

export const DataTableColResizeDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

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
                    <DataTable value={this.state.products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                        <Column field="code" header="Code" style={{width:'20%'}}/>
                        <Column field="name" header="Name" style={{width:'40%'}}/>
                        <Column field="category" header="Category" style={{width:'20%'}}/>
                        <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Expand Mode</h5>
                    <DataTable value={this.state.products} resizableColumns columnResizeMode="expand" showGridlines responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Choose Resizable Columns</h5>
                    <DataTable value={this.state.products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                        <Column field="code" header="Code" style={{width:'20%'}}/>
                        <Column field="name" header="Name" style={{width:'40%'}}/>
                        <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                        <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
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

const DataTableColResizeDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Fit Mode</h5>
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{width:'20%'}}/>
                    <Column field="name" header="Name" style={{width:'40%'}}/>
                    <Column field="category" header="Category" style={{width:'20%'}}/>
                    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expand Mode</h5>
                <DataTable value={products} resizableColumns columnResizeMode="expand" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Choose Resizable Columns</h5>
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{width:'20%'}}/>
                    <Column field="name" header="Name" style={{width:'40%'}}/>
                    <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
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

const DataTableColResizeDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Fit Mode</h5>
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{width:'20%'}}/>
                    <Column field="name" header="Name" style={{width:'40%'}}/>
                    <Column field="category" header="Category" style={{width:'20%'}}/>
                    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expand Mode</h5>
                <DataTable value={products} resizableColumns columnResizeMode="expand" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Choose Resizable Columns</h5>
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{width:'20%'}}/>
                    <Column field="name" header="Name" style={{width:'40%'}}/>
                    <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
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
const { DataTable } = primereact.datatable;
const { Column } = primereact.column;

const DataTableColResizeDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Fit Mode</h5>
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{width:'20%'}}/>
                    <Column field="name" header="Name" style={{width:'40%'}}/>
                    <Column field="category" header="Category" style={{width:'20%'}}/>
                    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
                </DataTable>
            </div>

            <div className="card">
                <h5>Expand Mode</h5>
                <DataTable value={products} resizableColumns columnResizeMode="expand" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Choose Resizable Columns</h5>
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{width:'20%'}}/>
                    <Column field="name" header="Name" style={{width:'40%'}}/>
                    <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
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
                    useLiveEditorTabs({ name: 'DataTableColResizeDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    )
})
