import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { Toast } from '../../components/toast/Toast';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

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
        this.productService.getProductsSmall().then(data => this.setState({ [`${productStateKey}`]: data }));
    }

    positiveIntegerValidator(props) {
        const { rowData, field } = props;
        return this.isPositiveInteger(rowData[field]);
    }

    emptyValueValidator(props) {
        const { rowData, field } = props;
        return rowData[field].trim().length > 0;
    }

    isPositiveInteger(val) {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        var n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    onEditorInit(props) {
        const { rowIndex: index, field, rowData } = props;
        if (!this.editingCellRows[index]) {
            this.editingCellRows[index] = {...rowData};
        }
        this.editingCellRows[index][field] = this.state.products2[index][field];
    }

    onEditorCancel(props) {
        const { rowIndex: index, field } = props;
        let products = [...this.state.products2];
        products[index][field] = this.editingCellRows[index][field];
        delete this.editingCellRows[index][field];

        this.setState({
            products2: products
        });
    }

    onEditorSubmit(props) {
        const { rowIndex: index, field } = props;
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
        return this.inputTextEditor(productKey, props, 'price');
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
                            <Column field="price" header="Price" editor={(props) => this.priceEditor('products1', props)}></Column>
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
                                    return <Column key={field} field={field} header={header} editor={(props) => this.inputTextEditor('products2', props, field)} editorValidator={validator}
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
                            <Column field="price" header="Price" editor={(props) => this.priceEditor('products3', props)}></Column>
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
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import ProductService from '../service/ProductService';

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

    positiveIntegerValidator(props) {
        const { rowData, field } = props;
        return this.isPositiveInteger(rowData[field]);
    }

    emptyValueValidator(props) {
        const { rowData, field } = props;
        return rowData[field].trim().length > 0;
    }

    isPositiveInteger(val) {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        var n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    onEditorInit(props) {
        const { rowIndex: index, field, rowData } = props;
        if (!this.editingCellRows[index]) {
            this.editingCellRows[index] = {...rowData};
        }
        this.editingCellRows[index][field] = this.state.products2[index][field];
    }

    onEditorCancel(props) {
        const { rowIndex: index, field } = props;
        let products = [...this.state.products2];
        products[index][field] = this.editingCellRows[index][field];
        delete this.editingCellRows[index][field];

        this.setState({
            products2: products
        });
    }

    onEditorSubmit(props) {
        const { rowIndex: index, field } = props;
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
        return this.inputTextEditor(productKey, props, 'price');
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
                        <Column field="price" header="Price" editor={(props) => this.priceEditor('products1', props)}></Column>
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
                                return <Column key={field} field={field} header={header} editor={(props) => this.inputTextEditor('products2', props, field)} editorValidator={validator}
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
                        <Column field="price" header="Price" editor={(props) => this.priceEditor('products3', props)}></Column>
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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Toast} from 'primereact/toast';
import {CarService} from '../service/CarService';

const DataTableEditDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();
    let clonedCars = {};
    let toast = useRef(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    /* Cell Editing */
    const onEditorValueChange = (props, value) => {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars1(updatedCars);
    };

    const inputTextEditor = (props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(props, e.target.value)} />;
    };

    const vinEditor = (props) => {
        return inputTextEditor(props, 'vin');
    };

    const yearEditor = (props) => {
        return inputTextEditor(props, 'year');
    };

    const brandEditor = (props) => {
        let brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <Dropdown value={props.value[props.rowIndex].brand} options={brands}
                    onChange={(e) => onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    };

    const colorEditor = (props) => {
        return inputTextEditor(props, 'color');
    };

    const requiredValidator = (props) => {
        let value = props.rowData[props.field];
        return value && value.length > 0;
    };

    /* Row Editing */
    const onEditorValueChangeForRowEditing = (props, value) => {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars2(updatedCars);
    };

    const editorForRowEditing = (props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
    };

    const onRowEditorValidator = (rowData) => {
        let value = rowData['brand'];
        return value.length > 0;
    };

    const onRowEditInit = (event) => {
        clonedCars[event.data.vin] = {...event.data};
    };

    const onRowEditSave = (event) => {
        if (onRowEditorValidator(event.data)) {
            delete clonedCars[event.data.vin];
            toast.current.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            toast.current.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    const onRowEditCancel = (event) => {
        let cars = [...cars2];
        cars[event.index] = clonedCars[event.data.vin];
        delete clonedCars[event.data.vin];
        setCars2(cars);
    };

    return (
        <div>
            <Toast ref={toast} />

            <h3>Cell Editing</h3>
            <DataTable value={cars1}>
                <Column field="vin" header="Vin" editor={vinEditor} editorValidator={requiredValidator} style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={yearEditor} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={brandEditor} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={colorEditor} style={{height: '3.5em'}}/>
            </DataTable>

            <h3>Row Editing</h3>
            <DataTable value={cars2} editMode="row" rowEditorValidator={onRowEditorValidator} onRowEditInit={onRowEditInit} onRowEditSave={onRowEditSave} onRowEditCancel={onRowEditCancel}>
                <Column field="vin" header="Vin" style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={(props) => editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={(props) => editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={(props) => editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                <Column rowEditor style={{'width': '70px', 'textAlign': 'center'}}></Column>
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Toast} from 'primereact/toast';
import {CarService} from '../service/CarService';

const DataTableEditDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();
    let clonedCars: any = {};
    let toast = useRef<any>(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    /* Cell Editing */
    const onEditorValueChange = (props: any, value: any) => {
        let updatedCars: any = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars1(updatedCars);
    };

    const inputTextEditor = (props: any, field: string) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(props, e.target.value)} />;
    };

    const vinEditor = (props: any) => {
        return inputTextEditor(props, 'vin');
    };

    const yearEditor = (props: any) => {
        return inputTextEditor(props, 'year');
    };

    const brandEditor = (props: any) => {
        let brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <Dropdown value={props.value[props.rowIndex].brand} options={brands}
                    onChange={(e) => onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    };

    const colorEditor = (props: any) => {
        return inputTextEditor(props, 'color');
    };

    const requiredValidator = (props: any) => {
        let value: any = props.rowData[props.field];
        return value && value.length > 0;
    };

    /* Row Editing */
    const onEditorValueChangeForRowEditing = (props: any, value: any) => {
        let updatedCars: any = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars2(updatedCars);
    };

    const editorForRowEditing = (props: any, field: string) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
    };

    const onRowEditorValidator = (rowData: any) => {
        let value = rowData['brand'];
        return value.length > 0;
    };

    const onRowEditInit = (event: any) => {
        clonedCars[event.data.vin] = {...event.data};
    };

    const onRowEditSave = (event: any) => {
        if (onRowEditorValidator(event.data)) {
            delete clonedCars[event.data.vin];
            toast.current.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            toast.current.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    const onRowEditCancel = (event: any) => {
        let cars: any = [...cars2];
        cars[event.index] = clonedCars[event.data.vin];
        delete clonedCars[event.data.vin];
        setCars2(cars);
    };

    return (
        <div>
            <Toast ref={toast} />

            <h3>Cell Editing</h3>
            <DataTable value={cars1}>
                <Column field="vin" header="Vin" editor={vinEditor} editorValidator={requiredValidator} style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={yearEditor} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={brandEditor} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={colorEditor} style={{height: '3.5em'}}/>
            </DataTable>

            <h3>Row Editing</h3>
            <DataTable value={cars2} editMode="row" rowEditorValidator={onRowEditorValidator} onRowEditInit={onRowEditInit} onRowEditSave={onRowEditSave} onRowEditCancel={onRowEditCancel}>
                <Column field="vin" header="Vin" style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={(props) => editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={(props) => editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={(props) => editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                <Column rowEditor style={{'width': '70px', 'textAlign': 'center'}}></Column>
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
                        <LiveEditor name="DataTableEditDemo" sources={this.sources} service="CarService" data="cars-small" />
<CodeHighlight lang="scss">
{`
.datatable-editing-demo {
    .editable-cells-table td.p-cell-editing {
        padding-top: 0;
        padding-bottom: 0;
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
