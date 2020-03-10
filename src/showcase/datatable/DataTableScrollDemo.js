import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableScrollDemo extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            cars: null,
            lazyCars: null,
            lazyTotalRecords: 0,
            frozenCars: null
        };

        this.carservice = new CarService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
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

                    <DataTable header="Frozen Columns" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" unfrozenWidth="600px" loading={this.state.loading}>
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
                        frozenWidth="200px" unfrozenWidth="600px" loading={this.state.loading}>
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

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableScrollDemo extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            cars: null,
            lazyCars: null,
            lazyTotalRecords: 0,
            frozenCars: null
        };

        this.carservice = new CarService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
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

        this.carservice.getCarsLarge().then(data => {
            this.setState({
                cars: data,
                lazyCars: this.loadChunk(0, 40),
                lazyTotalRecords: 250000,
                frozenCars: [
                    {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                    {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
                ],
                loading: true
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

                    <DataTable header="Frozen Columns" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" unfrozenWidth="600px" loading={this.state.loading}>
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
                        frozenWidth="200px" unfrozenWidth="600px" loading={this.state.loading}>
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
            </div>
        );
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
