import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView,TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class DataViewDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

export class DataViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null
        };

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
        ];

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }

    renderListItem(data) {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(data) {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    itemTemplate(product, layout) {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(product);
        else if (layout === 'grid')
            return this.renderGridItem(product);
    }

    renderHeader() {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={this.sortOptions} value={this.state.sortKey} optionLabel="label" placeholder="Sort By Price" onChange={this.onSortChange}/>
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({ layout: e.value })} />
                </div>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div className="dataview-demo">
                <div className="card">
                    <DataView value={this.state.products} layout={this.state.layout} header={header}
                            itemTemplate={this.itemTemplate} paginator rows={9}
                            sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
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
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

const DataViewDemo = () => {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products} layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
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
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

const DataViewDemo = () => {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products} layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'src/demo/DataViewDemo.css': {
                content: `
.dataview-demo .p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.dataview-demo .product-name {
    font-size: 1.5rem;
    font-weight: 700;
}

.dataview-demo .product-description {
    margin: 0 0 1rem 0;
}

.dataview-demo .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
}

.dataview-demo .product-category {
    font-weight: 600;
    vertical-align: middle;
}

.dataview-demo .product-list-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.dataview-demo .product-list-item img {
    width: 150px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
}

.dataview-demo .product-list-item .product-list-detail {
    flex: 1 1 0;
}

.dataview-demo .product-list-item .p-rating {
    margin: 0 0 .5rem 0;
}

.dataview-demo .product-list-item .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
    align-self: flex-end;
}

.dataview-demo .product-list-item .product-list-action {
    display: flex;
    flex-direction: column;
}

.dataview-demo .product-list-item .p-button {
    margin-bottom: .5rem;
}

.dataview-demo .product-grid-item {
    margin: .5em;
    border: 1px solid #dee2e6;
    padding: 2rem;
}

.dataview-demo .product-grid-item .product-grid-item-top,
    .dataview-demo .product-grid-item .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dataview-demo .product-grid-item img {
    width: 75%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
}

.dataview-demo .product-grid-item .product-grid-item-content {
    text-align: center;
}

.dataview-demo .product-grid-item .product-price {
    font-size: 1.5rem;
    font-weight: 600;
}

@media screen and (max-width: 576px) {
    .dataview-demo .product-list-item {
        flex-direction: column;
        align-items: center;
    }

    .dataview-demo .product-list-item img {
        width: 75%;
        margin: 2rem 0;
    }

    .dataview-demo .product-list-item .product-list-detail {
        text-align: center;
    }

    .dataview-demo .product-list-item .product-price {
        align-self: center;
    }

    .dataview-demo .product-list-item .product-list-action {
        display: flex;
        flex-direction: column;
    }

    .dataview-demo .product-list-item .product-list-action {
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
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Layout of the DataView is managed by the <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> that can be downloaded from npm.</p>

<CodeHighlight lang="js">
{`
npm install primeflex --save
`}
</CodeHighlight>

                        <p>DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. <i>list</i> and <i>grid</i>. </p>

                        <p>DataView has two layout modes; <i>list</i> and <i>grid</i> where <i>itemTemplate</i> function is called by passing the item to render along with the layout mode.</p>
<CodeHighlight lang="js">
{`
const itemTemplate = (data, layout) => {
    if (layout === 'list') {
        return (
            // List content
        );
    }

    if (layout === 'grid') {
        return (
            Grid Content
        );
    }
}

`}
</CodeHighlight>

<CodeHighlight>
{`
<DataView value={products} layout={layout} itemTemplate={itemTemplate}></DataView>
`}
</CodeHighlight>

                        <h5>DataViewLayoutOptions</h5>
                        <p>DataViewLayoutOptions is a helper component to choose between layout modes. This component is used in controlled manner to manage the state of layout orientation.</p>

<CodeHighlight>
{`
<DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
`}
</CodeHighlight>

                        <h5>Properties of DataViewLayoutOptions</h5>
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
                                        <td>layout</td>
                                        <td>string</td>
                                        <td>list</td>
                                        <td>Layout of the items, valid values are "list" and "grid".</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events of DataViewLayoutOptions</h5>
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
                                        <td>event.originalEvent:  browser event  <br/>
                                            event.value = layout mode e.g. "list" or "grid"
                                        </td>
                                        <td>Callback to invoke when layout mode is changed.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Paginator</h5>
                        <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number
                            of page links to display. Visit the <Link to="/paginator"> paginator</Link> paginator component for more information about the available properties.</p>

                        <p>Pagination can either be used in Controlled or Uncontrolled manner. In controlled mode, <i>first</i> and <i>onPage</i> properties needs to be defined to control the pagination state.</p>

<CodeHighlight>
{`
<DataView value={products} layout={layout} itemTemplate={itemTemplate} paginator rows={10} first={first} onPage={(e) => setFirst(e.first)}></DataView>
`}
</CodeHighlight>

                        <p>In uncontrolled mode, only <i>paginator</i> property needs to be enabled. Initial page state can be still be provided using the <i>first</i> property in uncontrolled mode however
                        it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the paginator, prefer to use the component as controlled.</p>
<CodeHighlight>
{`
<DataView value={products} layout={layout} itemTemplate={itemTemplate} paginator rows={10}></DataView>
`}
</CodeHighlight>

                        <h5>Sorting</h5>
                        <p><i>sortField</i> and <i>sortOrder</i> properties are available for sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element.
                            Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.</p>

<CodeHighlight lang="js">
{`
const sortOptions = [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
];

const header = (
    <div className="p-grid">
        <div className="p-col-12 p-md-4">
            <Dropdown options={sortOptions} value={sortKey} placeholder="Sort By" onChange={onSortChange} />
        </div>
    </div>
);

<DataView value={products} header={header} sortOrder={sortOrder} sortField={sortField} />

`}
</CodeHighlight>

<CodeHighlight className="js">
{`
const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        setSortOrder(-1);
        setSortField(value.substring(1, value.length));
        setSortKey(value);
    }
    else {
        setSortOrder(1);
        setSortField(value);
        setSortKey(value);
    }
}
`}
</CodeHighlight>

                        <h5>Lazy Loading</h5>
                        <p>Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination in controlled mode and utilize the <i>onPage</i> callback to load your data from the backend.
                        Pagination in this case needs to display the logical number of records so bind this value to the <i>totalRecords</i> property so that paginator can display itself according to the total records although you'd only
                        need to load the data of the current page. Refer to <Link to="/datatable/lazy">DataTable</Link> lazy loading for a sample implementation.</p>

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
                                        <td>header</td>
                                        <td>JSX or string</td>
                                        <td>null</td>
                                        <td>Header content of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>JSX or string</td>
                                        <td>null</td>
                                        <td>Footer content of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of objects to display.</td>
                                    </tr>
                                    <tr>
                                        <td>layout</td>
                                        <td>string</td>
                                        <td>list</td>
                                        <td>Layout of the items, valid values are "list" and "grid".</td>
                                    </tr>
                                    <tr>
                                        <td>rows</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of rows to display per page.</td>
                                    </tr>
                                    <tr>
                                        <td>first</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Index of the first record to render.</td>
                                    </tr>
                                    <tr>
                                        <td>totalRecords</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of total records, defaults to length of value when not defined.</td>
                                    </tr>
                                    <tr>
                                        <td>paginator</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When specified as true, enables the pagination.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorPosition</td>
                                        <td>string</td>
                                        <td>bottom</td>
                                        <td>Position of the paginator, options are "top","bottom" or "both".</td>
                                    </tr>
                                    <tr>
                                        <td>alwaysShowPaginator</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show it even there is only one page.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the paginator element.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorTemplate</td>
                                        <td>string|object</td>
                                        <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                                        <td>Template of the paginator. For details, refer to the template section of the <Link to="/paginator">paginator documentation</Link> for further options.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorLeft</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Content for the left side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorRight</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Content for the right side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>pageLinkSize</td>
                                        <td>number</td>
                                        <td>5</td>
                                        <td>Number of page links to display.</td>
                                    </tr>
                                    <tr>
                                        <td>rowsPerPageOptions</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>Array of integer values to display inside rows per page dropdown.</td>
                                    </tr>
                                    <tr>
                                        <td>currentPageReportTemplate</td>
                                        <td>string</td>
                                        <td>(&123;currentPage&125; of &123;totalPages&125;)</td>
                                        <td>Template of the current page report element.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorDropdownAppendTo</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Target element to attach the paginator dropdown overlay.</td>
                                    </tr>
                                    <tr>
                                        <td>emptyMessage</td>
                                        <td>string</td>
                                        <td>No records found.</td>
                                        <td>Text to display when there is no data.</td>
                                    </tr>
                                    <tr>
                                        <td>sortField</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the field to sort data by default.</td>
                                    </tr>
                                    <tr>
                                        <td>sortOrder</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Order to sort the data by default.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
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
                                        <td>lazy</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines if data is loaded and interacted with in lazy manner.</td>
                                    </tr>
                                    <tr>
                                        <td>itemTemplate</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Function that gets the option along with the layout mdoe and returns the content.</td>
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
                                        <td>onPage</td>
                                        <td>event.originalEvent: Browser event <br />
                                            event.first: Index of the first records on page. <br />
                                            event.rows: Number of records to display per page.</td>
                                        <td>Callback to invoke on pagination.</td>
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
                                        <td>p-dataview</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dataview-list</td>
                                        <td>Container element in list layout.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dataview-grid</td>
                                        <td>Container element in grid layout.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dataview-header</td>
                                        <td>Header section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dataview-footer</td>
                                        <td>Footer section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dataview-content</td>
                                        <td>Container of items.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'DataViewDemo', sources: this.sources, service: 'ProductService', data: 'products', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
