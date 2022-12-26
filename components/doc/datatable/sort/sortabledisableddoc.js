import { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { ProductService } from '../../../../service/ProductService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function SortableDisabledDoc(props) {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const code = {
        basic: `
<DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const SortableDisabledDoc = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
    

    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="card">
            <p>Use metakey to add a column to the multiple sort selection.</p>
            <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const SortableDisabledDoc = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
    

    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="card">
            <p>Use metakey to add a column to the multiple sort selection.</p>
            <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.</p>
            </DocSectionText>
            <div className="card">
                <p>Use metakey to add a column to the multiple sort selection.</p>
                <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category (Disabled)" sortable sortableDisabled></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
