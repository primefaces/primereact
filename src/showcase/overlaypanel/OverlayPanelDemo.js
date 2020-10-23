import React, { Component } from 'react';
import { OverlayPanel } from '../../components/overlaypanel/OverlayPanel';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import { Column } from '../../components/column/Column';
import { DataTable } from '../../components/datatable/DataTable';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { OverlayPanelDoc } from './OverlayPanelDoc';
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
            this.toast.show({severity:'info', summary: 'Product Selected', detail: this.state.selectedProduct.name, life: 3000});
        });
    }

    imageBody(rowData) {
        return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
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
                    <Toast ref={(el) => this.toast = el} />

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
