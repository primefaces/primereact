import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Rating } from '../../components/rating/Rating';
import { ProductService } from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';

export class DataTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.statusTemplate = this.statusTemplate.bind(this);
        this.ratingTemplate = this.ratingTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    statusTemplate(rowData) {
        return <span className={`product-badge status-${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}`}>{rowData.inventoryStatus}</span>;
    }

    ratingTemplate(rowData) {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Responsive</span></h1>
                        <p>DataTable responsive layout can be achieved in two ways;
                            first approach is displaying a horizontal scrollbar for smaller screens and second one is defining a breakpoint to display the cells of a row as stacked.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="datatable/DataTableResponsiveDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={this.state.products} header="Scroll" responsiveLayout="scroll">
                            <Column field="code" header="Code" />
                            <Column field="name" header="Name" />
                            <Column field="category" header="Category" />
                            <Column field="quantity" header="Quantity" />
                            <Column field="inventoryStatus" header="Status" body={this.statusTemplate} />
                            <Column field="rating" header="Rating" body={this.ratingTemplate} />
                        </DataTable>
                    </div>

                    <div className="card">
                        <DataTable value={this.state.products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                            <Column field="code" header="Code" />
                            <Column field="name" header="Name" />
                            <Column field="category" header="Category" />
                            <Column field="quantity" header="Quantity" />
                            <Column field="inventoryStatus" header="Status" body={this.statusTemplate} />
                            <Column field="rating" header="Rating" body={this.ratingTemplate} />
                        </DataTable>
                    </div>
                </div>

                <DataTableResponsiveDemoDoc></DataTableResponsiveDemoDoc>
            </div>
        );
    }
}

export class DataTableResponsiveDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

export class DataTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.statusTemplate = this.statusTemplate.bind(this);
        this.ratingTemplate = this.ratingTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    statusTemplate(rowData) {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    ratingTemplate(rowData) {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    render() {
        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.products} header="Scroll" responsiveLayout="scroll">
                        <Column field="code" header="Code" />
                        <Column field="name" header="Name" />
                        <Column field="category" header="Category" />
                        <Column field="quantity" header="Quantity" />
                        <Column field="inventoryStatus" header="Status" body={this.statusTemplate} />
                        <Column field="rating" header="Rating" body={this.ratingTemplate} />
                    </DataTable>
                </div>

                <div className="card">
                    <DataTable value={this.state.products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                        <Column field="code" header="Code" />
                        <Column field="name" header="Name" />
                        <Column field="category" header="Category" />
                        <Column field="quantity" header="Quantity" />
                        <Column field="inventoryStatus" header="Status" body={this.statusTemplate} />
                        <Column field="rating" header="Rating" body={this.ratingTemplate} />
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
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

const DataTableResponsiveDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div>
            <div className="card">
                <DataTable value={products} header="Scroll" responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
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
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

const DataTableResponsiveDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div>
            <div className="card">
                <DataTable value={products} header="Scroll" responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
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
        <script src="https://unpkg.com/primereact/rating/rating.min.js"></script>
        <script src="https://unpkg.com/primereact/paginator/paginator.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>`,
                content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Rating } = primereact.rating;

const DataTableResponsiveDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div>
            <div className="card">
                <DataTable value={products} header="Scroll" responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
                </DataTable>
            </div>

            <div className="card">
                <DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
                `
            }
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableResponsiveDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
