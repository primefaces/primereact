import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataTableScrollDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: null,
            lazyCars: null,
            lazyTotalRecords: 0,
            frozenCars: null
        };
        
        this.carservice = new CarService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => {
            this.setState({
                cars: data,
                lazyCars: this.loadLazyCars(0),
                lazyTotalRecords: 250000,
                loading: false,
                frozenCars: [
                    {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                    {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
                ]
            });
        });
    }
    
    onVirtualScroll(event) {
        this.setState({
            loading: true
        });

        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(() => {
            this.setState({
                lazyCars: this.loadLazyCars(event.first),
                loading: false
            });
        }, 250);
    }

    loadLazyCars(first) {
        return [
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first||'0'},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 1},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 2},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 3},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 4},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 5},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 6},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 7},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 8},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 9},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first + 10},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 11},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 12},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 13},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 14},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 15},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 16},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 17},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 18},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 19},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first + 20},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 21},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 22},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 23},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 24},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 25},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 26},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 27},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 28},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 29},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first + 30},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 31},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 32},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 33},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 34},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 35},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 36},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 37},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 38},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 39}
        ];
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
                    <DataTable header="Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px">
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                    
                    <DataTable header="VirtualScroll with Lazy Loading" value={this.state.lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} 
                        rows={10} totalRecords={this.state.lazyTotalRecords} lazy={true} onVirtualScroll={this.onVirtualScroll} loading={this.state.loading} style={{marginTop:'30px'}}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable header="Horizontal and Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '600px'}}>
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>
                    
                    <DataTable header="Frozen Rows" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable header="Frozen Columns" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" unfrozenWidth="600px">
                        <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>
                    
                    <DataTable header="Frozen Rows and Columns" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" unfrozenWidth="600px">
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
            <div className="content-section source">
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
            cars: null,
            lazyCars: null,
            lazyTotalRecords: 0,
            frozenCars: null
        };
        
        this.carservice = new CarService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => {
            this.setState({
                cars: data,
                lazyCars: this.loadLazyCars(0),
                lazyTotalRecords: 250000,
                loading: false,
                frozenCars: [
                    {"brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23"},
                    {"brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23"}
                ]
            });
        });
    }
    
    onVirtualScroll(event) {
        this.setState({
            loading: true
        });
        
        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(() => {
            this.setState({
                lazyCars: this.loadLazyCars(event.first),
                loading: false
            });
        }, 250);
    }

    loadLazyCars(first) {
        return [
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first||'0'},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 1},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 2},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 3},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 4},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 5},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 6},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 7},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 8},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 9},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first + 10},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 11},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 12},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 13},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 14},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 15},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 16},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 17},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 18},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 19},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first + 20},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 21},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 22},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 23},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 24},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 25},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 26},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 27},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 28},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 29},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": first + 30},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": first + 31},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": first + 32},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": first + 33},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": first + 34},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": first + 35},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": first + 36},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": first + 37},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": first + 38},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": first + 39}
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Scroll</h1>
                        <p>Data scrolling with fixed header is available horizontally, vertically or both. ScrollHeight and ScrollWidth values can either be fixed pixels or percentages. Certain columns can be fixed as well. 
                            Virtual Scrolling mode is available to deal with large datasets by loading data on demand during scrolling.</p>
                    </div>
                </div>

                <div className="content-section implementation">                    
                    <DataTable header="Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px">
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                    
                    <DataTable header="VirtualScroll with Lazy Loading" value={this.state.lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} 
                        rows={10} totalRecords={this.state.lazyTotalRecords} lazy={true} onVirtualScroll={this.onVirtualScroll} loading={this.state.loading} style={{marginTop:'30px'}}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable header="Horizontal and Vertical" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '600px'}}>
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>
                    
                    <DataTable header="Frozen Rows" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable header="Frozen Columns" value={this.state.cars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" unfrozenWidth="600px">
                        <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                        <Column field="vin" header="Vin" style={{width:'250px'}} />
                        <Column field="year" header="Year" style={{width:'250px'}} />
                        <Column field="brand" header="Brand" style={{width:'250px'}} />
                        <Column field="color" header="Color" style={{width:'250px'}} />
                    </DataTable>
                    
                    <DataTable header="Frozen Rows and Columns" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" unfrozenWidth="600px">
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
