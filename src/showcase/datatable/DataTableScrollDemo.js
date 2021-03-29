import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { CustomerService } from '../service/CustomerService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
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
import './DataTableDemo.css';

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
            <div className="datatable-scroll-demo">
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
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableScrollDemo = () => {
    const [customers, setCustomers] = useState([]);
    const [virtualCustomers, setVirtualCustomers] = useState([]);
    const [inmemoryData, setInMemoryData] = useState([]);
    const [lazyTotalRecords, setLazyTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);
    const [virtualLoading, setVirtualLoading] = useState(false);
    const isMounted = useRef(null);
    const customerService = new CustomerService();

    const frozenValue = [
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

    useEffect(() => {
        if (isMounted.current) {
            loadVirtualCustomers();
        }
    }, [inmemoryData]);

    useEffect(() => {
        isMounted.current = true;
        setLoading(true);
        setVirtualLoading(true);

        customerService.getCustomersLarge().then(data => {
            setCustomers(data);
            setLoading(false);
        });
        customerService.getCustomersXLarge().then(data => setInMemoryData(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadVirtualCustomers = () => {
        setVirtualCustomers(loadChunk(0, 40));
        setLazyTotalRecords(500);
        setVirtualLoading(false);
    }

    const loadChunk = (index, length) => {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = { ...inmemoryData[i]};
        }

        return chunk;
    }

    const onVirtualScroll = (event) => {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first === 480) {
                setVirtualCustomers(loadChunk(event.first, 20));
            }
            else {
                setVirtualCustomers(loadChunk(event.first, event.rows));
            }
        }, 250);
    }

    const loadingText = () => {
        return <span className="loading-text"></span>;
    }

    const nameBodyTemplate = (rowData) => {
        return <span style={{ fontWeight: '700' }}>{rowData.name}</span>;
    }

    return (
        <div className="datatable-scroll-demo">
            <div className="card">
                <h5>Vertical</h5>
                <DataTable value={customers} scrollable scrollHeight="200px" loading={loading}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Virtual Scroll</h5>
                <DataTable value={virtualCustomers} scrollable scrollHeight="200px" lazy rows={20} loading={virtualLoading}
                    virtualScroll virtualRowHeight={45} onVirtualScroll={onVirtualScroll} totalRecords={lazyTotalRecords}>
                    <Column field="name" header="Name" loadingBody={loadingText}></Column>
                    <Column field="country.name" header="Country" loadingBody={loadingText}></Column>
                    <Column field="representative.name" header="Representative" loadingBody={loadingText}></Column>
                    <Column field="status" header="Status" loadingBody={loadingText}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <DataTable value={customers} scrollable scrollHeight="200px" style={{ width: '600px' }} loading={loading}>
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
                <DataTable value={customers} frozenValue={frozenValue} scrollable scrollHeight="200px" loading={loading}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <DataTable value={customers} scrollable scrollHeight="200px" frozenWidth="300px" loading={loading}>
                    <Column field="name" header="Name" body={nameBodyTemplate} headerStyle={{ width: '300px' }} columnKey="name" frozen></Column>
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
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';
import './DataTableDemo.css';

const DataTableScrollDemo = () => {
    const [customers, setCustomers] = useState([]);
    const [virtualCustomers, setVirtualCustomers] = useState([]);
    const [inmemoryData, setInMemoryData] = useState([]);
    const [lazyTotalRecords, setLazyTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);
    const [virtualLoading, setVirtualLoading] = useState(false);
    const isMounted = useRef(null);
    const customerService = new CustomerService();

    const frozenValue = [
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

    useEffect(() => {
        if (isMounted.current) {
            loadVirtualCustomers();
        }
    }, [inmemoryData]);

    useEffect(() => {
        isMounted.current = true;
        setLoading(true);
        setVirtualLoading(true);

        customerService.getCustomersLarge().then(data => {
            setCustomers(data);
            setLoading(false);
        });
        customerService.getCustomersXLarge().then(data => setInMemoryData(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadVirtualCustomers = () => {
        setVirtualCustomers(loadChunk(0, 40));
        setLazyTotalRecords(500);
        setVirtualLoading(false);
    }

    const loadChunk = (index, length) => {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = { ...inmemoryData[i]};
        }

        return chunk;
    }

    const onVirtualScroll = (event) => {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first === 480) {
                setVirtualCustomers(loadChunk(event.first, 20));
            }
            else {
                setVirtualCustomers(loadChunk(event.first, event.rows));
            }
        }, 250);
    }

    const loadingText = () => {
        return <span className="loading-text"></span>;
    }

    const nameBodyTemplate = (rowData) => {
        return <span style={{ fontWeight: '700' }}>{rowData.name}</span>;
    }

    return (
        <div className="datatable-scroll-demo">
            <div className="card">
                <h5>Vertical</h5>
                <DataTable value={customers} scrollable scrollHeight="200px" loading={loading}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Virtual Scroll</h5>
                <DataTable value={virtualCustomers} scrollable scrollHeight="200px" lazy rows={20} loading={virtualLoading}
                    virtualScroll virtualRowHeight={45} onVirtualScroll={onVirtualScroll} totalRecords={lazyTotalRecords}>
                    <Column field="name" header="Name" loadingBody={loadingText}></Column>
                    <Column field="country.name" header="Country" loadingBody={loadingText}></Column>
                    <Column field="representative.name" header="Representative" loadingBody={loadingText}></Column>
                    <Column field="status" header="Status" loadingBody={loadingText}></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <DataTable value={customers} scrollable scrollHeight="200px" style={{ width: '600px' }} loading={loading}>
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
                <DataTable value={customers} frozenValue={frozenValue} scrollable scrollHeight="200px" loading={loading}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <DataTable value={customers} scrollable scrollHeight="200px" frozenWidth="300px" loading={loading}>
                    <Column field="name" header="Name" body={nameBodyTemplate} headerStyle={{ width: '300px' }} columnKey="name" frozen></Column>
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
                `
            }
        };

        this.extFiles = {
            'src/demo/DataTableDemo.css': {
                content: `
.datatable-scroll-demo .loading-text {
    display: block;
    background-color: #f1f1f1;
    min-height: 19px;
    animation: pulse 1s infinite ease-in-out;
    text-indent: -99999px;
    overflow: hidden;
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
                    {
                        useLiveEditorTabs({ name: 'DataTableScrollDemo', sources: this.sources, service: 'CustomerService', data: 'customers-large,customers-xlarge', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
