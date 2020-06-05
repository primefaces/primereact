import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from '../../components/dataview/DataView';
import { Panel } from '../../components/panel/Panel';
import { CarService } from '../service/CarService';
import { DataViewSubmenu } from '../../showcase/dataview/DataViewSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataViewLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            layout: 'list',
            loading: true,
            first: 0,
            totalRecords: 0
        };
        this.rows = 6;

        this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.rows),
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
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    renderListItem(car) {
        return (
            <div className="p-col-12">
                <div className="car-details">
                    <div>
                        <img src={`showcase/demo/images/car/${car.brand}.png`} alt={car.brand} />
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

    renderGridItem(car) {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={`showcase/demo/images/car/${car.brand}.png`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    itemTemplate(car, layout) {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(car);
        else if (layout === 'grid')
            return this.renderGridItem(car);
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
                <DataViewSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataView - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                        lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("dataView")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation dataview-demo">
                    <DataView value={this.state.cars} layout={this.state.layout} header={header} itemTemplate={this.itemTemplate}
                        lazy paginator paginatorPosition={'both'} rows={this.rows} totalRecords={this.state.totalRecords}
                        first={this.state.first} onPage={this.onPage} loading={this.state.loading} />
                </div>

                <DataViewLazyDemoDoc></DataViewLazyDemoDoc>
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
import { Panel } from 'primereact/panel';
import { CarService } from '../service/CarService';

export class DataViewLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            layout: 'list',
            loading: true,
            first: 0,
            totalRecords: 0
        };
        this.rows = 6;

        this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.rows),
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
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    renderListItem(car) {
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

    renderGridItem(car) {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    itemTemplate(car, layout) {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(car);
        else if (layout === 'grid')
            return this.renderGridItem(car);
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
            <div style={{textAlign: 'left'}}>
                <DataViewLayoutOptions layout={this.state.layout} onChange={onOptionChange} />
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div className="dataview-demo">
                <DataView value={this.state.cars} layout={this.state.layout} header={header} itemTemplate={this.itemTemplate}
                    lazy paginator paginatorPosition={'both'} rows={this.rows} totalRecords={this.state.totalRecords}
                    first={this.state.first} onPage={this.onPage} loading={this.state.loading} />
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataViewLazyDemo" sources={[key, value]} service="CarService" data="cars-large" extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
