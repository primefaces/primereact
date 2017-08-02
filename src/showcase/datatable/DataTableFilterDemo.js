import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataTable - Filter</h1>
                        <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode 
                            property of column object that also accepts "contains", "endsWith", "equals" and "in". An optional global filter feature is available to search all fields with a keyword. 
                            By default input fields are generated as filter elements and using templating any component can be used as a filter..</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={10}>
                        <Column field="vin" header="Vin" filter={true} />
                        <Column field="year" header="Year" filter={true} />
                        <Column field="brand" header="Brand" filter={true} />
                        <Column field="color" header="Color" filter={true} />
                    </DataTable>
                </div>
            </div>
        );
    }
}