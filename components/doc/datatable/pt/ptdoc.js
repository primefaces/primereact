import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function PTDoc(props) {
    const [products, setProducts] = useState([]);

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const code = {
        basic: `
<DataTable
    value={products}
    sortMode='multiple'
    pt={{
        table: { style: { minWidth: '50rem' } }
    }}
>
    <Column
        field="code"
        header="Code"
        sortable
        pt={{
            sortBadge: { className: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }}
    ></Column>
    <Column
        field="name"
        header="Name"
        sortable
        pt={{
            sortBadge: { className: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }}
    ></Column>
    <Column
        field="category"
        header="Category"
        sortable
        pt={{
            sortBadge: { className: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }}
    ></Column>
    <Column
        field="quantity"
        header="Quantity"
        sortable
        pt={{
            sortBadge: { className: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }}
    ></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function PTDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <DataTable
            value={products}
            sortMode='multiple'
            pt={{
                table: { style: { minWidth: '50rem' } }
            }}
        >
            <Column
                field="code"
                header="Code"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
            <Column
                field="name"
                header="Name"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
            <Column
                field="category"
                header="Category"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
            <Column
                field="quantity"
                header="Quantity"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
        </DataTable>
    </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
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

export default function PTDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <DataTable
            value={products}
            sortMode='multiple'
            pt={{
                table: { style: { minWidth: '50rem' } }
            }}
        >
            <Column
                field="code"
                header="Code"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
            <Column
                field="name"
                header="Name"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
            <Column
                field="category"
                header="Category"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
            <Column
                field="quantity"
                header="Quantity"
                sortable
                pt={{
                    sortBadge: { className: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }}
            ></Column>
        </DataTable>
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
            <DocSectionText {...props}></DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable
                        value={products}
                        sortMode="multiple"
                        pt={{
                            table: { style: { minWidth: '50rem' } }
                        }}
                    >
                        <Column
                            field="code"
                            header="Code"
                            sortable
                            pt={{
                                sortBadge: { className: 'bg-primary' },
                                headerCell: { style: { width: '25%' } }
                            }}
                        ></Column>
                        <Column
                            field="name"
                            header="Name"
                            sortable
                            pt={{
                                sortBadge: { className: 'bg-primary' },
                                headerCell: { style: { width: '25%' } }
                            }}
                        ></Column>
                        <Column
                            field="category"
                            header="Category"
                            sortable
                            pt={{
                                sortBadge: { className: 'bg-primary' },
                                headerCell: { style: { width: '25%' } }
                            }}
                        ></Column>
                        <Column
                            field="quantity"
                            header="Quantity"
                            sortable
                            pt={{
                                sortBadge: { className: 'bg-primary' },
                                headerCell: { style: { width: '25%' } }
                            }}
                        ></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
