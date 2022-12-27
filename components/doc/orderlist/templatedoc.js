import { useState, useEffect, useRef } from 'react';
import { OrderList } from '../../lib/orderlist/OrderList';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { InputText } from '../../lib/inputtext/InputText';
import { Button } from '../../lib/button/Button';

export function TemplateDoc(props) {
    const [products, setProducts] = useState([]);

    const [filterValue, setFilterValue] = useState('');
    const filterInputRef = useRef();

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterTemplate = (options) => {
        let { filterOptions } = options;

        return (
            <div className="flex gap-2">
                <InputText value={filterValue} ref={filterInputRef} onChange={(e) => myFilterFunction(e, filterOptions)} />
                <Button label="Reset" onClick={() => myResetFunction(filterOptions)} />
            </div>
        );
    };

    const myResetFunction = (options) => {
        setFilterValue('');
        options.reset();
        filterInputRef && filterInputRef.current.focus();
    };

    const myFilterFunction = (event, options) => {
        let _filterValue = event.target.value;

        setFilterValue(_filterValue);
        options.filter(event);
    };

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
<OrderList value={products} header="List of Products" dataKey="id" itemTemplate={itemTemplate} filter filterBy="name" filterTemplate={filterTemplate}></OrderList>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { ProductService } from '../service/ProductService';

export default function TemplateDoc() {
    const [products, setProducts] = useState([]);
    
    const [filterValue, setFilterValue] = useState('');
    const filterInputRef = useRef();

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterTemplate = (options) => {
        let { filterOptions } = options;

        return (
            <div className="flex gap-2">
                <InputText value={filterValue} ref={filterInputRef} onChange={(e) => myFilterFunction(e, filterOptions)} />
                <Button label="Reset" onClick={() => myResetFunction(filterOptions)} />
            </div>
        );
    };

    const myResetFunction = (options) => {
        setFilterValue('');
        options.reset();
        filterInputRef && filterInputRef.current.focus();
    };

    const myFilterFunction = (event, options) => {
        let _filterValue = event.target.value;

        setFilterValue(_filterValue);
        options.filter(event);
    };

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
            <OrderList value={products} header="List of Products" dataKey="id" itemTemplate={itemTemplate} filter filterBy="name" filterTemplate={filterTemplate}></OrderList>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { ProductService } from '../service/ProductService';

export default function TemplateDoc() {
    const [products, setProducts] = useState([]);
    
    const [filterValue, setFilterValue] = useState('');
    const filterInputRef = useRef();

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterTemplate = (options) => {
        let { filterOptions } = options;

        return (
            <div className="flex gap-2">
                <InputText value={filterValue} ref={filterInputRef} onChange={(e) => myFilterFunction(e, filterOptions)} />
                <Button label="Reset" onClick={() => myResetFunction(filterOptions)} />
            </div>
        );
    };

    const myResetFunction = (options) => {
        setFilterValue('');
        options.reset();
        filterInputRef && filterInputRef.current.focus();
    };

    const myFilterFunction = (event, options) => {
        let _filterValue = event.target.value;

        setFilterValue(_filterValue);
        options.filter(event);
    };

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
            <OrderList value={products} header="List of Products" dataKey="id" itemTemplate={itemTemplate} filter filterBy="name" filterTemplate={filterTemplate}></OrderList>
        </div>
    )
}
        `,
        data: `
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>OrderList requires an array as its value, a template for its content where each item in the array can be accessed inside the template and onChangecallback to update the value after reorder.</p>
            </DocSectionText>
            <div className="card">
                <OrderList value={products} header="List of Products" dataKey="id" itemTemplate={itemTemplate} filter filterBy="name" filterTemplate={filterTemplate}></OrderList>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
