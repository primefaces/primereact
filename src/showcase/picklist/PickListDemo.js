import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PickList } from '../../components/picklist/PickList';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import './PickListDemo.scss';

export class PickListDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            source: [],
            target: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ source: data }));
    }

    onChange(event) {
        this.setState({
            source: event.source,
            target: event.target
        });
    }

    itemTemplate(item) {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`showcase/demo/images/product/${item.image}`} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="pickList">
                        <h1>PickList</h1>
                        <p>PickList is used to reorder items between different lists.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation picklist-demo">
                    <div className="card">
                        <PickList source={this.state.source} target={this.state.target} itemTemplate={this.itemTemplate}
                            sourceHeader="Available" targetHeader="Selected"
                            sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                            onChange={this.onChange}></PickList>
                    </div>
                </div>

                <PickListDoc />
            </div>
        );
    }
}

export class PickListDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {PickList} from 'primereact/picklist';
import {CarService} from '../service/CarService';

export class PickListDemo extends Component {

    constructor() {
        super();
        this.state = {
            source: [],
            target: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({source: data}));
    }

    onChange(event) {
        this.setState({
            source: event.source,
            target: event.target
        });
    }

    carTemplate(car) {
        let imageSource = 'showcase/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} style={{display: 'inline-block', margin: '2px 0 2px 2px',width:48}} />
                <div style={{fontSize: '14px', float: 'right', margin: '15px 5px 0 0'}}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <PickList source={this.state.source} target={this.state.target} itemTemplate={this.carTemplate}
                    sourceHeader="Available" targetHeader="Selected" responsive={true}
                    sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
                    onChange={this.onChange}></PickList>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {PickList} from 'primereact/picklist';
import {CarService} from '../service/CarService';

const PickListDemo = () => {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const carTemplate = (car) => {
        let imageSource = 'showcase/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} style={{display: 'inline-block', margin: '2px 0 2px 2px',width:48}} />
                <div style={{fontSize: '14px', float: 'right', margin: '15px 5px 0 0'}}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    };

    return (
        <div>
            <PickList source={source} target={target} itemTemplate={carTemplate}
                sourceHeader="Available" targetHeader="Selected" responsive={true}
                sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
                onChange={onChange}></PickList>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {PickList} from 'primereact/picklist';
import {CarService} from '../service/CarService';

const PickListDemo = () => {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event: any) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const carTemplate = (car: any) => {
        let imageSource = 'showcase/demo/images/car/' + car.brand + '.png';

        return (
            <div className="p-clearfix">
                <img src={imageSource} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand} style={{display: 'inline-block', margin: '2px 0 2px 2px',width:48}} />
                <div style={{fontSize: '14px', float: 'right', margin: '15px 5px 0 0'}}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    };

    return (
        <div>
            <PickList source={source} target={target} itemTemplate={carTemplate}
                sourceHeader="Available" targetHeader="Selected" responsive={true}
                sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
                onChange={onChange}></PickList>
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

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight lang="js">
                            {`
import {PickList} from 'primereact/picklist';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>PickList requires two arrays as <i>source</i> and <i>target</i> lists, an <i>itemTemplate</i> for the item content and <i>onChange</i> callback to update the value after reorder or transfer.</p>
                        <CodeHighlight>
                            {`
<PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate}
    onChange={(e) => this.setState({source: e.source, target: e.target})} />

`}
                        </CodeHighlight>

                        <h3>Responsive</h3>
                        <p>In responsive mode, picklist adjusts its controls based on screen size. To activate this mode, set responsive as true.</p>
                        <CodeHighlight>
                            {`
<PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate}
    onChange={(e) => this.setState({source: e.source, target: e.target})} responsive={true} />

`}
                        </CodeHighlight>

                        <h3>Headers</h3>
                        <p><i>sourceHeader</i> and <i>targetHeader</i> properties are used to define captions for the lists that accept simple strings or JSX for custom content.</p>

                        <CodeHighlight>
                            {`
<PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate}
    onChange={(e) => this.setState({source: e.source, target: e.target})} sourceHeader="Available" targetHeader="Seleced"/>

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
                                        <td>source</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of objects for the source list.</td>
                                    </tr>
                                    <tr>
                                        <td>target</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of objects for the target list.</td>
                                    </tr>
                                    <tr>
                                        <td>sourceHeader</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text for the source list caption.</td>
                                    </tr>
                                    <tr>
                                        <td>targetHeader</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text for the target list caption.</td>
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
                                        <td>sourceStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the source list element.</td>
                                    </tr>
                                    <tr>
                                        <td>targetStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the target list element.</td>
                                    </tr>
                                    <tr>
                                        <td>showSourceControls</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show buttons of source list.</td>
                                    </tr>
                                    <tr>
                                        <td>showTargetControls</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show buttons of target list.</td>
                                    </tr>
                                    <tr>
                                        <td>itemTemplate</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Function that gets the option and returns the content for it.</td>
                                    </tr>
                                    <tr>
                                        <td>metaKeySelection</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
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
                                event.source: Source list  <br />
                                event.target: Target list </td>
                                        <td>Callback to invoke when items are moved from source to target.</td>
                                    </tr>
                                    <tr>
                                        <td>onMoveToSource</td>
                                        <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                                        <td>Callback to invoke when items are moved from target to source.</td>
                                    </tr>
                                    <tr>
                                        <td>onMoveAllToSource</td>
                                        <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                                        <td>Callback to invoke when all items are moved from target to source.</td>
                                    </tr>
                                    <tr>
                                        <td>onMoveToTarget</td>
                                        <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                                        <td>Callback to invoke when items are moved from source to target.</td>
                                    </tr>
                                    <tr>
                                        <td>onMoveAllToTarget</td>
                                        <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                                        <td>Callback to invoke when all items are moved from source to target.</td>
                                    </tr>
                                    <tr>
                                        <td>onSourceSelect</td>
                                        <td>event.originalEvent: Browser event <br />
                                items: Selected items array</td>
                                        <td>Callback to invoke when items are selected within source list.</td>
                                    </tr>
                                    <tr>
                                        <td>onTargetSelect</td>
                                        <td>event.originalEvent: Browser event <br />
                                items: Selected items array</td>
                                        <td>Callback to invoke when items are selected within target list.</td>
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
                                        <td>p-picklist</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-picklist-source-controls</td>
                                        <td>Container of source list buttons.</td>
                                    </tr>
                                    <tr>
                                        <td>p-picklist-target-controls</td>
                                        <td>Container of target list buttons.</td>
                                    </tr>
                                    <tr>
                                        <td>p-picklist-buttons</td>
                                        <td>Container of buttons.</td>
                                    </tr>
                                    <tr>
                                        <td>p-picklist-listwrapper</td>
                                        <td>Parent of a list element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-picklist-list</td>
                                        <td>List element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-picklist-item</td>
                                        <td>An item in the list.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Dependencies</h3>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="PickListDemo" sources={this.sources} service="CarService" data="cars-small" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
