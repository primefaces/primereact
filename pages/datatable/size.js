import React, { useState, useEffect, useRef, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { ProductService } from '../../service/ProductService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const DataTableSizeDemo = () => {

    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <Head>
                <title>React Table Component - Size</title>
                <meta name="description" content="In addition to a regular table, alternatives with alternative sizes are available." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Size</span></h1>
                    <p>In addition to a regular table, alternatives with alternative sizes are available.</p>
                </div>

                <DocActions github="datatable/size.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <DataTable value={products} header="Small Table" size="small" responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <DataTable value={products} header="Normal Table" responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <DataTable value={products} header="Large Table" size="large" responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableSizeDemoDoc />
        </div>
    );
}

export default DataTableSizeDemo;

export const DataTableSizeDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

export class DataTableSizeDemo extends Component {

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
                    <DataTable value={this.state.products} header="Small Table" size="small" responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <DataTable value={this.state.products} header="Normal Table" responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <DataTable value={this.state.products} header="Large Table" size="large" responsiveLayout="scroll">
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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const DataTableSizeDemo = () => {
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products} header="Small Table" size="small" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Normal Table" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Large Table" size="large" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
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

const DataTableSizeDemo = () => {
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products} header="Small Table" size="small" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Normal Table" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Large Table" size="large" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
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

const DataTableSizeDemo = () => {
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products} header="Small Table" size="small" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Normal Table" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Large Table" size="large" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
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
                    useLiveEditorTabs({ name: 'DataTableSizeDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    )
})
