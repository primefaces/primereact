import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import './DataScrollerDemo.scss';

export class DataScrollerDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import ProductService from '../service/ProductService';
import './DataScrollerDemo.css';

export class DataScrollerDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    itemTemplate(data) {
        return (
            <div className="product-item">
                <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="datascroller-demo">
                <div className="card">
                    <DataScroller value={this.state.products} itemTemplate={this.itemTemplate}
                        rows={5} buffer={0.4} header="List of Products" />
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
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import ProductService from '../service/ProductService';
import './DataScrollerDemo.css';

const DataScrollerDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate}
                    rows={5} buffer={0.4} header="List of Products" />
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
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import ProductService from '../service/ProductService';
import './DataScrollerDemo.css';

const DataScrollerDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate}
                    rows={5} buffer={0.4} header="List of Products" />
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'src/demo/DataScrollerDemo.css': {
                content: `
.datascroller-demo .product-name {
    font-size: 1.5rem;
    font-weight: 700;
}

.datascroller-demo .product-description {
    margin: 0 0 1rem 0;
}

.datascroller-demo .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
}

.datascroller-demo .product-category {
    font-weight: 600;
    vertical-align: middle;
}

.datascroller-demo .product-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.datascroller-demo .product-item img {
    width: 150px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
}

.datascroller-demo .product-item .product-detail {
    flex: 1 1 0;
}

.datascroller-demo .product-item .p-rating {
    margin: 0 0 .5rem 0;
}

.datascroller-demo .product-item .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
    align-self: flex-end;
}

.datascroller-demo .product-item .product-action {
    display: flex;
    flex-direction: column;
}

.datascroller-demo .product-item .p-button {
    margin-bottom: .5rem;
}

@media screen and (max-width: 576px) {
    .datascroller-demo .product-item {
        flex-direction: column;
        align-items: center;
    }

    .datascroller-demo .product-item img {
        width: 75%;
        margin: 2rem 0;
    }

    .datascroller-demo .product-item .product-detail {
        text-align: center;
    }

    .datascroller-demo .product-item .product-price {
        align-self: center;
    }

    .datascroller-demo .product-item .product-action {
        display: flex;
        flex-direction: column;
    }

    .datascroller-demo .product-item .product-action {
        margin-top: 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
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
import { DataScroller } from 'primereact/datascroller';
`}
                        </CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>DataScroller requires a collection of items as its value, number of rows to load and a template content to display. Here is a sample DataScroller that displays a
                list of cars where each load event adds 10 more rows if available.</p>
                        <CodeHighlight>
                            {`
<DataScroller value={products} itemTemplate={itemTemplate} rows={10}></DataScroller>
`}
                        </CodeHighlight>
                        <CodeHighlight lang="js">
                            {`
const itemTemplate = (item) => {
    // custom item content
}
`}
                        </CodeHighlight>


                        <h5>Inline</h5>
                        <p>By default DataScroller listens to the scroll event of window, the alternative is the inline mode where container of the DataScroller element itself is used as the event target. Set <i>inline</i> option to true to enable this mode.</p>
                        <CodeHighlight>
                            {`
<DataScroller value={products} itemTemplate={itemTemplate} rows={10} inline></DataScroller>
`}
                        </CodeHighlight>

                        <h5>Lazy Loading</h5>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking
                        onLazyLoad callback everytime paging happens. To implement lazy loading,
            enable <i>lazy</i> property and provide a method callback using <i>onLazyLoad</i> that actually loads the data from a remote datasource. onLazyLoad gets an event object
            that contains information about what to load.</p>

                        <CodeHighlight>
                            {`
<DataScroller value={products} itemTemplate={itemTemplate} rows={10} lazy onLazyLoad={loadData}></DataScroller>
`}
                        </CodeHighlight>

                        <CodeHighlight lang="js">
                            {`
const loadData = (event) => {
    //event.first = First row offset
    //event.rows = Number of rows per page
    //add more records to the cars array
}
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
                                        <td>An array of objects to display.</td>
                                    </tr>
                                    <tr>
                                        <td>rows</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of rows to fetch in a load event.</td>
                                    </tr>
                                    <tr>
                                        <td>inline</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines if the event target to listen the scroll event is the element itself.</td>
                                    </tr>
                                    <tr>
                                        <td>scrollHeight</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Max height of the content area in inline mode.</td>
                                    </tr>
                                    <tr>
                                        <td>loader</td>
                                        <td>boolean</td>
                                        <td>null</td>
                                        <td>Determines whether data is loaded by a target element.</td>
                                    </tr>
                                    <tr>
                                        <td>buffer</td>
                                        <td>number</td>
                                        <td>0.9</td>
                                        <td>Number of buffer size.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>itemTemplate</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Function that gets an item in the value and returns the content for it.</td>
                                    </tr>
                                    <tr>
                                        <td>header</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Label of header.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Label of footer.</td>
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
                                        <td>onLazyLoad</td>
                                        <td>event.first = First row offset <br />
                                event.rows = Number of rows per page <br /></td>
                                        <td>Callback to invoke in lazy mode to load new data.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes</p>
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
                                        <td>p-datascroller</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-datascroller-header</td>
                                        <td>Header section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-datascroller-footer</td>
                                        <td>Footer section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-datascroller-content</td>
                                        <td>Wrapper of item container.</td>
                                    </tr>
                                    <tr>
                                        <td>p-datascroller-list</td>
                                        <td>Item container element.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'DataScrollerDemo', sources: this.sources, service: 'ProductService', data: 'products', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
