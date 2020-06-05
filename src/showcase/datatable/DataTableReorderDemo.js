import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableReorderDemo extends Component {

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
                        <h1>DataTable - Reorder</h1>
                        <p>Order of the columns and rows can be changed using drag and drop.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} reorderableColumns={true} onRowReorder={(e) => this.setState({cars: e.value})}>
                        <Column rowReorder={true} style={{width: '3em'}} />
                        <Column columnKey="vin" field="vin" header="Vin"/>
                        <Column columnKey="year" field="year" header="Year" />
                        <Column columnKey="brand" field="brand" header="Brand" />
                        <Column columnKey="color" field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableColReorderDemoDoc />
            </div>
        );
    }
}

export class DataTableColReorderDemoDoc extends Component {

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

export class DataTableReorderDemo extends Component {

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
                <DataTable value={this.state.cars} reorderableColumns={true} onRowReorder={(e) => this.setState({cars: e.value})}>
                    <Column rowReorder={true} style={{width: '3em'}} />
                    <Column columnKey="vin" field="vin" header="Vin"/>
                    <Column columnKey="year" field="year" header="Year" />
                    <Column columnKey="brand" field="brand" header="Brand" />
                    <Column columnKey="color" field="color" header="Color" />
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

const DataTableReorderDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={cars} reorderableColumns={true} onRowReorder={(e) => setCars(e.value)}>
                <Column rowReorder={true} style={{width: '3em'}} />
                <Column columnKey="vin" field="vin" header="Vin"/>
                <Column columnKey="year" field="year" header="Year" />
                <Column columnKey="brand" field="brand" header="Brand" />
                <Column columnKey="color" field="color" header="Color" />
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

const DataTableReorderDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={cars} reorderableColumns={true} onRowReorder={(e) => setCars(e.value)}>
                <Column rowReorder={true} style={{width: '3em'}} />
                <Column columnKey="vin" field="vin" header="Vin"/>
                <Column columnKey="year" field="year" header="Year" />
                <Column columnKey="brand" field="brand" header="Brand" />
                <Column columnKey="color" field="color" header="Color" />
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
                                    <LiveEditor name="DataTableReorderDemo" sources={[key, value]} service="CarService" data="cars-small" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
