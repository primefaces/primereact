import React, { Component } from 'react';
import { OrderList } from '../../components/orderlist/OrderList';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';
import './OrderListDemo.scss';
import { OrderListDoc } from './OrderListDoc';

export class OrderListDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    itemTemplate(item) {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`showcase/demo/images/product/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="orderList">
                        <h1>OrderList</h1>
                        <p>OrderList is used to sort a collection.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation orderlist-demo">
                    <div className="card">
                        <OrderList value={this.state.products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                            itemTemplate={this.itemTemplate} onChange={(e) => this.setState({ products: e.value })}></OrderList>
                    </div>
                </div>

                <OrderListDoc></OrderListDoc>
            </div>
        );
    }
}
