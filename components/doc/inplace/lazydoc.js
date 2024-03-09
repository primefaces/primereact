import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useState } from 'react';
import { Column } from '../../../components/lib/column/Column';
import { DataTable } from '../../../components/lib/datatable/DataTable';
import { Inplace, InplaceContent, InplaceDisplay } from '../../../components/lib/inplace/Inplace';
import { ProductService } from '../../../service/ProductService';

export function LazyDoc(props) {
    const [products, setProducts] = useState([]);

    const onOpen = () => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    };

    const code = {
        basic: `
<Inplace onOpen={onOpen}>
    <InplaceDisplay>
        View Data
    </InplaceDisplay>
    <InplaceContent>
        <DataTable value={products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </InplaceContent>
</Inplace>
        `,
        javascript: `
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function LazyDemo() {
    const [products, setProducts] = useState([]);
    
    const onOpen = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <Inplace onOpen={onOpen}>
            <InplaceDisplay>
                View Data
            </InplaceDisplay>
            <InplaceContent>
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </InplaceContent>
        </Inplace>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function LazyDemo() {
    const [products, setProducts] = useState<any[]>([]);
    
    const onOpen = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <Inplace onOpen={onOpen}>
            <InplaceDisplay>
                View Data
            </InplaceDisplay>
            <InplaceContent>
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </InplaceContent>
        </Inplace>
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
                <p>
                    Using the <i>onOpen</i> event, data can be loaded in a lazy manner before displaying it in a table.
                </p>
            </DocSectionText>
            <div className="card">
                <Inplace onOpen={onOpen}>
                    <InplaceDisplay>View Data</InplaceDisplay>
                    <InplaceContent>
                        <DataTable value={products}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </InplaceContent>
                </Inplace>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
