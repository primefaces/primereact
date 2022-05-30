import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const OrderListDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';
import './OrderListDemo.css';

export class OrderListDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    itemTemplate(item) {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="orderlist-demo">
                <div className="card">
                    <OrderList value={this.state.products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                        itemTemplate={this.itemTemplate} onChange={(e) => this.setState({ products: e.value })}></OrderList>
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
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';
import './OrderListDemo.css';

const OrderListDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="orderlist-demo">
            <div className="card">
                <OrderList value={products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                    itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
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
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';
import './OrderListDemo.css';

const OrderListDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="orderlist-demo">
            <div className="card">
                <OrderList value={products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                    itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./OrderListDemo.css" />
        <script src="./ProductService.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/orderlist/orderlist.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { OrderList } = primereact.orderlist;

const OrderListDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="orderlist-demo">
            <div className="card">
                <OrderList value={products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                    itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
            </div>
        </div>
    );
}
                `
        }
    };

    const extFiles = {
        'demo/OrderListDemo.css': {
            content: `
.orderlist-demo .product-item {
    display: flex;
    align-items: center;
    padding: .5rem;
    width: 100%;
}

.orderlist-demo .product-item img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
}

.orderlist-demo .product-item .product-list-detail {
    flex: 1 1 0;
}

.orderlist-demo .product-item .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.orderlist-demo .product-item .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
}

.orderlist-demo .product-item .product-category {
    vertical-align: middle;
    line-height: 1;
}

@media screen and (max-width: 576px) {
    .orderlist-demo .product-item {
        flex-wrap: wrap;
    }

    .orderlist-demo .product-item .image-container {
        width: 100%;
        text-align: center;
    }

    .orderlist-demo .product-item img {
        margin: 0 0 1rem 0;
        width: 100px;
    }
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
import { OrderList } from 'primereact/orderlist';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/orderlist/orderlist.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>OrderList requires an array as its value, a template for its content where each item in the array can be accessed inside the template and <i>onChange</i>
                            callback to update the value after reorder.
                    </p>
<CodeHighlight>
{`
<OrderList value={products} itemTemplate={itemTemplate} header="Products" onChange={(e) => setProducts(e.value)}></OrderList>
`}
</CodeHighlight>

                    <h5>DragDrop</h5>
                    <p>Items can be reordered using drag and drop by enabling <i>dragdrop</i> property.</p>

<CodeHighlight>
{`
<OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
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
                                    <td>value</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of objects to reorder.</td>
                                </tr>
                                <tr>
                                    <td>dataKey</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the field that uniquely identifies the a record in the data.</td>
                                </tr>
                                <tr>
                                    <td>header</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Text for the caption</td>
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
                                    <td>listStyle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the list element.</td>
                                </tr>
                                <tr>
                                    <td>dragdrop</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to enable dragdrop based reordering.</td>
                                </tr>
                                <tr>
                                    <td>dragdropScope</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique key of drag drop events to avoid conflict with other drag drop events on the page.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets an item in the list and returns the content for it.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
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
                                    <td>onChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Reordered list</td>
                                    <td>Callback to invoke when list is reordered.</td>
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
                                    <td>p-orderlist</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-orderlist-list</td>
                                    <td>List container.</td>
                                </tr>
                                <tr>
                                    <td>p-orderlist-item</td>
                                    <td>An item in the list</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the listbox can be provided with <i>listProps</i> by passing <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute.
                    Each list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.</p>
                    <p>Controls buttons are <i>button</i> elements with an <i>aria-label</i> that refers to the <i>aria.moveTop</i>, <i>aria.moveUp</i>, <i>aria.moveDown</i> and <i>aria.moveBottom</i> properties of the <Link href="/locale">locale</Link> API by default, alternatively you may use
                    <i>moveTopButtonProps</i>, <i>moveUpButtonProps</i>, <i>moveDownButtonProps</i> and <i>moveBottomButtonProps</i> to customize the buttons like overriding the default <i>aria-label</i> attributes.</p>
<CodeHighlight>
{`
<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />
`}
</CodeHighlight>
                    <h6>ListBox Keyboard Support</h6>
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
                                    <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves focus to the previous option.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves focus to the next option.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Toggles the selected state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles the selected state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first option.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last option.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>down arrow</i></td>
                                    <td>Moves focus to the next option and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>up arrow</i></td>
                                    <td>Moves focus to the previous option and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>space</i></td>
                                    <td>Selects the items between the most recently selected option and the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>control</i> + <i>shift</i> + <i>home</i></td>
                                    <td>Selects the focused options and all the options up to the first one.</td>
                                </tr>
                                <tr>
                                    <td><i>control</i> + <i>shift</i> + <i>end</i></td>
                                    <td>Selects the focused options and all the options down to the first one.</td>
                                </tr>
                                <tr>
                                    <td><i>control</i> + <i>a</i></td>
                                    <td>Selects all options.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Buttons Keyboard Support</h6>
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
                                    <td>Executes button action.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Executes button action.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'OrderListDemo', sources: sources, service: 'ProductService', data: 'products-small', extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default OrderListDoc;
