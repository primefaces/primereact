import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableColResizeDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars1: data, cars2: data}));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Resize</h1>
                        <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                            In "expand" mode, table width also changes along with the column width. onColumnResize is a callback that passes the resized column header as a parameter.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Fit Mode</h3>
                    <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="fit">
                        <Column field="vin" header="Vin" style={{width:'20%'}}/>
                        <Column field="year" header="Year" style={{width:'40%'}}/>
                        <Column field="brand" header="Brand" style={{width:'20%'}}/>
                        <Column field="color" header="Color" style={{width:'20%'}}/>
                    </DataTable>

                    <h3>Expand Mode</h3>
                    <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="expand">
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Scrollable Mode</h3>
                    <DataTable value={this.state.cars2} resizableColumns={true} scrollable={true} scrollHeight="200px">
                        <Column field="vin" header="Vin" style={{width:'20%'}}/>
                        <Column field="year" header="Year" style={{width:'40%'}}/>
                        <Column field="brand" header="Brand" style={{width:'20%'}}/>
                        <Column field="color" header="Color" style={{width:'20%'}}/>
                    </DataTable>
                </div>

                <DataTableColResizeDemoDoc></DataTableColResizeDemoDoc>
            </div>
        );
    }
}

export class DataTableColResizeDemoDoc extends Component {

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

export class DataTableColResizeDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars1: data, cars2: data}));
    }

    render() {
        return (
            <div>
                <h3>Fit Mode</h3>
                <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="fit">
                    <Column field="vin" header="Vin" style={{width:'20%'}}/>
                    <Column field="year" header="Year" style={{width:'40%'}}/>
                    <Column field="brand" header="Brand" style={{width:'20%'}}/>
                    <Column field="color" header="Color" style={{width:'20%'}}/>
                </DataTable>

                <h3>Expand Mode</h3>
                <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="expand">
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>

                <h3>Scrollable Mode</h3>
                <DataTable value={this.state.cars2} resizableColumns={true} scrollable={true} scrollHeight="200px">
                    <Column field="vin" header="Vin" style={{width:'20%'}}/>
                    <Column field="year" header="Year" style={{width:'40%'}}/>
                    <Column field="brand" header="Brand" style={{width:'20%'}}/>
                    <Column field="color" header="Color" style={{width:'20%'}}/>
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

const DataTableColResizeDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Fit Mode</h3>
            <DataTable value={cars1} resizableColumns={true} columnResizeMode="fit">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
            </DataTable>

            <h3>Expand Mode</h3>
            <DataTable value={cars1} resizableColumns={true} columnResizeMode="expand">
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Scrollable Mode</h3>
            <DataTable value={cars2} resizableColumns={true} scrollable={true} scrollHeight="200px">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
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

const DataTableColResizeDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Fit Mode</h3>
            <DataTable value={cars1} resizableColumns={true} columnResizeMode="fit">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
            </DataTable>

            <h3>Expand Mode</h3>
            <DataTable value={cars1} resizableColumns={true} columnResizeMode="expand">
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            <h3>Scrollable Mode</h3>
            <DataTable value={cars2} resizableColumns={true} scrollable={true} scrollHeight="200px">
                <Column field="vin" header="Vin" style={{width:'20%'}}/>
                <Column field="year" header="Year" style={{width:'40%'}}/>
                <Column field="brand" header="Brand" style={{width:'20%'}}/>
                <Column field="color" header="Color" style={{width:'20%'}}/>
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
                                    <LiveEditor name="DataTableColResizeDemo" sources={[key, value]} service="CarService" data="treenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
