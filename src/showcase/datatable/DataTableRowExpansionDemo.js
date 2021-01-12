import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Rating } from '../../components/rating/Rating';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataTableDemo.scss';

export class DataTableRowExpansionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            expandedRows: null
        };

        this.productService = new ProductService();
        this.amountBodyTemplate = this.amountBodyTemplate.bind(this);
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
        this.searchBodyTemplate = this.searchBodyTemplate.bind(this);
        this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.statusOrderBodyTemplate = this.statusOrderBodyTemplate.bind(this);
        this.onRowExpand = this.onRowExpand.bind(this);
        this.onRowCollapse = this.onRowCollapse.bind(this);
        this.expandAll = this.expandAll.bind(this);
        this.collapseAll = this.collapseAll.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsWithOrdersSmall().then(data => this.setState({ products: data }));
    }

    onRowExpand(event) {
        this.toast.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    onRowCollapse(event) {
        this.toast.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    expandAll() {
        let expandedRows = {};
        this.state.products.forEach(p => expandedRows[`${p.id}`] = true);

        this.setState({
            expandedRows
        }, () => {
            this.toast.show({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        });
    }

    collapseAll() {
        this.setState({
            expandedRows: null
        }, () => {
            this.toast.show({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        });
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    amountBodyTemplate(rowData) {
        return this.formatCurrency(rowData.amount);
    }

    statusOrderBodyTemplate(rowData) {
        return <span className={`order-badge order-${rowData.status.toLowerCase()}`}>{rowData.status}</span>;
    }

    searchBodyTemplate() {
        return <Button icon="pi pi-search" />;
    }

    imageBodyTemplate(rowData) {
        return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    statusBodyTemplate(rowData) {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    rowExpansionTemplate(data) {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={this.amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={this.statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={this.searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    render() {
        const header = (
            <div className="table-header-container">
                <Button icon="pi pi-plus" label="Expand All" onClick={this.expandAll} className="p-mr-2" />
                <Button icon="pi pi-minus" label="Collapse All" onClick={this.collapseAll} />
            </div>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Row Expansion</span></h1>
                        <p>A row can be expanded to display extra content by enabling expandableRows property and providing a row ng-template.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-rowexpansion-demo">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <DataTable value={this.state.products} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                            onRowExpand={this.onRowExpand} onRowCollapse={this.onRowCollapse}
                            rowExpansionTemplate={this.rowExpansionTemplate} dataKey="id" header={header}>
                            <Column expander style={{ width: '3em' }} />
                            <Column field="name" header="Name" sortable />
                            <Column header="Image" body={this.imageBodyTemplate} />
                            <Column field="price" header="Price" sortable body={this.priceBodyTemplate} />
                            <Column field="category" header="Category" sortable />
                            <Column field="rating" header="Reviews" sortable body={this.ratingBodyTemplate} />
                            <Column field="inventoryStatus" header="Status" sortable body={this.statusBodyTemplate} />
                        </DataTable>
                    </div>
                </div>

                <DataTableRowExpansionDemoDoc></DataTableRowExpansionDemoDoc>
            </div>
        );
    }
}

export class DataTableRowExpansionDemoDoc extends Component {

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
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './DataTableDemo.css';

export class DataTableRowExpansionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            expandedRows: null
        };

        this.productService = new ProductService();
        this.amountBodyTemplate = this.amountBodyTemplate.bind(this);
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
        this.searchBodyTemplate = this.searchBodyTemplate.bind(this);
        this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.statusOrderBodyTemplate = this.statusOrderBodyTemplate.bind(this);
        this.onRowExpand = this.onRowExpand.bind(this);
        this.onRowCollapse = this.onRowCollapse.bind(this);
        this.expandAll = this.expandAll.bind(this);
        this.collapseAll = this.collapseAll.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsWithOrdersSmall().then(data => this.setState({ products: data }));
    }

    onRowExpand(event) {
        this.toast.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    onRowCollapse(event) {
        this.toast.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    expandAll() {
        let expandedRows = {};
        this.state.products.forEach(p => expandedRows[\`\${p.id}\`] = true);

        this.setState({
            expandedRows
        }, () => {
            this.toast.show({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        });
    }

    collapseAll() {
        this.setState({
            expandedRows: null
        }, () => {
            this.toast.show({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        });
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    amountBodyTemplate(rowData) {
        return this.formatCurrency(rowData.amount);
    }

    statusOrderBodyTemplate(rowData) {
        return <span className={\`order-badge order-\${rowData.status.toLowerCase()}\`}>{rowData.status}</span>;
    }

    searchBodyTemplate() {
        return <Button icon="pi pi-search" />;
    }

    imageBodyTemplate(rowData) {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
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

    rowExpansionTemplate(data) {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={this.amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={this.statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={this.searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    render() {
        const header = (
            <div className="table-header-container">
                <Button icon="pi pi-plus" label="Expand All" onClick={this.expandAll} className="p-mr-2" />
                <Button icon="pi pi-minus" label="Collapse All" onClick={this.collapseAll} />
            </div>
        );

        return (
            <div className="datatable-rowexpansion-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <DataTable value={this.state.products} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                        onRowExpand={this.onRowExpand} onRowCollapse={this.onRowCollapse}
                        rowExpansionTemplate={this.rowExpansionTemplate} dataKey="id" header={header}>
                        <Column expander style={{ width: '3em' }} />
                        <Column field="name" header="Name" sortable />
                        <Column header="Image" body={this.imageBodyTemplate} />
                        <Column field="price" header="Price" sortable body={this.priceBodyTemplate} />
                        <Column field="category" header="Category" sortable />
                        <Column field="rating" header="Reviews" sortable body={this.ratingBodyTemplate} />
                        <Column field="inventoryStatus" header="Status" sortable body={this.statusBodyTemplate} />
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
import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './DataTableDemo.css';

const DataTableRowExpansionDemo = () => {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);
    const isMounted = useRef(false);
    const productService = new ProductService();

    useEffect(() => {
        if (isMounted.current) {
            const summary = expandedRows !== null ? 'All Rows Expanded' : 'All Rows Collapsed';
            toast.current.show({severity: 'success', summary: \`\${summary}\`, life: 3000});
        }
    }, [expandedRows]);

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsWithOrdersSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event) => {
        toast.current.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    const onRowCollapse = (event) => {
        toast.current.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    const expandAll = () => {
        let _expandedRows = {};
        products.forEach(p => _expandedRows[\`\${p.id}\`] = true);

        setExpandedRows(_expandedRows);
    }

    const collapseAll = () => {
        setExpandedRows(null);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    }

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={\`order-badge order-\${rowData.status.toLowerCase()}\`}>{rowData.status}</span>;
    }

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
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

    const rowExpansionTemplate = (data) => {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    const header = (
        <div className="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        </div>
    );

    return (
        <div className="datatable-rowexpansion-demo">
            <Toast ref={toast} />

            <div className="card">
                <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowExpand} onRowCollapse={onRowCollapse}
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
                    <Column expander style={{ width: '3em' }} />
                    <Column field="name" header="Name" sortable />
                    <Column header="Image" body={imageBodyTemplate} />
                    <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                    <Column field="category" header="Category" sortable />
                    <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                    <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
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
import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './DataTableDemo.css';

const DataTableRowExpansionDemo = () => {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);
    const isMounted = useRef(false);
    const productService = new ProductService();

    useEffect(() => {
        if (isMounted.current) {
            const summary = expandedRows !== null ? 'All Rows Expanded' : 'All Rows Collapsed';
            toast.current.show({severity: 'success', summary: \`\${summary}\`, life: 3000});
        }
    }, [expandedRows]);

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsWithOrdersSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event) => {
        toast.current.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    const onRowCollapse = (event) => {
        toast.current.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    const expandAll = () => {
        let _expandedRows = {};
        products.forEach(p => _expandedRows[\`\${p.id}\`] = true);

        setExpandedRows(_expandedRows);
    }

    const collapseAll = () => {
        setExpandedRows(null);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    }

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={\`order-badge order-\${rowData.status.toLowerCase()}\`}>{rowData.status}</span>;
    }

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
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

    const rowExpansionTemplate = (data) => {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    const header = (
        <div className="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        </div>
    );

    return (
        <div className="datatable-rowexpansion-demo">
            <Toast ref={toast} />

            <div className="card">
                <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowExpand} onRowCollapse={onRowCollapse}
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
                    <Column expander style={{ width: '3em' }} />
                    <Column field="name" header="Name" sortable />
                    <Column header="Image" body={imageBodyTemplate} />
                    <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                    <Column field="category" header="Category" sortable />
                    <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                    <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
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
.datatable-rowexpansion-demo .product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.datatable-rowexpansion-demo .orders-subtable {
    padding: 1rem;
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
                        useLiveEditorTabs({ name: 'DataTableRowExpansionDemo', sources: this.sources, service: 'ProductService', data: 'products-orders-small', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
