import React, { Component } from 'react';
import {Link} from 'react-router';
import {OrderList} from '../../components/orderlist/OrderList';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class OrderListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [] };
        this.carservice = new CarService();
    }

    onReorderCars(e) {
        this.setState({ cars: e.value });
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="ui-helper-clearfix">
                <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px',width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>OrderList</h1>
                        <p>OrderList is used to sort a collection. When the position of an item changes, the backend array is updated as well.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6">
                            <OrderList value={this.state.cars} dragdrop={true} itemTemplate={this.carTemplate.bind(this)} responsive={true} header="Responsive Cars" listStyle={{ height: '250px' }} onReorder={this.onReorderCars.bind(this)}></OrderList>
                        </div>
                        <div className="ui-g-12 ui-md-6">
                            <ul>
                                {
                                    this.state.cars && this.state.cars.map((car, i) => {
                                        return (
                                            <li key={i + '_item'} style={{ listStyleType: 'none' }}>{car.brand} - {car.year} - {car.color}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <OrderListDoc></OrderListDoc>
            </div>
        );
    }
}

export class OrderListDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {OrderList} from 'primereact/components/orderlist/OrderList';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OrderList requires an array as its value and a template for its content where
               each item in the array can be accessed inside the template.
            </p>
<CodeHighlight className="html">
{`
<OrderList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} header="Responsive Cars" listStyle={{ height: '250px' }} onReorder={this.onReorderCars.bind(this)}></OrderList>

`}
</CodeHighlight>
<CodeHighlight className="javascript">
{`
constructor() {
    super();
    this.state = { cars: [] };
    this.carservice = new CarService();
}

onReorderCars(e) {
    this.setState({ cars: e.value });
}

`}
</CodeHighlight>

            <h3>DragDrop</h3>
            <p>Items can be reordered using drag and drop by enabling dragdrop property along with dragdropScope to avoid conflict with other drag drop events on view.</p>
<CodeHighlight className="html">
{`
<OrderList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} dragdrop={true} onReorder={this.onReorderCars.bind(this)}></OrderList>

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>In responsive mode, orderlist adjusts its controls based on screen size. To activate this mode, set responsive as true.</p>
<CodeHighlight className="html">
{`
<OrderList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} responsive={true} header="Responsive Cars" listStyle={{ height: '250px' }} onReorder={this.onReorderCars.bind(this)}></OrderList>

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
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to reorder.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Text for the caption</td>
                        </tr>
                        <tr>
                            <td>listStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the list element.</td>
                        </tr>
                        <tr>
                            <td>responsive</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled orderlist adjusts its controls based on screen size.</td>
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
                            <td>dragdrop</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to enable dragdrop based reordering.</td>
                        </tr>
                        <tr>
                            <td>dragdropScope</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique key of drag drop events to avoid conflict with other drag drop events on the page.</td>
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
                            <td>onReorder</td>
                            <td>event.first: browser eventt</td>
                            <td>Callback to invoke when list is reordered.</td>
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
                            <td>ui-orderlist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-orderlist-list</td>
                            <td>List container.</td>
                        </tr>
                        <tr>
                            <td>ui-orderlist-item</td>
                            <td>An item in the list</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/orderlist" className="btn-viewsource" target="_blank">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class OrderListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [] };
        this.carservice = new CarService();
    }

    onReorderCars(e) {
        this.setState({ cars: e.value });
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsSmall(this) });
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="ui-helper-clearfix">
                <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px' }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>OrderList</h1>
                        <p>OrderList is used to sort a collection. When the position of an item changes, the backend array is updated as well.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6">
                            <OrderList value={this.state.cars} dragdrop={true} itemTemplate={this.carTemplate.bind(this)} responsive={true} header="Responsive Cars" listStyle={{ height: '250px' }} onReorder={this.onReorderCars.bind(this)}></OrderList>
                        </div>
                        <div className="ui-g-12 ui-md-6">
                            <ul>
                                {
                                    this.state.cars && this.state.cars.map((car, i) => {
                                        return (
                                            <li key={i + '_item'} style={{ listStyleType: 'none' }}>{car.brand} - {car.year} - {car.color}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <OrderListDoc></OrderListDoc>
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