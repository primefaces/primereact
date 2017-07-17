import React, { Component } from 'react';
import {Link} from 'react-router';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({cars: this.carservice.getCarsLarge(this)});
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataTable - Paginator</h1>
                        <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={10}>
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