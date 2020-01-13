import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataTableRowGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            car: null,
            expandedRows: null
        };

        this.carservice = new CarService();
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsMedium().then(data => this.setState({cars: data}));
    }

    headerTemplate(data) {
        return data.brand;
    }

    footerTemplate(data, index) {
        return (
            <React.Fragment>
                <td key={data.brand + '_footerTotalLabel'} colSpan="3" style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    }

    calculateGroupTotal(brand) {
        let total = 0;

        if(this.state.cars) {
            for(let car of this.state.cars) {
                if(car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Row Grouping</h1>
                        <p>Rows can either be grouped by a separate grouping row or using rowspan.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable header="Toggleable Row Groups" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}
                        expandableRowGroups={true} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="color" header="Color" />
                        <Column field="price" header="Price" />
                    </DataTable>

                    <DataTable header="SubHeader" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate} style={{marginTop:'30px'}}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="color" header="Color" />
                        <Column field="price" header="Price" />
                    </DataTable>

                    <DataTable header="RowSpan" value={this.state.cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                        style={{marginTop:'30px'}}>
                        <Column field="brand" header="Brand" />
                        <Column field="year" header="Year" />
                        <Column field="color" header="Color" />
                        <Column field="vin" header="Vin" />
                    </DataTable>
                </div>

                <DataTableColGroupDemoDoc></DataTableColGroupDemoDoc>
            </div>
        );
    }
}

export class DataTableColGroupDemoDoc extends Component {

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
import {DataTable} from 'components/components/datatable/DataTable';
import {Column} from 'components/components/column/Column';
import {CarService} from '../service/CarService';

export class DataTableRowGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            car: null,
            expandedRows: null
        };

        this.carservice = new CarService()
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsMedium().then(data => this.setState({cars: data}));
    }

    headerTemplate(data) {
        return data.brand;
    }

    footerTemplate(data, index) {
        return (
            <React.Fragment>
                <td key={data.brand + '_footerTotalLabel'} colSpan="3" style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    }

    calculateGroupTotal(brand) {
        let total = 0;

        if(this.state.cars) {
            for(let car of this.state.cars) {
                if(car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Row Grouping</h1>
                        <p>Rows can either be grouped by a separate grouping row or using rowspan. Additional optional features are toggleable groups and footer rows.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable header="Toggleable Row Groups" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}
                        expandableRowGroups={true} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="color" header="Color" />
                        <Column field="price" header="Price" />
                    </DataTable>

                    <DataTable header="SubHeader" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate} style={{marginTop:'30px'}}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="color" header="Color" />
                        <Column field="price" header="Price" />
                    </DataTable>

                    <DataTable header="RowSpan" value={this.state.cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                        style={{marginTop:'30px'}}>
                        <Column field="brand" header="Brand" />
                        <Column field="year" header="Year" />
                        <Column field="color" header="Color" />
                        <Column field="vin" header="Vin" />
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
