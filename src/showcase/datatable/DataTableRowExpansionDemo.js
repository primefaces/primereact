import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Rating } from '../../components/rating/Rating';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

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
        return <img src={`showcase/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />;
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readonly cancel={false} />;
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
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} alt={rowData.image} className="product-image" />;
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readonly cancel={false} />;
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
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableRowExpansionDemo = () => {
    const [cars, setCars] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowExpansionTemplate = (data) => {
        const src = "showcase/demo/images/car/" + data.brand + ".png";

        return  (
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-3" style={{textAlign:'center'}}>
                    <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={data.brand}/>
                </div>
                    <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-md-2">Vin: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                        <div className="p-md-2">Year: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                        <div className="p-md-2">Brand: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                        <div className="p-md-2">Color: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <DataTable value={cars} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="vin">
                <Column expander style={{width: '3em'}} />
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableRowExpansionDemo = () => {
    const [cars, setCars] = useState([]);
    const [expandedRows, setExpandedRows] = useState<any>(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowExpansionTemplate = (data: any) => {
        const src = "showcase/demo/images/car/" + data.brand + ".png";

        return  (
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-3" style={{textAlign:'center'}}>
                    <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={data.brand}/>
                </div>
                    <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-md-2">Vin: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                        <div className="p-md-2">Year: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                        <div className="p-md-2">Brand: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                        <div className="p-md-2">Color: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <DataTable value={cars} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="vin">
                <Column expander style={{width: '3em'}} />
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
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
                    <TabPanel header="Source">
                        <LiveEditor name="DataTableRowExpansionDemo" sources={this.sources} service="CarService" data="cars-small" />
<CodeHighlight lang="scss">
{`
.datatable-rowexpansion-demo {
    .product-image {
        width: 100px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }

    .orders-subtable {
        padding: 1rem;
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
