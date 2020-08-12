import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {OverlayPanel} from '../../components/overlaypanel/OverlayPanel';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import ProductService from '../service/ProductService';
import { Growl } from '../../components/growl/Growl';
import { Column } from '../../components/column/Column';
import { DataTable } from '../../components/datatable/DataTable';
import { AppInlineHeader } from '../../AppInlineHeader';
import './OverlayPanelDemo.scss';

export class OverlayPanelDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: null,
            selectedProduct: null
        };

        this.productService = new ProductService();
        this.onProductSelect = this.onProductSelect.bind(this);
        this.imageBody = this.imageBody.bind(this);
        this.priceBody = this.priceBody.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    onProductSelect(e) {
        this.setState({ selectedProduct: e.value }, () => {
            this.op.hide();
            this.growl.show({severity:'info', summary: 'Product Selected', detail: this.state.selectedProduct.name, life: 3000});
        });
    }

    imageBody(rowData) {
        return <img src={`showcase/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />
    }

    priceBody(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="overlayPanel">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel is a container component that can overlay other components on page.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation overlaypanel-demo">
                    <Growl ref={(el) => this.growl = el} />

                    <div className="card">
                        <Button type="button" icon="pi pi-search" label={this.state.selectedProduct ? this.state.selectedProduct.name : 'Select a Product'} onClick={(e) => this.op.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                        <OverlayPanel ref={(el) => this.op = el} showCloseIcon id="overlay_panel" style={{width: '450px'}}>
                            <DataTable value={this.state.products} selectionMode="single" paginator rows={5}
                                selection={this.state.selectedProduct} onSelectionChange={this.onProductSelect}>
                                <Column field="name" header="Name" sortable />
                                <Column header="Image" body={this.imageBody} />
                                <Column field="price" header="Price" sortable body={this.priceBody} />
                            </DataTable>
                        </OverlayPanel>
                    </div>
                </div>

                <OverlayPanelDoc></OverlayPanelDoc>
            </div>
        )
    }
}

export class OverlayPanelDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

export class OverlayPanelDemo extends Component {

    render() {
        return (
            <div>
                <Button type="button" label="Toggle" onClick={(e) => this.op.toggle(e)}/>

                <OverlayPanel ref={(el) => this.op = el} id="overlay_panel" showCloseIcon={true}>
                    <img src="showcase/demo/images/galleria/galleria1.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Galleria 1" />
                </OverlayPanel>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useRef } from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

const OverlayPanelDemo = () => {
    let op = useRef(null);

    return (
        <div>
            <Button type="button" label="Toggle" onClick={(e) => op.current.toggle(e)}/>

            <OverlayPanel ref={op} id="overlay_panel" showCloseIcon={true}>
                <img src="showcase/demo/images/galleria/galleria1.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Galleria 1" />
            </OverlayPanel>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

const OverlayPanelDemo = () => {
    let op = useRef<any>(null);

    return (
        <div>
            <Button type="button" label="Toggle" onClick={(e) => op.current.toggle(e)}/>

            <OverlayPanel ref={op} id="overlay_panel" showCloseIcon={true}>
                <img src="showcase/demo/images/galleria/galleria1.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Galleria 1" />
            </OverlayPanel>
        </div>
    )
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
<CodeHighlight lang="javascript">
{`
import {OverlayPanel} from 'primereact/overlaypanel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<CodeHighlight>
{`
<Button type="button" label="Basic" onClick={(e) => this.op.toggle(e)} />

<OverlayPanel ref={(el) => this.op = el}>
    <img src="showcase/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

`}
</CodeHighlight>

            <h3>Dismissable and CloseIcon</h3>
            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior.
               Additionally enablign showCloseIcon property displays a close icon at the top right corner to close the panel.</p>

<CodeHighlight>
{`
<OverlayPanel ref={(el) => {this.op = el;}} showCloseIcon={true} dismissable={true}>
    <img src="showcase/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

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
                            <td>dismissable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables to hide the overlay when outside is clicked.</td>
                        </tr>
                        <tr>
                            <td>showCloseIcon</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays a close icon at top right corner.</td>
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
                            <td>appendTo</td>
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
                        </tr>
                        <tr>
                            <td>ariaCloseLabel</td>
                            <td>string</td>
                            <td>close</td>
                            <td>Aria label of the close icon.</td>
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
                            <td>onHide</td>
                            <td>-</td>
                            <td>Callback to invoke when overlay gets hidden.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Methods</h3>
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
                            <td>toggle</td>
                            <td>event: Browser event</td>
                            <td>Toggles the visiblity of the overlay.</td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>event: Browser event <br />
                                target: Optional target if event.target should not be used</td>
                            <td>Shows the overlay.</td>
                        </tr>
                        <tr>
                            <td>hide</td>
                            <td>-</td>
                            <td>Hides the overlay.</td>
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
                            <td>p-overlaypanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-content</td>
                            <td>Content of the panel.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-close</td>
                            <td>Close icon.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="OverlayPanelDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
