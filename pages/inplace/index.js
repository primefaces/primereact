import React, { Component } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from '../../components/lib/inplace/Inplace';
import { InputText } from '../../components/lib/inputtext/InputText';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { ProductService } from '../../service/ProductService';
import { InplaceDoc } from '../../components/doc/inplace';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class InplaceDemo extends Component {

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
        const contextPath = getConfig().publicRuntimeConfig.contextPath;
        
        return (
            <div>
                <Head>
                    <title>React Inplace Component</title>
                    <meta name="description" content="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Inplace</h1>
                        <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
                    </div>

                    <DocActions github="inplace/index.js" />
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
                                <span className="inline-flex align-items-center">
                                    <span className="pi pi-search"></span>
                                    <span className="ml-2">View Picture</span>
                                </span>
                            </InplaceDisplay>
                            <InplaceContent>
                                <img alt="Nature" src={`${contextPath}/images/nature/nature1.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
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
