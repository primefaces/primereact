import React, { Component } from 'react';
import { DataScroller } from '../../components/datascroller/DataScroller';
import { Button } from '../../components/button/Button';
import { Rating } from '../../components/rating/Rating';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DataScrollerDemo.scss';
import { DataScrollerDoc } from './DataScrollerDoc';

export class DataScrollerDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    itemTemplate(data) {
        return (
            <div className="product-item">
                <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataScroller">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    Demo is at the bottom of this page.
                </div>

                <DataScrollerDoc />

                <div className="content-section implementation datascroller-demo">
                    <div className="card">
                        <DataScroller value={this.state.products} itemTemplate={this.itemTemplate}
                            rows={5} buffer={0.4} header="List of Products" />
                    </div>
                </div>

            </div>
        );
    }
}
