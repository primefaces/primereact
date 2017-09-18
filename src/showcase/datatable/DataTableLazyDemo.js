import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataTableLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.onLazyLoad = this.onLazyLoad.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => {
            this.datasource = data;
            this.setState({totalRecords: data.length});
        });
    }
    

    onLazyLoad(event) {
        /* In a real application, make a remote request to load data using state metadata from event
         * event.first = First row offset
         * event.rows = Number of rows per page
         * event.sortField = Field name to sort with
         * event.sortOrder = Sort order as number, 1 for asc and -1 for dec
         * filters: FilterMetadata object having field as key and filter value, filter matchMode as value */
        
        //imitate db connection over a network
        setTimeout(() => {
            if(this.datasource) {
                this.setState({cars: this.datasource.slice(event.first, (event.first + event.rows))});
            }
        }, 250);
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates 
                            lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming 
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist..</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={10} totalRecords={this.state.totalRecords}
                        lazy={true} onLazyLoad={this.onLazyLoad}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableLazyDemoDoc></DataTableLazyDemoDoc>
            </div>
        );
    }
}

export class DataTableLazyDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {CarService} from '../service/CarService';

export class DataTableLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.onLazyLoad = this.onLazyLoad.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => {
            this.datasource = data;
            this.setState({totalRecords: data.length});
        });
    }
    

    onLazyLoad(event) {
        /* In a real application, make a remote request to load data using state metadata from event
         * event.first = First row offset
         * event.rows = Number of rows per page
         * event.sortField = Field name to sort with
         * event.sortOrder = Sort order as number, 1 for asc and -1 for dec
         * filters: FilterMetadata object having field as key and filter value, filter matchMode as value */
        
        //imitate db connection over a network
        setTimeout(() => {
            if(this.datasource) {
                this.setState({cars: this.datasource.slice(event.first, (event.first + event.rows))});
            }
        }, 250);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates 
                            lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming 
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist..</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={10} totalRecords={this.state.totalRecords}
                        lazy={true} onLazyLoad={this.onLazyLoad}>
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
