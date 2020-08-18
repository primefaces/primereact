import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DataTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.codeBodyTemplate = this.codeBodyTemplate.bind(this);
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.categoryBodyTemplate = this.categoryBodyTemplate.bind(this);
        this.quantityBodyTemplate = this.quantityBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    codeBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.code}
            </>
        );
    }

    nameBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    }

    categoryBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </>
        );
    }

    quantityBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Quantity</span>
                {rowData.quantity}
            </>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Responsive</span></h1>
                        <p>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-responsive-demo">
                    <div className="card">
                        <DataTable value={this.state.products} className="p-datatable-responsive-demo" paginator rows={10} header="Responsive">
                            <Column field="code" header="Code" body={this.codeBodyTemplate} />
                            <Column field="name" header="Name" body={this.nameBodyTemplate} />
                            <Column field="category" header="Category" body={this.categoryBodyTemplate} />
                            <Column field="quantity" header="Quantity" body={this.quantityBodyTemplate} />
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
import ProductService from '../service/ProductService';

export class DataTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.codeBodyTemplate = this.codeBodyTemplate.bind(this);
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.categoryBodyTemplate = this.categoryBodyTemplate.bind(this);
        this.quantityBodyTemplate = this.quantityBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    codeBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.code}
            </>
        );
    }

    nameBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    }

    categoryBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </>
        );
    }

    quantityBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Quantity</span>
                {rowData.quantity}
            </>
        );
    }

    render() {
        return (
            <div className="datatable-responsive-demo">
                <div className="card">
                    <DataTable value={this.state.products} className="p-datatable-responsive-demo" paginator rows={10} header="Responsive">
                        <Column field="code" header="Code" body={this.codeBodyTemplate} />
                        <Column field="name" header="Name" body={this.nameBodyTemplate} />
                        <Column field="category" header="Category" body={this.categoryBodyTemplate} />
                        <Column field="quantity" header="Quantity" body={this.quantityBodyTemplate} />
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

const DataTableResponsiveDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={cars} responsive header="Responsive">
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

const DataTableResponsiveDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={cars} responsive header="Responsive">
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
                        <LiveEditor name="DataTableResponsiveDemo" sources={this.sources} service="CarService" data="cars-small" />
<CodeHighlight lang="scss">
{`
.datatable-responsive-demo {
    .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {
        display: none;
    }

    @media screen and (max-width: 40em) {
        .p-datatable {
            &.p-datatable-responsive-demo {
                .p-datatable-thead > tr > th,
                .p-datatable-tfoot > tr > td {
                    display: none !important;
                }

                .p-datatable-tbody > tr > td {
                    text-align: left;
                    display: block;
                    width: 100%;
                    float: left;
                    clear: left;
                    border: 0 none;

                    .p-column-title {
                        padding: .4rem;
                        min-width: 30%;
                        display: inline-block;
                        margin: -.4em 1em -.4em -.4rem;
                        font-weight: bold;
                    }

                    &:last-child {
                        border-bottom: 1px solid var(--surface-d);
                    }
                }
            }
        }
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
