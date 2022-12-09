import React, { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { ProductService } from '../../../../service/ProductService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Rating } from '../../../lib/rating/Rating';

export function StackDoc(props) {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : ''}`}>{rowData.inventoryStatus}</span>;
    };

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const code = {
        basic: `
<DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
    <Column field="code" header="Code" />
    <Column field="name" header="Name" />
    <Column field="category" header="Category" />
    <Column field="quantity" header="Quantity" />
    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
    <Column field="rating" header="Rating" body={ratingTemplate} />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

const StackDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div className="card">
        <DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
            <Column field="code" header="Code" />
            <Column field="name" header="Name" />
            <Column field="category" header="Category" />
            <Column field="quantity" header="Quantity" />
            <Column field="inventoryStatus" header="Status" body={statusTemplate} />
            <Column field="rating" header="Rating" body={ratingTemplate} />
        </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

const StackDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div className="card">
            <DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                <Column field="code" header="Code" />
                <Column field="name" header="Name" />
                <Column field="category" header="Category" />
                <Column field="quantity" header="Quantity" />
                <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                <Column field="rating" header="Rating" body={ratingTemplate} />
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <div className="card">
                <DataTable value={products} header="Stack" responsiveLayout="stack" breakpoint="960px">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
