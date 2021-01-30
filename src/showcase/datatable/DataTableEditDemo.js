import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { InputNumber } from '../../components/inputnumber/InputNumber';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { Toast } from '../../components/toast/Toast';
import ProductService from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataTableDemo.scss';

export class DataTableEditDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products1: null,
            products2: null,
            products3: null
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

        this.editingCellRows = {};
        this.originalRows = {};

        this.productService = new ProductService();
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
        this.onEditorInit = this.onEditorInit.bind(this);
        this.onEditorCancel = this.onEditorCancel.bind(this);
        this.onEditorSubmit = this.onEditorSubmit.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.positiveIntegerValidator = this.positiveIntegerValidator.bind(this);
        this.emptyValueValidator = this.emptyValueValidator.bind(this);
    }

    componentDidMount() {
        this.fetchProductData('products1');
        this.fetchProductData('products2');
        this.fetchProductData('products3');
    }

    fetchProductData(productStateKey) {
        this.productService.getProductsSmall().then(data => this.setState({ [`${productStateKey}`]: data }));
    }

    positiveIntegerValidator(e) {
        const { rowData, field } = e.columnProps;
        return this.isPositiveInteger(rowData[field]);
    }

    emptyValueValidator(e) {
        const { rowData, field } = e.columnProps;
        return rowData[field].trim().length > 0;
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

    onEditorInit(e) {
        const { rowIndex: index, field, rowData } = e.columnProps;
        if (!this.editingCellRows[index]) {
            this.editingCellRows[index] = {...rowData};
        }
        this.editingCellRows[index][field] = this.state.products2[index][field];
    }

    onEditorCancel(e) {
        const { rowIndex: index, field } = e.columnProps;
        let products = [...this.state.products2];
        products[index][field] = this.editingCellRows[index][field];
        delete this.editingCellRows[index][field];

        this.setState({
            products2: products
        });
    }

    onEditorSubmit(e) {
        const { rowIndex: index, field } = e.columnProps;
        delete this.editingCellRows[index][field];
    }

    onRowEditInit(event) {
        this.originalRows[event.index] = { ...this.state.products3[event.index] };
    }

    onRowEditCancel(event) {
        let products = [...this.state.products3];
        products[event.index] = this.originalRows[event.index];
        delete this.originalRows[event.index];

        this.setState({ products3: products });
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

    onEditorValueChange(productKey, props, value) {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        this.setState({ [`${productKey}`]: updatedProducts });
    }

    inputTextEditor(productKey, props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(productKey, props, e.target.value)} />;
    }

    codeEditor(productKey, props) {
        return this.inputTextEditor(productKey, props, 'code');
    }

    nameEditor(productKey, props) {
        return this.inputTextEditor(productKey, props, 'name');
    }

    priceEditor(productKey, props) {
        return <InputNumber value={props.rowData['price']} onValueChange={(e) => this.onEditorValueChange(productKey, props, e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    statusEditor(productKey, props) {
        return (
            <Dropdown value={props.rowData['inventoryStatus']} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => this.onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }

    priceBodyTemplate(rowData) {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData.price);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Edit</span></h1>
                        <p>Cell and Row editing provides a rapid and user friendly way to manipulate data.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-editing-demo">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Basic Cell Editing</h5>
                        <DataTable value={this.state.products1} editMode="cell" className="editable-cells-table">
                            <Column field="code" header="Code" editor={(props) => this.codeEditor('products1', props)}></Column>
                            <Column field="name" header="Name" editor={(props) => this.nameEditor('products1', props)}></Column>
                            <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(props) => this.statusEditor('products1', props)}></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(props) => this.priceEditor('products1', props)}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Advanced Cell Editing</h5>
                        <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                        <DataTable value={this.state.products2} editMode="cell" className="editable-cells-table">
                            {
                                this.columns.map(col => {
                                    const { field, header } = col;
                                    const validator = (field === 'quantity' || field === 'price') ? this.positiveIntegerValidator : this.emptyValueValidator;
                                    return <Column key={field} field={field} header={header} body={field === 'price' && this.priceBodyTemplate}
                                        editor={(props) => this.inputTextEditor('products2', props, field)} editorValidator={validator}
                                        onEditorInit={this.onEditorInit} onEditorCancel={this.onEditorCancel} onEditorSubmit={this.onEditorSubmit} />
                                })
                            }
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Row Editing</h5>
                        <DataTable value={this.state.products3} editMode="row" dataKey="id" onRowEditInit={this.onRowEditInit} onRowEditCancel={this.onRowEditCancel}>
                            <Column field="code" header="Code" editor={(props) => this.codeEditor('products3', props)}></Column>
                            <Column field="name" header="Name" editor={(props) => this.nameEditor('products3', props)}></Column>
                            <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(props) => this.statusEditor('products3', props)}></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(props) => this.priceEditor('products3', props)}></Column>
                            <Column rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
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
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';
import './DataTableDemo.css';

export class DataTableEditDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products1: null,
            products2: null,
            products3: null
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

        this.editingCellRows = {};
        this.originalRows = {};

        this.productService = new ProductService();
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
        this.onEditorInit = this.onEditorInit.bind(this);
        this.onEditorCancel = this.onEditorCancel.bind(this);
        this.onEditorSubmit = this.onEditorSubmit.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.positiveIntegerValidator = this.positiveIntegerValidator.bind(this);
        this.emptyValueValidator = this.emptyValueValidator.bind(this);
    }

    componentDidMount() {
        this.fetchProductData('products1');
        this.fetchProductData('products2');
        this.fetchProductData('products3');
    }

    fetchProductData(productStateKey) {
        this.productService.getProductsSmall().then(data => this.setState({ [\`\${productStateKey}\`]: data }));
    }

    positiveIntegerValidator(e) {
        const { rowData, field } = e.columnProps;
        return this.isPositiveInteger(rowData[field]);
    }

    emptyValueValidator(e) {
        const { rowData, field } = e.columnProps;
        return rowData[field].trim().length > 0;
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

    onEditorInit(e) {
        const { rowIndex: index, field, rowData } = e.columnProps;
        if (!this.editingCellRows[index]) {
            this.editingCellRows[index] = {...rowData};
        }
        this.editingCellRows[index][field] = this.state.products2[index][field];
    }

    onEditorCancel(e) {
        const { rowIndex: index, field } = e.columnProps;
        let products = [...this.state.products2];
        products[index][field] = this.editingCellRows[index][field];
        delete this.editingCellRows[index][field];

        this.setState({
            products2: products
        });
    }

    onEditorSubmit(e) {
        const { rowIndex: index, field } = e.columnProps;
        delete this.editingCellRows[index][field];
    }

    onRowEditInit(event) {
        this.originalRows[event.index] = { ...this.state.products3[event.index] };
    }

    onRowEditCancel(event) {
        let products = [...this.state.products3];
        products[event.index] = this.originalRows[event.index];
        delete this.originalRows[event.index];

        this.setState({ products3: products });
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

    onEditorValueChange(productKey, props, value) {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        this.setState({ [\`\${productKey}\`]: updatedProducts });
    }

    inputTextEditor(productKey, props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(productKey, props, e.target.value)} />;
    }

    codeEditor(productKey, props) {
        return this.inputTextEditor(productKey, props, 'code');
    }

    nameEditor(productKey, props) {
        return this.inputTextEditor(productKey, props, 'name');
    }

    priceEditor(productKey, props) {
        return <InputNumber value={props.rowData['price']} onValueChange={(e) => this.onEditorValueChange(productKey, props, e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    statusEditor(productKey, props) {
        return (
            <Dropdown value={props.rowData['inventoryStatus']} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => this.onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }

    priceBodyTemplate(rowData) {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData.price);
    }

    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Basic Cell Editing</h5>
                    <DataTable value={this.state.products1} editMode="cell" className="editable-cells-table">
                        <Column field="code" header="Code" editor={(props) => this.codeEditor('products1', props)}></Column>
                        <Column field="name" header="Name" editor={(props) => this.nameEditor('products1', props)}></Column>
                        <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(props) => this.statusEditor('products1', props)}></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(props) => this.priceEditor('products1', props)}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Advanced Cell Editing</h5>
                    <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                    <DataTable value={this.state.products2} editMode="cell" className="editable-cells-table">
                        {
                            this.columns.map(col => {
                                const { field, header } = col;
                                const validator = (field === 'quantity' || field === 'price') ? this.positiveIntegerValidator : this.emptyValueValidator;
                                return <Column key={field} field={field} header={header} body={field === 'price' && this.priceBodyTemplate}
                                    editor={(props) => this.inputTextEditor('products2', props, field)} editorValidator={validator}
                                    onEditorInit={this.onEditorInit} onEditorCancel={this.onEditorCancel} onEditorSubmit={this.onEditorSubmit} />
                            })
                        }
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Row Editing</h5>
                    <DataTable value={this.state.products3} editMode="row" dataKey="id" onRowEditInit={this.onRowEditInit} onRowEditCancel={this.onRowEditCancel}>
                        <Column field="code" header="Code" editor={(props) => this.codeEditor('products3', props)}></Column>
                        <Column field="name" header="Name" editor={(props) => this.nameEditor('products3', props)}></Column>
                        <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} editor={(props) => this.statusEditor('products3', props)}></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} editor={(props) => this.priceEditor('products3', props)}></Column>
                        <Column rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
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
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';
import './DataTableDemo.css';

const DataTableEditDemo = () => {
    const [products1, setProducts1] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [products3, setProducts3] = useState(null);
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

    let editingCellRows = {};
    let originalRows = {};

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

    const positiveIntegerValidator = (e) => {
        const { rowData, field } = e.columnProps;
        return isPositiveInteger(rowData[field]);
    }

    const emptyValueValidator = (e) => {
        const { rowData, field } = e.columnProps;
        return rowData[field].trim().length > 0;
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

    const onEditorInit = (e) => {
        const { rowIndex: index, field, rowData } = e.columnProps;
        if (!editingCellRows[index]) {
            editingCellRows[index] = {...rowData};
        }
        editingCellRows[index][field] = products2[index][field];
    }

    const onEditorCancel = (e) => {
        const { rowIndex: index, field } = e.columnProps;
        let products = [...products2];
        products[index][field] = editingCellRows[index][field];
        delete editingCellRows[index][field];

        setProducts2(products);
    }

    const onEditorSubmit = (e) => {
        const { rowIndex: index, field } = e.columnProps;
        delete editingCellRows[index][field];
    }

    const onRowEditInit = (event) => {
        originalRows[event.index] = { ...products3[event.index] };
    }

    const onRowEditCancel = (event) => {
        let products = [...products3];
        products[event.index] = originalRows[event.index];
        delete originalRows[event.index];

        setProducts3(products);
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

    const onEditorValueChange = (productKey, props, value) => {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        dataTableFuncMap[\`\${productKey}\`](updatedProducts);
    }

    const inputTextEditor = (productKey, props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(productKey, props, e.target.value)} />;
    }

    const codeEditor = (productKey, props) => {
        return inputTextEditor(productKey, props, 'code');
    }

    const nameEditor = (productKey, props) => {
        return inputTextEditor(productKey, props, 'name');
    }

    const priceEditor = (productKey, props) => {
        return <InputNumber value={props.rowData['price']} onValueChange={(e) => onEditorValueChange(productKey, props, e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusEditor = (productKey, props) => {
        return (
            <Dropdown value={props.rowData['inventoryStatus']} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData.price);
    }

    return (
        <div className="datatable-editing-demo">
            <Toast ref={toast} />

            <div className="card">
                <h5>Basic Cell Editing</h5>
                <DataTable value={products1} editMode="cell" className="editable-cells-table">
                    <Column field="code" header="Code" editor={(props) => codeEditor('products1', props)}></Column>
                    <Column field="name" header="Name" editor={(props) => nameEditor('products1', props)}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(props) => statusEditor('products1', props)}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(props) => priceEditor('products1', props)}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Advanced Cell Editing</h5>
                <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable value={products2} editMode="cell" className="editable-cells-table">
                    {
                        columns.map(col => {
                            const { field, header } = col;
                            const validator = (field === 'quantity' || field === 'price') ? positiveIntegerValidator : emptyValueValidator;
                            return <Column key={field} field={field} header={header} body={field === 'price' && priceBodyTemplate}
                                editor={(props) => inputTextEditor('products2', props, field)} editorValidator={validator}
                                onEditorInit={onEditorInit} onEditorCancel={onEditorCancel} onEditorSubmit={onEditorSubmit} />
                        })
                    }
                </DataTable>
            </div>

            <div className="card">
                <h5>Row Editing</h5>
                <DataTable value={products3} editMode="row" dataKey="id" onRowEditInit={onRowEditInit} onRowEditCancel={onRowEditCancel}>
                    <Column field="code" header="Code" editor={(props) => codeEditor('products3', props)}></Column>
                    <Column field="name" header="Name" editor={(props) => nameEditor('products3', props)}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(props) => statusEditor('products3', props)}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(props) => priceEditor('products3', props)}></Column>
                    <Column rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
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
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';
import './DataTableDemo.css';

const DataTableEditDemo = () => {
    const [products1, setProducts1] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [products3, setProducts3] = useState(null);
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

    let editingCellRows = {};
    let originalRows = {};

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

    const positiveIntegerValidator = (e) => {
        const { rowData, field } = e.columnProps;
        return isPositiveInteger(rowData[field]);
    }

    const emptyValueValidator = (e) => {
        const { rowData, field } = e.columnProps;
        return rowData[field].trim().length > 0;
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

    const onEditorInit = (e) => {
        const { rowIndex: index, field, rowData } = e.columnProps;
        if (!editingCellRows[index]) {
            editingCellRows[index] = {...rowData};
        }
        editingCellRows[index][field] = products2[index][field];
    }

    const onEditorCancel = (e) => {
        const { rowIndex: index, field } = e.columnProps;
        let products = [...products2];
        products[index][field] = editingCellRows[index][field];
        delete editingCellRows[index][field];

        setProducts2(products);
    }

    const onEditorSubmit = (e) => {
        const { rowIndex: index, field } = e.columnProps;
        delete editingCellRows[index][field];
    }

    const onRowEditInit = (event) => {
        originalRows[event.index] = { ...products3[event.index] };
    }

    const onRowEditCancel = (event) => {
        let products = [...products3];
        products[event.index] = originalRows[event.index];
        delete originalRows[event.index];

        setProducts3(products);
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

    const onEditorValueChange = (productKey, props, value) => {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        dataTableFuncMap[\`\${productKey}\`](updatedProducts);
    }

    const inputTextEditor = (productKey, props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(productKey, props, e.target.value)} />;
    }

    const codeEditor = (productKey, props) => {
        return inputTextEditor(productKey, props, 'code');
    }

    const nameEditor = (productKey, props) => {
        return inputTextEditor(productKey, props, 'name');
    }

    const priceEditor = (productKey, props) => {
        return <InputNumber value={props.rowData['price']} onValueChange={(e) => onEditorValueChange(productKey, props, e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusEditor = (productKey, props) => {
        return (
            <Dropdown value={props.rowData['inventoryStatus']} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    }

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData.price);
    }

    return (
        <div className="datatable-editing-demo">
            <Toast ref={toast} />

            <div className="card">
                <h5>Basic Cell Editing</h5>
                <DataTable value={products1} editMode="cell" className="editable-cells-table">
                    <Column field="code" header="Code" editor={(props) => codeEditor('products1', props)}></Column>
                    <Column field="name" header="Name" editor={(props) => nameEditor('products1', props)}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(props) => statusEditor('products1', props)}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(props) => priceEditor('products1', props)}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Advanced Cell Editing</h5>
                <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable value={products2} editMode="cell" className="editable-cells-table">
                    {
                        columns.map(col => {
                            const { field, header } = col;
                            const validator = (field === 'quantity' || field === 'price') ? positiveIntegerValidator : emptyValueValidator;
                            return <Column key={field} field={field} header={header} body={field === 'price' && priceBodyTemplate}
                                editor={(props) => inputTextEditor('products2', props, field)} editorValidator={validator}
                                onEditorInit={onEditorInit} onEditorCancel={onEditorCancel} onEditorSubmit={onEditorSubmit} />
                        })
                    }
                </DataTable>
            </div>

            <div className="card">
                <h5>Row Editing</h5>
                <DataTable value={products3} editMode="row" dataKey="id" onRowEditInit={onRowEditInit} onRowEditCancel={onRowEditCancel}>
                    <Column field="code" header="Code" editor={(props) => codeEditor('products3', props)}></Column>
                    <Column field="name" header="Name" editor={(props) => nameEditor('products3', props)}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(props) => statusEditor('products3', props)}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(props) => priceEditor('products3', props)}></Column>
                    <Column rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
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
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableEditDemo', sources: this.sources, service: 'ProductService', data: 'products-small', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
