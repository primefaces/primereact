import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Button } from '../../components/button/Button';
import { Rating } from '../../components/rating/Rating';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import './DataTableDemo.scss';

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

    render() {
        const header = (
            <div className="table-header">
                Products
                <Button icon="pi pi-refresh" />
            </div>
        );
        const footer = `In total there are ${this.state.products ? this.state.products.length : 0} products.`;

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Templating</span></h1>
                        <p>Custom content at header, body and footer sections are supported via templating.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-templating-demo">
                    <div className="card">
                        <DataTable value={this.state.products} header={header} footer={footer}>
                            <Column field="name" header="Name"></Column>
                            <Column header="Image" body={this.imageBodyTemplate}></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate}></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="rating" header="Reviews" body={this.ratingBodyTemplate}></Column>
                            <Column header="Status" body={this.statusBodyTemplate}></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableTemplatingDemoDoc></DataTableTemplatingDemoDoc>
            </div>
        );
    }
}

export class DataTableTemplatingDemoDoc extends Component {

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
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './DataTableDemo.scss';

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
                    <DataTable value={this.state.products} header={header} footer={footer}>
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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from 'primereact/button';

const DataTableTemplatingDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const colorTemplate = (rowData, column) => {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    };

    const brandTemplate = (rowData, column) => {
        let src = "showcase/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={rowData.brand} width="48px" />;
    };

    const actionTemplate = (rowData, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    };

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carCount = cars ? cars.length : 0;
    const header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
    const footer = "There are " + carCount + ' cars';

    return (
        <div>
            <DataTable value={cars} header={header} footer={footer}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" body={brandTemplate} style={{textAlign:'center'}}/>
                <Column field="color" header="Color" body={colorTemplate} />
                <Column body={actionTemplate} style={{textAlign:'center', width: '8em'}}/>
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
import {Button} from 'primereact/button';

const DataTableTemplatingDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const colorTemplate = (rowData: any, column: any) => {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    };

    const brandTemplate = (rowData: any, column: any) => {
        let src = "showcase/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={rowData.brand} width="48px" />;
    };

    const actionTemplate = (rowData: any, column: any) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    };

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carCount = cars ? cars.length : 0;
    const header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
    const footer = "There are " + carCount + ' cars';

    return (
        <div>
            <DataTable value={cars} header={header} footer={footer}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" body={brandTemplate} style={{textAlign:'center'}}/>
                <Column field="color" header="Color" body={colorTemplate} />
                <Column body={actionTemplate} style={{textAlign:'center', width: '8em'}}/>
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
                        <LiveEditor name="DataTableTemplatingDemo" sources={this.sources} service="CarService" data="cars-small" />
<CodeHighlight lang="scss">
{`
.datatable-templating-demo {
    .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .product-image {
        width: 100px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
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
