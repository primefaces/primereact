import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableScrollDemo extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            cars: [],
            lazyCars: [],
            lazyTotalRecords: 0,
            frozenCars: []
        };

        this.inmemoryData = [
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"},
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"},
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"},
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"}
        ];

        this.carservice = new CarService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => {
            this.setState({
                cars: data,
                lazyCars: this.loadChunk(0, 40),
                lazyTotalRecords: 250000,
                frozenCars: [
                    {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                    {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
                ],
                loading: false
            });
        });
    }

    loadChunk(index, length) {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = {...this.inmemoryData[i], ...{vin: (index + i)}};
        }

        return chunk;
    }

    onVirtualScroll(event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first === 249980) {
                this.setState({
                    lazyCars: this.loadChunk(event.first, 20)
                });
            }
            else {
                this.setState({
                    lazyCars: this.loadChunk(event.first, event.rows)
                });
            }
        }, 250);
    }

    loadingText() {
        return <span className="loading-text"></span>;
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Scroll</h1>
                        <p>Data scrolling with fixed header is available horizontally, vertically or both. ScrollHeight and ScrollWidth values can either be fixed pixels or percentages. Certain columns can be fixed as well.
                            Virtual Scrolling mode is available to deal with large datasets by loading data on demand during scrolling.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                   <DataTable header="Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px" loading={this.state.loading}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable header="VirtualScroll with Lazy Loading" value={this.state.lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} virtualRowHeight={30}
                        rows={20} totalRecords={this.state.lazyTotalRecords} lazy={true} onVirtualScroll={this.onVirtualScroll} style={{marginTop:'30px'}} loading={this.state.loading}>
                        <Column field="vin" header="Vin" loadingBody={this.loadingText} />
                        <Column field="year" header="Year" loadingBody={this.loadingText} />
                        <Column field="brand" header="Brand" loadingBody={this.loadingText} />
                        <Column field="color" header="Color" loadingBody={this.loadingText} />
                    </DataTable>

                    <DataTable header="Horizontal and Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '600px'}} loading={this.state.loading}>
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>

                    <DataTable header="Frozen Rows" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}} loading={this.state.loading}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable header="Frozen Columns" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" loading={this.state.loading}>
                        <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>

                    <DataTable header="Frozen Rows and Columns" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}}
                        frozenWidth="200px" loading={this.state.loading}>
                        <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>
                </div>

                <DataTableScrollDemoDoc></DataTableScrollDemoDoc>
            </div>
        );
    }
}

export class DataTableScrollDemoDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableScrollDemo extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            cars: [],
            lazyCars: [],
            lazyTotalRecords: 0,
            frozenCars: []
        };

        this.inmemoryData = [
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"},
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"},
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"},
            {"brand": "VW", "year": 2012, "color": "Orange"},
            {"brand": "Audi", "year": 2011, "color": "Black"},
            {"brand": "Renault", "year": 2005, "color": "Gray"},
            {"brand": "BMW", "year": 2003, "color": "Blue"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange"},
            {"brand": "Volvo", "year": 2005, "color": "Black"},
            {"brand": "Honda", "year": 2012, "color": "Yellow"},
            {"brand": "Jaguar", "year": 2013, "color": "Orange"},
            {"brand": "Ford", "year": 2000, "color": "Black"},
            {"brand": "Fiat", "year": 2013, "color": "Red"}
        ];

        this.carservice = new CarService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => {
            this.setState({
                cars: data,
                lazyCars: this.loadChunk(0, 40),
                lazyTotalRecords: 250000,
                frozenCars: [
                    {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                    {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
                ],
                loading: false
            });
        });
    }

    loadChunk(index, length) {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = {...this.inmemoryData[i], ...{vin: (index + i)}};
        }

        return chunk;
    }

    onVirtualScroll(event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first === 249980) {
                this.setState({
                    lazyCars: this.loadChunk(event.first, 20)
                });
            }
            else {
                this.setState({
                    lazyCars: this.loadChunk(event.first, event.rows)
                });
            }
        }, 250);
    }

    loadingText() {
        return <span className="loading-text"></span>;
    }

    render() {
        return (
            <div>
                <DataTable header="Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px" loading={this.state.loading}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>

                <DataTable header="VirtualScroll with Lazy Loading" value={this.state.lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} virtualRowHeight={30}
                    rows={20} totalRecords={this.state.lazyTotalRecords} lazy={true} onVirtualScroll={this.onVirtualScroll} style={{marginTop:'30px'}} loading={this.state.loading}>
                    <Column field="vin" header="Vin" loadingBody={this.loadingText} />
                    <Column field="year" header="Year" loadingBody={this.loadingText} />
                    <Column field="brand" header="Brand" loadingBody={this.loadingText} />
                    <Column field="color" header="Color" loadingBody={this.loadingText} />
                </DataTable>

                <DataTable header="Horizontal and Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '600px'}} loading={this.state.loading}>
                    <Column field="vin" header="Vin" style={{width:'250px'}} />
                    <Column field="year" header="Year" style={{width:'250px'}} />
                    <Column field="brand" header="Brand" style={{width:'250px'}} />
                    <Column field="color" header="Color" style={{width:'250px'}} />
                </DataTable>

                <DataTable header="Frozen Rows" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}} loading={this.state.loading}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>

                <DataTable header="Frozen Columns" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" loading={this.state.loading}>
                    <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                    <Column field="year" header="Year" style={{width:'250px'}} />
                    <Column field="brand" header="Brand" style={{width:'250px'}} />
                    <Column field="color" header="Color" style={{width:'250px'}} />
                    <Column field="vin" header="Vin" style={{width:'250px'}} />
                    <Column field="year" header="Year" style={{width:'250px'}} />
                    <Column field="brand" header="Brand" style={{width:'250px'}} />
                    <Column field="color" header="Color" style={{width:'250px'}} />
                </DataTable>

                <DataTable header="Frozen Rows and Columns" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}}
                    frozenWidth="200px" loading={this.state.loading}>
                    <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                    <Column field="year" header="Year" style={{width:'250px'}} />
                    <Column field="brand" header="Brand" style={{width:'250px'}} />
                    <Column field="color" header="Color" style={{width:'250px'}} />
                    <Column field="vin" header="Vin" style={{width:'250px'}} />
                    <Column field="year" header="Year" style={{width:'250px'}} />
                    <Column field="brand" header="Brand" style={{width:'250px'}} />
                    <Column field="color" header="Color" style={{width:'250px'}} />
                </DataTable>
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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableScrollDemo = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);
    const [lazyCars, setLazyCars] = useState([]);
    const [lazyTotalRecords, setLazyTotalRecords] = useState(0);
    const [frozenCars, setFrozenCars] = useState([]);

    const inmemoryData = [
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"}
    ];

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => {
            setCars(data);
            setLazyCars(loadChunk(0, 40));
            setLazyTotalRecords(250000);
            setFrozenCars([
                {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
            ]);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadChunk = (index, length) => {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = {...inmemoryData[i], ...{vin: (index + i)}};
        }

        return chunk;
    }

    const onVirtualScroll = (event) => {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            let _lazyCars;
            if (event.first === 249980) {
                _lazyCars = loadChunk(event.first, 20);
            }
            else {
                _lazyCars = loadChunk(event.first, event.rows);
            }

            setLazyCars(_lazyCars);
        }, 250);
    }

    const loadingText = () => {
        return <span className="loading-text"></span>;
    }

    return (
        <div>
            <DataTable header="Vertical" value={cars} scrollable={true} scrollHeight="200px" loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="VirtualScroll with Lazy Loading" value={lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} virtualRowHeight={30}
                rows={20} totalRecords={lazyTotalRecords} lazy={true} onVirtualScroll={onVirtualScroll} style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" loadingBody={loadingText} />
                <Column field="year" header="Year" loadingBody={loadingText} />
                <Column field="brand" header="Brand" loadingBody={loadingText} />
                <Column field="color" header="Color" loadingBody={loadingText} />
            </DataTable>

            <DataTable header="Horizontal and Vertical" value={cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '600px'}} loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows" value={cars} frozenValue={frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="Frozen Columns" value={cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows and Columns" value={cars} frozenValue={frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}}
                frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableScrollDemo = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);
    const [lazyCars, setLazyCars] = useState([]);
    const [lazyTotalRecords, setLazyTotalRecords] = useState(0);
    const [frozenCars, setFrozenCars] = useState<any>([]);

    const inmemoryData = [
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"}
    ];

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => {
            setCars(data);
            setLazyCars(loadChunk(0, 40));
            setLazyTotalRecords(250000);
            setFrozenCars([
                {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
            ]);
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadChunk = (index: number, length: number) => {
        let chunk: any = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = {...inmemoryData[i], ...{vin: (index + i)}};
        }

        return chunk;
    }

    const onVirtualScroll = (event: any) => {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            let _lazyCars;
            if (event.first === 249980) {
                _lazyCars = loadChunk(event.first, 20);
            }
            else {
                _lazyCars = loadChunk(event.first, event.rows);
            }

            setLazyCars(_lazyCars);
        }, 250);
    }

    const loadingText = () => {
        return <span className="loading-text"></span>;
    }

    return (
        <div>
            <DataTable header="Vertical" value={cars} scrollable={true} scrollHeight="200px" loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="VirtualScroll with Lazy Loading" value={lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} virtualRowHeight={30}
                rows={20} totalRecords={lazyTotalRecords} lazy={true} onVirtualScroll={onVirtualScroll} style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" loadingBody={loadingText} />
                <Column field="year" header="Year" loadingBody={loadingText} />
                <Column field="brand" header="Brand" loadingBody={loadingText} />
                <Column field="color" header="Color" loadingBody={loadingText} />
            </DataTable>

            <DataTable header="Horizontal and Vertical" value={cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '600px'}} loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows" value={cars} frozenValue={frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="Frozen Columns" value={cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows and Columns" value={cars} frozenValue={frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}}
                frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datatable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DataTableScrollDemo" sources={this.sources} service="CarService" data="cars-large" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
