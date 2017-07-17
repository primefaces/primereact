import React, { Component } from 'react';
import {Link} from 'react-router';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

export class DataTableFacetsDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({cars: this.carservice.getCarsSmall(this)});
    }

    render() {
        var carCount = this.state.cars ? this.state.cars.length: 0;
        var header = <div className="ui-helper-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="fa-refresh" style={{'float':'right'}}/></div>;
        var footer = "There are " + carCount + ' cars';

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataTable - Facets</h1>
                        <p>DataTable provides header and footer sections.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header} footer={footer}>
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