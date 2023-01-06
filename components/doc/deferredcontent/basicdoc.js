import { useRef } from 'react';
import { DeferredContent } from '../../lib/deferredcontent/DeferredContent';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const toast = useRef(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<DeferredContent onLoad={onImageLoad}>
    <img className="flex max-w-25rem md:max-w-30rem" src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
</DeferredContent>
        `,
        javascript: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

export default function BasicDoc() {
    const toast = useRef(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    };

    return (
        <div className="card flex flex-column align-items-center">
            <div className="flex flex-column align-items-center m-3 lg:p-8 text-xl font-semibold" style={{ minHeight: '80rem' }}>
                Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite mt-5" style={{ fontSize: '3rem' }}></i>
            </div>
            <Toast ref={toast} />
            <DeferredContent onLoad={onImageLoad}>
                <img className="flex max-w-25rem md:max-w-30rem" src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
            </DeferredContent>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

export default function BasicDoc() {
    const toast = useRef<Toast | null>(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    };

    return (
        <div className="card flex flex-column align-items-center">
            <div className="flex flex-column align-items-center m-3 lg:p-8 text-xl font-semibold" style={{ minHeight: '80rem' }}>
                Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite mt-5" style={{ fontSize: '3rem' }}></i>
            </div>
            <Toast ref={toast} />
            <DeferredContent onLoad={onImageLoad}>
                <img className="flex max-w-25rem md:max-w-30rem" src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
            </DeferredContent>
        </div>
    )
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
                <p>DeferredContent is used as a wrapper element of its content.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <div className="flex flex-column align-items-center m-3 lg:p-8 text-xl font-semibold" style={{ minHeight: '40rem' }}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite mt-5" style={{ fontSize: '3rem' }}></i>
                </div>
                <Toast ref={toast} />
                <DeferredContent onLoad={onImageLoad}>
                    <img className="flex max-w-25rem md:max-w-30rem" src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
                </DeferredContent>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
