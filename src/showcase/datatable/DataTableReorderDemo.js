import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableReorderDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Reorder</h1>
                        <p>Order of the columns and rows can be changed using drag and drop.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} reorderableColumns={true} onRowReorder={(e) => this.setState({cars: e.value})}>
                        <Column rowReorder={true} style={{width: '3em'}} />
                        <Column columnKey="vin" field="vin" header="Vin"/>
                        <Column columnKey="year" field="year" header="Year" />
                        <Column columnKey="brand" field="brand" header="Brand" />
                        <Column columnKey="color" field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableColReorderDemoDoc />
            </div>
        );
    }
}

export class DataTableColReorderDemoDoc extends Component {

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

export class DataTableColReorderDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Reorder</h1>
                        <p>Columns can be reordered using drag drop by setting the reorderableColumns to true. onColReorder is a callback that is invoked when a column is reordered.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} reorderableColumns={true}
                        reorderableRows={true} onRowReorder={(e) => this.setState({cars: e.value})}>
                        <Column rowReorder={true} style={{width: '3em'}} />
                        <Column columnKey="vin" field="vin" header="Vin"/>
                        <Column columnKey="year" field="year" header="Year" />
                        <Column columnKey="brand" field="brand" header="Brand" />
                        <Column columnKey="color" field="color" header="Color" />
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
