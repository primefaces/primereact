import React, { Component}  from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class OverlayPanelDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import ProductService from '../service/ProductService';
import './OverlayPanelDemo.css';

export class OverlayPanelDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: null,
            selectedProduct: null
        };

        this.productService = new ProductService();
        this.onProductSelect = this.onProductSelect.bind(this);
        this.imageBody = this.imageBody.bind(this);
        this.priceBody = this.priceBody.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    onProductSelect(e) {
        this.setState({ selectedProduct: e.value }, () => {
            this.op.hide();
            this.toast.show({severity:'info', summary: 'Product Selected', detail: this.state.selectedProduct.name, life: 3000});
        });
    }

    imageBody(rowData) {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    priceBody(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div className="overlaypanel-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <Button type="button" icon="pi pi-search" label={this.state.selectedProduct ? this.state.selectedProduct.name : 'Select a Product'} onClick={(e) => this.op.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                    <OverlayPanel ref={(el) => this.op = el} showCloseIcon id="overlay_panel" style={{width: '450px'}}>
                        <DataTable value={this.state.products} selectionMode="single" paginator rows={5}
                            selection={this.state.selectedProduct} onSelectionChange={this.onProductSelect}>
                            <Column field="name" header="Name" sortable />
                            <Column header="Image" body={this.imageBody} />
                            <Column field="price" header="Price" sortable body={this.priceBody} />
                        </DataTable>
                    </OverlayPanel>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import ProductService from '../service/ProductService';
import './OverlayPanelDemo.css';

const OverlayPanelDemo = () => {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            op.current.hide();
            toast.current.show({severity:'info', summary: 'Product Selected', detail: selectedProduct.name, life: 3000});
        }
    }, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const onProductSelect = (e) => {
        setSelectedProduct(e.value);
    }

    const imageBody = (rowData) => {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="overlaypanel-demo">
            <Toast ref={toast} />

            <div className="card">
                <Button type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{width: '450px'}}>
                    <DataTable value={products} selectionMode="single" paginator rows={5}
                        selection={selectedProduct} onSelectionChange={onProductSelect}>
                        <Column field="name" header="Name" sortable />
                        <Column header="Image" body={imageBody} />
                        <Column field="price" header="Price" sortable body={priceBody} />
                    </DataTable>
                </OverlayPanel>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import ProductService from '../service/ProductService';
import './OverlayPanelDemo.css';

const OverlayPanelDemo = () => {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            op.current.hide();
            toast.current.show({severity:'info', summary: 'Product Selected', detail: selectedProduct.name, life: 3000});
        }
    }, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const onProductSelect = (e) => {
        setSelectedProduct(e.value);
    }

    const imageBody = (rowData) => {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="overlaypanel-demo">
            <Toast ref={toast} />

            <div className="card">
                <Button type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{width: '450px'}}>
                    <DataTable value={products} selectionMode="single" paginator rows={5}
                        selection={selectedProduct} onSelectionChange={onProductSelect}>
                        <Column field="name" header="Name" sortable />
                        <Column header="Image" body={imageBody} />
                        <Column field="price" header="Price" sortable body={priceBody} />
                    </DataTable>
                </OverlayPanel>
            </div>
        </div>
    )
}
                `
            }
        };

        this.extFiles = {
            'src/demo/OverlayPanelDemo.css': {
                content: `
.overlaypanel-demo .select-product-button {
    min-width: 15rem;
}

.overlaypanel-demo .product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { OverlayPanel } from 'primereact/overlaypanel';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<CodeHighlight>
{`
<Button type="button" label="Basic" onClick={(e) => op.current.toggle(e)} />

<OverlayPanel ref={op}>
    // Content
</OverlayPanel>
`}
</CodeHighlight>

            <h5>Dismissable and CloseIcon</h5>
            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior.
               Additionally enablign showCloseIcon property displays a close icon at the top right corner to close the panel.</p>

<CodeHighlight>
{`
<OverlayPanel ref={op} showCloseIcon dismissable>
    // Content
</OverlayPanel>
`}
</CodeHighlight>

            <h5>Properties</h5>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>dismissable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables to hide the overlay when outside is clicked.</td>
                        </tr>
                        <tr>
                            <td>showCloseIcon</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays a close icon at top right corner.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>appendTo</td>
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
                        </tr>
                        <tr>
                            <td>ariaCloseLabel</td>
                            <td>string</td>
                            <td>close</td>
                            <td>Aria label of the close icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Events</h5>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onHide</td>
                            <td>-</td>
                            <td>Callback to invoke when overlay gets hidden.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Methods</h5>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>toggle</td>
                            <td>event: Browser event</td>
                            <td>Toggles the visiblity of the overlay.</td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>event: Browser event <br />
                                target: Optional target if event.target should not be used</td>
                            <td>Shows the overlay.</td>
                        </tr>
                        <tr>
                            <td>hide</td>
                            <td>-</td>
                            <td>Hides the overlay.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styling</h5>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-overlaypanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-content</td>
                            <td>Content of the panel.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-close</td>
                            <td>Close icon.</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Dependencies</h5>
                <p>None.</p>
            </div>

            </TabPanel>

            {
                useLiveEditorTabs({ name: 'OverlayPanelDemo', sources: this.sources, service: 'ProductService', data: 'products-small', extFiles: this.extFiles })
            }
        </TabView>
    </div>
        );
    }
}
