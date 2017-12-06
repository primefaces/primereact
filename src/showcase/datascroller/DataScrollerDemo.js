import React, { Component } from 'react';
import { DataScroller } from '../../components/datascroller/DataScroller';
import { Dialog } from '../../components/dialog/Dialog';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';

export class DataScrollerDemo extends Component {

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
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>
                    </div>
                </div>

                <div className="content-section implementation">

                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} buffer={0.4} header="Scroll Down to to Load More"/>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={`showcase/resources/demo/images/car/${this.state.selectedCar.brand}.png`} alt={this.state.selectedCar.brand}/></div>
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

                <DataScrollerDoc></DataScrollerDoc>
            </div>
        );
    }
}

export class DataScrollerDoc extends Component {

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
import {DataScroller} from 'primereact/components/datascroller/DataScroller';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataScroller requires a collection of items as its value, number of rows to load and a template content to display
               where each item can be accessed using the implicit variable.
            </p>
            <p>Here is a sample DataScroller that displays a list of cars where each load event adds 10 more rows if available.</p>
<CodeHighlight className="html">
{`
<DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10}></DataScroller>

`}
</CodeHighlight>
<CodeHighlight className="javascript">
{`
constructor() {
    super();
    this.state = { cars: [], selectedCar: null, visible: false };
    this.carservice = new CarService();
}

componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
}

carTemplate(car) {
    // return template;
}

`}
</CodeHighlight>


            <h3>Inline</h3>
            <p>By default DataScroller listens to the scroll event of window, the alternative is the inline mode where container of the DataScroller element itself is used as the event target. Set inline option to true to enable this mode.</p>
<CodeHighlight className="html">
{`
<DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} inline={true} scrollHeight="500px">
    <Header>
        Scroll Down to Load More
    </Header>
</DataScroller>

`}
</CodeHighlight>

            <h3>Lazy Loading</h3>
            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking
             onLazyLoad callback everytime paging happens. To implement lazy loading,
            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object
            that contains information about what to load.</p>
<CodeHighlight className="html">
{`
<DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} lazy={true} onLazyLoad={this.loadData.bind(this)}>
    <Header>
        Scroll Down to to Load More
    </Header>
</DataScroller>

`}
</CodeHighlight>
<CodeHighlight className="html">
{`
loadData(event) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    //add more records to the cars array
}

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
                            <td>Number of rows to fetch in a load event.</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if the event target to listen the scroll event is the element itself.</td>
                        </tr>
                        <tr>
                            <td>scrollHeight</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Max height of the content area in inline mode.</td>
                        </tr>
                        <tr>
                            <td>loader</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Reference of the target element whose click event loads the data instead of scrolling.</td>
                        </tr>
                        <tr>
                            <td>buffer</td>
                            <td>number</td>
                            <td>0.9</td>
                            <td>Number of buffer size.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
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
                            <td>event.first = First row offset <br />
                                event.rows = Number of rows per page <br /></td>
                            <td>Callback to invoke in lazy mode to load new data.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes</p>
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
                            <td>ui-datascroller</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-datascroller-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>ui-datascroller-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>ui-datascroller-content</td>
                            <td>Wrapper of item container.</td>
                        </tr>
                        <tr>
                            <td>ui-datascroller-list</td>
                            <td>Item container element.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datascroller" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class DataScrollerDemo extends Component {

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
                <DataScrollerSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>
                    </div>
                </div>

                <div className="content-section implementation">

                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} buffer={0.4} header="Scroll Down to to Load More"/>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={\`showcase/resources/demo/images/car/\${this.state.selectedCar.brand}.png\`} alt={this.state.selectedCar.brand}/></div>
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
                
                <DataScrollerDoc></DataScrollerDoc>
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