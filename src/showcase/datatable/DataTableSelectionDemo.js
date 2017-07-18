import React, { Component } from 'react';
import {Link} from 'react-router';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

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

                <div className="content-section">
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
                        selection={this.state.selectedCar1} onSelectionChange={(e) => this.setState({selectedCar1: e.data})}>
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
                        selection={this.state.selectedCars1} onSelectionChange={(e) => this.setState({selectedCars1: e.data})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection without MetaKey" footer={this.displaySelection(this.state.selectedCars2)}
                        selection={this.state.selectedCars2} onSelectionChange={(e) => this.setState({selectedCars2: e.data})} style={{marginTop: '2em'}} metaKeySelection={false}>
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