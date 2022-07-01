import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const InplaceDoc = memo(() => {

        const sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

export class InplaceDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            products: []
        };

        this.productService = new ProductService();
        this.onOpen = this.onOpen.bind(this);
    }

    onOpen() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Input</h5>
                    <Inplace closable>
                        <InplaceDisplay>
                            {this.state.text || 'Click to Edit'}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} autoFocus />
                        </InplaceContent>
                    </Inplace>

                    <h5>Image</h5>
                    <Inplace>
                        <InplaceDisplay>
                            <span className="inline-flex align-items-center">
                                <span className="pi pi-search"></span>
                                <span className="ml-2">View Picture</span>
                            </span>
                        </InplaceDisplay>
                        <InplaceContent>
                            <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                        </InplaceContent>
                    </Inplace>

                    <h5>Lazy Data</h5>
                    <Inplace onOpen={this.onOpen}>
                        <InplaceDisplay>
                            View Data
                    </InplaceDisplay>
                        <InplaceContent>
                            <DataTable value={this.state.products}>
                                <Column field="code" header="Code"></Column>
                                <Column field="name" header="Name"></Column>
                                <Column field="category" header="Category"></Column>
                                <Column field="quantity" header="Quantity"></Column>
                            </DataTable>
                        </InplaceContent>
                    </Inplace>
                </div>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const InplaceDemo = () => {
    const [text, setText] = useState('');
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    const onOpen = () => {
        productService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <div>
            <div className="card">
                <h5>Input</h5>
                <Inplace closable>
                    <InplaceDisplay>
                        {text || 'Click to Edit'}
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                    </InplaceContent>
                </Inplace>

                <h5>Image</h5>
                <Inplace>
                    <InplaceDisplay>
                        <span className="inline-flex align-items-center">
                            <span className="pi pi-search"></span>
                            <span className="ml-2">View Picture</span>
                        </span>
                    </InplaceDisplay>
                    <InplaceContent>
                        <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    </InplaceContent>
                </Inplace>

                <h5>Lazy Data</h5>
                <Inplace onOpen={onOpen}>
                    <InplaceDisplay>
                        View Data
                </InplaceDisplay>
                    <InplaceContent>
                        <DataTable value={products}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </InplaceContent>
                </Inplace>
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const InplaceDemo = () => {
    const [text, setText] = useState('');
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    const onOpen = () => {
        productService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <div>
            <div className="card">
                <h5>Input</h5>
                <Inplace closable>
                    <InplaceDisplay>
                        {text || 'Click to Edit'}
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                    </InplaceContent>
                </Inplace>

                <h5>Image</h5>
                <Inplace>
                    <InplaceDisplay>
                        <span className="inline-flex align-items-center">
                            <span className="pi pi-search"></span>
                            <span className="ml-2">View Picture</span>
                        </span>
                    </InplaceDisplay>
                    <InplaceContent>
                        <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    </InplaceContent>
                </Inplace>

                <h5>Lazy Data</h5>
                <Inplace onOpen={onOpen}>
                    <InplaceDisplay>
                        View Data
                </InplaceDisplay>
                    <InplaceContent>
                        <DataTable value={products}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </InplaceContent>
                </Inplace>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
    <script src="./ProductService.js"></script>

    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/inplace/inplace.min.js"></script>
    <script src="https://unpkg.com/primereact/column/column.min.js"></script>
    <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>`,
            content: `
const { useState } = React;
const { Inplace, InplaceDisplay, InplaceContent } = primereact.inplace;
const { InputText } = primereact.inputtext;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;

const InplaceDemo = () => {
    const [text, setText] = useState('');
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    const onOpen = () => {
        productService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <div>
            <div className="card">
                <h5>Input</h5>
                <Inplace closable>
                    <InplaceDisplay>
                        {text || 'Click to Edit'}
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                    </InplaceContent>
                </Inplace>

                <h5>Image</h5>
                <Inplace>
                    <InplaceDisplay>
                        <span className="inline-flex align-items-center">
                            <span className="pi pi-search"></span>
                            <span className="ml-2">View Picture</span>
                        </span>
                    </InplaceDisplay>
                    <InplaceContent>
                        <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    </InplaceContent>
                </Inplace>

                <h5>Lazy Data</h5>
                <Inplace onOpen={onOpen}>
                    <InplaceDisplay>
                        View Data
                </InplaceDisplay>
                    <InplaceContent>
                        <DataTable value={products}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </InplaceContent>
                </Inplace>
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Inplace } from 'primereact/inplace';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/inplace/inplace.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Inplace requires InplaceDisplay and InplaceContent component as children to define the content to display in each state. Active state of the inplace
            can either be managed as a Controlled or Uncontrolled component.</p>

                    <p>In controlled mode, <i>active</i> and <i>onToggle</i> properties need to be defined to control the active state.</p>
<CodeHighlight>
{`
<Inplace active={active} onToggle={(e) => setActive(e.value)}>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText />
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                    <p>In uncontrolled mode, no additional properties are required. Initial state can be still be provided using the <i>active</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the active state, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<Inplace>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText autoFocus />
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                    <h5>Closable</h5>
                    <p><i>closable</i> property is handy within forms as it enables to get back to output mode after editing is completed using a button displayed next to the form field.</p>
<CodeHighlight>
{`
<Inplace closable>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText autoFocus />
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                    <h5>Lazy Loading</h5>
                    <p>Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table
                    if the user decides to open the inplace.</p>
<CodeHighlight lang="js">
{`
const onOpen = () => {
    productService.getProductsSmall().then(data => setProducts(data));
}

<Inplace onOpen={onOpen}>
    <InplaceDisplay>
        View Data
    </InplaceDisplay>
    <InplaceContent>
        <DataTable value={products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </InplaceContent>
</Inplace>
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
                                    <td>style</td>
                                    <td>object</td>
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
                                    <td>active</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the content is displayed or not.</td>
                                </tr>
                                <tr>
                                    <td>closable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Displays a button to switch back to display mode.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the element should be disabled.</td>
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
                                    <td>onOpen</td>
                                    <td>event: browser event </td>
                                    <td>Callback to invoke when inplace is opened.</td>
                                </tr>
                                <tr>
                                    <td>onClose</td>
                                    <td>event: browser event </td>
                                    <td>Callback to invoke when inplace is closed.</td>
                                </tr>
                                <tr>
                                    <td>onToggle</td>
                                    <td>event.originalEvent: browser event <br />
                            event.value: active state as a boolean
                        </td>
                                    <td>Callback to invoke when inplace is opened or closed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                                    <td>p-inplace</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-inplace-display</td>
                                    <td>Display container</td>
                                </tr>
                                <tr>
                                    <td>p-inplace-content</td>
                                    <td>Content container</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Inplace component defines <i>aria-live</i> as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.</p>
                    <p>Display element uses <i>button</i> role in view mode by default, <i>displayProps</i> can be used for customizations like adding <i>aria-label</i> or <i>aria-labelledby</i> attributes 
                    to describe the content of the view mode or even overriding the default role.</p>
                    <p>Closable inplace components displays a button with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API by default, you may use
                    <i>closeButtonProps</i> to customize the element and override the default <i>aria-label</i>.</p>

                    <h6>View Mode Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Switches to content.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Close Button Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Switches to display.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Switches to display.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>

                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'InplaceDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    );
})

export default InplaceDoc;
