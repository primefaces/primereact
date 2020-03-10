import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {CustomerService} from '../service/CustomerService';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {Calendar} from '../../components/calendar/Calendar';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {ProgressBar} from '../../components/progressbar/ProgressBar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import classNames from 'classnames';
import "./DataTableDemo.scss"

export class DataTableDemo extends Component {

    constructor() {
        super();
        this.state = {
            customers: null,
            selectedCustomers: null,
            globalFilter: null,
            selectedRepresentatives: null,
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            dateFilter: null,
            selectedStatus: null,
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ]
        };

        this.customerService = new CustomerService();

        //body cells
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        //filters
        this.representativeItemTemplate = this.representativeItemTemplate.bind(this);
        this.onRepresentativeFilterChange = this.onRepresentativeFilterChange.bind(this);
        this.onDateFilterChange = this.onDateFilterChange.bind(this);
        this.filterDate = this.filterDate.bind(this);       //custom filter function
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.onStatusFilterChange = this.onStatusFilterChange.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({customers: data}));
    }

    renderHeader() {
        return (
            <div>
                List of Customers
                <div  className="p-datatable-globalfilter-container">
                    <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate() {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>;
    }

    countryBodyTemplate(rowData) {
        let { name, code } = rowData.country;

        return (
            <>
                <img src="showcase/resources/demo/images/flag_placeholder.png" alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
            </>
        );
    }

    representativeBodyTemplate(rowData) {
        const src = "showcase/resources/demo/images/avatar/" + rowData.representative.image;

        return (
            <>
                <img alt={rowData.representative.name} src={src} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
            </>
        );
    }

    renderRepresentativeFilter() {
        return (
            <MultiSelect className="p-column-filter" value={this.state.selectedRepresentatives} options={this.state.representatives}
                onChange={this.onRepresentativeFilterChange} itemTemplate={this.representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    representativeItemTemplate(option) {
        const src = "showcase/resources/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    onRepresentativeFilterChange(event) {
        this.dt.filter(event.value, 'representative.name', 'in');
        this.setState({selectedRepresentatives: event.value});
    }

    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({dateFilter: event.value});
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    renderStatusFilter() {
        return (
            <Dropdown value={this.state.selectedStatus} options={this.state.statuses} onChange={this.onStatusFilterChange}
                        itemTemplate={this.statusItemTemplate} showClear={true} placeholder="Select a Status" className="p-column-filter"/>
        );
    }

    statusItemTemplate(option) {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    onStatusFilterChange(event) {
        this.dt.filter(event.value, 'status', 'equals');
        this.setState({selectedStatus: event.value});
    }

    render() {
        const header = this.renderHeader();
        const representativeFilter = this.renderRepresentativeFilter();
        const dateFilter = this.renderDateFilter();
        const statusFilter = this.renderStatusFilter();

        return (
            <div className="datatable-doc-demo">
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.customers}
                        header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                        selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({selectedCustomers: e.value})}
                        paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                        <Column selectionMode="multiple" style={{width:'3em'}}/>
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                        <Column sortField="country.name" filterField="country.name" header="Country" body={this.countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
                        <Column sortField="representative.name" filterField="representative.name" header="Representative" body={this.representativeBodyTemplate} sortable filter filterElement={representativeFilter} />
                        <Column field="date" header="Date" sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterElement={statusFilter} />
                        <Column field="activity" header="Activity" body={this.activityBodyTemplate} sortable filter filterMatchMode="gte" filterPlaceholder="Minimum" />
                        <Column body={this.actionTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
                    </DataTable>
                </div>

                <DataTableDoc></DataTableDoc>
            </div>
        );
    }
}

export class DataTableDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {DataTable} from 'primereact/datatable';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a car interface having vin, brand, year and color properties is used to define an object to be displayed by the datatable. Cars are loaded by a CarService that connects to a server to fetch the cars with a axios.
                Note that this is only for demo purposes, DataTable does not have any restrictions on how data is provided.
            </p>

<CodeHighlight className="language-javascript">
{`
import axios from 'axios';

export class CarService {

    getCarsSmall() {
        return axios.get('showcase/resources/demo/data/cars-small.json')
                .then(res => res.data.data);
    }

    getCarsMedium() {
        return axios.get('showcase/resources/demo/data/cars-medium.json')
                .then(res => res.data.data);
    }

    getCarsLarge() {
        return axios.get('showcase/resources/demo/data/cars-large.json')
                .then(res => res.data.data);
    }
}

`}
</CodeHighlight>

            <p>Following sample datatable has 4 columns and retrieves the data from a service on componentDidMount.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTableDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>Dynamic columns are also possible by creating the column component dynamically.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTableDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        let cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        let dynamicColumns = cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <DataTable value={this.state.cars}>
                {dynamicColumns}
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <h3>Column Component</h3>
            <p>Column component defines various options to specify corresponding features.</p>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>columnKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of a column if field property is not defined. Only utilized by reorderableColumns feature at the moment.</td>
                        </tr>
                        <tr>
                            <td>field</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property of a row data.</td>
                        </tr>
                        <tr>
                            <td>sortField</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property of a row data used for sorting, defaults to field.</td>
                        </tr>
                        <tr>
                            <td>filterField</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property of a row data used for filtering, defaults to field.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Header content of the column.</td>
                        </tr>
                        <tr>
                            <td>body</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Body content of the column.</td>
                        </tr>
                        <tr>
                            <td>loadingBody</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Body content of the column to display when virtual scroll loads the new data.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Footer content of the column.</td>
                        </tr>
                        <tr>
                            <td>sortable</td>
                            <td>any</td>
                            <td>false</td>
                            <td>Defines if a column is sortable.</td>
                        </tr>
                        <tr>
                            <td>sortFunction</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Sort function for custom sorting.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if a column can be filtered.</td>
                        </tr>
                        <tr>
                            <td>filterMatchMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
                        </tr>
                        <tr>
                            <td>filterType</td>
                            <td>string</td>
                            <td>text</td>
                            <td>Type of the filter input field.</td>
                        </tr>
                        <tr>
                            <td>filterPlaceholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines placeholder of the input fields.</td>
                        </tr>
                        <tr>
                            <td>filterMaxlength</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Specifies the maximum number of characters allowed in the filter element.</td>
                        </tr>
                        <tr>
                            <td>filterElement</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Element for custom filtering.</td>
                        </tr>
                        <tr>
                            <td>filterFunction</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Custom filter function.</td>
                        </tr>
                        <tr>
                            <td>excludeGlobalFilter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to exclude from global filtering or not.</td>
                        </tr>
                        <tr>
                            <td>filterHeaderStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the filter column header.</td>
                        </tr>
                        <tr>
                            <td>filterHeaderClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the filter header column.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column.</td>
                        </tr>
                        <tr>
                            <td>headerStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column.</td>
                        </tr>
                        <tr>
                            <td>headerClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column.</td>
                        </tr>
                        <tr>
                            <td>bodyStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column.</td>
                        </tr>
                        <tr>
                            <td>bodyClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column.</td>
                        </tr>
                        <tr>
                            <td>footerStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column.</td>
                        </tr>
                        <tr>
                            <td>footerClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column.</td>
                        </tr>
                        <tr>
                            <td>expander</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Displays an icon to toggle row expansion.</td>
                        </tr>
                        <tr>
                            <td>frozen</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the column is fixed in horizontal scrolling or not.</td>
                        </tr>
                        <tr>
                            <td>selectionMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines column based selection mode, options are "single" and "multiple".</td>
                        </tr>
                        <tr>
                            <td>colSpan</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of columns to span for grouping.</td>
                        </tr>
                        <tr>
                            <td>rowSpan</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of rows to span for grouping.</td>
                        </tr>
                        <tr>
                            <td>editor</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function to provide the cell editor input.</td>
                        </tr>
                        <tr>
                            <td>editorValidator</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Validator function to validate the cell input value.</td>
                        </tr>
                        <tr>
                            <td>editorValidatorEvent</td>
                            <td>string</td>
                            <td>click</td>
                            <td>Event to trigger the validation, possible values are "click" and "blur".</td>
                        </tr>
                        <tr>
                            <td>onEditorSubmit</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to execute when editor is submitted.</td>
                        </tr>
                        <tr>
                            <td>onEditorCancel</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to execute when editor is cancelled.</td>
                        </tr>
                        <tr>
                            <td>rowReorder</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether this column displays an icon to reorder the rows.</td>
                        </tr>
                        <tr>
                            <td>rowReorderIcon</td>
                            <td>string</td>
                            <td>pi pi-bars</td>
                            <td>Icon of the drag handle to reorder rows.</td>
                        </tr>
                        <tr>
                            <td>rowEditor</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Displays icons to edit row.</td>
                        </tr>
                        <tr>
                            <td>exportable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines whether the column is exported or not.</td>
                        </tr>
                        <tr>
                            <td>reorderable</td>
                            <td>boolean</td>
                            <td>null</td>
                            <td>Used to defined reorderableColumns per column when reorderableColumns of table is enabled, defaults to value of reorderableColumns.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Table Layout</h3>
            <p>Default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents
                set <i>autoLayout</i> property to true. Note that Scrollable and/or Resizable tables do not support auto layout due to technical limitations.
            </p>

            <h3>Templates</h3>
            <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where current row data and column properties are passed to the body template.
                On the other hand, <i>header</i> and <i>footer</i> properties of a column are used to define the content of these sections by accepting either simple string values or JSX for advanced content. Similarly DataTable itself
                also provides <i>header</i> and <i>footer</i> properties for the main header and footer of the table.</p>

<CodeHighlight className="language-javascript">
{`
export class DataTableTemplatingDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.brandTemplate = this.brandTemplate.bind(this);
        this.colorTemplate = this.colorTemplate.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    colorTemplate(rowData, column) {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    }

    brandTemplate(rowData, column) {
        var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} alt={rowData.brand}/>;
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success"></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        var carCount = this.state.cars ? this.state.cars.length: 0;
        var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        var footer = "There are " + carCount + ' cars';

        return (
            <DataTable value={this.state.cars} header={header} footer={footer}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" body={this.brandTemplate} style={{textAlign:'center'}}/>
                <Column field="color" header="Color" body={this.colorTemplate} />
                <Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <h3>Column Group</h3>
            <p>Columns can be grouped at header and footer sections by defining a ColumnGroup component as the <i>headerColumnGroup</i> and <i>footerColumnGroup</i> properties.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

export class DataTableColGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            sales: [
                {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
                {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
                {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
                {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
                {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
                {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
                {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
                {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
                {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
                {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
            ]
        };
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Brand" rowSpan={3} />
                                <Column header="Sale Rate" colSpan={4} />
                            </Row>
                            <Row>
                                <Column header="Sales" colSpan={2} />
                                <Column header="Profits" colSpan={2} />
                            </Row>
                            <Row>
                                <Column header="Last Year" />
                                <Column header="This Year" />
                                <Column header="Last Year" />
                                <Column header="This Year" />
                            </Row>
                        </ColumnGroup>;

       let footerGroup = <ColumnGroup>
                            <Row>
                                <Column footer="Totals:" colSpan={3} />
                                <Column footer="$506,202" />
                                <Column footer="$531,020" />
                            </Row>
                         </ColumnGroup>;
        return (
            <DataTable value={this.state.sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>When using sorting with column groups, define sort properties like sortable at columns inside column groups not at the direct children of DataTable component.</p>

            <h3>Pagination</h3>
            <p>Pagination is enabled by setting <i>paginator</i> property to true, <i>rows</i> property defines the number of rows per page and optionally <i>pageLinks</i> specify the the number of page links to display.
            See <Link to="/paginator">paginator</Link> component for more information about further customization options such as <i>paginator template</i>.</p>

            <p>Pagination can either be used in <b>Controlled</b> or <b>Uncontrolled</b> manner. In controlled mode, <i>first</i> and <i>onPage</i> properties need to be defined to control the paginator state.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: null
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars} paginator={true} rows={10} first={this.state.first} onPage={(e) => this.setState({first: e.first})}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>In uncontrolled mode, only <i>paginator</i> and <i>rows</i> need to be enabled. Index of the first record can be still be provided using the <i>first</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the paginator state, prefer to use the component as controlled.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: null
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars} paginator={true} rows={10}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>Elements of the paginator can be customized using the <i>paginatorTemplate</i> by the DataTable. Refer to the template section of the <Link to="/paginator"> paginator documentation</Link> for further options.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} paginator={true} rows={10} first={start}
    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Sorting</h3>
            <p>Enabling <i>sortable</i> property at column component would be enough to make a column sortable. The property to use when sorting is <i>field</i> by default and can be customized using <i>sortField</i>.</p>
<CodeHighlight className="language-jsx">
{`
<Column field="vin" header="Vin" sortable={true}/>

`}
</CodeHighlight>

            <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} sortMode="multiple">

`}
</CodeHighlight>


            <p>In case you'd like to display the table as sorted per a single column by default on mount, use <i>sortField</i> and <i>sortOrder</i> properties in <b>Controlled</b> or <b>Uncontrolled</b> manner.
            In controlled mode, <i>sortField</i>, <i>sortOrder</i> and <i>onSort</i> properties need to be defined to control the sorting state.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} sortField={this.state.sortField} sortOrder={this.state.sortOrder} onSort={(e) => this.setState({sortField: e.sortField, sortOrder: e.sortOrder})}>
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable={true}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

            <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects instead.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} multiSortMeta={multiSortMeta} onSort={(e) => this.setState({multiSortMeta: e.multiSortMeta})}>
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable={true}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
let multiSortMeta = [];
multiSortMeta.push({field: 'year', order: 1});
multiSortMeta.push({field: 'brand', order: -1});

`}
</CodeHighlight>

            <p>In uncontrolled mode, no additional properties need to be enabled. Initial sort field can be still be provided using the <i>sortField</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the sorting state, prefer to use the component as controlled.</p>

            <CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} sortField="year" sortOrder={1}>
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable={true}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

            <p>To customize sorting algorithm, define a sortFunction that sorts the list.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} >
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable={true} sortFunction={this.mysort}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
mysort(event) {
    //event.field = Field to sort
    //event.order = Sort order
}

`}
</CodeHighlight>

            <p>Getting access to the sorted data is provided by the <i>onValueChange</i> callback.</p>
            <CodeHighlight className="language-javascript">
{`
<DataTable value={this.state.cars} onValueChange={sortedData => console.log(sortedData)}>
    <Column field="vin" header="Vin" sortable={true} />
    <Column field="year" header="Year" sortable={true} />
    <Column field="brand" header="Brand" sortable={true} />
    <Column field="color" header="Color" sortable={true} />
</DataTable>

`}
</CodeHighlight>

            <h3>Filtering</h3>
            <p>Filtering is enabled by setting the <i>filter</i> property as true on a column. Default match mode is "startsWith" and this can be configured using <i>filterMatchMode</i> property that also accepts                 "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom" as available modes.</p>
 <CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars}>
    <Column field="vin" header="Vin" filter={true} />
    <Column field="year" header="Year" filter={true} filterPlaceholder="Search" />
    <Column field="brand" header="Brand" filter={true} filterMatchMode="contains"/>
    <Column field="color" header="Color" filter={true} filterMatchMode="endsWith"/>
</DataTable>

`}
</CodeHighlight>

            <p>An optional global filter feature is available to search all fields with the same keyword,
                to implement this place an input component whose value is bound to the globalFilter property of the DataTable.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            globalFilter: null
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        let header = (
            <div style={{'textAlign':'left'}}>
                <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
            </div>
        );

        return (
            <DataTable value={this.state.cars} paginator={true} rows={10} header={header} globalFilter={this.state.globalFilter}>
                <Column field="vin" header="Vin" filter={true} />
                <Column field="year" header="Year" filter={true} />
                <Column field="brand" header="Brand" filter={true} />
                <Column field="color" header="Color" filter={true}  />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>By default, input fields are used as filter elements and this can be customized using the <i>filterElement</i> property of the Column that calls the filter function of the table instance by passing the value, field and the match mode.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTableCustomFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            brand: null,
            colors: null
        };
        this.carservice = new CarService();
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, 'brand', 'equals');
        this.setState({brand: event.value});
    }

    onColorChange(event) {
        this.dt.filter(event.value, 'color', 'in');
        this.setState({colors: event.value});
    }

    render() {
        let brands = [
                {label: 'All Brands', value: null},
                {label: 'Audi', value: 'Audi'},
                {label: 'BMW', value: 'BMW'},
                {label: 'Fiat', value: 'Fiat'},
                {label: 'Honda', value: 'Honda'},
                {label: 'Jaguar', value: 'Jaguar'},
                {label: 'Mercedes', value: 'Mercedes'},
                {label: 'Renault', value: 'Renault'},
                {label: 'VW', value: 'VW'},
                {label: 'Volvo', value: 'Volvo'}
            ];

        let brandFilter = <Dropdown style={{width: '100%'}} className="ui-column-filter"
                value={this.state.brand} options={brands} onChange={this.onBrandChange}/>

        let colors = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},
            {label: 'Silver', value: 'Silver'},
            {label: 'Black', value: 'Black'},
            {label: 'Red', value: 'Red'},
            {label: 'Maroon', value: 'Maroon'},
            {label: 'Brown', value: 'Brown'},
            {label: 'Orange', value: 'Orange'},
            {label: 'Blue', value: 'Blue'}
        ];

        let colorFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter"
            value={this.state.colors} options={colors} onChange={this.onColorChange}/>

        return (
            <DataTable ref={(el) => this.dt = el} value={this.state.cars}>
                <Column field="vin" header="Vin" filter={true} />
                <Column field="year" header="Year" filter={true} />
                <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
                <Column field="color" header="Color" filter={true} filterElement={colorFilter} />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>In case you'd like to display the table as filtered by default on mount, use <i>filters</i> property in <b>Controlled</b> or <b>Uncontrolled</b> manner.
            In controlled mode, <i>filters</i> and <i>onFilter</i> properties need to be defined to control the filtering state.</p>

<CodeHighlight className="language-javascript">
{`
export class DataTableDefaultFilteredDemo extends Component {

    constructor() {
        super();
        this.state = {
            filters: {
                'brand': {
                    value: 'BMW'
                }
            }
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars} filters={this.state.filters} onFilter={(e) => this.setState({filters: e.filters})}>
                <Column field="vin" header="Vin" filter={true} />
                <Column field="year" header="Year" filter={true} />
                <Column field="brand" header="Brand" filter={true} />
                <Column field="color" header="Color" filter={true}  />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>In uncontrolled filtering, no additional properties need to be enabled. Initial filtering can be still be provided using the <i>filters</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the filtering state, prefer to use the component as controlled.</p>

            <CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars}>
    <Column field="vin" header="Vin" filter={true} />
    <Column field="year" header="Year" filter={true} />
    <Column field="brand" header="Brand" filter={true} />
    <Column field="color" header="Color" filter={true}  />
</DataTable>

`}
</CodeHighlight>

            <p>Custom filtering is implemented by setting the <i>filterMatchMode</i> property as "custom" and providing a function that takes the data value along with the filter value to return a boolean.</p>
            <CodeHighlight className="language-javascript">
{`
export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.yearFilter = this.yearFilter.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    yearFilter(value, filter) {
        return filter > value;
    }

    render() {
        return (
            <DataTable value={this.state.cars}>
                <Column field="vin" header="Vin" filter={true} />
                <Column field="year" header="Year" filter={true} filterMatchMode="custom" filterFunction={this.yearFilter}/>
                <Column field="brand" header="Brand" filter={true} />
                <Column field="color" header="Color" filter={true}  />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>Getting access to the filtered data is provided by the <i>onValueChange</i> callback.</p>
            <CodeHighlight className="language-javascript">
{`
<DataTable value={this.state.cars} onValueChange={filteredData => console.log(filteredData)}>
    <Column field="vin" header="Vin" filter={true} />
    <Column field="year" header="Year" filter={true} />
    <Column field="brand" header="Brand" filter={true} />
    <Column field="color" header="Color" filter={true}  />
</DataTable>

`}
</CodeHighlight>

            <h3>Selection</h3>
            <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the <i>selection</i> property for reading and updated using <i>onSelectionChange</i> callback.
                Alternatively column based selection can be done using radio buttons or checkboxes using <i>selectionMode</i> of a particular column. In addition <i>onRowSelect</i>-<i>onRowUnselect</i> events are provided as optional callbacks.</p>

            <p>In single mode, selection binding is an object reference.</p>

<CodeHighlight className="language-javascript">
{`
export class DataTableSelectionDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars} selectionMode="single"
                selection={this.state.selectedCar1} onSelectionChange={e => this.setState({selectedCar1: e.value})}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>In multiple mode, selection binding should be an array and multiple items can either be selected using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default.
                On touch enabled devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>

<CodeHighlight className="language-javascript">
{`
export class DataTableSelectionDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars} selectionMode="multiple"
                selection={this.state.selectedCars} onSelectionChange={e => this.setState({selectedCars: e.value})}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>If you prefer a radioButton or a checkbox instead of a row click, use the <i>selectionMode</i> of a column instead.
                 Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
            <p>Tip: Use <i>showSelectionElement</i> function in case you need to hide selection element for a particular row.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} selection={this.state.selectedCars} onSelectionChange={e => this.setState({selectedCars: e.value})}>
    <Column selectionMode="multiple" />
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Cell Editing</h3>
            <p>Incell editing feature provides a way to quickly edit data inside the table. A cell editor is defined using the <i>editor</i> property
            that refers to a function to return an input element for the editing.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars}>
    <Column field="vin" header="Vin" editor={this.vinEditor} />
    <Column field="brand" header="Brand" editor={this.brandEditor}/>
    <Column field="saleDate" header="Sale Date" editor={this.saleDateEditor} >
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
onEditorValueChange(props, value) {
    let updatedCars = [...this.state.cars];
    updatedCars[props.rowIndex][props.field] = value;
    this.setState({cars: updatedCars});
}

vinEditor(props) {
    return <InputText type="text" value={this.state.cars[props.rowIndex]['vin']} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
}

brandEditor(props) {
    let brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    return (
        <Dropdown value={this.state.cars[props.rowIndex].brand} options={brands}
                onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
    );
}

saleDateEditor(props) {
    return (
        <Calendar value={this.state.cars[props.rowIndex].saleDate}
                onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} />
    );
}

`}
</CodeHighlight>

            <p>Clicking outside the cell or hitting enter key closes the cell, however this may not be desirable if the input is invalid. In order
            to decide whether to keep the cell open or not, provide a <i>editorValidator</i> function that validates the value. Optionally <i>onEditorSubmit</i> and <i>onEditorCancel</i>
            events are available at the column component to provide callbacks whenever an editor is submitted or cancelled.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars}>
    <Column field="vin" header="Vin" editor={this.vinEditor} editorValidator={this.requiredValidator} />
    <Column field="brand" header="Brand" editor={this.brandEditor}/>
    <Column field="saleDate" header="Sale Date" editor={this.saleDateEditor} >
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
requiredValidator(props) {
    let value = props.rowData[props.field];
    return value && value.length > 0;
}
`}
</CodeHighlight>

            <h3>Row Editing</h3>
            <p>Row editing toggles the visibility of the all editors in the row at once and provides additional options to save and cancel editing.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} editMode="row">
    <Column field="vin" header="Vin" />
    <Column field="brand" header="Brand" editor={this.brandEditor} onRowEditorValidator={this.onRowEditorValidator}/>
    <Column field="saleDate" header="Sale Date" editor={this.saleDateEditor} >
    <Column rowEditor={true} />
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
onEditorValueChange(props, value) {
    let updatedCars = [...this.state.cars];
    updatedCars[props.rowIndex][props.field] = value;
    this.setState({cars: updatedCars});
}

brandEditor(props) {
    let brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    return (
        <Dropdown value={this.state.cars[props.rowIndex].brand} options={brands}
                onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
    );
}

saleDateEditor(props) {
    return (
        <Calendar value={this.state.cars[props.rowIndex].saleDate}
                onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} />
    );
}

onRowEditorValidator(rowData) {
    let value = rowData['brand'];
    return value.length > 0;
}

onRowEditInit(event) {
    this.clonedCars[event.data.vin] = {...event.data};
}

onRowEditSave(event) {
    if (this.onRowEditorValidator(event.data)) {
        delete this.clonedCars[event.data.vin];
        // Success message
    }
    else {
        // Error message
    }
}

onRowEditCancel(event) {
    let cars = [...this.state.cars];
    cars[event.index] = this.clonedCars[event.data.vin];
    delete this.clonedCars[event.data.vin];
    this.setState({
        cars
    })
}

`}
</CodeHighlight>

            <h3>ContextMenu</h3>
            <p>DataTable provides exclusive integration with ContextMenu.  <i>contextMenuSelection</i> and <i>onContextMenuSelectionChange</i> are used to get a reference of the the selected row
            and <i>onContextMenu</i> callback is utilized to display a particular context menu.</p>
<CodeHighlight className="language-javascript">
{`
export class DataTableContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            menu: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: (event) => this.viewCar(this.state.selectedCar)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: (event) => this.deleteCar(this.state.selectedCar)}
            ]
        };
        this.carservice = new CarService();
        this.viewCar = this.viewCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    viewCar(car) {
        this.growl.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    }

    deleteCar(car) {
        let carsList = [...this.state.cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        this.growl.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        this.setState({
            cars: carsList
        });
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => { this.growl = el; }}></Growl>

                <ContextMenu model={this.state.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedCar: null})}/>

                <DataTable value={this.state.cars} header="Right Click"
                    contextMenuSelection={this.state.selectedCar} onContextMenuSelectionChange={e => this.setState({selectedCar: e.value})}
                    onContextMenu={e => this.cm.show(e.originalEvent)}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </div>
        );
    }
}

`}
</CodeHighlight>


            <h3>Expandable Rows</h3>
            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, add an <i>expander</i> column, define a <i>rowExpansionTemplate</i> as a function to return the expanded content and bind to
                <i>expandedRows</i> property to read the expanded rows along with the <i>onRowToggle</i> property to update it. <i>expandedRows</i> property either accepts an array of row data or a map whose key is the dataKey of the record.
                Using expandable rows with a dataKey is suggested for better performance.</p>

<CodeHighlight className="language-javascript">
{`
export class DataTableRowExpansionDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: null,
            expandedRows: null
        };
        this.carservice = new CarService();
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    rowExpansionTemplate(data) {
        var src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-3" style={{textAlign:'center', borderRight: '1px solid #cccccc'}}>
                        <img src={src} alt={data.brand}/>
                    </div>
                     <div className="p-col-12 p-md-9">
                       <div className="p-grid">
                          <div className="p-md-2">Vin: </div>
                          <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                          <div className="p-md-2">Year: </div>
                          <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                          <div className="p-md-2">Brand: </div>
                          <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                          <div className="p-md-2">Color: </div>
                          <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                       </div>
                    </div>
                </div>;
    }

    render() {
        return (
            <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}
                    rowExpansionTemplate={this.rowExpansionTemplate} dataKey="vin">
                <Column expander={true} style={{width: '2em'}} />
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <h3>Column Resize</h3>
            <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                In "expand" mode, table width also changes along with the column width. <i>onColumnResizeEnd</i> is a callback that passes the resized column header as a parameter.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} resizableColumns={true}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} resizableColumns={true}>
    <Column field="vin" header="Vin" style={{width:'20%'}}/>
    <Column field="year" header="Year" style={{width:'40%'}}/>
    <Column field="brand" header="Brand" style={{width:'20%'}}/>
    <Column field="color" header="Color" style={{width:'20%'}}/>
</DataTable>

`}
</CodeHighlight>

            <h3>Column Reorder</h3>
            <p>Columns can be reordered using drag drop by setting the <i>reorderableColumns</i> to true. <i>onColReorder</i> is a callback that is invoked when a column is reordered.
            DataTable keeps the column order state internally using keys that identifies a column using the <i>field</i> property. If the column has no field, use columnKey instead.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} reorderableColumns={true}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Row Reorder</h3>
            <p>Data can be reordered using drag drop by adding a reorder column that will display an icon as a drag handle. <i>onRowReorder</i> is a callback that is invoked when a column is reordered, use
                this callback to update the new order. The reorder icon can be customized using <i>rowReorderIcon</i> of the column component.</p>
            <p>Tip: Use <i>showRowReorderElement</i> function in case you need to hide selection element for a particular row.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} reorderableColumns={true} onRowReorder={(e) => this.setState({cars: e.value})}>
    <Column rowReorder={true} style={{width: '2em'}} />
    <Column columnKey="vin" field="vin" header="Vin"/>
    <Column columnKey="year" field="year" header="Year" />
    <Column columnKey="brand" field="brand" header="Brand" />
    <Column columnKey="color" field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Data Export</h3>
            <p>DataTable can export its data in CSV format using exportCSV() method.</p>
<CodeHighlight className="language-javascript">
{`
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
            <DataTable value={this.state.cars} header={header} ref={(el) => { this.dt = el; }}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <h3>RowGrouping</h3>
            <p>RowGrouping has two modes defined be the <i>rowGroupMode</i> property, in "subheader" option rows are grouped by a groupField and in "rowspan" mode grouping
            is done based on the sort field. In both cases, data should be sorted initally using the properties such as sortField and sortOrder. In "subheader" mode,
            <i>rowGroupHeaderTemplate</i> property should be defined to provide the content of the header and optionally <i>rowGroupFooterTemplate</i> is available to provide a footer
            for the group.</p>

            <CodeHighlight className="language-javascript">
            {`
export class DataTableRowGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            car: null
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
        return ([
                    <td key={data.brand + '_footerTotalLabel'} colSpan="3" style={{textAlign: 'right'}}>Total Price</td>,
                    <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            ]
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
                <DataTable header="SubHeader" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                    rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
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

            `}
            </CodeHighlight>

            <h3>Scrolling</h3>
            <p>DataTable supports both horizontal and vertical scrolling as well as frozen columns and rows. Scrollable DataTable is enabled using <i>scrollable</i> property and <i>scrollHeight</i> to define the viewport height.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} scrollable={true} scrollHeight="200px">
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <p>Horizontal Scrolling requires a width of DataTable to be defined and explicit widths on columns.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} scrollable={true} scrollHeight="200px" style={{width: '600px'}}>
    <Column field="vin" header="Vin" style={{width:'250px'}} />
    <Column field="year" header="Year" style={{width:'250px'}} />
    <Column field="brand" header="Brand" style={{width:'250px'}} />
    <Column field="color" header="Color" style={{width:'250px'}} />
</DataTable>

`}
</CodeHighlight>

            <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. Widths of the frozen section is specified by the <i>frozenWidth</i> property.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} scrollable={true} scrollHeight="200px" style={{width: '800px'}} frozenWidth="200px">
    <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
    <Column field="year" header="Year" style={{width:'250px'}} />
    <Column field="brand" header="Brand" style={{width:'250px'}} />
    <Column field="color" header="Color" style={{width:'250px'}} />
    <Column field="owner" header="Owner" style={{width:'250px'}} />
    <Column field="tyre" header="Tyre" style={{width:'250px'}} />
    <Column field="capacity" header="Capacity" style={{width:'250px'}} />
    <Column field="engine" header="Engine" style={{width:'250px'}} />
</DataTable>

`}
</CodeHighlight>

            <p>Note that frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. Provide fixed height to cells to avoid alignment issues.</p>
            <CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} scrollable={true} scrollHeight="200px" style={{width: '800px'}} frozenWidth="200px">
    <Column field="vin" header="Vin" style={{width:'250px', height: '25px'}} frozen={true} />
    <Column field="year" header="Year" style={{width:'250px', height: '25px'}} />
    <Column field="brand" header="Brand" style={{width:'250px', height: '25px'}} />
    <Column field="color" header="Color" style={{width:'250px', height: '25px'}} />
</DataTable>

`}
</CodeHighlight>

            <p>One or more rows can be displayed as fixed using the <i>frozenValue</i> property.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable header="Frozen Rows" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <p>When using frozen columns with column grouping, use <i>frozenHeaderColumnGroup</i> and <i>frozenFooterColumnGroup</i> properties along with
            <i>headerColumnGroup</i> and <i>footerColumnGroup</i>.</p>

            <p>Virtual scrolling is enabled using <i>virtualScroll</i> and <i>onVirtualScroll</i> properties combined with lazy loading so that data is loaded on the fly during scrolling.
            For smooth scrolling twice the amount of rows property is loaded on a lazy load event. In addition, to avoid performance problems row height is not calculated automatically and
            should be provided using <i>virtualRowHeight</i> property which defaults to 28px. View the <Link to="/datatable/scroll">scrolling demo</Link> for a sample implementation.</p>

<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true}
    rows={10} totalRecords={this.state.lazyTotalRecords} lazy={true} onVirtualScroll={this.loadCarsLazy} style={{marginTop:'30px'}}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Lazy Loading</h3>
            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
            lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

            <p>In lazy mode, pagination, sorting and filtering must be used in controlled mode in addition to enabling <i>lazy</i> property. Here is a sample paging implementation with in memory data.</p>
<CodeHighlight className="language-jsx">
{`
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
        this.carservice.getCarsLarge().then(data => {
            this.datasource = data;
            this.setState({
                totalRecords: data.length,
                cars: this.datasource.slice(0, this.state.rows),
                loading: false
            });
        });
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
            <DataTable value={this.state.cars} paginator={true} rows={this.state.rows} totalRecords={this.state.totalRecords}
                lazy={true} first={this.state.first} onPage={this.onPage} loading={this.state.loading}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
    }
}

`}
</CodeHighlight>

            <h3>TableState</h3>
            <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again,
                table would render the data using its last settings. Enabling state is easy as defining a unique <i>stateKey</i>, the storage to keep the state is defined with the <i>stateStorage</i> property that accepts session for sessionStorage and local for localStorage.
                Currently following features are supported by TableState; paging, sorting, filtering, column resizing, column reordering, row expansion and row selection.</p>

<CodeHighlight className="language-javascript">
{`
export class DataTableStateDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars} selectionMode="multiple" resizableColumns={true}
                        selection={this.state.selectedCars} onSelectionChange={e => this.setState({selectedCars: e.value})}
                        paginator={true} rows={10} stateKey="tablestatedemo-session">
                <Column field="vin" header="Vin" sortable={true} filter={true}/>
                <Column field="year" header="Year" sortable={true} filter={true}/>
                <Column field="brand" header="Brand" sortable={true} filter={true}/>
                <Column field="color" header="Color" sortable={true} filter={true}/>
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled by setting responsive to true.</p>
<CodeHighlight className="language-jsx">
{`
<DataTable value={this.state.cars} responsive={true}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Header content of the table.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Footer content of the table.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>tableStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the table element.</td>
                        </tr>
                        <tr>
                            <td>tableClassName</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Style class of the table element.</td>
                        </tr>
                        <tr>
                            <td>paginator</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified as true, enables the pagination.</td>
                        </tr>
                        <tr>
                            <td>paginatorPosition</td>
                            <td>string</td>
                            <td>bottom</td>
                            <td>Position of the paginator, options are "top","bottom" or "both".</td>
                        </tr>
                        <tr>
                            <td>alwaysShowPaginator</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to show it even there is only one page.</td>
                        </tr>
                        <tr>
                            <td>paginatorTemplate</td>
                            <td>string</td>
                            <td>FirstPageLink PrevPageLink PageLinks <br /> NextPageLink LastPageLink RowsPerPageDropdown</td>
                            <td>Template of the paginator.</td>
                        </tr>
                        <tr>
                            <td>paginatorLeft</td>
                            <td>Element</td>
                            <td>null</td>
                            <td>Content for the left side of the paginator.</td>
                        </tr>
                        <tr>
                            <td>paginatorRight</td>
                            <td>Element</td>
                            <td>null</td>
                            <td>Content for the right side of the paginator.</td>
                        </tr>
                        <tr>
                            <td>pageLinkSize</td>
                            <td>number</td>
                            <td>5</td>
                            <td>Number of page links to display.</td>
                        </tr>
                        <tr>
                            <td>rowsPerPageOptions</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Array of integer values to display inside rows per page dropdown.</td>
                        </tr>
                        <tr>
                            <td>currentPageReportTemplate</td>
                            <td>string</td>
                            <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                            <td>Template of the current page report element. Available placeholders are
                                &123;currentPage&125;,&123;totalPages&125;,&123;rows&125;,&123;first&125;,&123;last&125; and &123;totalRecords&125;
                            </td>
                        </tr>
                        <tr>
                            <td>first</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Index of the first row to be displayed.</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of rows to display per page.</td>
                        </tr>
                        <tr>
                            <td>totalRecords</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of total records, defaults to length of value when not defined.</td>
                        </tr>
                        <tr>
                            <td>lazy</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if data is loaded and interacted with in lazy manner.</td>
                        </tr>
                        <tr>
                            <td>sortField</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the field to sort data by default.</td>
                        </tr>
                        <tr>
                            <td>sortOrder</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Order to sort the data by default.</td>
                        </tr>
                        <tr>
                            <td>multiSortMeta</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>
                        </tr>
                        <tr>
                            <td>sortMode</td>
                            <td>string</td>
                            <td>single</td>
                            <td>Defines whether sorting works on single column or on multiple columns.</td>
                        </tr>
                        <tr>
                            <td>defaultSortOrder</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Default sort order of an unsorted column.</td>
                        </tr>
                        <tr>
                            <td>removableSort</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, columns can have an un-sorted state.</td>
                        </tr>
                        <tr>
                            <td>emptyMessage</td>
                            <td>any</td>
                            <td>No records found</td>
                            <td>Text to display when there is no data.</td>
                        </tr>
                        <tr>
                            <td>selectionMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Specifies the selection mode, valid values are "single" and "multiple".</td>
                        </tr>
                        <tr>
                            <td>selection</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Selected row in single mode or an array of values in multiple mode.</td>
                        </tr>
                        <tr>
                            <td>contextMenuSelection</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Selected row in single mode or an array of values in multiple mode.</td>
                        </tr>
                        <tr>
                            <td>compareSelectionBy</td>
                            <td>string</td>
                            <td>deepEquals</td>
                            <td>Algorithm to define if a row is selected, valid values are "equals" that compares by reference and <br/> "deepEquals" that compares all fields.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely identify a record in data.</td>
                        </tr>
                        <tr>
                            <td>metaKeySelection</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines whether metaKey is requred or not for the selection. <br/>
                                When true metaKey needs to be pressed to select or unselect an item and <br/>
                                when set to false selection of each item
                                can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                        </tr>
                        <tr>
                            <td>headerColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnGroup component for header.</td>
                        </tr>
                        <tr>
                            <td>footerColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnGroup component for footer.</td>
                        </tr>
                        <tr>
                            <td>frozenHeaderColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnGroup component for header of frozen columns.</td>
                        </tr>
                        <tr>
                            <td>frozenFooterColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnGroup component for footer of frozen columns.</td>
                        </tr>
                        <tr>
                            <td>rowExpansionTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that receives the row data as the parameter and returns the expanded row content.</td>
                        </tr>
                        <tr>
                            <td>expandedRows</td>
                            <td>array/object</td>
                            <td>null</td>
                            <td>A collection of rows or a map object row data keys that are expanded.</td>
                        </tr>
                        <tr>
                            <td>responsive</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if the columns should be stacked in smaller screens.</td>
                        </tr>
                        <tr>
                            <td>resizableColumns</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, columns can be resized using drag and drop.</td>
                        </tr>
                        <tr>
                            <td>columnResizeMode</td>
                            <td>string</td>
                            <td>fit</td>
                            <td>Defines whether the overall table width should change on column resize, <br/> valid values are "fit" and "expand".</td>
                        </tr>
                        <tr>
                            <td>reorderableColumns</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, columns can be reordered using drag and drop.</td>
                        </tr>
                        <tr>
                            <td>filters</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of FilterMetadata objects to provide external filters.</td>
                        </tr>
                        <tr>
                            <td>globalFilter</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the global filter to use in filtering.</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, enables horizontal and/or vertical scrolling.</td>
                        </tr>
                        <tr>
                            <td>scrollHeight</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Height of the scroll viewport.</td>
                        </tr>
                        <tr>
                            <td>virtualScroll</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the data should be loaded on demand during scroll.</td>
                        </tr>
                        <tr>
                            <td>virtualScrollDelay</td>
                            <td>number</td>
                            <td>250</td>
                            <td>Delay in virtual scroll before doing a call to lazy load.</td>
                        </tr>
                        <tr>
                            <td>virtualRowHeight</td>
                            <td>number</td>
                            <td>28</td>
                            <td>Height of a row to use in calculations of virtual scrolling.</td>
                        </tr>
                        <tr>
                            <td>frozenWidth</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Width of the frozen part in scrollable DataTable.</td>
                        </tr>
                        <tr>
                            <td>frozenValue</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Items of the frozen part in scrollable DataTable.</td>
                        </tr>
                        <tr>
                            <td>csvSeparator</td>
                            <td>string</td>
                            <td>,</td>
                            <td>Character to use as the csv separator.</td>
                        </tr>
                        <tr>
                            <td>exportFilename</td>
                            <td>string</td>
                            <td>download</td>
                            <td>Name of the exported file.</td>
                        </tr>
                        <tr>
                            <td>rowGroupMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines the row grouping mode, valid values are "subheader" and "rowgroup".</td>
                        </tr>
                        <tr>
                            <td>autoLayout</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the cell widths scale according to their content or not.</td>
                        </tr>
                        <tr>
                            <td>rowClassName</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that takes the row data and <br/> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
                        </tr>
                        <tr>
                            <td>rowGroupHeaderTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function to provide the content of row group header.</td>
                        </tr>
                        <tr>
                            <td>rowGroupFooterTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function to provide the content of row group footer.</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Displays a loader to indicate data load is in progress.</td>
                        </tr>
                        <tr>
                            <td>loadingIcon</td>
                            <td>string</td>
                            <td>pi pi-spinner</td>
                            <td>The icon to show while indicating data load is in progress.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>stateKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of a stateful table to use in state storage.</td>
                        </tr>
                        <tr>
                            <td>stateStorage</td>
                            <td>string</td>
                            <td>session</td>
                            <td>Defines where a stateful table keeps its state, <br/> valid values are "session" for sessionStorage and "local" for localStorage.</td>
                        </tr>
                        <tr>
                            <td>editMode</td>
                            <td>string</td>
                            <td>cell</td>
                            <td>Defines editing mode, options are "cell" and "row".</td>
                        </tr>
                        <tr>
                            <td>exportFunction</td>
                            <td>function</td>
                            <td>null</td>
                            <td>A function to implement custom export. Need to return string value. <br />
                                event.data: Field data. <br />
                                event.rows: Column field.</td>
                        </tr>
                        <tr>
                            <td>expandableRowGroups</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Makes row groups toggleable, default is false.</td>
                        </tr>
                        <tr>
                            <td>rowHover</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, background of the rows change on hover..</td>
                        </tr>
                        <tr>
                            <td>showSelectionElement</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row.</td>
                        </tr>
                        <tr>
                            <td>showRowReorderElement</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that returns a boolean by passing the row data to decide if the row reorder element should be displayed per row.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onSelectionChange</td>
                            <td>event.originalEvent: Browser event <br/>
                                event.value: Selection object
                            </td>
                            <td>Callback to invoke when selection changes.</td>
                        </tr>
                        <tr>
                            <td>onContextMenuSelectionChange</td>
                            <td>event.originalEvent: Browser event <br/>
                                event.value: Selection object
                            </td>
                            <td>Callback to invoke when a row selected with right click.</td>
                        </tr>
                        <tr>
                            <td>onRowToggle</td>
                            <td>event.data: Expanded rows</td>
                            <td>Callback to invoke when a row is toggled or collapsed.</td>
                        </tr>
                        <tr>
                            <td>onColumnResizeEnd</td>
                            <td>event.element: DOM element of the resized column.
                                event.column: Properties of the resized column.<br />
                                event.delta: Change in column width</td>
                            <td>Callback to invoke when a column is resized.</td>
                        </tr>
                        <tr>
                            <td>onSort</td>
                            <td>event.sortField: Field to sort against. <br />
                                event.sortOrder: Sort order as integer. <br />
                                event.multiSortMeta: MultiSort metadata.</td>
                            <td>Callback to invoke on sort.</td>
                        </tr>
                        <tr>
                            <td>onPage</td>
                            <td>event.first: Index of the first row. <br />
                                event.rows: Rows per page.</td>
                            <td>Callback to invoke on pagination.</td>
                        </tr>
                        <tr>
                            <td>onFilter</td>
                            <td>event.filters: Collection of active filters.</td>
                            <td>Callback to invoke on filtering.</td>
                        </tr>
                        <tr>
                            <td>onVirtualScroll</td>
                            <td>event.first: Index of the first row. <br />
                                event.rows: Rows per page.</td>
                            <td>Callback to invoke during virtual scrolling.</td>
                        </tr>
                        <tr>
                            <td>onRowClick</td>
                            <td>event.originalEvent: Browser event <br />
                                event.data: Clicked row data <br />
                                event.index: Clicked row data index</td>
                            <td>Callback to invoke when a row is clicked.</td>
                        </tr>
                        <tr>
                            <td>onRowDoubleClick</td>
                            <td>event.originalEvent: Browser event <br />
                                event.data: Clicked row data <br />
                                event.index: Clicked row data index</td>
                            <td>Callback to invoke when a row is double clicked.</td>
                        </tr>
                        <tr>
                            <td>onRowSelect</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Selected row data. <br />
                                event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                            <td>Callback to invoke when a row is selected.</td>
                        </tr>
                        <tr>
                            <td>onRowUnselect</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Unselected row data. <br />
                                event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                            <td>Callback to invoke when a row is unselected.</td>
                        </tr>
                        <tr>
                            <td>onRowExpand</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Expanded row data.</td>
                            <td>Callback to invoke when a row is expanded.</td>
                        </tr>
                        <tr>
                            <td>onRowCollapse</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Collapsed row data.</td>
                            <td>Callback to invoke when a row is collapsed.</td>
                        </tr>
                        <tr>
                            <td>onContextMenu</td>
                            <td>event.originalEvent: Original event instance. <br />
                                event.data: Collapsed row data</td>
                            <td>Callback to invoke when a context menu is clicked.</td>
                        </tr>
                        <tr>
                            <td>onColReorder</td>
                            <td>event.originalEvent: Browser event <br />
                                event.dragIndex: Index of the dragged column <br />
                                event.dropIndex: Index of the dropped column <br />
                                event.columns: Columns array after reorder.</td>
                            <td>Callback to invoke when a column is reordered.</td>
                        </tr>
                        <tr>
                            <td>onRowOrder</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.value: New value after reorder <br />
                                event.dragIndex: Index of the dragged row <br />
                                event.dropIndex: Index of the drop location</td>
                            <td>Callback to invoke when a row is reordered.</td>
                        </tr>
                        <tr>
                            <td>onValueChange</td>
                            <td>value: Value displayed by the table.</td>
                            <td>Callback to invoke after filtering and sorting to pass the rendered value.</td>
                        </tr>
                        <tr>
                            <td>rowEditorValidator</td>
                            <td>data: Editing row data</td>
                            <td>Callback to invoke to validate the editing row when the save icon is clicked on row editing mode.</td>
                        </tr>
                        <tr>
                            <td>onRowEditInit</td>
                            <td>event.originalEvent: Browser event <br />
                                event.data: Editing row data </td>
                            <td>Callback to invoke when the editing icon is clicked on row editing mode.</td>
                        </tr>
                        <tr>
                            <td>onRowEditSave</td>
                            <td>event.originalEvent: Browser event <br />
                                event.data: Editing row data</td>
                            <td>Callback to invoke when the save icon is clicked on row editing mode.</td>
                        </tr>
                        <tr>
                            <td>onRowEditCancel</td>
                            <td>event.originalEvent: Browser event <br />
                                event.data: Editing row data <br />
                                event.index: Editing row data index</td>
                            <td>Callback to invoke when the cancel icon is clicked on row editing mode.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Methods</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>reset</td>
                            <td>-</td>
                            <td>Resets sort, filter, paginator and columnorder state.</td>
                        </tr>
                        <tr>
                            <td>exportCSV</td>
                            <td>-</td>
                            <td>Exports the data to CSV format.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>value: the filter value <br />
                                field: the filter field <br />
                                mode: filter match mode.
                            </td>
                            <td>Filters the data.</td>
                        </tr>
                        <tr>
                            <td>closeEditingCell</td>
                            <td>-</td>
                            <td>Closes the current editing cell when incell editing is enabled.</td>
                        </tr>
                        <tr>
                            <td>resetColumnOrder</td>
                            <td>-</td>
                            <td>Resets column order when reorderableColumns is enabled.</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-datatable</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-column-title</td>
                            <td>Title of a column.</td>
                        </tr>
                        <tr>
                            <td>p-sortable-column</td>
                            <td>Sortable column header.</td>
                        </tr>
                        <tr>
                            <td>p-column-filter</td>
                            <td>Filter element in header.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-scrollable-header</td>
                            <td>Container of header in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-scrollable-body</td>
                            <td>Container of body in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-scrollable-footer</td>
                            <td>Container of footer in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-responsive</td>
                            <td>Container element of a responsive datatable.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-emptymessage</td>
                            <td>Cell containing the empty message.</td>
                        </tr>
                        <tr>
                            <td>p-rowgroup-header</td>
                            <td>Header of a rowgroup.</td>
                        </tr>
                        <tr>
                            <td>p-rowgroup-footer</td>
                            <td>Footer of a rowgroup.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datatable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>

                <p>DataTableDemo.css</p>
<CodeHighlight className="language-javascript">
{`
.datatable-doc-demo {
    .customer-badge {
        border-radius: 2px;
        padding: .25em .5em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: .3px;

        &.status-qualified {
            background-color: #C8E6C9;
            color: #256029;
        }

        &.status-unqualified {
            background-color: #FFCDD2;
            color: #C63737;
        }

        &.status-negotiation {
            background-color: #FEEDAF;
            color: #8A5340;
        }

        &.status-new {
            background-color: #B3E5FC;
            color: #23547B;
        }

        &.status-renewal {
            background-color: #ECCFFF;
            color: #694382;
        }

        &.status-proposal {
            background-color: #FFD8B2;
            color: #805B36;
        }
    }

    .p-multiselect-representative-option {
        display: inline-block;
        vertical-align: middle;

        img {
            vertical-align: middle;
            width: 24px;
        }

        span {
            margin-top: .125em;
        }
    }

    .p-paginator {
        .p-dropdown {
            float: left;
        }

        .p-paginator-current {
            float: right;
        }
    }

    .p-progressbar {
        height: 8px;
        background-color: #D8DADC;

        .p-progressbar-value {
            background-color: #00ACAD;
            transition: none;
        }
    }

    .p-column-filter {
        display: block;

        input {
            width: 100%;
        }
    }

    .p-datatable-globalfilter-container {
        float: right;

        input {
            width: 200px;
        }
    }

    .p-datepicker {
        min-width: 25em;

        td {
            font-weight: 400;
        }
    }

    .p-datatable.p-datatable-customers {
        .p-datatable-header {
            border: 0 none;
            padding: 12px;
            text-align: left;
            font-size: 20px;
        }

        .p-paginator {
            border: 0 none;
            padding: 1em;
        }

        .p-datatable-thead > tr > th {
            border: 0 none;
            text-align: left;

            &.p-filter-column {
                border-top: 1px solid #c8c8c8;
            }
        }

        .p-datatable-tbody > tr > td {
            border: 0 none;
            cursor: auto;
        }

        .p-dropdown-label:not(.p-placeholder) {
            text-transform: uppercase;
        }
    }
}
`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {CustomerService} from '../service/CustomerService';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {Calendar} from '../../components/calendar/Calendar';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {ProgressBar} from '../../components/progressbar/ProgressBar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import classNames from 'classnames';
import "./DataTableDemo.scss"

export class DataTableDemo extends Component {

    constructor() {
        super();
        this.state = {
            customers: null,
            selectedCustomers: null,
            globalFilter: null,
            selectedRepresentatives: null,
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            dateFilter: null,
            selectedStatus: null,
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ]
        };

        this.customerService = new CustomerService();

        //body cells
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        //filters
        this.representativeItemTemplate = this.representativeItemTemplate.bind(this);
        this.onRepresentativeFilterChange = this.onRepresentativeFilterChange.bind(this);
        this.onDateFilterChange = this.onDateFilterChange.bind(this);
        this.filterDate = this.filterDate.bind(this);       //custom filter function
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.onStatusFilterChange = this.onStatusFilterChange.bind(this);
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({customers: data}));
    }

    renderHeader() {
        return (
            <div>
                List of Customers
                <div  className="p-datatable-globalfilter-container">
                    <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate() {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>;
    }

    countryBodyTemplate(rowData) {
        return (
            <>
                <img src="showcase/resources/demo/images/flag_placeholder.png" className={classNames('flag', 'flag-' + rowData.country.code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.country.name}</span>
            </>
        );
    }

    representativeBodyTemplate(rowData) {
        const src = "showcase/resources/demo/images/avatar/" + rowData.representative.image;

        return (
            <>
                <img alt={rowData.representative.name} src={src} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
            </>
        );
    }

    renderRepresentativeFilter() {
        return (
            <MultiSelect className="p-column-filter" value={this.state.selectedRepresentatives} options={this.state.representatives}
                onChange={this.onRepresentativeFilterChange} itemTemplate={this.representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    representativeItemTemplate(option) {
        const src = "showcase/resources/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    onRepresentativeFilterChange(event) {
        this.dt.filter(event.value, 'representative.name', 'in');
        this.setState({selectedRepresentatives: event.value});
    }

    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({dateFilter: event.value});
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    renderStatusFilter() {
        return (
            <Dropdown value={this.state.selectedStatus} options={this.state.statuses} onChange={this.onStatusFilterChange}
                        itemTemplate={this.statusItemTemplate} showClear={true} placeholder="Select a Status" className="p-column-filter"/>
        );
    }

    statusItemTemplate(option) {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    onStatusFilterChange(event) {
        this.dt.filter(event.value, 'status', 'equals');
        this.setState({selectedStatus: event.value});
    }

    render() {
        const header = this.renderHeader();
        const representativeFilter = this.renderRepresentativeFilter();
        const dateFilter = this.renderDateFilter();
        const statusFilter = this.renderStatusFilter();

        return (
            <div className="datatable-doc-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.customers}
                        header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                        selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({selectedCustomers: e.value})}
                        paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                        <Column selectionMode="multiple" style={{width:'3em'}}/>
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                        <Column sortField="country.name" filterField="country.name" header="Country" body={this.countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
                        <Column sortField="representative.name" filterField="representative.name" header="Representative" body={this.representativeBodyTemplate} sortable filter filterElement={representativeFilter} />
                        <Column field="date" header="Date" sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                        <Column field="status" header="Status" body={this.statusBodyTemplate} sortable filter filterElement={statusFilter} />
                        <Column field="activity" header="Activity" body={this.activityBodyTemplate} sortable filter filterMatchMode="gte" filterPlaceholder="Minimum" />
                        <Column body={this.actionTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
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
        );
    }
}
