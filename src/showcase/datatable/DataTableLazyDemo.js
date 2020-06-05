import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            loading: true,
            first: 0,
            totalRecords: 0
        };

        this.rows = 10;

        this.carservice = new CarService();
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.state.rows),
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
            const endIndex = event.first + this.state.rows;

            this.setState({
                first: startIndex,
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                            lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={this.rows} totalRecords={this.state.totalRecords}
                        lazy={true} first={this.state.first} onPage={this.onPage} loading={this.state.loading}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableLazyDemoDoc></DataTableLazyDemoDoc>
            </div>
        );
    }
}

export class DataTableLazyDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            loading: true,
            first: 0,
            totalRecords: 0
        };

        this.rows = 10;

        this.carservice = new CarService();
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.state.rows),
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
            const endIndex = event.first + this.state.rows;

            this.setState({
                first: startIndex,
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <DataTable value={this.state.cars} paginator={true} rows={this.rows} totalRecords={this.state.totalRecords}
                    lazy={true} first={this.state.first} onPage={this.onPage} loading={this.state.loading}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
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

const DataTableLazyDemo = () => {
    const [cars, setCars] = useState([]);
    const [datasource, setDatasource] = useState([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = 10;
    const carservice = new CarService();

    useEffect(() => {
        setTimeout(() => {
            carservice.getCarsLarge().then(data => {
                setDatasource(data);
                setTotalRecords(data.length);
                setCars(data.slice(0, rows));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event) => {
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

    return (
        <div>
            <DataTable value={cars} paginator={true} rows={rows} totalRecords={totalRecords}
                lazy={true} first={first} onPage={onPage} loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
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

const DataTableLazyDemo = () => {
    const [cars, setCars] = useState([]);
    const [datasource, setDatasource] = useState([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = 10;
    const carservice = new CarService();

    useEffect(() => {
        setTimeout(() => {
            carservice.getCarsLarge().then(data => {
                setDatasource(data);
                setTotalRecords(data.length);
                setCars(data.slice(0, rows));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event: any) => {
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

    return (
        <div>
            <DataTable value={cars} paginator={true} rows={rows} totalRecords={totalRecords}
                lazy={true} first={first} onPage={onPage} loading={loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataTableLazyDemo" sources={[key, value]} service="CarService" data="cars-large" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
