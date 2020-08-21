import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Toast } from '../../components/toast/Toast';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableSelectionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null
        };

        this.productService = new ProductService();
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onRowUnselect = this.onRowUnselect.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onRowSelect(event) {
        this.toast.show({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    onRowUnselect(event) {
        this.toast.show({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Selection</span></h1>
                        <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property and onRowSelect-onRowUnselect
                            events are provided as optional callbacks. In addition built-in radio button and checkbox based selections are available as alternatives.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Single</h5>
                        <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                        <DataTable value={this.state.products} selection={this.state.selectedProduct1} onSelectionChange={e => this.setState({ selectedProduct1: e.value })} selectionMode="single" dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Multiple</h5>
                        <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                        Setting metaKeySelection property as false enables multiple selection without meta key.</p>
                        <DataTable value={this.state.products} header="Multiple Selection with MetaKey" selection={this.state.selectedProducts1} onSelectionChange={e => this.setState({ selectedProducts1: e.value })} selectionMode="multiple" dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <DataTable value={this.state.products} header="Multiple Selection without MetaKey" selection={this.state.selectedProducts2} onSelectionChange={e => this.setState({ selectedProducts2: e.value })} selectionMode="multiple" dataKey="id" metaKeySelection={false} style={{ marginTop: '2em' }}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Events</h5>
                        <p>row-select and row-unselects are available as selection events.</p>
                        <DataTable value={this.state.products} selection={this.state.selectedProduct2} onSelectionChange={e => this.setState({ selectedProduct2: e.value })} selectionMode="single" dataKey="id"
                            onRowSelect={this.onRowSelect} onRowUnselect={this.onRowUnselect}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>RadioButton</h5>
                        <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                        <DataTable value={this.state.products} selection={this.state.selectedProduct3} onSelectionChange={e => this.setState({ selectedProduct3: e.value })} dataKey="id">
                            <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Checkbox</h5>

                        <DataTable value={this.state.products} selection={this.state.selectedProducts3} onSelectionChange={e => this.setState({ selectedProducts3: e.value })} dataKey="id">
                            <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableSelectionDemoDoc></DataTableSelectionDemoDoc>
            </div>
        );
    }
}

export class DataTableSelectionDemoDoc extends Component {

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
import { Toast } from 'primereact/toast';

export class DataTableSelectionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null
        };

        this.productService = new ProductService();
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onRowUnselect = this.onRowUnselect.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onRowSelect(event) {
        this.toast.show({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    onRowUnselect(event) {
        this.toast.show({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Single</h5>
                    <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                    <DataTable value={this.state.products} selection={this.state.selectedProduct1} onSelectionChange={e => this.setState({ selectedProduct1: e.value })} selectionMode="single" dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Multiple</h5>
                    <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                    Setting metaKeySelection property as false enables multiple selection without meta key.</p>
                    <DataTable value={this.state.products} header="Multiple Selection with MetaKey" selection={this.state.selectedProducts1} onSelectionChange={e => this.setState({ selectedProducts1: e.value })} selectionMode="multiple" dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <DataTable value={this.state.products} header="Multiple Selection without MetaKey" selection={this.state.selectedProducts2} onSelectionChange={e => this.setState({ selectedProducts2: e.value })} selectionMode="multiple" dataKey="id" metaKeySelection={false} style={{ marginTop: '2em' }}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Events</h5>
                    <p>row-select and row-unselects are available as selection events.</p>
                    <DataTable value={this.state.products} selection={this.state.selectedProduct2} onSelectionChange={e => this.setState({ selectedProduct2: e.value })} selectionMode="single" dataKey="id"
                        onRowSelect={this.onRowSelect} onRowUnselect={this.onRowUnselect}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>RadioButton</h5>
                    <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                    <DataTable value={this.state.products} selection={this.state.selectedProduct3} onSelectionChange={e => this.setState({ selectedProduct3: e.value })} dataKey="id">
                        <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Checkbox</h5>

                    <DataTable value={this.state.products} selection={this.state.selectedProducts3} onSelectionChange={e => this.setState({ selectedProducts3: e.value })} dataKey="id">
                        <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
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
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableSelectionDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar1, setSelectedCar1] = useState(null);
    const [selectedCar2, setSelectedCar2] = useState(null);
    const [selectedCars1, setSelectedCars1] = useState(null);
    const [selectedCars2, setSelectedCars2] = useState(null);
    const [selectedCars3, setSelectedCars3] = useState(null);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const displaySelection = (data) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    };

    return (
        <div>
            <h3>Single</h3>
            <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
            <DataTable value={cars} selectionMode="single" header="Single Selection" footer={displaySelection(selectedCar1)}
                selection={selectedCar1} onSelectionChange={e => setSelectedCar1(e.value)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Multiple</h3>
            <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                Setting metaKeySelection property as false enables multiple selection without meta key.
            </p>
            <DataTable value={cars} selectionMode="multiple" header="Multiple Selection with MetaKey" footer={displaySelection(selectedCars1)}
                selection={selectedCars1} onSelectionChange={e => setSelectedCars1(e.value)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable value={cars} selectionMode="multiple" header="Multiple Selection without MetaKey" footer={displaySelection(selectedCars2)}
                selection={selectedCars2} onSelectionChange={e => setSelectedCars2(e.value)} style={{marginTop: '2em'}} metaKeySelection={false}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>RadioButton</h3>
            <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
            <DataTable value={cars} header="Single Selection" footer={displaySelection(selectedCar2)}
                selection={selectedCar2} onSelectionChange={e => setSelectedCar2(e.value)}>
                <Column selectionMode="single" style={{width:'3em'}}/>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Checkbox</h3>
            <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".</p>
            <DataTable value={cars} header="Single Selection" footer={displaySelection(selectedCars3)}
                selection={selectedCars3} onSelectionChange={e => setSelectedCars3(e.value)}>
                <Column selectionMode="multiple" style={{width:'3em'}}/>
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

const DataTableSelectionDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar1, setSelectedCar1] = useState(null);
    const [selectedCar2, setSelectedCar2] = useState(null);
    const [selectedCars1, setSelectedCars1] = useState(null);
    const [selectedCars2, setSelectedCars2] = useState(null);
    const [selectedCars3, setSelectedCars3] = useState(null);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const displaySelection = (data: any) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    };

    return (
        <div>
            <h3>Single</h3>
            <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
            <DataTable value={cars} selectionMode="single" header="Single Selection" footer={displaySelection(selectedCar1)}
                selection={selectedCar1} onSelectionChange={e => setSelectedCar1(e.value)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Multiple</h3>
            <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                Setting metaKeySelection property as false enables multiple selection without meta key.
            </p>
            <DataTable value={cars} selectionMode="multiple" header="Multiple Selection with MetaKey" footer={displaySelection(selectedCars1)}
                selection={selectedCars1} onSelectionChange={e => setSelectedCars1(e.value)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable value={cars} selectionMode="multiple" header="Multiple Selection without MetaKey" footer={displaySelection(selectedCars2)}
                selection={selectedCars2} onSelectionChange={e => setSelectedCars2(e.value)} style={{marginTop: '2em'}} metaKeySelection={false}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>RadioButton</h3>
            <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
            <DataTable value={cars} header="Single Selection" footer={displaySelection(selectedCar2)}
                selection={selectedCar2} onSelectionChange={e => setSelectedCar2(e.value)}>
                <Column selectionMode="single" style={{width:'3em'}}/>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Checkbox</h3>
            <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".</p>
            <DataTable value={cars} header="Single Selection" footer={displaySelection(selectedCars3)}
                selection={selectedCars3} onSelectionChange={e => setSelectedCars3(e.value)}>
                <Column selectionMode="multiple" style={{width:'3em'}}/>
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
                        <LiveEditor name="DataTableSelectionDemo" sources={this.sources} service="CarService" data="cars-small" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
