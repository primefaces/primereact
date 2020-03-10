import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableColTogglerDemo extends Component {

    constructor() {
        super();
        this.state = {
            columns: [
                {field: 'vin', header: 'Vin'},
                {field: 'year', header: 'Year'},
                {field: 'brand', header: 'Brand'},
                {field: 'color', header: 'Color'}
            ],
            selectedColumns: []
        }
        this.carservice = new CarService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
        this.setState({selectedColumns: this.state.columns});
    }

    onColumnToggle(event) {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.state.columns.filter(col => selectedColumns.includes(col));
        this.setState({selectedColumns: orderedSelectedColumns});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.selectedColumns} options={this.state.columns} optionLabel="field" onChange={this.onColumnToggle} style={{width:'250px'}}/>
            </div>
        );

        const columnComponents = this.state.selectedColumns.map(col=> {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header}>
                        {columnComponents}
                    </DataTable>
                </div>

                <DataTableColTogglerDemoDoc></DataTableColTogglerDemoDoc>
            </div>
        );
    }
}

export class DataTableColTogglerDemoDoc extends Component {

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
import {MultiSelect} from 'primereact/multiselect';

export class DataTableColTogglerDemo extends Component {

    constructor() {
        super();
        this.state = {
            columns: [
                {field: 'vin', header: 'Vin'},
                {field: 'year', header: 'Year'},
                {field: 'brand', header: 'Brand'},
                {field: 'color', header: 'Color'}
            ],
            selectedColumns: []
        }
        this.carservice = new CarService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
        this.setState({selectedColumns: this.state.columns});
    }

    onColumnToggle(event) {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.state.columns.filter(col => selectedColumns.includes(col));
        this.setState({selectedColumns: orderedSelectedColumns});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.selectedColumns} options={this.state.columns} optionLabel="field" onChange={this.onColumnToggle} style={{width:'250px'}}/>
            </div>
        );

        const columnComponents = this.state.selectedColumns.map(col=> {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header}>
                        {columnComponents}
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
