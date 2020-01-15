import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableStateDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsMedium().then(data => this.setState({cars1: data, cars2: data}));
    }

    displaySelection(data) {
        if(!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if(data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
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
                        selection={this.state.selectedCars2} onSelectionChange={e => this.setState({selectedCars2: e.value})} paginator={true} rows={10} stateKey="tablestatedemo-local">
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
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableStateDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsMedium().then(data => this.setState({cars1: data, cars2: data}));
    }

    displaySelection(data) {
        if(!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if(data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
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
                        selection={this.state.selectedCars2} onSelectionChange={e => this.setState({selectedCars2: e.value})} paginator={true} rows={10} stateKey="tablestatedemo-local">
                        <Column field="vin" header="Vin" sortable={true} filter={true}/>
                        <Column field="year" header="Year" sortable={true} filter={true}/>
                        <Column field="brand" header="Brand" sortable={true} filter={true}/>
                        <Column field="color" header="Color" sortable={true} filter={true}/>
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
