import React, { Component } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from '../../components/inplace/Inplace';
import { InputText } from '../../components/inputtext/InputText';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { AppInlineHeader } from '../../AppInlineHeader';
import ProductService from '../service/ProductService';
import { InplaceDoc } from './InplaceDoc';

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="inplace">
                        <h1>Inplace</h1>
                        <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
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
                                <span className="p-d-inline-flex p-align-center">
                                    <span className="pi pi-search"></span>
                                    <span className="p-ml-2">View Picture</span>
                                </span>
                            </InplaceDisplay>
                            <InplaceContent>
                                <img alt="Nature" src="showcase/demo/images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
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

                <InplaceDoc></InplaceDoc>
            </div>
        )
    }
}
