import React, { useEffect, useState, memo} from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { ProductService } from '../../service/ProductService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import { MultiSelect } from '../../components/lib/multiselect/MultiSelect';
import Head from 'next/head';

const DataTableColTogglerDemo = () => {

    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Head>
                <title>React Table Component - Column Toggler</title>
                <meta name="description" content="MultiSelect component can be used to implement column toggler functionality." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Column Toggler</span></h1>
                    <p>MultiSelect component can be used to implement column toggler functionality.</p>
                </div>

                <DocActions github="datatable/coltoggle.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <DataTable value={products} header={header} responsiveLayout="scroll">
                        <Column field="code" header="Code" />
                        {columnComponents}
                    </DataTable>
                </div>
            </div>

            <DataTableColTogglerDemoDoc></DataTableColTogglerDemoDoc>
        </div>
    );
}

export default DataTableColTogglerDemo;

export const DataTableColTogglerDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { MultiSelect } from 'primereact/multiselect';

export class DataTableColTogglerDemo extends Component {

    constructor(props) {
        super(props);

        this.columns = [
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];

        this.state = {
            selectedColumns: this.columns,
            products: []
        }

        this.productService = new ProductService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onColumnToggle(event) {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        this.setState({ selectedColumns: orderedSelectedColumns });
    }

    render() {
        const header = (
            <div style={{ textAlign:'left' }}>
                <MultiSelect value={this.state.selectedColumns} options={this.columns} optionLabel="header" onChange={this.onColumnToggle} style={{width:'20em'}}/>
            </div>
        );

        const columnComponents = this.state.selectedColumns.map(col=> {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.products} header={header} responsiveLayout="scroll">
                        <Column field="code" header="Code" />
                        {columnComponents}
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
import { MultiSelect } from 'primereact/multiselect';

const DataTableColTogglerDemo = () => {
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    {columnComponents}
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
import { MultiSelect } from 'primereact/multiselect';

const DataTableColTogglerDemo = () => {
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    {columnComponents}
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
<script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
<script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { MultiSelect } = primereact.multiselect;

const DataTableColTogglerDemo = () => {
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    {columnComponents}
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
                    useLiveEditorTabs({ name: 'DataTableColTogglerDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    )
})
