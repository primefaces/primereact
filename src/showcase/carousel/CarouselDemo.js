import React, { Component } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { Button } from '../../components/button/Button';
import { CarouselDoc } from './CarouselDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import ProductService from '../service/ProductService';
import './CarouselDemo.scss';

export class CarouselDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ];

        this.productService = new ProductService();
        this.productTemplate = this.productTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data.slice(0,9) }));
    }

    productTemplate(product) {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={`showcase/demo/images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="carousel">
                        <h1>Carousel</h1>
                        <p>Carousel is a content slider featuring various customization options.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation carousel-demo">
                    <div className="card">
                        <Carousel value={this.state.products} numVisible={3} numScroll={3} responsiveOptions={this.responsiveOptions}
                            itemTemplate={this.productTemplate} header={<h5>Basic</h5>} />
                    </div>

                    <div className="card">
                        <Carousel value={this.state.products} numVisible={3} numScroll={1} responsiveOptions={this.responsiveOptions} className="custom-carousel" circular
                            autoplayInterval={3000} itemTemplate={this.productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
                    </div>

                    <div className="card">
                        <Carousel value={this.state.products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="352px"
                            itemTemplate={this.productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
                    </div>
                </div>

                <CarouselDoc />
            </div>
        );
    }
}
