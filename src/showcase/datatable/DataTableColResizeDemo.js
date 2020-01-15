import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableColResizeDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars1: data}));
        this.carservice.getCarsMedium().then(data => this.setState({cars2: data}));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Resize</h1>
                        <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                            In "expand" mode, table width also changes along with the column width. onColumnResize is a callback that passes the resized column header as a parameter.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Fit Mode</h3>
                    <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="fit">
                        <Column field="vin" header="Vin" style={{width:'20%'}}/>
                        <Column field="year" header="Year" style={{width:'40%'}}/>
                        <Column field="brand" header="Brand" style={{width:'20%'}}/>
                        <Column field="color" header="Color" style={{width:'20%'}}/>
                    </DataTable>

                    <h3>Expand Mode</h3>
                    <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="expand">
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Scrollable Mode</h3>
                    <DataTable value={this.state.cars2} resizableColumns={true} scrollable={true} scrollHeight="200px">
                        <Column field="vin" header="Vin" style={{width:'20%'}}/>
                        <Column field="year" header="Year" style={{width:'40%'}}/>
                        <Column field="brand" header="Brand" style={{width:'20%'}}/>
                        <Column field="color" header="Color" style={{width:'20%'}}/>
                    </DataTable>
                </div>

                <DataTableColResizeDemoDoc></DataTableColResizeDemoDoc>
            </div>
        );
    }
}

export class DataTableColResizeDemoDoc extends Component {

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

export class DataTableColResizeDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars1: data}));
        this.carservice.getCarsMedium().then(data => this.setState({cars2: data}));
    }

    render() {
        return (
            <div>
                <h3>Fit Mode</h3>
                <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="fit">
                    <Column field="vin" header="Vin" style={{width:'20%'}}/>
                    <Column field="year" header="Year" style={{width:'40%'}}/>
                    <Column field="brand" header="Brand" style={{width:'20%'}}/>
                    <Column field="color" header="Color" style={{width:'20%'}}/>
                </DataTable>

                <h3>Expand Mode</h3>
                <DataTable value={this.state.cars1} resizableColumns={true} columnResizeMode="expand">
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>

                <h3>Scrollable Mode</h3>
                <DataTable value={this.state.cars2} resizableColumns={true} scrollable={true} scrollHeight="200px">
                    <Column field="vin" header="Vin" style={{width:'20%'}}/>
                    <Column field="year" header="Year" style={{width:'40%'}}/>
                    <Column field="brand" header="Brand" style={{width:'20%'}}/>
                    <Column field="color" header="Color" style={{width:'20%'}}/>
                </DataTable>
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
