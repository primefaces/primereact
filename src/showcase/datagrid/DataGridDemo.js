import React, { Component } from 'react';
import {Link} from 'react-router';
import { DataGrid, Header } from '../../components/datagrid/DataGrid';
import { Dialog } from '../../components/dialog/Dialog';
import { Panel } from '../../components/panel/Panel';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class DataGridDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsLarge(this) });
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div style={{ padding: '3px' }} className="ui-g-12 ui-md-3">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={`public/showcase/resources/demo/images/car/${car.brand}.gif`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    <i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer' }}></i>
                </Panel>
            </div>
        );
    }

    render() {

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataGrid</h1>
                        <p>DataGrid displays data in grid format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>

                    <DataGrid value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={20}>
                        <Header>
                            List of Cars
                        </Header>
                    </DataGrid>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ textAlign: 'center' }}><img src={`public/showcase/resources/demo/images/car/${this.state.selectedCar.brand}-big.gif`} alt={this.state.selectedCar.brand} /></div>
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
                <DataGridDoc></DataGridDoc>
            </div>
        );
    }
}

export class DataGridDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {DataGrid} from 'primereact';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataGrid requires a collection of items as its value and a template to display each item.
               Template should contain a div element as a wrapper with <Link to="/grid"> Grid CSS</Link> style class of your choice
               to define the grid layout.Throughout the samples, a car interface having vin, brand, year 
               and color properties are used to define an object to be displayed by the datagrid.
               Cars are loaded by a CarService that connects to a server to fetch the cars with a Promise.
            </p>
<CodeHighlight className="language-markup">
{`
<DataGrid value={this.state.cars}></DataGrid>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = { cars: [], selectedCar: null, visible: false };
    this.carservice = new CarService();
}

componentDidMount() {
    this.setState({ cars: this.carservice.getCarsLarge(this) });
}

`}
</CodeHighlight>

            <p>Here is a sample DataList that displays a list of cars.</p>
<CodeHighlight className="language-markup">
{`
<DataGrid value={this.state.cars} itemTemplate={this.carTemplate.bind(this)}></DataGrid>

`}
</CodeHighlight>

             <h3>Facets</h3>
            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>
<CodeHighlight className="language-javascript">
{`
import {DataGrid, Header, Footer} from 'primereact';

`}
</CodeHighlight>

<CodeHighlight className="language-markup">
{`
<DataGrid value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={20}>
    <Header>
        List of Cars
    </Header>
</DataGrid>

`}
</CodeHighlight>

            <h3>Paginator</h3>
            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
<CodeHighlight className="language-markup">
{`
<DataGrid value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={20}>
    <Header>
        List of Cars
    </Header>
</DataGrid>

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>DataGrid is responsive by default, when the screen gets smaller than a certain value, items are displayed as stacked.</p>

            <h3>Attributes</h3>
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
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display.</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of rows to display per page.</td>
                        </tr>
                        <tr>
                            <td>paginator</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified as true, enables the pagination.</td>
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
                            <td>lazy</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if data is loaded and interacted with in lazy manner.</td>
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
                            <td>paginatorPosition</td>
                            <td>string</td>
                            <td>bottom</td>
                            <td>Position of the paginator, options are "top","bottom" or "both".</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
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
                            <td>ui-datagrid</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-datagrid-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>ui-datagrid-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>ui-datagrid-content</td>
                            <td>Container of items.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class DataGridDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsLarge(this) });
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div style={{ padding: '3px' }} className="ui-g-12 ui-md-3">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={\`public/showcase/resources/demo/images/car/\${car.brand}.gif\`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    <i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer' }}></i>
                </Panel>
            </div>
        );
    }

    render() {

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataGrid</h1>
                        <p>DataGrid displays data in grid format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>

                    <DataGrid value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={20}>
                        <Header>
                            List of Cars
                        </Header>
                    </DataGrid>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ textAlign: 'center' }}><img src={\`public/showcase/resources/demo/images/car/\${this.state.selectedCar.brand}-big.gif\`} alt={this.state.selectedCar.brand} /></div>
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
                <DataGridDoc></DataGridDoc>
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