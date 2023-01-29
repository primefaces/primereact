import React, { useState, useEffect } from 'react';
import { PickList } from '../../lib/picklist/PickList';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PickListDoc(props) {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className="w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto" src={`/images/product/${item.image}`} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<PickList source={source} target={target} itemTemplate={itemTemplate} sourceHeader="Available" targetHeader="Selected"
    sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }} onChange={onChange}
    filterBy="name" sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function PickListDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    

    useEffect(() => {
        ProductService.getProductsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className='w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto' src={\`https://primereact.org/images/product/\${item.image}\`} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                    <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <PickList source={source} target={target} itemTemplate={itemTemplate} sourceHeader="Available" targetHeader="Selected"
                sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }} onChange={onChange}
                filterBy="name" sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function PickListDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    

    useEffect(() => {
        ProductService.getProductsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className='w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto' src={\`https://primereact.org/images/product/\${item.image}\`} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                    <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <PickList source={source} target={target} itemTemplate={itemTemplate} sourceHeader="Available" targetHeader="Selected"
                sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }} onChange={onChange}
                filterBy="name" sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
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
    image: '/bamboo-watch.jpg',
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
                <p>PickList Content.</p>
            </DocSectionText>
            <div className="card">
                <PickList
                    source={source}
                    target={target}
                    itemTemplate={itemTemplate}
                    sourceHeader="Available"
                    targetHeader="Selected"
                    sourceStyle={{ height: '342px' }}
                    targetStyle={{ height: '342px' }}
                    onChange={onChange}
                    filterBy="name"
                    sourceFilterPlaceholder="Search by name"
                    targetFilterPlaceholder="Search by name"
                />
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
