import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableSortDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Sort</h1>
                        <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and
                            used with metaKey.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Column</h3>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" sortable={true}/>
                        <Column field="year" header="Year" sortable={true}/>
                        <Column field="brand" header="Brand" sortable={true}/>
                        <Column field="color" header="Color" sortable={true}/>
                    </DataTable>

                    <h3>Multiple Columns</h3>
                    <DataTable value={this.state.cars} sortMode="multiple">
                        <Column field="vin" header="Vin" sortable={true}/>
                        <Column field="year" header="Year" sortable={true}/>
                        <Column field="brand" header="Brand" sortable={true}/>
                        <Column field="color" header="Color" sortable={true}/>
                    </DataTable>

                    <h3>Removable Sort</h3>
                    <DataTable value={this.state.cars} removableSort={true} sortMode="multiple">
                        <Column field="vin" header="Vin" sortable={true}/>
                        <Column field="year" header="Year" sortable={true}/>
                        <Column field="brand" header="Brand" sortable={true}/>
                        <Column field="color" header="Color" sortable={true}/>
                    </DataTable>
                </div>

                <DataTableSortDemoDoc></DataTableSortDemoDoc>
            </div>
        );
    }
}

export class DataTableSortDemoDoc extends Component {

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

export class DataTableSortDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <h3>Single Column</h3>
                <DataTable value={this.state.cars}>
                    <Column field="vin" header="Vin" sortable={true}/>
                    <Column field="year" header="Year" sortable={true}/>
                    <Column field="brand" header="Brand" sortable={true}/>
                    <Column field="color" header="Color" sortable={true}/>
                </DataTable>

                <h3>Multiple Columns</h3>
                <DataTable value={this.state.cars} sortMode="multiple">
                    <Column field="vin" header="Vin" sortable={true}/>
                    <Column field="year" header="Year" sortable={true}/>
                    <Column field="brand" header="Brand" sortable={true}/>
                    <Column field="color" header="Color" sortable={true}/>
                </DataTable>

                <h3>Removable Sort</h3>
                <DataTable value={this.state.cars} removableSort={true} sortMode="multiple">
                    <Column field="vin" header="Vin" sortable={true}/>
                    <Column field="year" header="Year" sortable={true}/>
                    <Column field="brand" header="Brand" sortable={true}/>
                    <Column field="color" header="Color" sortable={true}/>
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

const DataTableSortDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Single Column</h3>
            <DataTable value={cars}>
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
            </DataTable>

            <h3>Multiple Columns</h3>
            <DataTable value={cars} sortMode="multiple">
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
            </DataTable>

            <h3>Removable Sort</h3>
            <DataTable value={cars} removableSort={true} sortMode="multiple">
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
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

const DataTableSortDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Single Column</h3>
            <DataTable value={cars}>
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
            </DataTable>

            <h3>Multiple Columns</h3>
            <DataTable value={cars} sortMode="multiple">
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
            </DataTable>

            <h3>Removable Sort</h3>
            <DataTable value={cars} removableSort={true} sortMode="multiple">
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
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
                                    <LiveEditor name="DataTableSortDemo" sources={[key, value]} service="CarService" data="cars-small" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
