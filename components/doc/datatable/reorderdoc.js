import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ReorderDoc(props) {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({ severity: 'success', summary: 'Column Reordered', life: 3000 });
    };

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({ severity: 'success', summary: 'Rows Reordered', life: 3000 });
    };

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    const code = {
        basic: `
<DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll" paginator rows={5}>
    <Column rowReorder style={{width: '3em'}} />
    {dynamicColumns}
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

const ReorderDoc = () => {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    

    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
    }

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll" paginator rows={5}>
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

const ReorderDoc = () => {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    

    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
    }

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll" paginator rows={5}>
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
                </DataTable>
            </div>
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
                <p>Order of the columns and rows can be changed using drag and drop.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll" paginator rows={5}>
                    <Column rowReorder style={{ width: '3em' }} />
                    {dynamicColumns}
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
