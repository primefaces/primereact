import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Button } from '../../lib/button/Button';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { Rating } from '../../lib/rating/Rating';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RowExpandDoc(props) {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    };

    const onRowCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    };

    const expandAll = () => {
        let _expandedRows = {};

        products.forEach((p) => (_expandedRows[`${p.id}`] = true));

        setExpandedRows(_expandedRows);
    };

    const collapseAll = () => {
        setExpandedRows(null);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    };

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={`order-badge order-${rowData.status.toLowerCase()}`}>{rowData.status}</span>;
    };

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`/images/product/${rowData.image}`} alt={rowData.image} width="100px" className="shadow-4" />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    };

    const allowExpansion = (rowData) => {
        return rowData.orders.length > 0;
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders} responsiveLayout="scroll">
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem' }} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    };

    const header = (
        <div className="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        </div>
    );

    const code = {
        basic: `
<DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
    onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} responsiveLayout="scroll"
    rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
    <Column expander={allowExpansion} style={{ width: '3em' }} />
    <Column field="name" header="Name" sortable />
    <Column header="Image" body={imageBodyTemplate} />
    <Column field="price" header="Price" sortable body={priceBodyTemplate} />
    <Column field="category" header="Category" sortable />
    <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
    <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function RowExpandDoc() {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);
    const isMounted = useRef(false);
    
    useEffect(() => {
        isMounted.current = true;
        ProductService.getProductsWithOrdersSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event) => {
        toast.current.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    const onRowCollapse = (event) => {
        toast.current.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    const expandAll = () => {
        let _expandedRows = {};
        products.forEach(p => _expandedRows[\`\${p.id}\`] = true);

        setExpandedRows(_expandedRows);
    }

    const collapseAll = () => {
        setExpandedRows(null);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    }

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={\`order-badge order-\${rowData.status.toLowerCase()}\`}>{rowData.status}</span>;
    }

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`https://primereact.org/images/product/\${rowData.image}\`} alt={rowData.image} width="100px" className="shadow-4" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const allowExpansion = (rowData) => {
        return rowData.orders.length > 0;
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders} responsiveLayout="scroll">
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    const header = (
        <div className="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        </div>
    );

    return (
        <div className="card">
        <Toast ref={toast} />
        <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} responsiveLayout="scroll"
            rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
            <Column expander={allowExpansion} style={{ width: '3em' }} />
            <Column field="name" header="Name" sortable />
            <Column header="Image" body={imageBodyTemplate} />
            <Column field="price" header="Price" sortable body={priceBodyTemplate} />
            <Column field="category" header="Category" sortable />
            <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
            <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
        </DataTable>
    </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function RowExpandDoc() {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);
    const isMounted = useRef(false);
    
    useEffect(() => {
        isMounted.current = true;
        ProductService.getProductsWithOrdersSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event) => {
        toast.current.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    const onRowCollapse = (event) => {
        toast.current.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }

    const expandAll = () => {
        let _expandedRows = {};
        products.forEach(p => _expandedRows[\`\${p.id}\`] = true);

        setExpandedRows(_expandedRows);
    }

    const collapseAll = () => {
        setExpandedRows(null);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    }

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={\`order-badge order-\${rowData.status.toLowerCase()}\`}>{rowData.status}</span>;
    }

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={\`https://primereact.org/images/product/\${rowData.image}\`} alt={rowData.image} width="100px" className="shadow-4" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    const allowExpansion = (rowData) => {
        return rowData.orders.length > 0;
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders} responsiveLayout="scroll">
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem'}} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    }

    const header = (
        <div className="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        </div>
    );

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} responsiveLayout="scroll"
                rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
                <Column expander={allowExpansion} style={{ width: '3em' }} />
                <Column field="name" header="Name" sortable />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                <Column field="category" header="Category" sortable />
                <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,
        data: `
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
                <p>A row can be expanded to display extra content.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast} />
                <DataTable
                    value={products}
                    expandedRows={expandedRows}
                    onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowExpand}
                    onRowCollapse={onRowCollapse}
                    responsiveLayout="scroll"
                    rowExpansionTemplate={rowExpansionTemplate}
                    dataKey="id"
                    header={header}
                >
                    <Column expander={allowExpansion} style={{ width: '3em' }} />
                    <Column field="name" header="Name" sortable />
                    <Column header="Image" body={imageBodyTemplate} />
                    <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                    <Column field="category" header="Category" sortable />
                    <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                    <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
