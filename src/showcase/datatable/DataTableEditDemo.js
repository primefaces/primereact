import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { InputNumber } from '../../components/inputnumber/InputNumber';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import { ProductService } from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';
import './DataTableDemo.scss';

export class DataTableEditDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products1: null,
            products2: null,
            products3: null,
            editingRows: {}
        };

        this.columns = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'price', header: 'Price' }
        ];

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];

        this.productService = new ProductService();

        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.onCellEditComplete = this.onCellEditComplete.bind(this);
        this.onRowEditComplete1 = this.onRowEditComplete1.bind(this);
        this.onRowEditComplete2 = this.onRowEditComplete2.bind(this);
        this.onRowEditChange = this.onRowEditChange.bind(this);
    }

    componentDidMount() {
        this.fetchProductData('products1');
        this.fetchProductData('products2');
        this.fetchProductData('products3');
    }

    fetchProductData(productStateKey) {
        this.productService.getProductsSmall().then(data => this.setState({ [`${productStateKey}`]: data }));
    }

    isPositiveInteger(val) {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    getStatusLabel(status) {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    onCellEditComplete(e) {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (this.isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    onRowEditComplete1(e) {
        let products2 = [...this.state.products2];
        let { newData, index } = e;

        products2[index] = newData;

        this.setState({ products2 });
    }

    onRowEditComplete2(e) {
        let products3 = [...this.state.products3];
        let { newData, index } = e;

        products3[index] = newData;

        this.setState({ products3 });
    }

    onRowEditChange(e) {
        this.setState({ editingRows: e.data });
    }

    setActiveRowIndex(index) {
        let editingRows = { ...this.state.editingRows, ...{ [`${this.state.products3[index].id}`]: true } };
        this.setState({ editingRows });
    }

    cellEditor(options) {
        if (options.field === 'price')
            return this.priceEditor(options);
        else
            return this.textEditor(options);
    }

    textEditor(options) {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    statusEditor(options) {
        return (
            <Dropdown value={options.value} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    priceEditor(options) {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }

    priceBodyTemplate(rowData) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Edit</span></h1>
                        <p>Cell and Row editing provides a rapid and user friendly way to manipulate data.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="datatable/DataTableEditDemo.js" />
                </div>

                <div className="content-section implementation datatable-editing-demo">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card p-fluid">
                        <h5>Cell Editing</h5>
                        <p>Validations, dynamic columns and reverting values with the escape key.</p>
                        <DataTable value={this.state.products1} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                            {
                                this.columns.map(({ field, header }) => {
                                    return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && this.priceBodyTemplate}
                                        editor={(options) => this.cellEditor(options)} onCellEditComplete={this.onCellEditComplete} />
                                })
                            }
                        </DataTable>
                    </div>

                    <div className="card p-fluid">
                        <h5>Row Editing</h5>
                        <DataTable value={this.state.products2} editMode="row" dataKey="id" onRowEditComplete={this.onRowEditComplete1} responsiveLayout="scroll">
                            <Column field="code" header="Code" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="name" header="Name" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(options) => this.statusEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(options) => this.priceEditor(options)} style={{ width: '20%' }}></Column>
                            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Programmatic</h5>
                        <div className="p-pt-2 p-pb-4">
                            <Button onClick={() => this.setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                            <Button onClick={() => this.setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                            <Button onClick={() => this.setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
                        </div>

                        <div className="p-fluid">
                            <DataTable value={this.state.products3} editMode="row" dataKey="id" editingRows={this.state.editingRows} onRowEditChange={this.onRowEditChange} onRowEditComplete={this.onRowEditComplete2} responsiveLayout="scroll">
                                <Column field="code" header="Code" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                                <Column field="name" header="Name" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                                <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(options) => this.statusEditor(options)} style={{ width: '20%' }}></Column>
                                <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(options) => this.priceEditor(options)} style={{ width: '20%' }}></Column>
                                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>

                <DataTableEditDemoDoc></DataTableEditDemoDoc>
            </div>
        );
    }
}

export class DataTableEditDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

export class DataTableEditDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products1: null,
            products2: null,
            products3: null,
            editingRows: {}
        };

        this.columns = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'price', header: 'Price' }
        ];

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];

        this.productService = new ProductService();

        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.onCellEditComplete = this.onCellEditComplete.bind(this);
        this.onRowEditComplete1 = this.onRowEditComplete1.bind(this);
        this.onRowEditComplete2 = this.onRowEditComplete2.bind(this);
        this.onRowEditChange = this.onRowEditChange.bind(this);
    }

    componentDidMount() {
        this.fetchProductData('products1');
        this.fetchProductData('products2');
        this.fetchProductData('products3');
    }

    fetchProductData(productStateKey) {
        this.productService.getProductsSmall().then(data => this.setState({ [\`\${productStateKey}\`]: data }));
    }

    isPositiveInteger(val) {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    getStatusLabel(status) {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    onCellEditComplete(e) {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (this.isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    onRowEditComplete1(e) {
        let products2 = [...this.state.products2];
        let { newData, index } = e;

        products2[index] = newData;

        this.setState({ products2 });
    }

    onRowEditComplete2(e) {
        let products3 = [...this.state.products3];
        let { newData, index } = e;

        products3[index] = newData;

        this.setState({ products3 });
    }

    onRowEditChange(e) {
        this.setState({ editingRows: e.data });
    }

    setActiveRowIndex(index) {
        let editingRows = { ...this.state.editingRows, ...{ [\`\${this.state.products3[index].id}\`]: true } };
        this.setState({ editingRows });
    }

    cellEditor(options) {
        if (options.field === 'price')
            return this.priceEditor(options);
        else
            return this.textEditor(options);
    }

    textEditor(options) {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    statusEditor(options) {
        return (
            <Dropdown value={options.value} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    priceEditor(options) {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }

    priceBodyTemplate(rowData) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card p-fluid">
                    <h5>Cell Editing</h5>
                    <p>Validations, dynamic columns and reverting values with the escape key.</p>
                    <DataTable value={this.state.products1} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                        {
                            this.columns.map(({ field, header }) => {
                                return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && this.priceBodyTemplate}
                                    editor={(options) => this.cellEditor(options)} onCellEditComplete={this.onCellEditComplete} />
                            })
                        }
                    </DataTable>
                </div>

                <div className="card p-fluid">
                    <h5>Row Editing</h5>
                    <DataTable value={this.state.products2} editMode="row" dataKey="id" onRowEditComplete={this.onRowEditComplete1} responsiveLayout="scroll">
                        <Column field="code" header="Code" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(options) => this.statusEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(options) => this.priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Programmatic</h5>
                    <div className="p-pt-2 p-pb-4">
                        <Button onClick={() => this.setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                        <Button onClick={() => this.setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                        <Button onClick={() => this.setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
                    </div>

                    <div className="p-fluid">
                        <DataTable value={this.state.products3} editMode="row" dataKey="id" editingRows={this.state.editingRows} onRowEditChange={this.onRowEditChange} onRowEditComplete={this.onRowEditComplete2} responsiveLayout="scroll">
                            <Column field="code" header="Code" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="name" header="Name" editor={(options) => this.textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(options) => this.statusEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(options) => this.priceEditor(options)} style={{ width: '20%' }}></Column>
                            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    </div>
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
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const DataTableEditDemo = () => {
    const [products1, setProducts1] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [products3, setProducts3] = useState(null);
    const [editingRows, setEditingRows] = useState({});
    const toast = useRef(null);

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    const dataTableFuncMap = {
        'products1': setProducts1,
        'products2': setProducts2,
        'products3': setProducts3
    };

    const productService = new ProductService();

    useEffect(() => {
        fetchProductData('products1');
        fetchProductData('products2');
        fetchProductData('products3');
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchProductData = (productStateKey) => {
        productService.getProductsSmall().then(data => dataTableFuncMap[\`\${productStateKey}\`](data));
    }

    const isPositiveInteger = (val) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    const onRowEditComplete1 = (e) => {
        let _products2 = [...products2];
        let { newData, index } = e;

        _products2[index] = newData;

        setProducts2(_products2);
    }

    const onRowEditComplete2 = (e) => {
        let _products3 = [...products3];
        let { newData, index } = e;

        _products3[index] = newData;

        setProducts3(_products3);
    }

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    }

    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [\`\${products3[index].id}\`]: true } };
        setEditingRows(_editingRows);
    }

    const cellEditor = (options) => {
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const statusEditor = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    return (
        <div className="datatable-editing-demo">
            <Toast ref={toast} />

            <div className="card p-fluid">
                <h5>Cell Editing</h5>
                <p>Validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable value={products1} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                    {
                        columns.map(({ field, header }) => {
                            return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate}
                                editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                        })
                    }
                </DataTable>
            </div>

            <div className="card p-fluid">
                <h5>Row Editing</h5>
                <DataTable value={products2} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll">
                    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Programmatic</h5>
                <div className="p-pt-2 p-pb-4">
                    <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                    <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
                </div>

                <div className="p-fluid">
                    <DataTable value={products3} editMode="row" dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll">
                        <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
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
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const DataTableEditDemo = () => {
    const [products1, setProducts1] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [products3, setProducts3] = useState(null);
    const [editingRows, setEditingRows] = useState({});
    const toast = useRef(null);

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    const dataTableFuncMap = {
        'products1': setProducts1,
        'products2': setProducts2,
        'products3': setProducts3
    };

    const productService = new ProductService();

    useEffect(() => {
        fetchProductData('products1');
        fetchProductData('products2');
        fetchProductData('products3');
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchProductData = (productStateKey) => {
        productService.getProductsSmall().then(data => dataTableFuncMap[\`\${productStateKey}\`](data));
    }

    const isPositiveInteger = (val) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    const onRowEditComplete1 = (e) => {
        let _products2 = [...products2];
        let { newData, index } = e;

        _products2[index] = newData;

        setProducts2(_products2);
    }

    const onRowEditComplete2 = (e) => {
        let _products3 = [...products3];
        let { newData, index } = e;

        _products3[index] = newData;

        setProducts3(_products3);
    }

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    }

    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [\`\${products3[index].id}\`]: true } };
        setEditingRows(_editingRows);
    }

    const cellEditor = (options) => {
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const statusEditor = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    return (
        <div className="datatable-editing-demo">
            <Toast ref={toast} />

            <div className="card p-fluid">
                <h5>Cell Editing</h5>
                <p>Validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable value={products1} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                    {
                        columns.map(({ field, header }) => {
                            return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate}
                                editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                        })
                    }
                </DataTable>
            </div>

            <div className="card p-fluid">
                <h5>Row Editing</h5>
                <DataTable value={products2} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll">
                    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Programmatic</h5>
                <div className="p-pt-2 p-pb-4">
                    <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                    <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
                </div>

                <div className="p-fluid">
                    <DataTable value={products3} editMode="row" dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll">
                        <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
}
                `
            },
            'browser': {
                tabName: 'Browser Source',
                imports: `
        <link rel="stylesheet" href="./DataTableDemo.css" />
        <script src="./ProductService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>
        <script src="https://unpkg.com/primereact/inputnumber/inputnumber.min.js"></script>
        <script src="https://unpkg.com/primereact/dropdown/dropdown.min.js"></script>
        <script src="https://unpkg.com/primereact/button/button.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
                content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { InputText } = primereact.inputtext;
const { InputNumber } = primereact.inputnumber;
const { Dropdown } = primereact.dropdown;
const { Button } = primereact.button;
const { Toast } = primereact.toast;

const DataTableEditDemo = () => {
    const [products1, setProducts1] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [products3, setProducts3] = useState(null);
    const [editingRows, setEditingRows] = useState({});
    const toast = useRef(null);

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    const dataTableFuncMap = {
        'products1': setProducts1,
        'products2': setProducts2,
        'products3': setProducts3
    };

    const productService = new ProductService();

    useEffect(() => {
        fetchProductData('products1');
        fetchProductData('products2');
        fetchProductData('products3');
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchProductData = (productStateKey) => {
        productService.getProductsSmall().then(data => dataTableFuncMap[\`\${productStateKey}\`](data));
    }

    const isPositiveInteger = (val) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    const onRowEditComplete1 = (e) => {
        let _products2 = [...products2];
        let { newData, index } = e;

        _products2[index] = newData;

        setProducts2(_products2);
    }

    const onRowEditComplete2 = (e) => {
        let _products3 = [...products3];
        let { newData, index } = e;

        _products3[index] = newData;

        setProducts3(_products3);
    }

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    }

    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [\`\${products3[index].id}\`]: true } };
        setEditingRows(_editingRows);
    }

    const cellEditor = (options) => {
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const statusEditor = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    return (
        <div className="datatable-editing-demo">
            <Toast ref={toast} />

            <div className="card p-fluid">
                <h5>Cell Editing</h5>
                <p>Validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable value={products1} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                    {
                        columns.map(({ field, header }) => {
                            return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate}
                                editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                        })
                    }
                </DataTable>
            </div>

            <div className="card p-fluid">
                <h5>Row Editing</h5>
                <DataTable value={products2} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll">
                    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Programmatic</h5>
                <div className="p-pt-2 p-pb-4">
                    <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                    <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
                </div>

                <div className="p-fluid">
                    <DataTable value={products3} editMode="row" dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll">
                        <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
}
                `
            }
        };

        this.extFiles = {
            'demo/DataTableDemo.css': {
                content: `
.datatable-editing-demo .editable-cells-table td.p-cell-editing {
    padding-top: 0;
    padding-bottom: 0;
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
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableEditDemo', sources: this.sources, service: 'ProductService', data: 'products-small', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
