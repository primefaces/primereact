import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const OverlayPanelDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ProductService } from '../service/ProductService';
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
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    priceBody(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <Button type="button" icon="pi pi-search" label={this.state.selectedProduct ? this.state.selectedProduct.name : 'Select a Product'} onClick={(e) => this.op.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                    <OverlayPanel ref={(el) => this.op = el} showCloseIcon id="overlay_panel" style={{width: '450px'}} className="overlaypanel-demo">
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
import { ProductService } from '../service/ProductService';
import './OverlayPanelDemo.css';

const OverlayPanelDemo = () => {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current && selectedProduct) {
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
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <Button type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{width: '450px'}} className="overlaypanel-demo">
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
import { DataTable, DataTableSelectionChangeParams } from 'primereact/datatable';
import { ProductService } from '../service/ProductService';
import './OverlayPanelDemo.css';

type ProductItem = {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
  };

  const OverlayPanelDemo = () => {
    const [products, setProducts] = useState<ProductItem[] | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
      null
    );
    const productService = new ProductService();
    const op = useRef<OverlayPanel>(null);
    const toast = useRef<Toast>(null);
    const isMounted = useRef(false);

    useEffect(() => {
      if (isMounted.current && selectedProduct) {
        op.current?.hide();
        toast.current?.show({
          severity: "info",
          summary: "Product Selected",
          detail: selectedProduct?.name,
          life: 3000
        });
      }
    }, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      isMounted.current = true;
      productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value: number) => {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    };

    const onProductSelect = (e: DataTableSelectionChangeParams) => {
      setSelectedProduct(e.value);
    };

    const imageBody = (rowData: ProductItem) => {
      return (
        <img
          src={\`images/product/\${rowData.image}\`}
          onError={(e) =>
            (e.currentTarget.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          alt={rowData.image}
          className="product-image"
        />
      );
    };

    const priceBody = (rowData: ProductItem) => {
      return formatCurrency(rowData.price ?? 0);
    };

    return (
      <div>
        <Toast ref={toast} />

        <div className="card">
          <Button
            type="button"
            icon="pi pi-search"
            label={selectedProduct ? selectedProduct.name : "Select a Product"}
            onClick={(e) => op.current?.toggle(e)}
            aria-haspopup
            aria-controls="overlay_panel"
            className="select-product-button"
          />

          <OverlayPanel
            ref={op}
            showCloseIcon
            id="overlay_panel"
            style={{ width: "450px" }}
            className="overlaypanel-demo"
          >
            <DataTable
              value={products ?? []}
              selectionMode="single"
              paginator
              rows={5}
              selection={selectedProduct}
              onSelectionChange={onProductSelect}
            >
              <Column field="name" header="Name" sortable />
              <Column header="Image" body={imageBody} />
              <Column field="price" header="Price" sortable body={priceBody} />
            </DataTable>
          </OverlayPanel>
        </div>
      </div>
    );
  };
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./OverlayPanelDemo.css" />
        <script src="./ProductService.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/overlaypanel/overlaypanel.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { OverlayPanel } = primereact.overlaypanel;
const { Button } = primereact.button;
const { Toast } = primereact.toast;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;

const OverlayPanelDemo = () => {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current && selectedProduct) {
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
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <Button type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{width: '450px'}} className="overlaypanel-demo">
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

    const extFiles = {
        'demo/OverlayPanelDemo.css': {
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

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { OverlayPanel } from 'primereact/overlaypanel';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/overlaypanel/overlaypanel.min.js"></script>
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

                    <h5>Responsive</h5>
                    <p>OverlayPanel width can be adjusted per screen size with the <i>breakpoints</i> option. In example below, default width is set to 450px and below 961px, width would be 75vw and finally below 641px width becomes
                        100%. The value of <i>breakpoints</i> should be an object literal whose keys are the maximum screen sizes and values are the widths per screen.</p>

<CodeHighlight>
{`
<OverlayPanel ref={op} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '450px'}}>
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
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>ariaCloseLabel</td>
                                    <td>string</td>
                                    <td>close</td>
                                    <td>Aria label of the close icon.</td>
                                </tr>
                                <tr>
                                    <td>breakpoints</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Object literal to define widths per screen size.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
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
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay becomes hidden.</td>
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
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>OverlayPanel component uses <i>dialog</i> role and since any attribute is passed to the root element you may define attributes like <i>aria-label</i> or <i>aria-labelledby</i> to describe the popup contents. In addition <i>aria-modal</i> is added since focus is kept within the popup.</p>
                    <p>It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary. OverlayPanel
                    adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to the trigger so that the relation between the trigger and the popup is defined.</p>

                    <h6>OverlayPanel Keyboard Support</h6>
                    <p>When the popup gets opened, the first focusable element receives the focus and this can be customized by adding <i>autofocus</i> to an element within the popup.</p>

                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the next the focusable element within the popup.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>tab</i></td>
                                    <td>Moves focus to the previous the focusable element within the popup.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup and moves focus to the trigger.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Close Button Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Closes the popup and moves focus to the trigger.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Closes the popup and moves focus to the trigger.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'OverlayPanelDemo', sources: sources, service: 'ProductService', data: 'products-small', extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default OverlayPanelDoc;
