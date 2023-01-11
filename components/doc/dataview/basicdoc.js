import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from '../../lib/dataview/DataView';
import { Button } from '../../lib/button/Button';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { Rating } from '../../lib/rating/Rating';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
                    <img className="md:w-11rem w-9 shadow-2 md:my-0 md:mr-5 mr-0 my-5" src={`images/product/${data.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                    <div className="text-center md:text-left md:flex-1">
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag vertical-align-middle mr-2"></i>
                        <span className="vertical-align-middle font-semibold">{data.category}</span>
                    </div>
                    <div className="flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">${data.price}</span>
                        <Button className="mb-2" icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={`md:w-full product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    };

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="m-2 border-1 surface-border card">
                    <div className="flex align-items-center justify-content-between">
                        <div>
                            <i className="pi pi-tag vertical-align-middle mr-2"></i>
                            <span className="font-semibold vertical-align-middle">{data.category}</span>
                        </div>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="text-center">
                        <img className="w-9 my-5 shadow-3" src={`images/product/${data.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return renderListItem(product);
        else if (layout === 'grid') return renderGridItem(product);
    };

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    };

    const header = renderHeader();

    const code = {
        basic: `
<DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} paginator rows={9} sortOrder={sortOrder} sortField={sortField} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

export default function BasicDoc() {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];

    

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
                    <img className="md:w-11rem w-9 shadow-2 md:my-0 md:mr-5 mr-0 my-5" src={\`images/product/\${data.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                    <div className="text-center md:text-left md:flex-1">
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag vertical-align-middle mr-2"></i>
                        <span className="vertical-align-middle font-semibold">{data.category}</span>
                    </div>
                    <div className="flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">\${data.price}</span>
                        <Button className="mb-2" icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\` md:w-full}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    };

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="m-2 border-1 surface-border card">
                    <div className="flex align-items-center justify-content-between">
                        <div>
                            <i className="pi pi-tag vertical-align-middle mr-2"></i>
                            <span className="font-semibold vertical-align-middle">{data.category}</span>
                        </div>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="text-center">
                        <img className="w-9 my-5 shadow-3" src={\`images/product/\${data.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return renderListItem(product);
        else if (layout === 'grid') return renderGridItem(product);
    };

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card dataview-demo">
            <DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} paginator rows={9} sortOrder={sortOrder} sortField={sortField} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

export default function BasicDoc() {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];

    

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
                    <img className="md:w-11rem w-9 shadow-2 md:my-0 md:mr-5 mr-0 my-5" src={\`images/product/\${data.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                    <div className="text-center md:text-left md:flex-1">
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag vertical-align-middle mr-2"></i>
                        <span className="vertical-align-middle font-semibold">{data.category}</span>
                    </div>
                    <div className="flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">\${data.price}</span>
                        <Button className="mb-2" icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\` md:w-full}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    };

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="m-2 border-1 surface-border card">
                    <div className="flex align-items-center justify-content-between">
                        <div>
                            <i className="pi pi-tag vertical-align-middle mr-2"></i>
                            <span className="font-semibold vertical-align-middle">{data.category}</span>
                        </div>
                        <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="text-center">
                        <img className="w-9 my-5 shadow-3" src={\`images/product/\${data.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return renderListItem(product);
        else if (layout === 'grid') return renderGridItem(product);
    };

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card dataview-demo">
            <DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} paginator rows={9} sortOrder={sortOrder} sortField={sortField} />
        </div>
    )
}
        `,
        css: `
/* DataViewDemo.css */

.dataview-demo .p-dropdown {
    width: 14rem;
    font-weight: normal;
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
                <p>DataView displays data in grid or list layout with pagination and sorting features.</p>
            </DocSectionText>
            <div className="card">
                <DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} paginator rows={9} sortOrder={sortOrder} sortField={sortField} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
