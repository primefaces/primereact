import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableColTogglerDemo extends Component {

    constructor() {
        super();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.state = {
            selectedColumns: this.columns,
            cars: []
        }

        this.carservice = new CarService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    onColumnToggle(event) {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        this.setState({selectedColumns: orderedSelectedColumns});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.selectedColumns} options={this.columns} optionLabel="field" onChange={this.onColumnToggle} style={{width:'250px'}}/>
            </div>
        );

        const columnComponents = this.state.selectedColumns.map(col=> {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header}>
                        {columnComponents}
                    </DataTable>
                </div>

                <DataTableColTogglerDemoDoc></DataTableColTogglerDemoDoc>
            </div>
        );
    }
}

export class DataTableColTogglerDemoDoc extends Component {

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
import {MultiSelect} from 'primereact/multiselect';

export class DataTableColTogglerDemo extends Component {

    constructor() {
        super();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.state = {
            selectedColumns: this.columns,
            cars: []
        }

        this.carservice = new CarService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    onColumnToggle(event) {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        this.setState({selectedColumns: orderedSelectedColumns});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.selectedColumns} options={this.columns} optionLabel="field" onChange={this.onColumnToggle} style={{width:'250px'}}/>
            </div>
        );

        const columnComponents = this.state.selectedColumns.map(col=> {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <DataTable value={this.state.cars} header={header}>
                    {columnComponents}
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
import {MultiSelect} from 'primereact/multiselect';

const DataTableColTogglerDemo = () => {
    const columns = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];
    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let _selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => _selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    };

    const header = (
        <div style={{textAlign:'left'}}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="field" onChange={onColumnToggle} style={{width:'250px'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <DataTable value={cars} header={header}>
                {columnComponents}
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
import {MultiSelect} from 'primereact/multiselect';

const DataTableColTogglerDemo = () => {
    const columns = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];
    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event: any) => {
        let _selectedColumns: any = event.value;
        let orderedSelectedColumns = columns.filter(col => _selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    };

    const header = (
        <div style={{textAlign:'left'}}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="field" onChange={onColumnToggle} style={{width:'250px'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <DataTable value={cars} header={header}>
                {columnComponents}
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
                                    <LiveEditor name="DataTableColTogglerDemo" sources={[key, value]} service="CarService" data="cars-small" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
