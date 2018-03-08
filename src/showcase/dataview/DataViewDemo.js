import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Dialog } from '../../components/dialog/Dialog';
import { Panel } from '../../components/panel/Panel';
import { InputText } from '../../components/inputtext/InputText';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {DataView, DataViewLayoutOptions} from "../../components/dataview/DataView";
import {Button} from "../../components/button/Button";
import {Dropdown} from "../../components/dropdown/Dropdown";

export class DataViewDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false};
        this.carservice = new CarService();
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
        }
        else {
            this.setState({sortOrder: 1, sortField:value, sortKey: value});
        }
    }

    itemTemplate(car,layout) {
        if(!car) {
            return;
        }

        let src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        if(layout === 'list') {
            return (
                <div className="ui-g" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                    <div className="ui-g-12 ui-md-3">
                        <img src={src} alt={car.brand}/>
                    </div>
                    <div className="ui-g-12 ui-md-8 car-details">
                        <div className="ui-g">
                            <div className="ui-g-2 ui-sm-6">Vin:</div>
                            <div className="ui-g-10 ui-sm-6">{car.vin}</div>

                            <div className="ui-g-2 ui-sm-6">Year:</div>
                            <div className="ui-g-10 ui-sm-6">{car.year}</div>

                            <div className="ui-g-2 ui-sm-6">Brand:</div>
                            <div className="ui-g-10 ui-sm-6">{car.brand}</div>

                            <div className="ui-g-2 ui-sm-6">Color:</div>
                            <div className="ui-g-10 ui-sm-6">{car.color}</div>
                        </div>
                    </div>

                    <div className="ui-g-12 ui-md-1 search-icon" style={{marginTop:'40px'}}>
                        <Button icon="fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })}></Button>
                    </div>
                </div>
            );
        }
        if(layout === 'grid') {
            return (
                <div style={{ padding: '.5em' }} className="ui-g-12 ui-md-3">
                    <Panel header={car.vin} style={{ textAlign: 'center' }}>
                        <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand} />
                        <div className="car-detail">{car.year} - {car.color}</div>
                        <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                        <Button icon="fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })}></Button>
                    </Panel>
                </div>
            );
        }
    }


    render() {
        let sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];

        let header =
            <div className="ui-g">
                <div className="ui-g-12 ui-md-4">
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} autoWidth={false} style={{minWidth:'15em'}}/>
                </div>
                <div className="ui-g-6 ui-md-4 filter-container">
                    <div style={{position:'relative'}}>
                        <InputText placeholder="Search by brand" onKeyUp={e=>this.dv.filter(e.target.value)}/>
                    </div>
                </div>
                <div className="ui-g-6 ui-md-4" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions onClick={(e)=>this.dv.changeLayout(e.originalEvent,e.layout)}/>
                </div>
             </div>;

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataView</h1>
                        <p>DataView displays data in grid or list layout with pagination, sorting and filtering features.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataView ref={(el) => { this.dv = el; }} value={this.state.cars} filterBy={"brand"} itemTemplate={this.itemTemplate.bind(this)}
                              paginatorPosition={'both'} paginator={true} rows={20} header={header} sortOrder={this.state.sortOrder} sortField={this.state.sortField}/>


                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ textAlign: 'center' }}><img src={`showcase/resources/demo/images/car/${this.state.selectedCar.brand}.png`} alt={this.state.selectedCar.brand} /></div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Vin: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.vin}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Year: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.year}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Brand: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.brand}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Color: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.color}</div>
                                </div>
                            </div>)
                        }
                    </Dialog>
                </div>
                <DataViewDoc/>
            </div>
        );
    }
}

export class DataViewDoc extends Component {

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
import {DataView, DataViewLayoutOptions} from 'primereact/components/dataview/DataView';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid.Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars.
                        </p>
                        <CodeHighlight className="html">
                            {`
<DataView value={this.state.cars}></DataView>

`}
                        </CodeHighlight>
                        <CodeHighlight className="javascript">
                            {`
constructor() {
    super();
    this.state = { cars: [], selectedCar: null, visible: false};
    this.carservice = new CarService();
}

componentDidMount() {
    this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
}

`}
                        </CodeHighlight>

                        <h3>Layouts</h3>
                        <p>DataView has two layout modes; "list" and "grid" where a separate template is used to render an item in each mode. In list mode name of the layout is "list" whereas
                            in grid mode it is "grid".</p>

                        <CodeHighlight className="html">
                            {`
itemTemplate(car,layout) {
    if(layout === 'list') {
        return (
            <div className="ui-g">
                <div>{car.brand}</div>
            </div>
        );
    }
    if(layout === 'grid') {
        return (
            <div className="ui-g-12 ui-md-3">
                <div>{car.brand}</div>
            </div>
        );
    }
}


`}
                        </CodeHighlight>

                        <h3>DataViewLayoutOptions</h3>
                        <p>When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component
                            to display a buttonset to choose the layout mode in DataView.
                        </p>
                        <CodeHighlight className="html">
                            {`
let header =
<div className="ui-g">
    <div className="ui-g-6 ui-md-4">
        <DataViewLayoutOptions onClick={(e)=>this.dv.changeLayout(e.originalEvent,e.layout)}/>
    </div>
</div>;


`}
                        </CodeHighlight>

                        <h3>Paginator</h3>
                        <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number
                            of page links to display.</p>
                        <CodeHighlight className="html">
                            {`
<DataView value={this.state.cars} paginatorPosition={'both'} paginator={true} rows={20}/>


`}
                        </CodeHighlight>

                        <h3>Lazy Loading</h3>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading, enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>
                        <CodeHighlight className="html">
                            {`
<DataView value={this.state.cars} paginator={true} rows={20}
    lazy={true} onLazyLoad={(e)=>this.loadData(e)} totalRecords={totalRecords}/>

`}
                        </CodeHighlight>
                        <CodeHighlight className="javascript">
                            {`
loadData(event) {
    //event.first = First row offset
    //event.rows = Number of rows per page
}

`}
                        </CodeHighlight>

                        <h3>Sorting</h3>
                        <p>sortField and sortOrder properties are available for sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element.
                            Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.</p>

                        <CodeHighlight className="html">
                        {`
let header =
<div className="ui-g">
    <div className="ui-g-12 ui-md-4">
        <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange}/>
    </div>
</div>;

let sortOptions = [
    {label: 'Newest First', value: '!year'},
    {label: 'Oldest First', value: 'year'},
    {label: 'Brand', value: 'brand'}
];

<DataView value={this.state.cars} header={header} sortOrder={this.state.sortOrder} sortField={this.state.sortField}/>

`}
                        </CodeHighlight>

                        <CodeHighlight className="-html5">
                            {`
onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
    }
    else {
        this.setState({sortOrder: 1, sortField:value, sortKey: value});
    }
}

`}
                        </CodeHighlight>

                        <h3>Filtering</h3>
                        <p>Filtering is implemented by defining the filterBy property and  calling the filter function of the component, for flexibility there is no built-in UI available so that a custom UI can be used for the filter element.
                            Here is an example that uses an input field. filterBy is a string and multiple fields can be defined with a comma separated list.</p>

                        <CodeHighlight className="-html5">
                            {`

let header =
    <div className="ui-g">
        <div className="ui-g-6 ui-md-4 filter-container">
            <div>
                <InputText placeholder="Search by brand" onKeyUp={e=>this.dv.filter(e.target.value)}/>
            </div>
        </div>
     </div>;


<DataView ref={(el) => { this.dv = el; }} value={this.state.cars} filterBy={"brand"} header={header} />

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
                                    <td>layout</td>
                                    <td>string</td>
                                    <td>list</td>
                                    <td>Layout of the items, valid values are "list" and "grid".</td>
                                </tr>
                                <tr>
                                    <td>paginator</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When specified as true, enables the pagination.</td>
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
                                    <td>pageLinks</td>
                                    <td>number</td>
                                    <td>5</td>
                                    <td>Number of page links to display in paginator.</td>
                                </tr>
                                <tr>
                                    <td>rowsPerPageOptions</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>Array of integer values to display inside rows per page dropdown.</td>
                                </tr>
                                <tr>
                                    <td>paginatorPosition</td>
                                    <td>string</td>
                                    <td>bottom</td>
                                    <td>Position of the paginator, options are "top","bottom" or "both".</td>
                                </tr>
                                <tr>
                                    <td>lazy</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines if data is loaded and interacted with in lazy manner.</td>
                                </tr>
                                <tr>
                                    <td>emptyMessage</td>
                                    <td>string</td>
                                    <td>No records found.</td>
                                    <td>Text to display when there is no data.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets the option and returns the content for it.</td>
                                </tr>
                                <tr>
                                    <td>filterBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Comma separated list of fields in the object graph to search against.</td>
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
                                    <td>onLazyLoad</td>
                                    <td>event.first = First row offset  <br/>
                                        event.rows = Number of rows per page
                                    </td>
                                    <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>
                                </tr>
                                <tr>
                                    <td>onSort</td>
                                    <td>event.field: Field to sort against. <br />
                                        event.order: Sort order as integer. <br /></td>
                                    <td>Callback to invoke on sort.</td>
                                </tr>
                                <tr>
                                    <td>onPage</td>
                                    <td>event.first: New first row index. <br />
                                        event.rows: Rows per page. <br /></td>
                                    <td>Callback to invoke on pagination.</td>
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
                                        <td>ui-dataview</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-dataview-header</td>
                                        <td>Header section.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-dataview-footer</td>
                                        <td>Footer section.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-dataview-content</td>
                                        <td>Container of items.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Dependencies</h3>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/dataview" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class DataViewDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false};
        this.carservice = new CarService();
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
        }
        else {
            this.setState({sortOrder: 1, sortField:value, sortKey: value});
        }
    }
    itemTemplate(car,layout) {
        if(!car) {
            return;
        }

        let src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        if(layout === 'list') {
            return (
                <div className="ui-g" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                    <div className="ui-g-12 ui-md-3">
                        <img src={src} alt={car.brand}/>
                    </div>
                    <div className="ui-g-12 ui-md-8 car-details">
                        <div className="ui-g">
                            <div className="ui-g-2 ui-sm-6">Vin:</div>
                            <div className="ui-g-10 ui-sm-6">{car.vin}</div>

                            <div className="ui-g-2 ui-sm-6">Year:</div>
                            <div className="ui-g-10 ui-sm-6">{car.year}</div>

                            <div className="ui-g-2 ui-sm-6">Brand:</div>
                            <div className="ui-g-10 ui-sm-6">{car.brand}</div>

                            <div className="ui-g-2 ui-sm-6">Color:</div>
                            <div className="ui-g-10 ui-sm-6">{car.color}</div>
                        </div>
                    </div>

                    <div className="ui-g-12 ui-md-1 search-icon" style={{marginTop:'40px'}}>
                        <Button icon="fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })}></Button>
                    </div>
                </div>
            );
        }
        if(layout === 'grid') {
            return (
                <div style={{ padding: '.5em' }} className="ui-g-12 ui-md-3">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    <i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer' }}></i>
                </Panel>
                </div>
            );
        }
    }

    render() {
        let sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];

        let header =
            <div className="ui-g">
                <div className="ui-g-12 ui-md-4">
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} autoWidth={false} style={{minWidth:'15em'}}/>
                </div>
                <div className="ui-g-6 ui-md-4 filter-container">
                    <div style={{position:'relative'}}>
                        <InputText placeholder="Search by brand" onKeyUp={e=>this.dv.filter(e.target.value)}/>
                    </div>
                </div>
                <div className="ui-g-6 ui-md-4" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions onClick={(e)=>this.dv.changeLayout(e.originalEvent,e.layout)}/>
                </div>
             </div>;


        return (

            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataView</h1>
                        <p>DataView displays data in grid or list layout with pagination, sorting and filtering features.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataView ref={(el) => { this.dv = el; }} value={this.state.cars} filterBy={"brand"} itemTemplate={this.itemTemplate.bind(this)}
                              paginatorPosition={'both'} paginator={true} rows={20} header={header} sortOrder={this.state.sortOrder} sortField={this.state.sortField}/>


                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ textAlign: 'center' }}><img src={\`showcase/resources/demo/images/car/\${this.state.selectedCar.brand}.png\`} alt={this.state.selectedCar.brand} /></div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Vin: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.vin}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Year: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.year}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Brand: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.brand}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Color: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.color}</div>
                                </div>
                            </div>)
                        }
                    </Dialog>
                </div>
                <DataViewDoc/>
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