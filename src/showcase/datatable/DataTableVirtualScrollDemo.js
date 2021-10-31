import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { CarService } from '../service/CarService';
import { TabView } from '../../components/tabview/TabView';
import { Skeleton } from '../../components/skeleton/Skeleton';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataTableDemo.scss';
import AppDemoActions from '../../AppDemoActions';

export class DataTableVirtualScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.carService = new CarService();

        this.state = {
            cars: Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i)),
            virtualCars: Array.from({ length: 10000 }),
            lazyLoading: false,
        };

        this.loadingTemplate = this.loadingTemplate.bind(this);
        this.loadCarsLazy = this.loadCarsLazy.bind(this);
    }

    loadCarsLazy(event) {
        this.setState({ lazyLoading: true });

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
            //Array.prototype.splice.apply(virtualCars, [first, last].concat(loadedCars));
            for(let i = first; i <= last && i < virtualCars.length; i++) {
                virtualCars[i] = loadedCars[i - first];
            }

            this.setState({
                virtualCars,
                lazyLoading: false
            });
        }, Math.random() * 1000 + 250);
    }

    loadingTemplate(options) {
        return (
            <div className="p-d-flex p-ai-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Scroll</span></h1>
                        <p>Data scrolling with fixed header is available horizontally, vertically or both. ScrollHeight and ScrollWidth values can either be fixed pixels or percentages. Certain columns can be fixed as well.
                            Virtual Scrolling mode is available to deal with large datasets by loading data on demand during scrolling.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="datatable/DataTableScrollDemo.js" />
                </div>

                <div className="content-section implementation datatable-scroll-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <DataTable value={this.state.cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                            <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                            <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                            <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                            <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                            <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Basic</h5>
                        <DataTable value={this.state.virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: this.loadCarsLazy, itemSize: 46, showLoader: true, loading: this.state.lazyLoading, loadingTemplate: this.loadingTemplate }}>
                            <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                            <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                            <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                            <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                            <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}

export class DataTableScrollDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {

        };

        this.extFiles = {

        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableScrollDemo', sources: this.sources, service: 'CustomerService', data: 'customers-large,customers-xlarge', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
