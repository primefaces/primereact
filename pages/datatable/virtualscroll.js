import React, { useState, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { CarService } from '../../service/CarService';
import { Skeleton } from '../../components/lib/skeleton/Skeleton';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const DataTableVirtualScrollDemo = () => {

    const carService = new CarService();
    const [cars, setCars] = useState(Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1)));
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>React Table Component - VirtualScroll</title>
                <meta name="description" content="VirtualScroller is a performant approach to handle huge data efficiently." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>VirtualScroll</span></h1>
                    <p>VirtualScroller is a performant approach to handle huge data efficiently.</p>
                </div>

                <DocActions github="datatable/virtualscroll.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Preloaded Data (100000 Rows)</h5>
                    <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                    <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableVirtualScrollDemoDoc />
        </div>
    );
}

export default DataTableVirtualScrollDemo;

export const DataTableVirtualScrollDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from '../service/CarService';

export class DataTableVirtualScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.carService = new CarService();

        this.state = {
            cars: Array.from({ length: 100000 }).map((_, i) => this.carService.generateCar(i + 1)),
            virtualCars: Array.from({ length: 100000 }),
            lazyLoading: false
        };

        this.loadingTemplate = this.loadingTemplate.bind(this);
        this.loadCarsLazy = this.loadCarsLazy.bind(this);
    }

    loadCarsLazy(event) {
        !this.state.lazyLoading && this.setState({ lazyLoading: true });

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        this.loadLazyTimeout = setTimeout(() => {
            let virtualCars = [...this.state.virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = this.state.cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(virtualCars, [...[first, last - first], ...loadedCars]);

            this.setState({
                virtualCars,
                lazyLoading: false
            });
        }, Math.random() * 1000 + 250);
    }

    loadingTemplate(options) {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Preloaded Data (100000 Rows)</h5>
                    <DataTable value={this.state.cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                    <DataTable value={this.state.virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: this.loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: this.state.lazyLoading, loadingTemplate: this.loadingTemplate }}>
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
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
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from '../service/CarService';

const DataTableVirtualScrollDemo = () => {

    const carService = new CarService();
    const [cars, setCars] = useState(Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1)));
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }

    return (
        <div>
            <div className="card">
                <h5>Preloaded Data (100000 Rows)</h5>
                <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
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
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from '../service/CarService';

const DataTableVirtualScrollDemo = () => {

    const carService = new CarService();
    const [cars, setCars] = useState(Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1)));
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }

    return (
        <div>
            <div className="card">
                <h5>Preloaded Data (100000 Rows)</h5>
                <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
`
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./CarService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/skeleton/skeleton.min.js"></script>`,
            content: `
const { useState } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Skeleton } = primereact.skeleton;

const DataTableVirtualScrollDemo = () => {

    const carService = new CarService();
    const [cars, setCars] = useState(Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1)));
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }

    return (
        <div>
            <div className="card">
                <h5>Preloaded Data (100000 Rows)</h5>
                <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableVirtualScrollDemo', sources: sources, service: 'CarService' })
                }
            </TabView>
        </div>
    )
})
