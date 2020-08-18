import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class OrderListDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { OrderList } from 'primereact/orderlist';
import ProductService from '../service/ProductService';
import './OrderListDemo.scss';

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
                    <img src={\`showcase/demo/images/product/\${item.image}\`} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">\${item.price}</h6>
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
import {OrderList} from 'primereact/orderlist';
import {CarService} from '../service/CarService';

const OrderListDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car) => {
        const imageSource = 'showcase/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px', width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    };

    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <OrderList value={cars} dragdrop itemTemplate={carTemplate}
                        responsive header="List of Cars" listStyle={{height: '20em'}}
                        onChange={(e) => setCars(e.value)} />
                </div>
                <div className="p-col-12 p-md-6">
                    <ul>
                        {cars.map(car => <li key={car.vin}>{car.brand} - {car.year} - {car.color}</li>)}
                    </ul>
                </div>
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
import {OrderList} from 'primereact/orderlist';
import {CarService} from '../service/CarService';

const OrderListDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car: any) => {
        const imageSource = 'showcase/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px', width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    };

    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <OrderList value={cars} dragdrop itemTemplate={carTemplate}
                        responsive header="List of Cars" listStyle={{height: '20em'}}
                        onChange={(e) => setCars(e.value)} />
                </div>
                <div className="p-col-12 p-md-6">
                    <ul>
                        {cars.map((car: any) => <li key={car.vin}>{car.brand} - {car.year} - {car.color}</li>)}
                    </ul>
                </div>
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
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { OrderList } from 'primereact/orderlist';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>OrderList requires an array as its value, a template for its content where each item in the array can be accessed inside the template and <i>onChange</i>
                    callback to update the value after reorder.
            </p>
<CodeHighlight>
{`
<OrderList value={this.state.products} itemTemplate={this.itemTemplate} header="Products" onChange={(e) => this.setState({products: e.value})}></OrderList>
`}
</CodeHighlight>

            <h5>DragDrop</h5>
            <p>Items can be reordered using drag and drop by enabling <i>dragdrop</i> property.</p>

<CodeHighlight>
{`
<OrderList value={this.state.products} itemTemplate={this.itemTemplate} dragdrop onChange={(e) => this.setState({products: e.value})}></OrderList>
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
                            <td>string</td>
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

                <h5>Dependencies</h5>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <LiveEditor name="OrderListDemo" sources={this.sources} service="CarService" data="cars-small" />
<CodeHighlight lang="scss">
{`
.orderlist-demo {
    .product-item {
        display: flex;
        align-items: center;
        padding: .5rem;
        width: 100%;

        img {
            width: 75px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 1rem;
        }

        .product-list-detail {
            flex: 1 1 0;
        }

        .product-list-action {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .product-category-icon {
            vertical-align: middle;
            margin-right: .5rem;
        }

        .product-category {
            vertical-align: middle;
            line-height: 1;
        }
    }

    @media screen and (max-width: 576px) {
        .product-item {
            flex-wrap: wrap;

            .image-container {
                width: 100%;
                text-align: center;
            }

            img {
                margin: 0 0 1rem 0;
                width: 100px;
            }
        }
    }
}
`}
</CodeHighlight>
            </TabPanel>
        </TabView>
    </div>
        );
    }
}
