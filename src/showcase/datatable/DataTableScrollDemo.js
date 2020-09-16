import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { CustomerService } from '../service/CustomerService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataTableDemo.scss';

export class DataTableScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            virtualCustomers: [],
            inmemoryData: [],
            lazyTotalRecords: 0,
            loading: false,
            virtualLoading: false
        };

        this.customerService = new CustomerService();
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true, virtualLoading: true });

        this.customerService.getCustomersLarge().then(data => {
            this.setState({
                customers: data,
                loading: false
            });
        });
        this.customerService.getCustomersXLarge().then(data => this.setState({ inmemoryData: data }, this.loadVirtualCustomers));

        this.frozenValue = [
            {
                id: 1255,
                name: "James McAdams",
                country: {
                    name: "United States",
                    code: "us"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                status: "qualified",
                activity: 23,
                representative: {
                    name: "Ioni Bowcher",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];
    }

    loadVirtualCustomers() {
        this.setState({
            virtualCustomers: this.loadChunk(0, 40),
            lazyTotalRecords: 500,
            virtualLoading: false
        });
    }

    loadChunk(index, length) {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = { ...this.state.inmemoryData[i]};
        }

        return chunk;
    }

    onVirtualScroll(event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first === 480) {
                this.setState({
                    virtualCustomers: this.loadChunk(event.first, 20)
                });
            }
            else {
                this.setState({
                    virtualCustomers: this.loadChunk(event.first, event.rows)
                });
            }
        }, 250);
    }

    loadingText() {
        return <span className="loading-text"></span>;
    }

    nameBodyTemplate(rowData) {
        return <span style={{ fontWeight: '700' }}>{rowData.name}</span>;
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
                </div>

                <div className="content-section implementation datatable-scroll-demo">
                    <div className="card">
                        <h5>Vertical</h5>
                        <DataTable value={this.state.customers} scrollable scrollHeight="200px" loading={this.state.loading}>
                            <Column field="name" header="Name"></Column>
                            <Column field="country.name" header="Country"></Column>
                            <Column field="representative.name" header="Representative"></Column>
                            <Column field="status" header="Status"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Virtual Scroll</h5>
                        <DataTable value={this.state.virtualCustomers} scrollable scrollHeight="200px" lazy rows={20} loading={this.state.virtualLoading}
                            virtualScroll virtualRowHeight={45} onVirtualScroll={this.onVirtualScroll} totalRecords={this.state.lazyTotalRecords}>
                            <Column field="name" header="Name" loadingBody={this.loadingText}></Column>
                            <Column field="country.name" header="Country" loadingBody={this.loadingText}></Column>
                            <Column field="representative.name" header="Representative" loadingBody={this.loadingText}></Column>
                            <Column field="status" header="Status" loadingBody={this.loadingText}></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Horizontal and Vertical</h5>
                        <DataTable value={this.state.customers} scrollable scrollHeight="200px" style={{ width: '600px' }} loading={this.state.loading}>
                            <Column field="id" header="Id" headerStyle={{ width: '250px' }} columnKey="id"></Column>
                            <Column field="name" header="Name" headerStyle={{ width: '250px' }} columnKey="name"></Column>
                            <Column field="country.name" header="Country" headerStyle={{ width: '250px' }} columnKey="country"></Column>
                            <Column field="date" header="Date" headerStyle={{ width: '250px' }} columnKey="date"></Column>
                            <Column field="company" header="Company" headerStyle={{ width: '250px' }} columnKey="company"></Column>
                            <Column field="status" header="Status" headerStyle={{ width: '250px' }} columnKey="status"></Column>
                            <Column field="activity" header="Activity" headerStyle={{ width: '250px' }} columnKey="activity"></Column>
                            <Column field="representative.name" header="Representative" headerStyle={{ width: '250px' }} columnKey="representative"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Frozen Rows</h5>
                        <DataTable value={this.state.customers} frozenValue={this.frozenValue} scrollable scrollHeight="200px" loading={this.state.loading}>
                            <Column field="name" header="Name"></Column>
                            <Column field="country.name" header="Country"></Column>
                            <Column field="representative.name" header="Representative"></Column>
                            <Column field="status" header="Status"></Column>
                        </DataTable>
                    </div>

                    <div className="card">
                        <h5>Frozen Columns</h5>
                        <DataTable value={this.state.customers} scrollable scrollHeight="200px" frozenWidth="300px" loading={this.state.loading}>
                            <Column field="name" header="Name" body={this.nameBodyTemplate} headerStyle={{ width: '300px' }} columnKey="name" frozen></Column>
                            <Column field="id" header="Id" headerStyle={{ width: '300px' }} columnKey="id"></Column>
                            <Column field="country.name" header="Country" headerStyle={{ width: '300px' }} columnKey="country"></Column>
                            <Column field="date" header="Date" headerStyle={{ width: '300px' }} columnKey="date"></Column>
                            <Column field="company" header="Country" headerStyle={{ width: '300px' }} columnKey="company"></Column>
                            <Column field="status" header="Status" headerStyle={{ width: '300px' }} columnKey="status"></Column>
                            <Column field="activity" header="Activity" headerStyle={{ width: '300px' }} columnKey="activity"></Column>
                            <Column field="representative.name" header="Representative" headerStyle={{ width: '300px' }} columnKey="representative"></Column>
                        </DataTable>
                    </div>
                </div>

                <DataTableScrollDemoDoc></DataTableScrollDemoDoc>
            </div>
        );
    }
}

export class DataTableScrollDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

export class DataTableScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            virtualCustomers: [],
            inmemoryData: [],
            lazyTotalRecords: 0,
            loading: false,
            virtualLoading: false
        };

        this.customerService = new CustomerService();
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true, virtualLoading: true });

        this.customerService.getCustomersLarge().then(data => {
            this.setState({
                customers: data,
                loading: false
            });
        });
        this.customerService.getCustomersXLarge().then(data => this.setState({ inmemoryData: data }, this.loadVirtualCustomers));

        this.frozenValue = [
            {
                id: 1255,
                name: "James McAdams",
                country: {
                    name: "United States",
                    code: "us"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                status: "qualified",
                activity: 23,
                representative: {
                    name: "Ioni Bowcher",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];
    }

    loadVirtualCustomers() {
        this.setState({
            virtualCustomers: this.loadChunk(0, 40),
            lazyTotalRecords: 500,
            virtualLoading: false
        });
    }

    loadChunk(index, length) {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = { ...this.state.inmemoryData[i]};
        }

        return chunk;
    }

    onVirtualScroll(event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first === 480) {
                this.setState({
                    virtualCustomers: this.loadChunk(event.first, 20)
                });
            }
            else {
                this.setState({
                    virtualCustomers: this.loadChunk(event.first, event.rows)
                });
            }
        }, 250);
    }

    loadingText() {
        return <span className="loading-text"></span>;
    }

    nameBodyTemplate(rowData) {
        return <span style={{ fontWeight: '700' }}>{rowData.name}</span>;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Vertical</h5>
                    <DataTable value={this.state.customers} scrollable scrollHeight="200px" loading={this.state.loading}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="representative.name" header="Representative"></Column>
                        <Column field="status" header="Status"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Virtual Scroll</h5>
                    <DataTable value={this.state.virtualCustomers} scrollable scrollHeight="200px" lazy rows={20} loading={this.state.virtualLoading}
                        virtualScroll virtualRowHeight={45} onVirtualScroll={this.onVirtualScroll} totalRecords={this.state.lazyTotalRecords}>
                        <Column field="name" header="Name" loadingBody={this.loadingText}></Column>
                        <Column field="country.name" header="Country" loadingBody={this.loadingText}></Column>
                        <Column field="representative.name" header="Representative" loadingBody={this.loadingText}></Column>
                        <Column field="status" header="Status" loadingBody={this.loadingText}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Horizontal and Vertical</h5>
                    <DataTable value={this.state.customers} scrollable scrollHeight="200px" style={{ width: '600px' }} loading={this.state.loading}>
                        <Column field="id" header="Id" headerStyle={{ width: '250px' }} columnKey="id"></Column>
                        <Column field="name" header="Name" headerStyle={{ width: '250px' }} columnKey="name"></Column>
                        <Column field="country.name" header="Country" headerStyle={{ width: '250px' }} columnKey="country"></Column>
                        <Column field="date" header="Date" headerStyle={{ width: '250px' }} columnKey="date"></Column>
                        <Column field="company" header="Company" headerStyle={{ width: '250px' }} columnKey="company"></Column>
                        <Column field="status" header="Status" headerStyle={{ width: '250px' }} columnKey="status"></Column>
                        <Column field="activity" header="Activity" headerStyle={{ width: '250px' }} columnKey="activity"></Column>
                        <Column field="representative.name" header="Representative" headerStyle={{ width: '250px' }} columnKey="representative"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Frozen Rows</h5>
                    <DataTable value={this.state.customers} frozenValue={this.frozenValue} scrollable scrollHeight="200px" loading={this.state.loading}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="representative.name" header="Representative"></Column>
                        <Column field="status" header="Status"></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Frozen Columns</h5>
                    <DataTable value={this.state.customers} scrollable scrollHeight="200px" frozenWidth="300px" loading={this.state.loading}>
                        <Column field="name" header="Name" body={this.nameBodyTemplate} headerStyle={{ width: '300px' }} columnKey="name" frozen></Column>
                        <Column field="id" header="Id" headerStyle={{ width: '300px' }} columnKey="id"></Column>
                        <Column field="country.name" header="Country" headerStyle={{ width: '300px' }} columnKey="country"></Column>
                        <Column field="date" header="Date" headerStyle={{ width: '300px' }} columnKey="date"></Column>
                        <Column field="company" header="Country" headerStyle={{ width: '300px' }} columnKey="company"></Column>
                        <Column field="status" header="Status" headerStyle={{ width: '300px' }} columnKey="status"></Column>
                        <Column field="activity" header="Activity" headerStyle={{ width: '300px' }} columnKey="activity"></Column>
                        <Column field="representative.name" header="Representative" headerStyle={{ width: '300px' }} columnKey="representative"></Column>
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
            <DataTable header="Vertical" value={cars} scrollable scrollHeight="200px" loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="VirtualScroll with Lazy Loading" value={lazyCars} scrollable scrollHeight="200px" virtualScroll virtualRowHeight={30}
                rows={20} totalRecords={lazyTotalRecords} lazy onVirtualScroll={onVirtualScroll} style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" loadingBody={loadingText} />
                <Column field="year" header="Year" loadingBody={loadingText} />
                <Column field="brand" header="Brand" loadingBody={loadingText} />
                <Column field="color" header="Color" loadingBody={loadingText} />
            </DataTable>

            <DataTable header="Horizontal and Vertical" value={cars} scrollable scrollHeight="200px" style={{marginTop:'30px', width: '600px'}} loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows" value={cars} frozenValue={frozenCars} scrollable scrollHeight="200px" style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="Frozen Columns" value={cars} scrollable scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows and Columns" value={cars} frozenValue={frozenCars} scrollable scrollHeight="200px" style={{marginTop:'30px', width: '800px'}}
                frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen />
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
            <DataTable header="Vertical" value={cars} scrollable scrollHeight="200px" loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="VirtualScroll with Lazy Loading" value={lazyCars} scrollable scrollHeight="200px" virtualScroll virtualRowHeight={30}
                rows={20} totalRecords={lazyTotalRecords} lazy onVirtualScroll={onVirtualScroll} style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" loadingBody={loadingText} />
                <Column field="year" header="Year" loadingBody={loadingText} />
                <Column field="brand" header="Brand" loadingBody={loadingText} />
                <Column field="color" header="Color" loadingBody={loadingText} />
            </DataTable>

            <DataTable header="Horizontal and Vertical" value={cars} scrollable scrollHeight="200px" style={{marginTop:'30px', width: '600px'}} loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows" value={cars} frozenValue={frozenCars} scrollable scrollHeight="200px" style={{marginTop:'30px'}} loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <DataTable header="Frozen Columns" value={cars} scrollable scrollHeight="200px" style={{marginTop:'30px', width: '800px'}} frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
                <Column field="vin" header="Vin" style={{width:'250px'}} />
                <Column field="year" header="Year" style={{width:'250px'}} />
                <Column field="brand" header="Brand" style={{width:'250px'}} />
                <Column field="color" header="Color" style={{width:'250px'}} />
            </DataTable>

            <DataTable header="Frozen Rows and Columns" value={cars} frozenValue={frozenCars} scrollable scrollHeight="200px" style={{marginTop:'30px', width: '800px'}}
                frozenWidth="200px" loading={loading}>
                <Column field="vin" header="Vin" style={{width:'250px'}} frozen />
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

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <LiveEditor name="DataTableScrollDemo" sources={this.sources} service="CarService" data="cars-large" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
