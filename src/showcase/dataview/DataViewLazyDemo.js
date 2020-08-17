import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from '../../components/dataview/DataView';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { Rating } from '../../components/rating/Rating';
import { Button } from '../../components/button/Button';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DataViewLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
            layout: 'grid',
            loading: true,
            first: 0,
            totalRecords: 0
        };
        this.rows = 6;

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.productService.getProducts().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    products: this.datasource.slice(0, this.rows),
                    loading: false
                });
            });
        }, 1000);
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.rows;

            this.setState({
                first: startIndex,
                products: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    renderListItem(data) {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={`showcase/demo/images/product/${data.image}`} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readonly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
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
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={`showcase/demo/images/product/${data.image}`} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readonly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
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
        let onOptionChange = (e) => {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        layout: e.value
                    });
                }, 1000);
            });
        };

        return (
            <div style={{ textAlign: 'left' }}>
                <DataViewLayoutOptions layout={this.state.layout} onChange={onOptionChange} />
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataView">
                        <h1>DataView <span>Lazy</span></h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                        lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation dataview-demo">
                    <div className="card">
                        <DataView value={this.state.products} layout={this.state.layout} header={header}
                                itemTemplate={this.itemTemplate} lazy paginator paginatorPosition={'both'} rows={this.rows}
                                totalRecords={this.state.totalRecords} first={this.state.first} onPage={this.onPage} loading={this.state.loading} />
                    </div>
                </div>

                <DataViewLazyDemoDoc />
            </div>
        );
    }
}

export class DataViewLazyDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';

export class DataViewLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
            layout: 'grid',
            loading: true,
            first: 0,
            totalRecords: 0
        };
        this.rows = 6;

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.productService.getProducts().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    products: this.datasource.slice(0, this.rows),
                    loading: false
                });
            });
        }, 1000);
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.rows;

            this.setState({
                first: startIndex,
                products: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    renderListItem(data) {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={\`showcase/demo/images/product/\${data.image}\`} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readonly cancel={false}></Rating>
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
                    <img src={\`showcase/demo/images/product/\${data.image}\`} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readonly cancel={false}></Rating>
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
        let onOptionChange = (e) => {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        layout: e.value
                    });
                }, 1000);
            });
        };

        return (
            <div style={{ textAlign: 'left' }}>
                <DataViewLayoutOptions layout={this.state.layout} onChange={onOptionChange} />
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div className="dataview-demo">
                <div className="card">
                    <DataView value={this.state.products} layout={this.state.layout} header={header}
                            itemTemplate={this.itemTemplate} lazy paginator paginatorPosition={'both'} rows={this.rows}
                            totalRecords={this.state.totalRecords} first={this.state.first} onPage={this.onPage} loading={this.state.loading} />
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
import { Panel } from 'primereact/panel';
import { CarService } from '../service/CarService';

const DataViewLazyDemo = () => {
    const [datasource, setDatasource] = useState<any>([]);
    const [cars, setCars] = useState([]);
    const [layout, setLayout] = useState('list');
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = 6;
    const carservice = new CarService();

    useEffect(() => {
        setTimeout(() => {
            carservice.getCarsLarge().then(data => {
                setDatasource(data);
                setTotalRecords(data.length);
                setCars(datasource.slice(0, this.rows));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.rows;

            setFirst(startIndex);
            setCars(datasource.slice(startIndex, endIndex));
            setLoading(false);
        }, 1000);
    }

    const renderListItem = (car) => {
        return (
            <div className="p-col-12">
                <div className="car-details">
                    <div>
                        <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} />
                        <div className="p-grid">
                            <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                            <div className="p-col-12">Year: <b>{car.year}</b></div>
                            <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                            <div className="p-col-12">Color: <b>{car.color}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (car) => {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    const itemTemplate = (car, layout) => {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return renderListItem(car);
        else if (layout === 'grid')
            return renderGridItem(car);
    }

    const renderHeader = () => {
        let onOptionChange = (e) => {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                setLayout(e.value);
            }, 1000);
        };

        return (
            <div style={{textAlign: 'left'}}>
                <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <DataView value={cars} layout={layout} header={header} itemTemplate={itemTemplate}
                lazy paginator paginatorPosition={'both'} rows={rows} totalRecords={totalRecords}
                first={first} onPage={onPage} loading={loading} />
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
import { Panel } from 'primereact/panel';
import { CarService } from '../service/CarService';

const DataViewLazyDemo = () => {
    const [datasource, setDatasource] = useState<any>([]);
    const [cars, setCars] = useState<any>([]);
    const [layout, setLayout] = useState<string>('list');
    const [loading, setLoading] = useState<boolean>(true);
    const [first, setFirst] = useState<number>(0);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const rows: number = 6;
    const carservice = new CarService();

    useEffect(() => {
        setTimeout(() => {
            carservice.getCarsLarge().then(data => {
                setDatasource(data);
                setTotalRecords(data.length);
                setCars(datasource.slice(0, rows));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event: { first: number }) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + rows;

            setFirst(startIndex);
            setCars(datasource.slice(startIndex, endIndex));
            setLoading(false);
        }, 1000);
    }

    const renderListItem = (car: any) => {
        return (
            <div className="p-col-12">
                <div className="car-details">
                    <div>
                        <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} />
                        <div className="p-grid">
                            <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                            <div className="p-col-12">Year: <b>{car.year}</b></div>
                            <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                            <div className="p-col-12">Color: <b>{car.color}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (car: any) => {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    const itemTemplate = (car: any, layout: string) => {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return renderListItem(car);
        else if (layout === 'grid')
            return renderGridItem(car);
    }

    const renderHeader = () => {
        let onOptionChange = (e: { value: string }) => {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                setLayout(e.value);
            }, 1000);
        };

        return (
            <div style={{textAlign: 'left'}}>
                <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <DataView value={cars} layout={layout} header={header} itemTemplate={itemTemplate}
                lazy paginator paginatorPosition={'both'} rows={rows} totalRecords={totalRecords}
                first={first} onPage={onPage} loading={loading} />
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
                        <LiveEditor name="DataViewLazyDemo" sources={this.sources} service="CarService" data="cars-large" extFiles={this.extFiles} />
<CodeHighlight lang="scss">
{`
.dataview-demo {
    .p-dropdown {
        width: 14rem;
        font-weight: normal;
    }

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

    .product-list-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        width: 100%;

        img {
            width: 150px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 2rem;
        }

        .product-list-detail {
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

        .product-list-action {
            display: flex;
            flex-direction: column;
        }

        .p-button {
            margin-bottom: .5rem;
        }
    }

    .product-grid-item {
        margin: .5em;
        border: 1px solid #dee2e6;

        .product-grid-item-top,
        .product-grid-item-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        img {
            width: 75%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin: 2rem 0;
        }

        .product-grid-item-content {
            text-align: center;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }

    @media screen and (max-width: 576px) {
        .product-list-item {
            flex-direction: column;
            align-items: center;

            img {
                width: 75%;
                margin: 2rem 0;
            }

            .product-list-detail {
                text-align: center;
            }

            .product-price {
                align-self: center;
            }

            .product-list-action {
                display: flex;
                flex-direction: column;
            }

            .product-list-action {
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
        )
    }
}
