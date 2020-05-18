import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableRowGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            car: [],
            expandedRows: []
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
                <td key={data.brand + '_footerTotalLabel'} colSpan={3} style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    }

    calculateGroupTotal(brand) {
        let total = 0;

        if (this.state.cars) {
            for (let car of this.state.cars) {
                if (car.brand === brand) {
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

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableRowGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            car: [],
            expandedRows: []
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
                <td key={data.brand + '_footerTotalLabel'} colSpan={3} style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    }

    calculateGroupTotal(brand) {
        let total = 0;

        if (this.state.cars) {
            for (let car of this.state.cars) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    }

    render() {
        return (
            <div>
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
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableRowGroupDemo = () => {
    const [car, setCar] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return data.brand;
    };

    const footerTemplate = (data, index) => {
        return (
            <React.Fragment>
                <td key={data.brand + '_footerTotalLabel'} colSpan={3} style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    };

    const calculateGroupTotal = (brand) => {
        let total = 0;

        if (cars) {
            for (let car of cars) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    };

    return (
        <div>
            <DataTable header="Toggleable Row Groups" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}
                expandableRowGroups={true} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="SubHeader" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} style={{marginTop:'30px'}}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="RowSpan" value={cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                style={{marginTop:'30px'}}>
                <Column field="brand" header="Brand" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="vin" header="Vin" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableRowGroupDemo = () => {
    const [cars, setCars] = useState<any>([]);
    const [expandedRows, setExpandedRows] = useState<any>([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsMedium().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data: any) => {
        return data.brand;
    };

    const footerTemplate = (data: any, index: number) => {
        return (
            <React.Fragment>
                <td key={data.brand + '_footerTotalLabel'} colSpan={3} style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    };

    const calculateGroupTotal = (brand: string) => {
        let total = 0;

        if (cars) {
            for (let car of cars) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    };

    return (
        <div>
            <DataTable header="Toggleable Row Groups" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}
                expandableRowGroups={true} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="SubHeader" value={cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} style={{marginTop:'30px'}}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="price" header="Price" />
            </DataTable>

            <DataTable header="RowSpan" value={cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                style={{marginTop:'30px'}}>
                <Column field="brand" header="Brand" />
                <Column field="year" header="Year" />
                <Column field="color" header="Color" />
                <Column field="vin" header="Vin" />
            </DataTable>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datatable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DataTableRowGroupDemo" sources={this.sources} service="CarService" data="cars-medium" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
