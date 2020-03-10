import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {Button} from '../../components/button/Button';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

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
        let header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Export</h1>
                        <p>DataTable can export its data to CSV format.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
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

                <DataTableExportDemoDoc></DataTableExportDemoDoc>
            </div>
        );
    }
}

export class DataTableExportDemoDoc extends Component {

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
import {Button} from 'primereact/button';
import {CarService} from '../service/CarService';

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
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

        return (
            <div>
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

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
