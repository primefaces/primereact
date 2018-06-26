import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { DataList } from '../../components/datalist/DataList';
import { Dialog } from '../../components/dialog/Dialog';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        return (
            <div className="ui-g ui-fluid car-item">
                <div className="ui-g-12 ui-md-3">
                    <i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })}></i>
                    <img src={src} alt={car.brand} />
                </div>
                <div className="ui-g-12 ui-md-9 car-details">
                    <div className="ui-g">
                        <div className="ui-g-2 ui-sm-6">Vin: </div>
                        <div className="ui-g-10 ui-sm-6">{car.vin}</div>
                        
                        <div className="ui-g-2 ui-sm-6">Year: </div>
                        <div className="ui-g-10 ui-sm-6">{car.year}</div>
                        
                        <div className="ui-g-2 ui-sm-6">Brand: </div>
                        <div className="ui-g-10 ui-sm-6">{car.brand}</div>
                        
                        <div className="ui-g-2 ui-sm-6">Color: </div>
                        <div className="ui-g-10 ui-sm-6">{car.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let selectedCarDialog = this.state.selectedCar && <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
            <div className="ui-g car-item" style={{padding: 0, textAlign: 'center'}}>
                    <div className="ui-g-12">
                        <img src={'showcase/resources/demo/images/car/' + this.state.selectedCar.brand + '.png'} alt={this.state.selectedCar.brand}/>
                    </div>
                    <div className="ui-g-4">Vin: </div>
                    <div className="ui-g-8">{this.state.selectedCar.vin}</div>
                    
                    <div className="ui-g-4">Year: </div>
                    <div className="ui-g-8">{this.state.selectedCar.year}</div>
                    
                    <div className="ui-g-4">Brand: </div>
                    <div className="ui-g-8">{this.state.selectedCar.brand}</div>
                    
                    <div className="ui-g-4">Color: </div>
                    <div className="ui-g-8">{this.state.selectedCar.color}</div>
            </div>
        </Dialog>;
        
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataList</h1>
                        <p>DataList displays data in list layout.</p>
                    </div>
                </div>

                <div className="content-section implementation datalist-demo">
                    <h3>Basic</h3>

                    <DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5} header="List of Cars"/>
                    {selectedCarDialog}
                    
                </div>
                <DataListDoc></DataListDoc>
            </div>
        );
    }
}

export class DataListDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {DataList} from 'primereact/datalist';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataList requires a collection of items as its value and a template content to display where each
               item can be accessed using the implicit variable.Throughout the samples, a car interface having vin,
               brand, year and color properties are used to define an object to be displayed by the datalist.
               Cars are loaded by a CarService that connects to a server to fetch the cars with a axios.
            </p>
<CodeHighlight className="language-jsx">
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
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
}

`}
</CodeHighlight>

            <p>Here is a sample DataList that displays a list of cars.</p>
<CodeHighlight className="language-jsx">
{`
<DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={5}></DataList>

`}
</CodeHighlight>

            <h3>Paginator</h3>
            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
<CodeHighlight className="language-jsx">
{`
<DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5} header="List of Cars"/>

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
                            <td>rows</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of rows to display per page.</td>
                        </tr>
                        <tr>
                            <td>first</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Number of page to display first data item.</td>
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
                            <td>paginatorTemplate</td>
                            <td>string</td>
                            <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                            <td>Template of the paginator.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label of header.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label of footer.</td>
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datalist" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { DataList } from 'primereact/datalist';
import { Dialog } from 'primereact/dialog';
import { CarService } from '../service/CarService';

export class DataListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        return (
            <div className="ui-g ui-fluid car-item">
                <div className="ui-g-12 ui-md-3">
                    <i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })}></i>
                    <img src={src} alt={car.brand} />
                </div>
                <div className="ui-g-12 ui-md-9 car-details">
                    <div className="ui-g">
                        <div className="ui-g-2 ui-sm-6">Vin: </div>
                        <div className="ui-g-10 ui-sm-6">{car.vin}</div>
                        
                        <div className="ui-g-2 ui-sm-6">Year: </div>
                        <div className="ui-g-10 ui-sm-6">{car.year}</div>
                        
                        <div className="ui-g-2 ui-sm-6">Brand: </div>
                        <div className="ui-g-10 ui-sm-6">{car.brand}</div>
                        
                        <div className="ui-g-2 ui-sm-6">Color: </div>
                        <div className="ui-g-10 ui-sm-6">{car.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let selectedCarDialog = this.state.selectedCar && <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
            <div className="ui-g car-item" style={{padding: 0, textAlign: 'center'}}>
                    <div className="ui-g-12">
                        <img src={'showcase/resources/demo/images/car/' + this.state.selectedCar.brand + '.png'} alt={this.state.selectedCar.brand}/>
                    </div>
                    <div className="ui-g-4">Vin: </div>
                    <div className="ui-g-8">{this.state.selectedCar.vin}</div>
                    
                    <div className="ui-g-4">Year: </div>
                    <div className="ui-g-8">{this.state.selectedCar.year}</div>
                    
                    <div className="ui-g-4">Brand: </div>
                    <div className="ui-g-8">{this.state.selectedCar.brand}</div>
                    
                    <div className="ui-g-4">Color: </div>
                    <div className="ui-g-8">{this.state.selectedCar.color}</div>
            </div>
        </Dialog>;
        
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataList</h1>
                        <p>DataList displays data in list layout.</p>
                    </div>
                </div>

                <div className="content-section implementation datalist-demo">
                    <h3>Basic</h3>

                    <DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5} header="List of Cars"/>
                    {selectedCarDialog}
                    
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