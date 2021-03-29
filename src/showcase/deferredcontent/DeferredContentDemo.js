import React, { Component } from 'react';
import { DeferredContent } from '../../components/deferredcontent/DeferredContent';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Toast } from '../../components/toast/Toast';
import { DeferredContentDoc } from './DeferredContentDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import ProductService from '../service/ProductService';

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="deferredContent">
                        <h1>DeferredContent</h1>
                        <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll. </p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <div style={{ height: '800px' }}>
                            Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                        </div>

                        <DeferredContent onLoad={this.onImageLoad}>
                            <img src="showcase/demo/images/galleria/galleria1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime"/>
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

                <DeferredContentDoc />
            </div>
        )
    }
}
