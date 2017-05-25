import React, { Component } from 'react';
import {Link} from 'react-router';
import { DataList, Header } from '../../components/datalist/DataList';
import { Dialog } from '../../components/dialog/Dialog';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class DataListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsLarge(this) });
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + "-big.gif";

        return (
            <div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', padding: '20px', borderBottom: '1px solid #D5D5D5' }}>
                <div className="ui-grid-row">
                    <div className="ui-grid-col-3" style={{ textAlign: 'center' }}><i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer', float: 'left', marginTop: '40px' }}></i><img src={src} alt={car.brand} /></div>
                    <div className="ui-grid-col-9">
                        <div className="ui-grid ui-grid-responsive ui-fluid">
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Vin: </div>
                                <div className="ui-grid-col-10">{car.vin}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Year: </div>
                                <div className="ui-grid-col-10">{car.year}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Brand: </div>
                                <div className="ui-grid-col-10">{car.brand}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Color: </div>
                                <div className="ui-grid-col-10">{car.color}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataList</h1>
                        <p>DataList displays data in list layout.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>

                    <DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5}>
                        <Header>
                            List of Cars
                        </Header>
                    </DataList>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={`showcase/resources/demo/images/car/${this.state.selectedCar.brand}-big.gif`} alt={this.state.selectedCar.brand}/></div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Vin: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.vin }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Year: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.year }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Brand: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.brand }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Color: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.color }</div>
                                    </div>
                            </div>)
                        }
                    </Dialog>
                </div>
                <DataListDoc></DataListDoc>
            </div>
        );
    }
}

export class DataListDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {DataList} from 'primereact/components/datalist/DataList';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataList requires a collection of items as its value and a template content to display where each
               item can be accessed using the implicit variable.Throughout the samples, a car interface having vin,
               brand, year and color properties are used to define an object to be displayed by the datalist.
               Cars are loaded by a CarService that connects to a server to fetch the cars with a Promise.
            </p>
<CodeHighlight className="language-markup">
{`
<DataList value={this.state.cars}></DataList>

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
<DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={5}></DataList>

`}
</CodeHighlight>

             <h3>Facets</h3>
            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>
<CodeHighlight className="language-javascript">
{`
import {DataList, Header, Footer} from 'primereact/components/datalist/DataList';

`}
</CodeHighlight>

<CodeHighlight className="language-markup">
{`
<DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)}}>
    <Header>
        List of Cars
    </Header>
</DataList>

`}
</CodeHighlight>

            <h3>Paginator</h3>
            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
<CodeHighlight className="language-markup">
{`
<DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5}>
    <Header>
        List of Cars
    </Header>
</DataList>

`}
</CodeHighlight>
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
                            <td>ui-datalist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-datalist-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>ui-datalist-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>ui-datalist-content</td>
                            <td>Wrapper of item container.</td>
                        </tr>
                        <tr>
                            <td>ui-datalist-data</td>
                            <td>A page link.</td>
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
export class DataListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsLarge(this) });
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + "-big.gif";

        return (
            <div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', padding: '20px', borderBottom: '1px solid #D5D5D5' }}>
                <div className="ui-grid-row">
                    <div className="ui-grid-col-3" style={{ textAlign: 'center' }}><i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer', float: 'left', marginTop: '40px' }}></i><img src={src} alt={car.brand} /></div>
                    <div className="ui-grid-col-9">
                        <div className="ui-grid ui-grid-responsive ui-fluid">
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Vin: </div>
                                <div className="ui-grid-col-10">{car.vin}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Year: </div>
                                <div className="ui-grid-col-10">{car.year}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Brand: </div>
                                <div className="ui-grid-col-10">{car.brand}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Color: </div>
                                <div className="ui-grid-col-10">{car.color}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataList</h1>
                        <p>DataList displays data in list layout.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>

                    <DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5}>
                        <Header>
                            List of Cars
                        </Header>
                    </DataList>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={\`showcase/resources/demo/images/car/\${this.state.selectedCar.brand}-big.gif\`} alt={this.state.selectedCar.brand}/></div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Vin: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.vin }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Year: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.year }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Brand: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.brand }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Color: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.color }</div>
                                    </div>
                            </div>)
                        }
                    </Dialog>
                </div>
                <DataListDoc></DataListDoc>
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