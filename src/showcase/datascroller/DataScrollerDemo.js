import React, {Component} from 'react';
import {DataScroller} from '../../components/datascroller/DataScroller';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';

export class DataScrollerDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="dataview-demo">
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataScroller")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    Demo is at the bottom of this page.
                </div>

                <DataScrollerDoc />

                <div className="content-section implementation">
                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate}
                            rows={10} buffer={0.4} header="List of Cars" />
                </div>

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
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {DataScroller} from 'primereact/datascroller';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>DataScroller requires a collection of items as its value, number of rows to load and a template content to display. Here is a sample DataScroller that displays a
                list of cars where each load event adds 10 more rows if available.</p>
<CodeHighlight className="language-jsx">
{`
<DataScroller value={this.state.cars} itemTemplate={carTemplate} rows={10}></DataScroller>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {
        cars: []
    };
    this.carservice = new CarService();
    this.carTemplate = this.carTemplate.bind(this);
}

componentDidMount() {
    this.carservice.getCars().then(data => this.setState({cars: data}));
}

carTemplate(car) {
    // return content;
}

`}
</CodeHighlight>


            <h3>Inline</h3>
            <p>By default DataScroller listens to the scroll event of window, the alternative is the inline mode where container of the DataScroller element itself is used as the event target. Set <i>inline</i> option to true to enable this mode.</p>
<CodeHighlight className="language-jsx">
{`
<DataScroller value={this.state.cars} itemTemplate={carTemplate} rows={10} inline={true}></DataScroller>

`}
</CodeHighlight>

            <h3>Lazy Loading</h3>
            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking
             onLazyLoad callback everytime paging happens. To implement lazy loading,
            enable <i>lazy</i> property and provide a method callback using <i>onLazyLoad</i> that actually loads the data from a remote datasource. onLazyLoad gets an event object
            that contains information about what to load.</p>

<CodeHighlight className="language-jsx">
{`
<DataScroller value={this.state.cars} itemTemplate={carTemplate} rows={10} lazy={true} onLazyLoad={this.loadData}></DataScroller>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
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
                            <td>Function that gets an item in the value and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Label of header.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
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
                            <td>p-datascroller</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-content</td>
                            <td>Wrapper of item container.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-list</td>
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
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {DataScroller} from 'primereact/datascroller';
import {CarService} from '../service/CarService';

export class DataScrollerDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={'showcase/resources/demo/images/car/\${car.brand}.png'} alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="dataview-demo">
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    Demo is at the bottom of this page.
                </div>

                <div className="content-section implementation">
                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate}
                            rows={10} buffer={0.4} header="List of Cars" />
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
