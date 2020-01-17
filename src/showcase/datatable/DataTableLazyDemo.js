import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            loading: true,
            first: 0,
            rows: 10,
            totalRecords: 0
        };
        this.carservice = new CarService();
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.state.rows),
                    loading: false
                });
            });
        }, 1000);
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.state.rows;

            this.setState({
                first: startIndex,
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                            lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={this.state.rows} totalRecords={this.state.totalRecords}
                        lazy={true} first={this.state.first} onPage={this.onPage} loading={this.state.loading}>
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

export class DataTableLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            loading: true,
            first: 0,
            rows: 10,
            totalRecords: 0
        };
        this.carservice = new CarService();
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.state.rows),
                    loading: false
                });
            });
        }, 1000);
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.state.rows;

            this.setState({
                first: startIndex,
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 250);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                            lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={this.state.rows} totalRecords={this.state.totalRecords}
                        lazy={true} first={this.state.first} onPage={this.onPage} loading={this.state.loading}>
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
