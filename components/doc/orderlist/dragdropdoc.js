import { useState, useEffect } from 'react';
import { OrderList } from '../../lib/orderlist/OrderList';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DragDropDoc(props) {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img
                        className="w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto"
                        src={`images/product/${item.image}`}
                        onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                        alt={item.name}
                    />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';

export default function DragDropDoc() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className='w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto' src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        </div>
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';

export default function DragDropDoc() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className='w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto' src={\`images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="card" >
            <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Items can be reordered using drag and drop by enabling <i>dragdrop</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
