import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class PickListDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { PickList } from 'primereact/picklist';
import ProductService from '../service/ProductService';
import './PickListDemo.css';

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
                    <img src={\`showcase/demo/images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="picklist-demo">
                <div className="card">
                    <PickList source={this.state.source} target={this.state.target} itemTemplate={this.itemTemplate}
                        sourceHeader="Available" targetHeader="Selected"
                        sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                        onChange={this.onChange}></PickList>
                </div>
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
import { PickList } from 'primereact/picklist';
import ProductService from '../service/ProductService';
import './PickListDemo.css';

const PickListDemo = () => {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={\`showcase/demo/images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="picklist-demo">
            <div className="card">
                <PickList source={source} target={target} itemTemplate={itemTemplate}
                    sourceHeader="Available" targetHeader="Selected"
                    sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                    onChange={onChange}></PickList>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import ProductService from '../service/ProductService';
import './PickListDemo.css';

const PickListDemo = () => {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={\`showcase/demo/images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="picklist-demo">
            <div className="card">
                <PickList source={source} target={target} itemTemplate={itemTemplate}
                    sourceHeader="Available" targetHeader="Selected"
                    sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                    onChange={onChange}></PickList>
            </div>
        </div>
    );
}
                `
            }
        };

        this.extFiles = {
            'src/demo/PickListDemo.css': {
                content: `
.picklist-demo .product-item {
    display: flex;
    align-items: center;
    padding: .5rem;
    width: 100%;
}

.picklist-demo .product-item img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
}

.picklist-demo .product-item .product-list-detail {
    flex: 1 1 0;
}

.picklist-demo .product-item .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.picklist-demo .product-item .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
}

.picklist-demo .product-item .product-category {
    vertical-align: middle;
    line-height: 1;
}

@media screen and (max-width: 576px) {
    .picklist-demo .product-item {
        flex-wrap: wrap;
    }

    .picklist-demo .product-item .image-container {
        width: 100%;
        text-align: center;
    }

    .picklist-demo .product-item img {
        margin: 0 0 1rem 0;
        width: 100px;
    }
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
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { PickList } from 'primereact/picklist';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>PickList requires two arrays as <i>source</i> and <i>target</i> lists, an <i>itemTemplate</i> for the item content and <i>onChange</i> callback to update the value after reorder or transfer.</p>
<CodeHighlight>
{`
const onChange = (e) => {
    setSource(e.source);
    setTarget(e.target);
}
`}
</CodeHighlight>
<CodeHighlight>
{`
<PickList source={source} target={target} itemTemplate={itemTemplate}
    onChange={onChange} />
`}
</CodeHighlight>


                        <h5>Headers</h5>
                        <p><i>sourceHeader</i> and <i>targetHeader</i> properties are used to define captions for the lists that accept simple strings or JSX for custom content.</p>

<CodeHighlight>
{`
<PickList source={source} target={target} itemTemplate={itemTemplate}
    onChange={onChange} sourceHeader="Available" targetHeader="Seleced"/>
`}
</CodeHighlight>

                        <h5>Properties</h5>
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
                                        <td>sourceSelection</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Selected item in the source list.</td>
                                    </tr>
                                    <tr>
                                        <td>targetSelection</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Selected items in the target list.</td>
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
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
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
                                        <td>onSourceSelectionChange</td>
                                        <td>event.originalEvent: Browser event <br />
                                items: Selected items array</td>
                                        <td>Callback to invoke when items are selected within source list.</td>
                                    </tr>
                                    <tr>
                                        <td>onTargetSelectionChange</td>
                                        <td>event.originalEvent: Browser event <br />
                                items: Selected items array</td>
                                        <td>Callback to invoke when items are selected within target list.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
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

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'PickListDemo', sources: this.sources, service: 'ProductService', data: 'products-small', extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
