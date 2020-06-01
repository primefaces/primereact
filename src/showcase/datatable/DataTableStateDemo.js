import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableStateDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: [],
            cars3: [],
            selectedCars1: null,
            selectedCars2: null,
            selectedCars3: null
        };
        this.carservice = new CarService();

        this.onCustomSaveState = this.onCustomSaveState.bind(this);
        this.onCustomRestoreState = this.onCustomRestoreState.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsMedium().then(data => this.setState({cars1: data, cars2: data, cars3: data}));
    }

    displaySelection(data) {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    onCustomSaveState(state) {
        window.sessionStorage.setItem('tablestatedemo-custom', JSON.stringify(state));
    }

    onCustomRestoreState() {
        return JSON.parse(window.sessionStorage.getItem('tablestatedemo-custom'));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - State</h1>
                        <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again,
                            table would render the data using its last settings.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Session Storage</h3>
                    <DataTable value={this.state.cars1} selectionMode="multiple" resizableColumns={true} footer={this.displaySelection(this.state.selectedCars1)}
                        selection={this.state.selectedCars1} onSelectionChange={e => this.setState({selectedCars1: e.value})} paginator={true} rows={10} stateKey="tablestatedemo-session">
                        <Column field="vin" header="Vin" sortable={true} filter={true}/>
                        <Column field="year" header="Year" sortable={true} filter={true}/>
                        <Column field="brand" header="Brand" sortable={true} filter={true}/>
                        <Column field="color" header="Color" sortable={true} filter={true}/>
                    </DataTable>

                    <h3>Local Storage</h3>
                    <DataTable value={this.state.cars2} selectionMode="multiple" resizableColumns={true} footer={this.displaySelection(this.state.selectedCars2)}
                        selection={this.state.selectedCars2} onSelectionChange={e => this.setState({selectedCars2: e.value})} paginator={true} rows={10}
                        stateStorage="local" stateKey="tablestatedemo-local">
                        <Column field="vin" header="Vin" sortable={true} filter={true}/>
                        <Column field="year" header="Year" sortable={true} filter={true}/>
                        <Column field="brand" header="Brand" sortable={true} filter={true}/>
                        <Column field="color" header="Color" sortable={true} filter={true}/>
                    </DataTable>

                    <h3>Custom Storage</h3>
                    <DataTable value={this.state.cars3} selectionMode="multiple" resizableColumns={true} footer={this.displaySelection(this.state.selectedCars3)}
                        selection={this.state.selectedCars3} onSelectionChange={e => this.setState({selectedCars3: e.value})} paginator={true} rows={10}
                        stateStorage="custom" customSaveState={this.onCustomSaveState} customRestoreState={this.onCustomRestoreState}>
                        <Column field="vin" header="Vin" sortable={true} filter={true}/>
                        <Column field="year" header="Year" sortable={true} filter={true}/>
                        <Column field="brand" header="Brand" sortable={true} filter={true}/>
                        <Column field="color" header="Color" sortable={true} filter={true}/>
                    </DataTable>

                </div>

                <DataTableStateDemoDoc></DataTableStateDemoDoc>
            </div>
        );
    }
}

export class DataTableStateDemoDoc extends Component {

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

export class DataTableStateDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: [],
            selectedCars1: null,
            selectedCars2: null
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsMedium().then(data => this.setState({cars1: data, cars2: data}));
    }

    displaySelection(data) {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    render() {
        return (
            <div>
                <h3>Session Storage</h3>
                <DataTable value={this.state.cars1} selectionMode="multiple" resizableColumns={true} footer={this.displaySelection(this.state.selectedCars1)}
                    selection={this.state.selectedCars1} onSelectionChange={e => this.setState({selectedCars1: e.value})} paginator={true} rows={10} stateKey="tablestatedemo-session">
                    <Column field="vin" header="Vin" sortable={true} filter={true}/>
                    <Column field="year" header="Year" sortable={true} filter={true}/>
                    <Column field="brand" header="Brand" sortable={true} filter={true}/>
                    <Column field="color" header="Color" sortable={true} filter={true}/>
                </DataTable>

                <h3>Local Storage</h3>
                <DataTable value={this.state.cars2} selectionMode="multiple" resizableColumns={true} footer={this.displaySelection(this.state.selectedCars2)}
                    selection={this.state.selectedCars2} onSelectionChange={e => this.setState({selectedCars2: e.value})} paginator={true} rows={10}
                    stateStorage="local" stateKey="tablestatedemo-local">
                    <Column field="vin" header="Vin" sortable={true} filter={true}/>
                    <Column field="year" header="Year" sortable={true} filter={true}/>
                    <Column field="brand" header="Brand" sortable={true} filter={true}/>
                    <Column field="color" header="Color" sortable={true} filter={true}/>
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

const DataTableStateDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);
    const [selectedCars1, setSelectedCars1] = useState(null);
    const [selectedCars2, setSelectedCars2] = useState(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const displaySelection = (data) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    return (
        <div>
            <h3>Session Storage</h3>
            <DataTable value={cars1} selectionMode="multiple" resizableColumns={true} footer={displaySelection(selectedCars1)}
                selection={selectedCars1} onSelectionChange={e => setSelectedCars1(e.value)} paginator={true} rows={10} stateKey="tablestatedemo-session">
                <Column field="vin" header="Vin" sortable={true} filter={true}/>
                <Column field="year" header="Year" sortable={true} filter={true}/>
                <Column field="brand" header="Brand" sortable={true} filter={true}/>
                <Column field="color" header="Color" sortable={true} filter={true}/>
            </DataTable>

            <h3>Local Storage</h3>
            <DataTable value={cars2} selectionMode="multiple" resizableColumns={true} footer={displaySelection(selectedCars2)}
                selection={selectedCars2} onSelectionChange={e => setSelectedCars2(e.value)} paginator={true} rows={10}
                stateStorage="local" stateKey="tablestatedemo-local">
                <Column field="vin" header="Vin" sortable={true} filter={true}/>
                <Column field="year" header="Year" sortable={true} filter={true}/>
                <Column field="brand" header="Brand" sortable={true} filter={true}/>
                <Column field="color" header="Color" sortable={true} filter={true}/>
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

const DataTableStateDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);
    const [selectedCars1, setSelectedCars1] = useState(null);
    const [selectedCars2, setSelectedCars2] = useState(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const displaySelection = (data: any) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    return (
        <div>
            <h3>Session Storage</h3>
            <DataTable value={cars1} selectionMode="multiple" resizableColumns={true} footer={displaySelection(selectedCars1)}
                selection={selectedCars1} onSelectionChange={e => setSelectedCars1(e.value)} paginator={true} rows={10} stateKey="tablestatedemo-session">
                <Column field="vin" header="Vin" sortable={true} filter={true}/>
                <Column field="year" header="Year" sortable={true} filter={true}/>
                <Column field="brand" header="Brand" sortable={true} filter={true}/>
                <Column field="color" header="Color" sortable={true} filter={true}/>
            </DataTable>

            <h3>Local Storage</h3>
            <DataTable value={cars2} selectionMode="multiple" resizableColumns={true} footer={displaySelection(selectedCars2)}
                selection={selectedCars2} onSelectionChange={e => setSelectedCars2(e.value)} paginator={true} rows={10}
                stateStorage="local" stateKey="tablestatedemo-local">
                <Column field="vin" header="Vin" sortable={true} filter={true}/>
                <Column field="year" header="Year" sortable={true} filter={true}/>
                <Column field="brand" header="Brand" sortable={true} filter={true}/>
                <Column field="color" header="Color" sortable={true} filter={true}/>
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
                <LiveEditor name="DataTableStateDemo" sources={this.sources} service="CarService" data="cars-medium" activeButtonIndex={this.state.activeIndex} />
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
