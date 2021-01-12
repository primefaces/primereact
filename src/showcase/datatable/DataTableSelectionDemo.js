import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Toast } from '../../components/toast/Toast';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
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
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import { Toast } from 'primereact/toast';

const DataTableSelectionDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [selectedProduct3, setSelectedProduct3] = useState(null);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const toast = useRef(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                <DataTable value={products} selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} selectionMode="single" dataKey="id">
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
                <DataTable value={products} header="Multiple Selection with MetaKey" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} selectionMode="multiple" dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <DataTable value={products} header="Multiple Selection without MetaKey" selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} selectionMode="multiple" dataKey="id" metaKeySelection={false} style={{ marginTop: '2em' }}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Events</h5>
                <p>row-select and row-unselects are available as selection events.</p>
                <DataTable value={products} selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} selectionMode="single" dataKey="id"
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RadioButton</h5>
                <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                <DataTable value={products} selection={selectedProduct3} onSelectionChange={e => setSelectedProduct3(e.value)} dataKey="id">
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>

                <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id">
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
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import { Toast } from 'primereact/toast';

const DataTableSelectionDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [selectedProduct3, setSelectedProduct3] = useState(null);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const toast = useRef(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                <DataTable value={products} selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} selectionMode="single" dataKey="id">
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
                <DataTable value={products} header="Multiple Selection with MetaKey" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} selectionMode="multiple" dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <DataTable value={products} header="Multiple Selection without MetaKey" selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} selectionMode="multiple" dataKey="id" metaKeySelection={false} style={{ marginTop: '2em' }}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Events</h5>
                <p>row-select and row-unselects are available as selection events.</p>
                <DataTable value={products} selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} selectionMode="single" dataKey="id"
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RadioButton</h5>
                <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                <DataTable value={products} selection={selectedProduct3} onSelectionChange={e => setSelectedProduct3(e.value)} dataKey="id">
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>

                <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id">
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
                        useLiveEditorTabs({ name: 'DataTableSelectionDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
