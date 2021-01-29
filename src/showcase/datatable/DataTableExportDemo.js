import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Button } from '../../components/button/Button';
import ProductService from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableExportDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.exportCSV = this.exportCSV.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    render() {
        const header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" label="Export" onClick={this.exportCSV}></Button></div>;

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Export</span></h1>
                        <p>DataTable can export its data to CSV format.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={this.state.products} header={header} ref={(el) => { this.dt = el; }}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableExportDemoDoc></DataTableExportDemoDoc>
            </div>
        );
    }
}

export class DataTableExportDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ProductService from '../service/ProductService';

export class DataTableExportDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.exportCSV = this.exportCSV.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    render() {
        const header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" label="Export" onClick={this.exportCSV}></Button></div>;

        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.products} header={header} ref={(el) => { this.dt = el; }}>
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
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ProductService from '../service/ProductService';

const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const dt = useRef(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" label="Export" onClick={exportCSV}></Button></div>;

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} ref={dt}>
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
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ProductService from '../service/ProductService';

const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const dt = useRef(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" label="Export" onClick={exportCSV}></Button></div>;

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} ref={dt}>
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
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableExportDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
