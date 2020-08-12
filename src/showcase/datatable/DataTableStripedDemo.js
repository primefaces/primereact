import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableStripedDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: null
        };

        this.productService = new ProductService();
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Striped Rows</span></h1>
                        <p>Adding <i>p-datatable-striped</i> displays striped rows.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={this.state.products} className="p-datatable-striped">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}
