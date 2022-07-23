import React, { useState, useEffect } from 'react';
import { Carousel } from '../../components/lib/carousel/Carousel';
import { Button } from '../../components/lib/button/Button';
import CarouselDoc from '../../components/doc/carousel';
import { ProductService } from '../../service/ProductService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const CarouselDemo = () => {

    const [products, setProducts] = useState([]);
    const responsiveOptions = [
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

    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={`${contextPath}/images/product/${product.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React Carousel Component</title>
                <meta name="description" content="Carousel is a content slider featuring various customization options." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Carousel</h1>
                    <p>Carousel is a content slider featuring various customization options.</p>
                </div>
                <DocActions github="carousel/index.js" />
            </div>

            <div className="content-section implementation carousel-demo">
                <div className="card">
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} header={<h5>Basic</h5>} />
                </div>

                <div className="card">
                    <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
                </div>

                <div className="card">
                    <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
                        itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{ maxWidth: '400px', marginTop: '2em' }} />
                </div>
            </div>

            <CarouselDoc />
        </div>
    );
}

export default CarouselDemo;
