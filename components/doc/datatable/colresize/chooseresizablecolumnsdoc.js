import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ChooseResizableColumnsDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
 <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
     <Column field="code" header="Code" style={{width:'20%'}}/>
     <Column field="name" header="Name" style={{width:'40%'}}/>
     <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
     <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
 </DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const ChooseResizableColumnsDoc = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                <Column field="code" header="Code" style={{width:'20%'}}/>
                <Column field="name" header="Name" style={{width:'40%'}}/>
                <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
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

const ChooseResizableColumnsDoc = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                <Column field="code" header="Code" style={{width:'20%'}}/>
                <Column field="name" header="Name" style={{width:'40%'}}/>
                <Column field="category" header="Category (not resizable)" style={{width:'20%'}} resizeable={false}/>
                <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
            </DataTable>
        </div>
    );
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
                <p>Choose Resizable Columns demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{ width: '20%' }} />
                    <Column field="name" header="Name" style={{ width: '40%' }} />
                    <Column field="category" header="Category (not resizable)" style={{ width: '20%' }} resizeable={false} />
                    <Column field="quantity" header="Quantity" style={{ width: '20%' }} />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
