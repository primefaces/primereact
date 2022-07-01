import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const DeferredContentDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

export class DeferredContentDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null
        };

        this.productService = new ProductService();
        this.onImageLoad = this.onImageLoad.bind(this);
        this.onDataLoad = this.onDataLoad.bind(this);
    }

    onImageLoad() {
        this.toast.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    onDataLoad() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
        this.toast.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <div style={{ height: '800px' }}>
                        Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    </div>

                    <DeferredContent onLoad={this.onImageLoad}>
                        <img src="images/galleria/galleria1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime"/>
                    </DeferredContent>

                    <div style={{height: '500px'}}></div>

                    <DeferredContent onLoad={this.onDataLoad}>
                        <DataTable value={this.state.products}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </DeferredContent>
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
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

const DeferredContentDemo = () => {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    const onDataLoad = () => {
        productService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <div style={{ height: '800px' }}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                </div>

                <DeferredContent onLoad={onImageLoad}>
                    <img src="images/galleria/galleria1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime"/>
                </DeferredContent>

                <div style={{height: '500px'}}></div>

                <DeferredContent onLoad={onDataLoad}>
                    <DataTable value={products}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

const DeferredContentDemo = () => {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    const onDataLoad = () => {
        productService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <div style={{ height: '800px' }}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                </div>

                <DeferredContent onLoad={onImageLoad}>
                    <img src="images/galleria/galleria1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime"/>
                </DeferredContent>

                <div style={{height: '500px'}}></div>

                <DeferredContent onLoad={onDataLoad}>
                    <DataTable value={products}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
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
        <script src="https://unpkg.com/primereact/deferredcontent/deferredcontent.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { DeferredContent } = primereact.deferredcontent;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Toast } = primereact.toast;

const DeferredContentDemo = () => {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    const onDataLoad = () => {
        productService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <div style={{ height: '800px' }}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                </div>

                <DeferredContent onLoad={onImageLoad}>
                    <img src="images/galleria/galleria1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime"/>
                </DeferredContent>

                <div style={{height: '500px'}}></div>

                <DeferredContent onLoad={onDataLoad}>
                    <DataTable value={products}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
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
import { DeferredContent } from 'primereact/deferredcontent';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/deferredcontent/deferredcontent.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>DeferredContent is used as a wrapper element of its content.</p>
<CodeHighlight>
{`
<DeferredContent onLoad={onDataLoad}>
    <DataTable value={products}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>
`}
</CodeHighlight>

                    <h5>Callback</h5>
                    <p><i>onLoad</i> callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>
<CodeHighlight>
{`
<DeferredContent onLoad={onDataLoad}>
    <DataTable value={products}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        Component has no attributes.
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
                                    <td>onLoad</td>
                                    <td>event: Event object</td>
                                    <td>Callback to invoke when deferred content is loaded.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Component does not apply any styling.</p>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>DeferredContent can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only.
                        Any valid attribute is passed to the container element so you have full control over the roles like <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">landmark</a> and attributes like <i>aria-live</i>.
                    </p>

<CodeHighlight>
{`
<DeferredContent role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
    Content
</DeferredContent>
`}
</CodeHighlight>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'DeferredContentDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    );
})

export default DeferredContentDoc;
