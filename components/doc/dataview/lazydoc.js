import React, { useState, useEffect, useRef } from 'react';
import { DataView, DataViewLayoutOptions } from '../../lib/dataview/DataView';
import { Button } from '../../lib/button/Button';
import { Rating } from '../../lib/rating/Rating';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LazyDataViewDoc(props) {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = useRef(6);
    const datasource = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setTimeout(() => {
            isMounted.current = true;
            ProductService.getProducts().then((data) => {
                datasource.current = data;
                setTotalRecords(data.length);
                setProducts(datasource.current.slice(0, rows.current));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
            const newProducts = startIndex === endIndex ? datasource.current.slice(startIndex) : datasource.current.slice(startIndex, endIndex);

            setFirst(startIndex);
            setProducts(newProducts);
            setLoading(false);
        }, 1000);
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
        let onOptionChange = (e) => {
            setLoading(true);
            setLayout(e.value);
        };

        return (
            <div style={{ textAlign: 'left' }}>
                <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
            </div>
        );
    };

    const header = renderHeader();

    const code = {
        basic: `
<DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current} totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

export default function LazyDataViewDoc() {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = useRef(6);
    const datasource = useRef(null);
    const isMounted = useRef(false);
    

    useEffect(() => {
        if (isMounted.current) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setTimeout(() => {
            isMounted.current = true;
            ProductService.getProducts().then(data => {
                datasource.current = data;
                setTotalRecords(data.length);
                setProducts(datasource.current.slice(0, rows.current));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
            const newProducts = startIndex === endIndex ? datasource.current.slice(startIndex) : datasource.current.slice(startIndex, endIndex);

            setFirst(startIndex);
            setProducts(newProducts);
            setLoading(false);
        }, 1000);
    }
    
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

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        let onOptionChange = (e) => {
            setLoading(true);
            setLayout(e.value);
        };

        return (
            <div style={{ textAlign: 'left' }}>
                <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="card dataview-demo">
            <DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current} totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
        </div>
        )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';

export default function LazyDataViewDoc() {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = useRef(6);
    const datasource = useRef(null);
    const isMounted = useRef(false);
    

    useEffect(() => {
        if (isMounted.current) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setTimeout(() => {
            isMounted.current = true;
            ProductService.getProducts().then(data => {
                datasource.current = data;
                setTotalRecords(data.length);
                setProducts(datasource.current.slice(0, rows.current));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
            const newProducts = startIndex === endIndex ? datasource.current.slice(startIndex) : datasource.current.slice(startIndex, endIndex);

            setFirst(startIndex);
            setProducts(newProducts);
            setLoading(false);
        }, 1000);
    }
    
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

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        let onOptionChange = (e) => {
            setLoading(true);
            setLayout(e.value);
        };

        return (
            <div style={{ textAlign: 'left' }}>
                <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="card dataview-demo">
            <DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current} totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
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
                <p>
                    Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates lazy
                    paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming there are actually
                    records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                </p>
            </DocSectionText>
            <div className="card">
                <DataView value={products} layout={layout} header={header} itemTemplate={itemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current} totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
