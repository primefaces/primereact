import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function ReorderDoc(props) {
    const [products, setProducts] = useState([]);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    const code = {
        basic: `
<DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
    <Column rowReorder style={{ width: '3rem' }} />
    {dynamicColumns}
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function ReorderDemo() {
    const [products, setProducts] = useState([]);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div className="card">
            <DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                {dynamicColumns}
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

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

interface ColumnMeta {
    field: string;
    header: string;
}

export default function ReorderDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const columns: ColumnMeta[] = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div className="card">
            <DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                {dynamicColumns}
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
                <p>
                    Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding <i>reorderableColumns</i> property.
                </p>
                <p>
                    Similarly, adding <i>reorderableRows</i> property enables draggable rows. For the drag handle a column needs to have <i>rowReorder</i> property and <i>onRowReorder</i> callback is required to control the state of the rows after
                    reorder completes.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
                        <Column rowReorder style={{ width: '3rem' }} />
                        {dynamicColumns}
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
