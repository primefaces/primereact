import React, { useState } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Inplace, InplaceDisplay, InplaceContent } from '../../../components/lib/inplace/Inplace';
import { DataTable } from '../../../components/lib/datatable/DataTable';
import { Column } from '../../../components/lib/column/Column';
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

export default function LazyDoc() {
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

export default function LazyDoc() {
    const [products, setProducts] = useState<any[]>([]);
    
    function onOpen(): void {
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
                <p>Lazy Demo Content.</p>
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
