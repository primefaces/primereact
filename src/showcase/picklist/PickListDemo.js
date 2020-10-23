import React, { Component } from 'react';
import { PickList } from '../../components/picklist/PickList';
import ProductService from '../service/ProductService';
import { AppInlineHeader } from '../../AppInlineHeader';
import './PickListDemo.scss';
import { PickListDoc } from './PickListDoc';

export class PickListDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            source: [],
            target: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ source: data }));
    }

    onChange(event) {
        this.setState({
            source: event.source,
            target: event.target
        });
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
                    <AppInlineHeader changelogText="pickList">
                        <h1>PickList</h1>
                        <p>PickList is used to reorder items between different lists.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation picklist-demo">
                    <div className="card">
                        <PickList source={this.state.source} target={this.state.target} itemTemplate={this.itemTemplate}
                            sourceHeader="Available" targetHeader="Selected"
                            sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                            onChange={this.onChange}></PickList>
                    </div>
                </div>

                <PickListDoc />
            </div>
        );
    }
}
