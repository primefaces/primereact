import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {OrderList} from '../../components/orderlist/OrderList';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class OrderListDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };

        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        const imageSource = 'showcase/resources/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px', width:48 }} />
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
                        <p>OrderList is used to sort a collection.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("orderList")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6">
                            <OrderList value={this.state.cars} dragdrop={true} itemTemplate={this.carTemplate}
                                responsive={true} header="List of Cars" listStyle={{height: '20em'}}
                                onChange={(e) => this.setState({cars: e.value})} />
                        </div>
                        <div className="p-col-12 p-md-6">
                            <ul>
                                {this.state.cars.map(car => <li key={car.vin}>{car.brand} - {car.year} - {car.color}</li>)}
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

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {OrderList} from 'primereact/orderlist';
import {CarService} from '../service/CarService';

export class OrderListDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };

        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        const imageSource = 'showcase/resources/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px', width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="p-grid">
                    <div className="p-col-12 p-md-6">
                        <OrderList value={this.state.cars} dragdrop={true} itemTemplate={this.carTemplate}
                            responsive={true} header="List of Cars" listStyle={{height: '20em'}}
                            onChange={(e) => this.setState({cars: e.value})} />
                    </div>
                    <div className="p-col-12 p-md-6">
                        <ul>
                            {this.state.cars.map(car => <li key={car.vin}>{car.brand} - {car.year} - {car.color}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect } from 'react';
import {OrderList} from 'primereact/orderlist';
import {CarService} from '../service/CarService';

const OrderListDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car) => {
        const imageSource = 'showcase/resources/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px', width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    };

    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <OrderList value={cars} dragdrop={true} itemTemplate={carTemplate}
                        responsive={true} header="List of Cars" listStyle={{height: '20em'}}
                        onChange={(e) => setCars(e.value)} />
                </div>
                <div className="p-col-12 p-md-6">
                    <ul>
                        {cars.map(car => <li key={car.vin}>{car.brand} - {car.year} - {car.color}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect } from 'react';
import {OrderList} from 'primereact/orderlist';
import {CarService} from '../service/CarService';

const OrderListDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car: any) => {
        const imageSource = 'showcase/resources/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px', width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    };

    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <OrderList value={cars} dragdrop={true} itemTemplate={carTemplate}
                        responsive={true} header="List of Cars" listStyle={{height: '20em'}}
                        onChange={(e) => setCars(e.value)} />
                </div>
                <div className="p-col-12 p-md-6">
                    <ul>
                        {cars.map((car: any) => <li key={car.vin}>{car.brand} - {car.year} - {car.color}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/orderlist" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="OrderListDemo" sources={this.sources} service="CarService" data="cars-small" />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {OrderList} from 'primereact/orderlist';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OrderList requires an array as its value, a template for its content where each item in the array can be accessed inside the template and <i>onChange</i>
                    callback to update the value after reorder.
            </p>
<CodeHighlight className="language-jsx">
{`
<OrderList value={this.state.cars} itemTemplate={this.carTemplate} header="Responsive Cars" onChange={(e) => this.setState({cars: e.value})}></OrderList>

`}
</CodeHighlight>

            <h3>DragDrop</h3>
            <p>Items can be reordered using drag and drop by enabling <i>dragdrop</i> property.</p>

<CodeHighlight className="language-jsx">
{`
<OrderList value={this.state.cars} itemTemplate={this.carTemplate} dragdrop={true} onChange={(e) => this.setState({cars: e.value})}></OrderList>

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>In responsive mode, orderlist adjusts its controls based on screen size. To activate this mode, set responsive as true.</p>
<CodeHighlight className="language-jsx">
{`
<OrderList value={this.state.cars} itemTemplate={this.carTemplate} responsive={true}
        onChange={(e) => this.setState({cars: e.value})}></OrderList>

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
                            <td>An array of objects to reorder.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Text for the caption</td>
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
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the list and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
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
                            <td>onChange</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Reordered list</td>
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
                            <td>p-orderlist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-list</td>
                            <td>List container.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-item</td>
                            <td>An item in the list</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
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
        );
    }
}
