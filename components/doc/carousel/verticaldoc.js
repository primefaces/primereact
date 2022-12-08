import { useState, useEffect } from 'react';
import { Button } from '../../lib/button/Button';
import { Carousel } from '../../lib/carousel/Carousel';
import { ProductService } from '../../../service/ProductService';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function VerticalDoc(props) {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={`${contextPath}/images/product/${product.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={product.name} className="product-image" />
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
    };

    const code = {
        basic: `
<Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../service/ProductService';

export default function VerticalDoc() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={\`images/product/\${product.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">\${product.price}</h6>
                        <span className={\`product-badge status-\${product.inventoryStatus.toLowerCase()}\`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
        itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../service/ProductService';

export default function VerticalDoc() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={\`images/product/\${product.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">\${product.price}</h6>
                        <span className={\`product-badge status-\${product.inventoryStatus.toLowerCase()}\`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
        itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Vertical</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px" itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{ maxWidth: '400px', marginTop: '2em' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
