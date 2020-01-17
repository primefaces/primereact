import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableSelectionDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
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
                        <h1>DataTable - Selection</h1>
                        <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property and onRowSelect-onRowUnselect
                            events are provided as optional callbacks. In addition built-in radio button and checkbox based selections are available as alternatives.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                    <DataTable value={this.state.cars} selectionMode="single" header="Single Selection" footer={this.displaySelection(this.state.selectedCar1)}
                        selection={this.state.selectedCar1} onSelectionChange={e => this.setState({selectedCar1: e.value})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Multiple</h3>
                    <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                        Setting metaKeySelection property as false enables multiple selection without meta key.
                    </p>
                    <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection with MetaKey" footer={this.displaySelection(this.state.selectedCars1)}
                        selection={this.state.selectedCars1} onSelectionChange={e => this.setState({selectedCars1: e.value})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection without MetaKey" footer={this.displaySelection(this.state.selectedCars2)}
                        selection={this.state.selectedCars2} onSelectionChange={e => this.setState({selectedCars2: e.value})} style={{marginTop: '2em'}} metaKeySelection={false}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>RadioButton</h3>
                    <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                    <DataTable value={this.state.cars} header="Single Selection" footer={this.displaySelection(this.state.selectedCar2)}
                        selection={this.state.selectedCar2} onSelectionChange={e => this.setState({selectedCar2: e.value})}>
                        <Column selectionMode="single" style={{width:'3em'}}/>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Checkbox</h3>
                    <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".</p>
                    <DataTable value={this.state.cars} header="Single Selection" footer={this.displaySelection(this.state.selectedCars3)}
                        selection={this.state.selectedCars3} onSelectionChange={e => this.setState({selectedCars3: e.value})}>
                        <Column selectionMode="multiple" style={{width:'3em'}}/>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableSelectionDemoDoc></DataTableSelectionDemoDoc>
            </div>
        );
    }
}

export class DataTableSelectionDemoDoc extends Component {

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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableSelectionDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property and onRowSelect-onRowUnselect
                            events are provided as optional callbacks. In addition built-in radio button and checkbox based selections are available as alternatives.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                    <DataTable value={this.state.cars} selectionMode="single" header="Single Selection" footer={this.displaySelection(this.state.selectedCar1)}
                        selection={this.state.selectedCar1} onSelectionChange={e => this.setState({selectedCar1: e.value})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Multiple</h3>
                    <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                        Setting metaKeySelection property as false enables multiple selection without meta key.
                    </p>
                    <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection with MetaKey" footer={this.displaySelection(this.state.selectedCars1)}
                        selection={this.state.selectedCars1} onSelectionChange={e => this.setState({selectedCars1: e.value})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection without MetaKey" footer={this.displaySelection(this.state.selectedCars2)}
                        selection={this.state.selectedCars2} onSelectionChange={e => this.setState({selectedCars2: e.value})} style={{marginTop: '2em'}} metaKeySelection={false}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>RadioButton</h3>
                    <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                    <DataTable value={this.state.cars} header="Single Selection" footer={this.displaySelection(this.state.selectedCar2)}
                        selection={this.state.selectedCar2} onSelectionChange={e => this.setState({selectedCar2: e.value})}>
                        <Column selectionMode="single" style={{width:'2em'}}/>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Checkbox</h3>
                    <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".</p>
                    <DataTable value={this.state.cars} header="Single Selection" footer={this.displaySelection(this.state.selectedCars3)}
                        selection={this.state.selectedCars3} onSelectionChange={e => this.setState({selectedCars3: e.value})}>
                        <Column selectionMode="multiple" style={{width:'2em'}}/>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
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
