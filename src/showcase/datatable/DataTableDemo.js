import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

export class DataTableDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        var dynamicColumns = this.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Dynamic Columns</h3>
                    <DataTable value={this.state.cars}>
                        {dynamicColumns}
                    </DataTable>

                </div>

                <DataTableDoc></DataTableDoc>
            </div>
        );
    }
}

export class DataTableDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {DataTable} from 'primereact/components/datatable/DataTable';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a car interface having vin, brand, year and color properties is used to define an object to be displayed by the datatable. Cars are loaded by a CarService that connects to a server to fetch the cars with a axios.
                Note that this is only for demo purposes, DataTable does not have any restrictions on how data is provided.
            </p>

<CodeHighlight className="javascript">
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
<CodeHighlight className="javascript">
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
<CodeHighlight className="javascript">
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
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Header text of a column or a function to return custom content.</td>
                        </tr>
                        <tr>
                            <td>body</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Function to return the custom cell content.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Footer text of a column or a function to return custom content.</td>
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
                            <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals" and "in".</td>
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
                    </tbody>
                </table>
            </div>

            <h3>Templates</h3>
            <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where current row data and column properties are passed to the body template. 
                On the other hand, header and footer properties of a column are used to define the content of these sections by accepting either simple string values or JSX for advanced content. Similarly DataTable itself
                also provides header and footer properties for the main header and footer of the table.</p>

<CodeHighlight className="javascript">
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
            <Button type="button" icon="fa-search" className="ui-button-success"></Button>
            <Button type="button" icon="fa-edit" className="ui-button-warning"></Button>
        </div>;
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        var carCount = this.state.cars ? this.state.cars.length: 0;
        var header = <div className="ui-helper-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="fa-refresh" style={{'float':'right'}}/></div>;
        var footer = "There are " + carCount + ' cars';

        return (
            <DataTable value={this.state.cars} header={header} footer={footer}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" bodyTemplate={this.brandTemplate} style={{textAlign:'center'}}/>
                <Column field="color" header="Color" bodyTemplate={this.colorTemplate} />
                <Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <h3>Column Group</h3>
            <p>Columns can be grouped at header and footer sections by defining a ColumnGroup component as the headerColumnGroup and footerColumnGroup properties.</p>

<CodeHighlight className="javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {ColumnGroup} from 'primereact/components/columngroup/ColumnGroup';
import {Row} from 'primereact/components/row/Row';

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

            <h3>Paginator</h3>
            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display. See <Link to="/paginator">&#9679; paginator</Link> component for more information.</p>
<CodeHighlight className="javascript">
{`
export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {};
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


            <p>Paginator can also be controlled via model using property binding to first which allows resetting or navigating to a certain page programmatically.</p>
<CodeHighlight className="javascript">
{`
export class DataTablePaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        let start = 20;

        return (
            <DataTable value={this.state.cars} paginator={true} rows={10} first={start}>
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

            <h3>Sorting</h3>
            <p>Enabling sortable property at column component is enough to make a column sortable. The property to use when sorting is field by default and can be customized using sortField.</p>
<CodeHighlight className="html">
{`
<Column field="vin" header="Vin" sortable={true}/>

`}
</CodeHighlight>

            <p>By default sorting is executed on the clicked column. To do multiple field sorting, set sortMode property to "multiple" and use metakey when clicking on another column.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} sortMode="multiple">

`}
</CodeHighlight>



            <p>In case you'd like to display the table as sorted by default initially on load, use the sortField-sortOrder properties in single mode.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} sortField="year" sortOrder={1}>
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable={true}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

            <p>In multiple mode, use the multiSortMeta property and bind an array of SortMeta objects.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} multiSortMeta={multiSortMeta}>
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable={true}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
let multiSortMeta = [];
multiSortMeta.push({field: 'year', order: 1});
multiSortMeta.push({field: 'brand', order: -1});

`}
</CodeHighlight>

            <p>To customize sorting, set sortable option to custom and define a sortFunction that sorts the list.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} >
    <Column field="vin" header="Vin" sortable={true}/>
    <Column field="year" header="Year" sortable="custom" sortFunction={this.mysort}/>
    <Column field="brand" header="Brand" sortable={true}/>
    <Column field="color" header="Color" sortable={true}/>
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
mysort(event) {
    //event.field = Field to sort
    //event.order = Sort order
}

`}
</CodeHighlight>

            <h3>Filtering</h3>
            <p>Filtering is enabled by setting the filter property as true on a column. Default match mode is "startsWith" and this can be configured using filterMatchMode property that also accepts "contains", "endsWith", "equals" and "in".</p>
 <CodeHighlight className="html">
{`
<DataTable value={this.state.cars} >
    <Column field="vin" header="Vin" filter={true} />
    <Column field="year" header="Year" filter={true} filterPlaceholder="Search" />
    <Column field="brand" header="Brand" filter={true} filterMatchMode="contains"/>
    <Column field="color" header="Color" filter={true} filterMatchMode="endsWith"/>
</DataTable>

`}
</CodeHighlight>    

            <p>An optional global filter feature is available to search all fields with the same keyword, 
                to implement this place an input component whose value is bound to the globalFilter property of the DataTable.</p>    
<CodeHighlight className="javascript">
{`
export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    render() {
        var let = <div style={{'textAlign':'left'}}>
                        <i className="fa fa-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
                    </div>;

        return (
            <DataTable value={this.state.cars} paginator={true} rows={10} header={header} 
                globalFilter={this.state.globalFilter}>
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

            <p>By default, input fields are used as filter elements and this can be customized using the filterElement property of the Column who populate the filters property of the DataTable. Note that 
                filters property of the DataTable can also be used to filter the DataTable initially with prepopulated filters as well.
            </p>
<CodeHighlight className="javascript">
{`
export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            filters: {}
        };
        this.carservice = new CarService();
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    onBrandChange(e) {
        let filters = this.state.filters;
        filters['brand'] = {value: e.value};
        this.setState({filters: filters});
    }

    onColorChange(e) {
        let filters = this.state.filters;
        filters['color'] = {value: e.value};
        this.setState({filters: filters});
    }

    onFilter(e) {
        this.setState({filters: e.filters});
    }

    render() {
        var header = <div style={{'textAlign':'left'}}>
                        <i className="fa fa-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
                    </div>;

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
        let brandFilter = <Dropdown style={{width: '100%'}} value={this.state.filters.brand ? this.state.filters.brand.value: null} options={brands} onChange={this.onBrandChange}/>

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

        let colorFilter = <MultiSelect style={{width:'100%'}} value={this.state.filters.color ? this.state.filters.color.value: null} options={colors} onChange={this.onColorChange}/>

        return (
            <DataTable value={this.state.cars} paginator={true} rows={10} header={header} 
                globalFilter={this.state.globalFilter} filters={this.state.filters} onFilter={this.onFilter}>
                <Column field="vin" header="Vin" filter={true} />
                <Column field="year" header="Year" filter={true} />
                <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} filterMatchMode="equals" />
                <Column field="color" header="Color" filter={true} filterElement={colorFilter} filterMatchMode="in" />
            </DataTable>
        );
    }
}

`}
</CodeHighlight>

            <p>Filters property of the DataTable can also be used to filter the DataTable initially with prepopulated filters.</p>

            <h3>Selection</h3>
            <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property for reading and onSelectionChange for updating back.
                Alternatively column based selection can be done using radio buttons or checkboxes using selectionMode of a particular column. In additiob onRowSelect-onRowUnselect events are provided as optional callbacks.</p>

            <p>In single mode, selection binding is an object reference.</p>

<CodeHighlight className="javascript">
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
                selection={this.state.selectedCar1} onSelectionChange={(e) => this.setState({selectedCar1: e.data})}>
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

<CodeHighlight className="javascript">
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
                selection={this.state.selectedCars} onSelectionChange={(e) => this.setState({selectedCars: e.data})}>
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

            <p>If you prefer a radioButton or a checkbox instead of a row click, use the selectionMode of a column instead.
                 Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} selection={this.state.selectedCars} onSelectionChange={(e) => this.setState({selectedCars: e.data})}>
    <Column selectionMode="multiple" />
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Incell Editing</h3>
            <p>Incell editing feature provides a way to quickly edit data inside the table. A cell editor is defined using the editor property
            that refers to a function to return an input element for the editing.</p>
            
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars}>
    <Column field="vin" header="Vin" editor={this.vinEditor} />
    <Column field="brand" header="Brand" editor={this.brandEditor}/>
    <Column field="saleDate" header="Sale Date" editor={this.saleDateEditor} >
</DataTable>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
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

            <p>Clicking outside the cell or hitting enter key closes the cell, however this may not be desirable if the input is valid. In order
            to decide whether to keep the cell open or not, provide a editorValidator function that validates the value.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars}>
    <Column field="vin" header="Vin" editor={this.vinEditor} editorValidator={this.requiredValidator} />
    <Column field="brand" header="Brand" editor={this.brandEditor}/>
    <Column field="saleDate" header="Sale Date" editor={this.saleDateEditor} >
</DataTable>

`}
</CodeHighlight>
            
<CodeHighlight className="javascript">
{`
requiredValidator(props) {
    let value = props.rowData[props.field];
    return value && value.length > 0;
}
`}
</CodeHighlight>

            <h3>ContextMenu</h3>
            <p>DataTable provides exclusive integration with ContextMenu by binding the reference of a menu to the contextMenu property.</p>
<CodeHighlight className="javascript">
{`
export class DataTableContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
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
        let items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.state.selectedCar)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.state.selectedCar)}
        ];

        return (
            <div>
                <Growl ref={(el) => { this.growl = el; }}></Growl>

                <ContextMenu model={items} ref={el => this.cm = el}/>

                <DataTable value={this.state.cars} contextMenu={this.cm} selectionMode="single" header="Right Click"
                    selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.data})}>
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
            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, add an expander column, define a rowExpansionTemplate as a function to return the expanded content and bind to
                expandedRows property to read the expanded rows along with the onRowToggle property to update them.</p>
<CodeHighlight className="javascript">
{`
export class DataTableRowExpansionDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    rowExpansionTemplate(data) {
        var src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  <div className="ui-g ui-fluid">
                    <div className="ui-g-12 ui-md-3" style={{textAlign:'center', borderRight: '1px solid #cccccc'}}>
                        <img src={src} alt={data.brand}/>
                    </div>
                     <div className="ui-g-12 ui-md-9">
                       <div className="ui-g">
                          <div className="ui-md-2">Vin: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                          <div className="ui-md-2">Year: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                          <div className="ui-md-2">Brand: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                          <div className="ui-md-2">Color: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                       </div>
                    </div>
                </div>;
    }

    render() {
        return (
            <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}     
                    rowExpansionTemplate={this.rowExpansionTemplate}>
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
            <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. 
                In "expand" mode, table width also changes along with the column width. onColumnResizeEnd is a callback that passes the resized column header as a parameter.</p>
<CodeHighlight className="html">
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
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} resizableColumns={true}>
    <Column field="vin" header="Vin" style={{width:'20%'}}/>
    <Column field="year" header="Year" style={{width:'40%'}}/>
    <Column field="brand" header="Brand" style={{width:'20%'}}/>
    <Column field="color" header="Color" style={{width:'20%'}}/>
</DataTable>

`}
</CodeHighlight>

            <h3>Column Resize</h3>
            <p>Columns can be reordered using drag drop by setting the reorderableColumns to true. onColReorder is a callback that is invoked when a column is reordered.
            DataTable keeps the column order state internally using keys that identifies a column using the field property. If the column has no field use columnKey instead. </p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} reorderableColumns={true}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>

            <h3>Data Export</h3>
            <p>DataTable can export its data in CSV format using exportCSV() method.</p>
<CodeHighlight className="javascript">
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
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="fa-file-o" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

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
            <p>RowGrouping has two modes defined be the rowGroupMode property, in "subheader" option rows are grouped by a groupField and in "rowspan" mode grouping
            is done based on the sort field. In both cases, data should be sorted initally using the properties such as sortField and sortOrder. In "subheader" mode,
            rowGroupHeaderTemplate property should be defined to provide the content of the header and optionally rowGroupFooterTemplate is available to provide a footer
            for the group.</p>
            
            <CodeHighlight className="javascript">
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
            <p>DataTable supports both horizontal and vertical scrolling as well as frozen columns and rows. Scrollable DataTable is enabled using scrollable property and scrollHeight to define the viewport height.</p>
<CodeHighlight className="html">
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
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} scrollable={true} scrollHeight="200px" style={{width: '600px'}}>
    <Column field="vin" header="Vin" style={{width:'250px'}} />
    <Column field="year" header="Year" style={{width:'250px'}} />
    <Column field="brand" header="Brand" style={{width:'250px'}} />
    <Column field="color" header="Color" style={{width:'250px'}} />
</DataTable>

`}
</CodeHighlight> 

            <p>Certain columns can be frozen by using the frozen property of the column component. Widths of the frozen and unfrozen sections are defined with frozenWidth and frozenHeight properties where
                total of these values should equal to the width of the DataTable itself.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.cars} scrollable={true} scrollHeight="200px" style={{width: '600px'}}>
    <DataTable value={this.state.cars} scrollable={true} scrollHeight="200px" style={{width: '800px'}} frozenWidth="200px" unfrozenWidth="600px">
        <Column field="vin" header="Vin" style={{width:'250px'}} frozen={true} />
        <Column field="year" header="Year" style={{width:'250px'}} />
        <Column field="brand" header="Brand" style={{width:'250px'}} />
        <Column field="color" header="Color" style={{width:'250px'}} />
        <Column field="owner" header="Owner" style={{width:'250px'}} />
        <Column field="tyre" header="Tyre" style={{width:'250px'}} />
        <Column field="capacity" header="Capacity" style={{width:'250px'}} />
        <Column field="engine" header="Engine" style={{width:'250px'}} />
    </DataTable>
</DataTable>

`}
</CodeHighlight> 

            <p>One or more rows can be displayed as fixed using the frozenValue property.</p>
<CodeHighlight className="html">
{`
<DataTable header="Frozen Rows" value={this.state.cars} frozenValue={this.state.frozenCars} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight> 

            <p>When using frozen columns with column grouping, use frozenHeaderColumnGroup and frozenFooterColumnGroup properties along with
            headerColumnGroup and footerColumnGroup.</p>

            <p>Virtual scrolling is enabled using virtualScroll property combined with lazy loading so that data is loaded on the fly during scrolling.</p>
<CodeHighlight className="html">
{`
<DataTable value={this.state.lazyCars} scrollable={true} scrollHeight="200px" virtualScroll={true} 
    rows={10} totalRecords={this.state.lazyTotalRecords} lazy={true} onLazyLoad={this.loadCarsLazy} style={{marginTop:'30px'}}>
    <Column field="vin" header="Vin" />
    <Column field="year" header="Year" />
    <Column field="brand" header="Brand" />
    <Column field="color" header="Color" />
</DataTable>

`}
</CodeHighlight>  

            <h3>Lazy Loading</h3>
            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading, 
                enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. 
                onLazyLoad gets an event object that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a 
                projection query for paginator configuration so that paginator displays the UI assuming there are actually records of totalRecords size although in reality 
                they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

            <p>Here is a sample implementation with in memory data.</p>
<CodeHighlight className="html">
{`
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
         * event.multiSortMeta = Sort information when sort mode is multiple, a multiSortMeta object is in {field: string, order: number} format
         * filters: FilterMetadata object having field as key and {value: filterValue, matchMode: filterMatchMode} as the value such as filterMeta['id']= {value: 'prime', matchMode: 'equals'} */
        
        //imitate db connection over a network
        setTimeout(() => {
            if(this.datasource) {
                this.setState({cars: this.datasource.slice(event.first, (event.first + event.rows))});
            }
        }, 250);
    }

    render() {
        return (
            <DataTable value={this.state.cars} paginator={true} rows={10} totalRecords={this.state.totalRecords}
                lazy={true} onLazyLoad={this.onLazyLoad}>
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

            <h3>Responsive</h3>
            <p>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled by setting responsive to true.</p>
<CodeHighlight className="html">
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
                            <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                            <td>Template of the paginator.</td>
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
                            <td>rowsPerPageOptions</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Array of integer values to display inside rows per page dropdown.</td>
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
                            <td>emptyMessage</td>
                            <td>string</td>
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
                            <td>compareSelectionBy</td>
                            <td>string</td>
                            <td>deepEquals</td>
                            <td>Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>metaKeySelection</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                                can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                        </tr>
                        <tr>
                            <td>headerColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnCroup component for header.</td>
                        </tr>
                        <tr>
                            <td>footerColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnCroup component for footer.</td>
                        </tr>
                        <tr>
                            <td>frozenHeaderColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnCroup component for header of frozen columns.</td>
                        </tr>
                        <tr>
                            <td>frozenFooterColumnGroup</td>
                            <td>ColumnGroup</td>
                            <td>null</td>
                            <td>ColumnCroup component for footer of frozen columns.</td>
                        </tr>
                        <tr>
                            <td>rowExpansionTemplate</td>
                            <td>func</td>
                            <td>null</td>
                            <td>Function that receives the row data as the parameter and returns the expanded row content.</td>
                        </tr>
                        <tr>
                            <td>expandedRows</td>
                            <td>array</td>
                            <td>null</td>
                            <td>A collection of rows that are expanded.</td>
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
                            <td>Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".</td>
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
                            <td>500</td>
                            <td>Delay in virtual scroll before doing a call to lazy load.</td>
                        </tr>
                        <tr>
                            <td>frozenWidth</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Width of the frozen part in scrollable DataTable.</td>
                        </tr>
                        <tr>
                            <td>unfrozenWidth</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Width of the unfrozen part in scrollable DataTable.</td>
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
                            <td>contextMenu</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Context menu items.</td>
                        </tr>
                        <tr>
                            <td>rowGroupMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines the row grouping mode, valid values are "subheader" and "rowgroup".</td>
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
                            <td>rowClassName</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that takes the row data and returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
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
                            <td>fa-circle-o-notch</td>
                            <td>The icon to show while indicating data load is in progress.</td>
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
                            <td>event.originalEvent = Original event <br/>
                                event.data = Selection object <br/>
                                <br/>
                            </td>
                            <td>Callback to invoke when selection changes.</td>
                        </tr>
                        <tr>
                            <td>onRowToggle</td>
                            <td>event.data = Expanded rows</td>
                            <td>Callback to invoke when a row is toggled or collapsed.</td>
                        </tr>
                        <tr>
                            <td>onColumnResizeEnd</td>
                            <td>event.element: Resized column instance. <br />
                                event.delta: Change in column width</td>
                            <td>Callback to invoke when a column is resized.</td>
                        </tr>
                        <tr>
                            <td>onSort</td>
                            <td>event.sortField: Field to sort against. <br />
                                event.sortOrder: Sort order as integer. <br />
                                event.multiSortMeta: MultiSort metadata. <br /></td>
                            <td>Callback to invoke on sort.</td>
                        </tr>
                        <tr>
                            <td>onPage</td>
                            <td>event.first: New first row index. <br />
                                event.rows: Rows per page. <br />
                                event.page: New page index. <br />
                                event.pageCount: Number of total pages. <br /></td>
                            <td>Callback to invoke on pagination.</td>
                        </tr>
                        <tr>
                            <td>onFilter</td>
                            <td>event.filters: Array of FilterMetadata objects.</td>
                            <td>Callback to invoke on filtering.</td>
                        </tr>
                        <tr>
                            <td>onLazyLoad</td>
                            <td>event.first = First row offset.  <br/>
                                event.rows = Number of rows per page. <br/>
                                event.sortField = Field name to sort with. <br/>
                                event.sortOrder = Sort order as number, 1 for asc and -1 for desc.<br />
                                event.multiSortMeta = MultiSort metadata. <br/>
                                event.filters = Array of FilterMetadata objects. <br/>
                                event.globalFilter = Global filter value. <br/>
                                <br/>
                            </td>
                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>
                        </tr>
                        <tr>
                            <td>onRowClick</td>
                            <td>event: Browser row click event</td>
                            <td>Callback to invoke when a row is clicked.</td>
                        </tr>
                        <tr>
                            <td>onRowSelect</td>
                            <td>event.originalEvent: Original event instance. <br />
                                event.data: Selected row data. <br />
                                event.type: Type of the selection, valid values are row, radio or checkbox. <br /></td>
                            <td>Callback to invoke when a row is selected.</td>
                        </tr>
                        <tr>
                            <td>onRowUnselect</td>
                            <td>event.originalEvent: Original event instance. <br />
                                event.data: Unselected row data. <br />
                                event.type: Type of the unselection, valid values are row, radio or checkbox. <br /></td>
                            <td>Callback to invoke when a row is unselected.</td>
                        </tr>
                        <tr>
                            <td>onRowExpand</td>
                            <td>event.originalEvent: Original event instance. <br />
                                event.data: Unselected row data.</td>
                            <td>Callback to invoke when a row is expanded.</td>
                        </tr>
                        <tr>
                            <td>onRowCollapse</td>
                            <td>event.originalEvent: Original event instance. <br />
                                event.data: Unselected row data.</td>
                            <td>Callback to invoke when a row is collapsed.</td>
                        </tr>
                        <tr>
                            <td>onContextMenuSelect</td>
                            <td>event.originalEvent: Original event instance. <br />
                                event.data: Collapsed row data</td>
                            <td>Callback to invoke when a context menu is clicked.</td>
                        </tr>
                        <tr>
                            <td>onColReorder</td>
                            <td>event.dragIndex: Index of the dragged column <br />
                                event.dropIndex: Index of the dropped column <br />
                                event.columns: Columns array after reorder. <br /></td>
                            <td>Callback to invoke when a column is reordered.</td>
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
                            <td>ui-datatable</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>ui-column-title</td>
                            <td>Title of a column.</td>
                        </tr>
                        <tr>
                            <td>ui-sortable-column</td>
                            <td>Sortable column header.</td>
                        </tr>
                        <tr>
                            <td>ui-column-filter</td>
                            <td>Filter element in header.</td>
                        </tr>
                        <tr>
                            <td>ui-cell-data</td>
                            <td>Data cell in body.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-scrollable-header</td>
                            <td>Container of header in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-scrollable-body</td>
                            <td>Container of body in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-scrollable-footer</td>
                            <td>Container of footer in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-responsive</td>
                            <td>Container element of a responsive datatable.</td>
                        </tr>
                        <tr>
                            <td>ui-datatable-emptymessage</td>
                            <td>Cell containing the empty message.</td>
                        </tr>
                        <tr>
                            <td>ui-rowgroup-header</td>
                            <td>Header of a rowgroup.</td>
                        </tr>
                        <tr>
                            <td>ui-rowgroup-footer</td>
                            <td>Footer of a rowgroup.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datalist" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>

<CodeHighlight className="javascript">
{`
export class DataTableDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        var dynamicColumns = this.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                    <h3>Dynamic Columns</h3>
                    <DataTable value={this.state.cars}>
                        {dynamicColumns}
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