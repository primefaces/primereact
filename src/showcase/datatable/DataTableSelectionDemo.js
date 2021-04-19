import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Toast } from '../../components/toast/Toast';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';
import './DataTableDemo.scss';

export class DataTableSelectionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProduct4: null,
            selectedProduct5: null,
            selectedProduct6: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null,
            selectedProducts4: null,
            selectedProducts5: null,
            selectedProducts6: null,
            selectedProducts7: null,
            selectedProducts8: null
        };

        this.productService = new ProductService();
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onRowUnselect = this.onRowUnselect.bind(this);
        this.onCellSelect = this.onCellSelect.bind(this);
        this.onCellUnselect = this.onCellUnselect.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onRowSelect(event) {
        this.toast.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.name}`, life: 3000 });
    }

    onRowUnselect(event) {
        this.toast.show({ severity: 'warn', summary: 'Product Unselected', detail: `Name: ${event.data.name}`, life: 3000 });
    }

    onCellSelect(event) {
        this.toast.show({ severity: 'info', summary: `Item Selected In Product`, detail: `${this.toCapitalize(event.field)}: ${event.value}`, life: 3000 });
    }

    onCellUnselect(event) {
        this.toast.show({ severity: 'warn', summary: `Item Unselected In Product`, detail: `${this.toCapitalize(event.field)}: ${event.value}`, life: 3000 });
    }

    toCapitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Selection</span></h1>
                        <p>DataTable provides single, multiple, radiobutton and checkbox selection modes on click of a row. Selected rows or cells are bound to the selection property and onRowSelect-onRowUnselect/onCellSelect-onCellUnselect
                            events are provided as optional callbacks. In addition built-in radio button and checkbox based selections are available as alternatives.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="datatable/DataTableSelectionDemo.js" />
                </div>

                <div className="content-section implementation datatable-selection-demo">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Single</h5>
                        <p>In single mode, a row or cell is selected on its click event. If it is already selected then it gets unselected using meta key.</p>

                        <h6>Row Selection</h6>
                        <DataTable value={this.state.products} selectionMode="single" selection={this.state.selectedProduct1} onSelectionChange={e => this.setState({ selectedProduct1: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Cell Selection</h6>
                        <DataTable value={this.state.products} selectionMode="single" cellSelection selection={this.state.selectedProduct2} onSelectionChange={e => this.setState({ selectedProduct2: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Multiple</h5>
                        <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                        Setting metaKeySelection property as false enables multiple selection without meta key. In addition, the rectangular selection can be dragged over the desired rows or cells thanks to the dragSelection property. In this way, a range of rows or cells can be selected.</p>

                        <h6>Row Selection with MetaKey</h6>
                        <DataTable value={this.state.products} selectionMode="multiple" selection={this.state.selectedProducts1} onSelectionChange={e => this.setState({ selectedProducts1: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Row Selection without MetaKey</h6>
                        <DataTable value={this.state.products} selectionMode="multiple" metaKeySelection={false} selection={this.state.selectedProducts2} onSelectionChange={e => this.setState({ selectedProducts2: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Row Selection with Drag Selection</h6>
                        <DataTable value={this.state.products} selectionMode="multiple" dragSelection selection={this.state.selectedProducts3} onSelectionChange={e => this.setState({ selectedProducts3: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Cell Selection with MetaKey</h6>
                        <DataTable value={this.state.products} selectionMode="multiple" cellSelection selection={this.state.selectedProducts4} onSelectionChange={e => this.setState({ selectedProducts4: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Cell Selection without MetaKey</h6>
                        <DataTable value={this.state.products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={this.state.selectedProducts5} onSelectionChange={e => this.setState({ selectedProducts5: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Cell Selection with Drag Selection</h6>
                        <DataTable value={this.state.products} selectionMode="multiple" cellSelection dragSelection selection={this.state.selectedProducts6} onSelectionChange={e => this.setState({ selectedProducts6: e.value })} dataKey="id">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>


                    <div className="card">
                        <h5>Events</h5>

                        <h6>Row Selection</h6>
                        <p>onRowSelect and onRowUnselects are available as selection events.</p>
                        <DataTable value={this.state.products} selectionMode="single" selection={this.state.selectedProduct3} onSelectionChange={e => this.setState({ selectedProduct3: e.value })} dataKey="id"
                            onRowSelect={this.onRowSelect} onRowUnselect={this.onRowUnselect}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Cell Selection</h6>
                        <p>onCellSelect and onCellUnselects are available as selection events.</p>
                        <DataTable value={this.state.products} selectionMode="single" cellSelection selection={this.state.selectedProduct4} onSelectionChange={e => this.setState({ selectedProduct4: e.value })} dataKey="id"
                            onCellSelect={this.onCellSelect} onCellUnselect={this.onCellUnselect}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>RadioButton</h5>
                        <p>Single selection can also be handled using radio buttons and rows by enabling the selectionMode property of column as "single".</p>

                        <h6>Row Selection</h6>
                        <DataTable value={this.state.products} selection={this.state.selectedProduct5} onSelectionChange={e => this.setState({ selectedProduct5: e.value })} dataKey="id">
                            <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>RadioButton-Only Selection</h6>
                        <DataTable value={this.state.products} selectionMode="radiobutton" selection={this.state.selectedProduct6} onSelectionChange={e => this.setState({ selectedProduct6: e.value })} dataKey="id">
                            <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Checkbox</h5>

                        <h6>Row Selection</h6>
                        <DataTable value={this.state.products} selection={this.state.selectedProducts7} onSelectionChange={e => this.setState({ selectedProducts7: e.value })} dataKey="id">
                            <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>

                        <h6>Checkbox-Only Selection</h6>
                        <DataTable value={this.state.products} selectionMode="checkbox" selection={this.state.selectedProducts8} onSelectionChange={e => this.setState({ selectedProducts8: e.value })} dataKey="id">
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
import './DataTableDemo.scss';

export class DataTableSelectionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProduct4: null,
            selectedProduct5: null,
            selectedProduct6: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null,
            selectedProducts4: null,
            selectedProducts5: null,
            selectedProducts6: null,
            selectedProducts7: null,
            selectedProducts8: null
        };

        this.productService = new ProductService();
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onRowUnselect = this.onRowUnselect.bind(this);
        this.onCellSelect = this.onCellSelect.bind(this);
        this.onCellUnselect = this.onCellUnselect.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onRowSelect(event) {
        this.toast.show({ severity: 'info', summary: 'Product Selected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    onRowUnselect(event) {
        this.toast.show({ severity: 'warn', summary: 'Product Unselected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    onCellSelect(event) {
        this.toast.show({ severity: 'info', summary: \`Item Selected In Product\`, detail: \`\${this.toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    onCellUnselect(event) {
        this.toast.show({ severity: 'warn', summary: \`Item Unselected In Product\`, detail: \`\${this.toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    toCapitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <div className="datatable-selection-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Single</h5>
                    <p>In single mode, a row or cell is selected on its click event. If it is already selected then it gets unselected using meta key.</p>

                    <h6>Row Selection</h6>
                    <DataTable value={this.state.products} selectionMode="single" selection={this.state.selectedProduct1} onSelectionChange={e => this.setState({ selectedProduct1: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Cell Selection</h6>
                    <DataTable value={this.state.products} selectionMode="single" cellSelection selection={this.state.selectedProduct2} onSelectionChange={e => this.setState({ selectedProduct2: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Multiple</h5>
                    <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                    Setting metaKeySelection property as false enables multiple selection without meta key. In addition, the rectangular selection can be dragged over the desired rows or cells thanks to the dragSelection property. In this way, a range of rows or cells can be selected.</p>

                    <h6>Row Selection with MetaKey</h6>
                    <DataTable value={this.state.products} selectionMode="multiple" selection={this.state.selectedProducts1} onSelectionChange={e => this.setState({ selectedProducts1: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Row Selection without MetaKey</h6>
                    <DataTable value={this.state.products} selectionMode="multiple" metaKeySelection={false} selection={this.state.selectedProducts2} onSelectionChange={e => this.setState({ selectedProducts2: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Row Selection with Drag Selection</h6>
                    <DataTable value={this.state.products} selectionMode="multiple" dragSelection selection={this.state.selectedProducts3} onSelectionChange={e => this.setState({ selectedProducts3: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Cell Selection with MetaKey</h6>
                    <DataTable value={this.state.products} selectionMode="multiple" cellSelection selection={this.state.selectedProducts4} onSelectionChange={e => this.setState({ selectedProducts4: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Cell Selection without MetaKey</h6>
                    <DataTable value={this.state.products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={this.state.selectedProducts5} onSelectionChange={e => this.setState({ selectedProducts5: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Cell Selection with Drag Selection</h6>
                    <DataTable value={this.state.products} selectionMode="multiple" cellSelection dragSelection selection={this.state.selectedProducts6} onSelectionChange={e => this.setState({ selectedProducts6: e.value })} dataKey="id">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>


                <div className="card">
                    <h5>Events</h5>

                    <h6>Row Selection</h6>
                    <p>onRowSelect and onRowUnselects are available as selection events.</p>
                    <DataTable value={this.state.products} selectionMode="single" selection={this.state.selectedProduct3} onSelectionChange={e => this.setState({ selectedProduct3: e.value })} dataKey="id"
                        onRowSelect={this.onRowSelect} onRowUnselect={this.onRowUnselect}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Cell Selection</h6>
                    <p>onCellSelect and onCellUnselects are available as selection events.</p>
                    <DataTable value={this.state.products} selectionMode="single" cellSelection selection={this.state.selectedProduct4} onSelectionChange={e => this.setState({ selectedProduct4: e.value })} dataKey="id"
                        onCellSelect={this.onCellSelect} onCellUnselect={this.onCellUnselect}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>RadioButton</h5>
                    <p>Single selection can also be handled using radio buttons and rows by enabling the selectionMode property of column as "single".</p>

                    <h6>Row Selection</h6>
                    <DataTable value={this.state.products} selection={this.state.selectedProduct5} onSelectionChange={e => this.setState({ selectedProduct5: e.value })} dataKey="id">
                        <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>RadioButton-Only Selection</h6>
                    <DataTable value={this.state.products} selectionMode="radiobutton" selection={this.state.selectedProduct6} onSelectionChange={e => this.setState({ selectedProduct6: e.value })} dataKey="id">
                        <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Checkbox</h5>

                    <h6>Row Selection</h6>
                    <DataTable value={this.state.products} selection={this.state.selectedProducts7} onSelectionChange={e => this.setState({ selectedProducts7: e.value })} dataKey="id">
                        <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>

                    <h6>Checkbox-Only Selection</h6>
                    <DataTable value={this.state.products} selectionMode="checkbox" selection={this.state.selectedProducts8} onSelectionChange={e => this.setState({ selectedProducts8: e.value })} dataKey="id">
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
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import { Toast } from 'primereact/toast';
import './DataTableDemo.scss';

const DataTableSelectionDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [selectedProduct3, setSelectedProduct3] = useState(null);
    const [selectedProduct4, setSelectedProduct4] = useState(null);
    const [selectedProduct5, setSelectedProduct5] = useState(null);
    const [selectedProduct6, setSelectedProduct6] = useState(null);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const [selectedProducts4, setSelectedProducts4] = useState(null);
    const [selectedProducts5, setSelectedProducts5] = useState(null);
    const [selectedProducts6, setSelectedProducts6] = useState(null);
    const [selectedProducts7, setSelectedProducts7] = useState(null);
    const [selectedProducts8, setSelectedProducts8] = useState(null);
    const toast = useRef(null);


    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    },[]);

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: \`Item Selected In Product\`, detail: \`\${toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: \`Item Unselected In Product\`, detail: \`\${toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="datatable-selection-demo">
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <p>In single mode, a row or cell is selected on its click event. If it is already selected then it gets unselected using meta key.</p>

                <h6>Row Selection</h6>
                <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Multiple</h5>
                <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                Setting metaKeySelection property as false enables multiple selection without meta key. In addition, the rectangular selection can be dragged over the desired rows or cells thanks to the dragSelection property. In this way, a range of rows or cells can be selected.</p>

                <h6>Row Selection with MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Row Selection without MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" metaKeySelection={false} selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Row Selection with Drag Selection</h6>
                <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection with MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection without MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={selectedProducts5} onSelectionChange={e => setSelectedProducts5(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection with Drag Selection</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection dragSelection selection={selectedProducts6} onSelectionChange={e => setSelectedProducts6(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>


            <div className="card">
                <h5>Events</h5>

                <h6>Row Selection</h6>
                <p>onRowSelect and onRowUnselects are available as selection events.</p>
                <DataTable value={products} selectionMode="single" selection={selectedProduct3} onSelectionChange={e => setSelectedProduct3(e.value)} dataKey="id"
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <p>onCellSelect and onCellUnselects are available as selection events.</p>
                <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct4} onSelectionChange={e => setSelectedProduct4(e.value)} dataKey="id"
                    onCellSelect={onCellSelect} onCellUnselect={onCellUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RadioButton</h5>
                <p>Single selection can also be handled using radio buttons and rows by enabling the selectionMode property of column as "single".</p>

                <h6>Row Selection</h6>
                <DataTable value={products} selection={selectedProduct5} onSelectionChange={e => setSelectedProduct5(e.value)} dataKey="id">
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>RadioButton-Only Selection</h6>
                <DataTable value={products} selectionMode="radiobutton" selection={selectedProduct6} onSelectionChange={e => setSelectedProduct6(e.value)} dataKey="id">
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>

                <h6>Row Selection</h6>
                <DataTable value={products} selection={selectedProducts7} onSelectionChange={e => setSelectedProducts7(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Checkbox-Only Selection</h6>
                <DataTable value={products} selectionMode="checkbox" selection={selectedProducts8} onSelectionChange={e => setSelectedProducts8(e.value)} dataKey="id">
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
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import { Toast } from 'primereact/toast';
import './DataTableDemo.scss';

const DataTableSelectionDemo = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [selectedProduct3, setSelectedProduct3] = useState(null);
    const [selectedProduct4, setSelectedProduct4] = useState(null);
    const [selectedProduct5, setSelectedProduct5] = useState(null);
    const [selectedProduct6, setSelectedProduct6] = useState(null);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const [selectedProducts4, setSelectedProducts4] = useState(null);
    const [selectedProducts5, setSelectedProducts5] = useState(null);
    const [selectedProducts6, setSelectedProducts6] = useState(null);
    const [selectedProducts7, setSelectedProducts7] = useState(null);
    const [selectedProducts8, setSelectedProducts8] = useState(null);
    const toast = useRef(null);


    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    },[]);

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: \`Item Selected In Product\`, detail: \`\${toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: \`Item Unselected In Product\`, detail: \`\${toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="datatable-selection-demo">
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <p>In single mode, a row or cell is selected on its click event. If it is already selected then it gets unselected using meta key.</p>

                <h6>Row Selection</h6>
                <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Multiple</h5>
                <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                Setting metaKeySelection property as false enables multiple selection without meta key. In addition, the rectangular selection can be dragged over the desired rows or cells thanks to the dragSelection property. In this way, a range of rows or cells can be selected.</p>

                <h6>Row Selection with MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Row Selection without MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" metaKeySelection={false} selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Row Selection with Drag Selection</h6>
                <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection with MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection without MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={selectedProducts5} onSelectionChange={e => setSelectedProducts5(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection with Drag Selection</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection dragSelection selection={selectedProducts6} onSelectionChange={e => setSelectedProducts6(e.value)} dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>


            <div className="card">
                <h5>Events</h5>

                <h6>Row Selection</h6>
                <p>onRowSelect and onRowUnselects are available as selection events.</p>
                <DataTable value={products} selectionMode="single" selection={selectedProduct3} onSelectionChange={e => setSelectedProduct3(e.value)} dataKey="id"
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <p>onCellSelect and onCellUnselects are available as selection events.</p>
                <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct4} onSelectionChange={e => setSelectedProduct4(e.value)} dataKey="id"
                    onCellSelect={onCellSelect} onCellUnselect={onCellUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>RadioButton</h5>
                <p>Single selection can also be handled using radio buttons and rows by enabling the selectionMode property of column as "single".</p>

                <h6>Row Selection</h6>
                <DataTable value={products} selection={selectedProduct5} onSelectionChange={e => setSelectedProduct5(e.value)} dataKey="id">
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>RadioButton-Only Selection</h6>
                <DataTable value={products} selectionMode="radiobutton" selection={selectedProduct6} onSelectionChange={e => setSelectedProduct6(e.value)} dataKey="id">
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>

                <h6>Row Selection</h6>
                <DataTable value={products} selection={selectedProducts7} onSelectionChange={e => setSelectedProducts7(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Checkbox-Only Selection</h6>
                <DataTable value={products} selectionMode="checkbox" selection={selectedProducts8} onSelectionChange={e => setSelectedProducts8(e.value)} dataKey="id">
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
        };

        this.extFiles = {
            'src/demo/DataTableDemo.css': {
                content: `
.datatable-selection-demo .card h6 {
    margin-top: 2rem;
}
.datatable-selection-demo .card h6:first-of-type {
    margin-top: 0;
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
                        useLiveEditorTabs({ name: 'DataTableSelectionDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
