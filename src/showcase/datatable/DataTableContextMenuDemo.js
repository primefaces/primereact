import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { ContextMenu } from '../../components/contextmenu/ContextMenu';
import { Toast } from '../../components/toast/Toast';
import ProductService from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableContextMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct: null
        };

        this.menuModel = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.state.selectedProduct)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.state.selectedProduct)}
        ];

        this.productService = new ProductService();
        this.viewProduct = this.viewProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    viewProduct(product) {
        this.toast.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    deleteProduct(product) {
        let products = [...this.state.products];
        products = products.filter((p) => p.id !== product.id);

        this.toast.show({severity: 'info', summary: 'Product Deleted', detail: product.name});
        this.setState({ products });
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
                        <h1>DataTable <span>ContextMenu</span></h1>
                        <p>DataTable has exclusive integration with ContextMenu.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => { this.toast = el; }}></Toast>

                    <ContextMenu model={this.menuModel} ref={el => this.cm = el} onHide={() => this.setState({ selectedProduct: null })}/>

                    <div className="card">
                        <DataTable value={this.state.products} contextMenuSelection={this.state.selectedProduct}
                            onContextMenuSelectionChange={e => this.setState({ selectedProduct: e.value })}
                            onContextMenu={e => this.cm.show(e.originalEvent)}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} />
                        </DataTable>
                    </div>
                </div>

                <DataTableContextMenuDemoDoc></DataTableContextMenuDemoDoc>
            </div>
        );
    }
}

export class DataTableContextMenuDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';

export class DataTableContextMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct: null
        };

        this.menuModel = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.state.selectedProduct)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.state.selectedProduct)}
        ];

        this.productService = new ProductService();
        this.viewProduct = this.viewProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    viewProduct(product) {
        this.toast.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    deleteProduct(product) {
        let products = [...this.state.products];
        products = products.filter((p) => p.id !== product.id);

        this.toast.show({severity: 'info', summary: 'Product Deleted', detail: product.name});
        this.setState({ products });
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
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <ContextMenu model={this.menuModel} ref={el => this.cm = el} onHide={() => this.setState({ selectedProduct: null })}/>

                <div className="card">
                    <DataTable value={this.state.products} contextMenuSelection={this.state.selectedProduct}
                        onContextMenuSelectionChange={e => this.setState({ selectedProduct: e.value })}
                        onContextMenu={e => this.cm.show(e.originalEvent)}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} />
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
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';

const DataTableContextMenuDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
    ];
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    const deleteProduct = (product) => {
        let _products = [...products];
        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({severity: 'info', summary: 'Product Deleted', detail: product.name});
        setProducts(_products);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>

            <div className="card">
                <DataTable value={products} contextMenuSelection={selectedProduct}
                    onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
                    onContextMenu={e => cm.current.show(e.originalEvent)}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} />
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
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';

const DataTableContextMenuDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
    ];
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    const deleteProduct = (product) => {
        let _products = [...products];
        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({severity: 'info', summary: 'Product Deleted', detail: product.name});
        setProducts(_products);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>

            <div className="card">
                <DataTable value={products} contextMenuSelection={selectedProduct}
                    onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
                    onContextMenu={e => cm.current.show(e.originalEvent)}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} />
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
                        useLiveEditorTabs({ name: 'DataTableContextMenuDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
