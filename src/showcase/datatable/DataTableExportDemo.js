import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {Button} from '../../components/button/Button';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

export class DataTableExportDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.export = this.export.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    export() {
        this.dt.exportCSV();
    }

    render() {
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="fa-file-o" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataTable - Export</h1>
                        <p>DataTable can export its data to CSV format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header} ref={(el) => { this.dt = el; }}>
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