import React, { Component } from 'react';
import { DataScroller } from '../../components/datascroller/DataScroller';
import { Button } from '../../components/button/Button';
import { Rating } from '../../components/rating/Rating';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataScrollerDemo.scss';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DataScrollerInlineDemo extends Component {

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
                <img src={`showcase/demo/images/product/${data.image}`} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readonly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataScroller">
                        <h1>DataScroller <span>Inline</span></h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datascroller-demo">
                    <div className="card">
                        <DataScroller value={this.state.products} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
                    </div>
                </div>

                <DataScrollerInlineDoc></DataScrollerInlineDoc>
            </div>
        );
    }
}

export class DataScrollerInlineDoc extends Component {

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
import './DataScrollerDemo.scss';

export class DataScrollerInlineDemo extends Component {

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
                <img src={\`showcase/demo/images/product/\${data.image}\`} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readonly cancel={false}></Rating>
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
                    <DataScroller value={this.state.products} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
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
import {DataScroller} from 'primereact/datascroller';
import {CarService} from '../service/CarService';

const DataScrollerInlineDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car) => {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dataview-demo">
            <DataScroller value={cars} itemTemplate={carTemplate} rows={10} inline scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataScroller} from 'primereact/datascroller';
import {CarService} from '../service/CarService';

const DataScrollerInlineDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car: any) => {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dataview-demo">
            <DataScroller value={cars} itemTemplate={carTemplate} rows={10} inline scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.dataview-demo .car-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    border-bottom: 1px solid #d9dad9;
}
.dataview-demo .car-details > div {
    display: flex;
    align-items: center;
}
.dataview-demo .car-details > div img {
    margin-right: 14px;
}
.dataview-demo .car-detail {
    padding: 0 1em 1em 1em;
    border-bottom: 1px solid #d9dad9;
    margin: 1em;
}
.dataview-demo .p-panel-content {
    padding: 1em;
}
@media screen and (max-width: 1024px) {
    .dataview-demo .p-dataview .car-details img {
        width: 75px;
    }
}
@media screen and (max-width: 640px) {
    .dataview-demo .car-details, .dataview-demo .search-icon {
        text-align: center;
        margin-top: 0;
    }

    .dataview-demo .filter-container {
        text-align: left;
    }

    .datascroll-demo .car-item {
        text-align: center;
    }
}
            `
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
                        <LiveEditor name="DataScrollerInlineDemo" sources={this.sources} service="CarService" data="cars-large" extFiles={this.extFiles} />
<CodeHighlight lang="scss">
{`
.datascroller-demo {
    .product-name {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .product-description {
        margin: 0 0 1rem 0;
    }

    .product-category-icon {
        vertical-align: middle;
        margin-right: .5rem;
    }

    .product-category {
        font-weight: 600;
        vertical-align: middle;
    }

    .product-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        width: 100%;

        img {
            width: 150px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 2rem;
        }

        .product-detail {
            flex: 1 1 0;
        }

        .p-rating {
            margin: 0 0 .5rem 0;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: .5rem;
            align-self: flex-end;
        }

        .product-action {
            display: flex;
            flex-direction: column;
        }

        .p-button {
            margin-bottom: .5rem;
        }
    }

    @media screen and (max-width: 576px) {
        .product-item {
            flex-direction: column;
            align-items: center;

            img {
                width: 75%;
                margin: 2rem 0;
            }

            .product-detail {
                text-align: center;
            }

            .product-price {
                align-self: center;
            }

            .product-action {
                display: flex;
                flex-direction: column;
            }

            .product-action {
                margin-top: 2rem;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
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
