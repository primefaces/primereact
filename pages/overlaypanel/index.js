import React, { Component } from 'react';
import { OverlayPanel } from '../../components/lib/overlaypanel/OverlayPanel';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import { Column } from '../../components/lib/column/Column';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { ProductService } from '../../service/ProductService';
import { OverlayPanelDoc } from '../../components/doc/overlaypanel';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class OverlayPanelDemo extends Component {

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
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
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
            this.toast.show({severity:'info', summary: 'Product Selected', detail: this.state.selectedProduct.name, life: 3000});
        });
    }

    imageBody(rowData) {
        return <img src={`${this.contextPath}/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    priceBody(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Popover Component</title>
                    <meta name="description" content="OverlayPanel also known as Popover, is a container component that can overlay other components on page." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel also known as Popover, is a container component that can overlay other components on page.</p>
                    </div>
                    <DocActions github="overlaypanel/index.js" />
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <Button type="button" icon="pi pi-search" label={this.state.selectedProduct ? this.state.selectedProduct.name : 'Select a Product'} onClick={(e) => this.op.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                        <OverlayPanel ref={(el) => this.op = el} showCloseIcon id="overlay_panel" style={{width: '450px'}} className="overlaypanel-demo">
                            <DataTable value={this.state.products} selectionMode="single" paginator rows={5}
                                selection={this.state.selectedProduct} onSelectionChange={this.onProductSelect}>
                                <Column field="name" header="Name" sortable />
                                <Column header="Image" body={this.imageBody} />
                                <Column field="price" header="Price" sortable body={this.priceBody} />
                            </DataTable>
                        </OverlayPanel>
                    </div>
                </div>

                <OverlayPanelDoc />
            </div>
        )
    }
}
